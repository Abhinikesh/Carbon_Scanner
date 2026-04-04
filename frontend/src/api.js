/**
 * api.js – centralised HTTP client for Climate Lens.
 *
 * Strategy:
 *   • In development the Vite proxy forwards /api/* → http://localhost:5001
 *     so we use a relative base URL (empty string) and never hit CORS.
 *   • In production (or when the proxy is absent) we fall back to the
 *     VITE_API_URL environment variable.
 *
 * Usage:
 *   import api from '../api';
 *   const data = await api.get('/api/test');
 *   const result = await api.post('/api/scan', formData);
 */

// Use relative URLs so the Vite proxy handles routing in dev.
// Override via VITE_API_URL for production deployments.
const BASE_URL = import.meta.env.VITE_API_URL ?? '';

/**
 * Thin wrapper around fetch that:
 *  - Prepends BASE_URL
 *  - Sets JSON Content-Type when body is a plain object
 *  - Throws a descriptive error for non-2xx responses
 *  - Returns the parsed JSON body
 */
async function request(method, path, body, options = {}) {
  const isFormData = body instanceof FormData;

  const headers = {
    ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
    ...options.headers,
  };

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    credentials: 'include',
    body: body == null
      ? undefined
      : isFormData
        ? body
        : JSON.stringify(body),
    signal: options.signal,
  });

  // Try to parse JSON regardless of status so we can surface server messages.
  let json;
  try {
    json = await res.json();
  } catch {
    json = null;
  }

  if (!res.ok) {
    const message =
      json?.message ??
      json?.error ??
      `Request failed with status ${res.status}`;
    const err = new Error(message);
    err.status = res.status;
    err.data = json;
    throw err;
  }

  return json;
}

const api = {
  get:    (path, options)        => request('GET',    path, null, options),
  post:   (path, body, options)  => request('POST',   path, body, options),
  put:    (path, body, options)  => request('PUT',    path, body, options),
  patch:  (path, body, options)  => request('PATCH',  path, body, options),
  delete: (path, options)        => request('DELETE',  path, null, options),
};

export default api;
