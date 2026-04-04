const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const { generalLimiter } = require('./middleware/rateLimiter');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Security & Parsing Middleware
app.use(helmet());
app.use(
  cors({
    origin: [
      process.env.CLIENT_URL || 'http://localhost:5173',
      'http://localhost:5173',
      'http://localhost:3000',
    ],
    credentials: true,
  })
);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(generalLimiter);

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/scan', require('./routes/scanRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/carbon', require('./routes/carbonRoutes'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'CO2 Climate Lens API is running', timestamp: new Date() });
});

// Quick smoke-test route (used by frontend to verify connectivity)
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend working' });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Graceful Shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Process terminated.');
    process.exit(0);
  });
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err.message);
  server.close(() => process.exit(1));
});
