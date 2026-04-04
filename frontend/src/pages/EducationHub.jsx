import React from 'react';
import { Leaf, Zap, Globe, Droplets, Wind, Recycle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const topics = [
  {
    Icon: Leaf,
    color: 'bg-green-50 text-[#1a3d2b]',
    tag: 'Basics',
    title: 'What is CO₂e?',
    text: 'CO₂ equivalent (CO₂e) is a standard unit for measuring carbon footprints. It expresses the impact of different greenhouse gases relative to CO₂ — so methane and nitrous oxide are also captured in one number.',
  },
  {
    Icon: Globe,
    color: 'bg-blue-50 text-blue-600',
    tag: 'Global Context',
    title: 'The 1.5 °C Target',
    text: 'The Paris Agreement aims to limit global warming to 1.5 °C above pre-industrial levels. Achieving this requires cutting global emissions by ~45 % by 2030 and reaching net-zero by 2050.',
  },
  {
    Icon: Zap,
    color: 'bg-yellow-50 text-yellow-600',
    tag: 'Energy',
    title: 'Electricity & Carbon',
    text: 'Electricity generation is one of the largest sources of CO₂. The carbon intensity of power varies massively by country — renewables can produce as little as 10 g CO₂e/kWh vs. coal at ~820 g CO₂e/kWh.',
  },
  {
    Icon: Droplets,
    color: 'bg-cyan-50 text-cyan-600',
    tag: 'Food',
    title: 'Food Carbon Footprints',
    text: 'Beef produces ~60 kg CO₂e per kg of food — 50× more than legumes. Switching to a plant-rich diet is the single biggest individual action to reduce food-related emissions.',
  },
  {
    Icon: Wind,
    color: 'bg-purple-50 text-purple-600',
    tag: 'Transport',
    title: 'Flying vs. Trains',
    text: 'A return flight from London to New York emits ~1.7 tonnes of CO₂e per passenger. The same journey by train in Europe emits 90 % less. Avoiding unnecessary flights is highly impactful.',
  },
  {
    Icon: Recycle,
    color: 'bg-orange-50 text-orange-500',
    tag: 'Circular Economy',
    title: 'Reduce, Reuse, Recycle',
    text: 'Manufacturing new products is carbon-intensive. Buying second-hand, repairing, and recycling can cut product lifecycle emissions by up to 70 %. Circularity is key to a low-carbon economy.',
  },
];

export default function EducationHub() {
  const navigate = useNavigate();

  return (
    <div className="px-10 pt-8 pb-10">
      <header className="mb-8">
        <h1 className="text-[36px] font-bold text-black leading-tight mb-2">Education Hub</h1>
        <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
          Learn the science behind your carbon footprint and discover practical ways to reduce your climate impact.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {topics.map(({ Icon, color, tag, title, text }) => (
          <div key={title} className="bg-white rounded-xl p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${color.split(' ')[0]}`}>
                <Icon className={`w-[18px] h-[18px] ${color.split(' ')[1]}`} />
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{tag}</span>
            </div>
            <h3 className="font-bold text-gray-900 text-[15px] mb-2">{title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed flex-1">{text}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 bg-[#1a3d2b] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-white font-bold text-base mb-1">Put knowledge into action</h3>
          <p className="text-gray-300 text-sm">Scan your receipts and flights to see your real impact.</p>
        </div>
        <button
          onClick={() => navigate('/upload')}
          className="flex-shrink-0 flex items-center gap-2 bg-[#00c896] hover:bg-[#00b085] text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
        >
          Start Scanning <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
