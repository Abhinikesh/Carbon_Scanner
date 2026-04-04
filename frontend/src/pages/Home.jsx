import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CloudUpload, BarChart2, Leaf, ArrowRight,
  ShieldCheck, Zap, Globe
} from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  const features = [
    { Icon: CloudUpload, title: 'Smart Upload',       text: 'Upload receipts, flight tickets, product images, and barcodes for instant CO₂ analysis.' },
    { Icon: BarChart2,   title: 'Carbon Dashboard',   text: 'Visualise your monthly footprint, track trends and compare against global averages.' },
    { Icon: Leaf,        title: 'Green Alternatives', text: 'AI-suggested lower-carbon swaps for every product or journey you scan.' },
    { Icon: ShieldCheck, title: 'Secure & Private',   text: 'AES-256 encryption on every upload. Your data never leaves our sandbox without consent.' },
    { Icon: Zap,         title: 'Instant Results',    text: '98.4 % OCR accuracy powered by our neural engine — results in under 3 seconds.' },
    { Icon: Globe,       title: 'Global Standards',   text: 'Calculations follow GHG Protocol Corporate Standard and Climatiq emission factors.' },
  ];

  return (
    <div className="px-10 pt-12 pb-16">
      {/* Hero */}
      <div className="max-w-2xl mb-14">
        <span className="inline-flex items-center gap-1.5 bg-green-50 text-[#1a3d2b] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          <Leaf className="w-3 h-3" /> Climate Intelligence
        </span>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
          Measure your<br />
          <span className="text-[#1a3d2b]">carbon footprint</span><br />
          instantly.
        </h1>
        <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
          Upload a receipt, scan a barcode, or share a flight ticket — Climate Lens
          decodes the CO₂ impact and suggests greener alternatives in seconds.
        </p>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => navigate('/upload')}
            className="flex items-center gap-2 bg-[#1a3d2b] hover:bg-[#14301f] text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
          >
            <CloudUpload className="w-4 h-4" /> Start Scanning
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-bold px-6 py-3 rounded-xl text-sm transition-colors border border-gray-200"
          >
            View Dashboard <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-3 gap-4 mb-12 max-w-xl">
        {[
          { value: '98.4%', label: 'OCR Accuracy'      },
          { value: '42kg',  label: 'Your CO₂ This Month'},
          { value: '12',    label: 'Scans Analysed'     },
        ].map(({ value, label }) => (
          <div key={label} className="bg-white rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-[#1a3d2b]">{value}</p>
            <p className="text-xs text-gray-500 mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Feature cards */}
      <h2 className="text-lg font-bold text-gray-900 mb-5">Everything you need</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map(({ Icon, title, text }) => (
          <div key={title} className="bg-white rounded-xl p-6 hover:shadow-sm transition-shadow">
            <div className="w-9 h-9 bg-[#f0f5f2] rounded-lg flex items-center justify-center mb-4">
              <Icon className="w-4.5 h-4.5 w-[18px] h-[18px] text-[#1a3d2b]" />
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-2">{title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      {/* CTA banner */}
      <div className="mt-10 bg-[#1a3d2b] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-white font-bold text-lg mb-1">Ready to scan your first item?</h3>
          <p className="text-gray-300 text-sm">Upload a receipt or photo and get your CO₂ estimate in seconds.</p>
        </div>
        <button
          onClick={() => navigate('/upload')}
          className="flex-shrink-0 flex items-center gap-2 bg-[#00c896] hover:bg-[#00b085] text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
        >
          <CloudUpload className="w-4 h-4" /> Go to Upload Center
        </button>
      </div>
    </div>
  );
}
