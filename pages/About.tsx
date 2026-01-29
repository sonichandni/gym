
import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { theme } from '../theme/theme';
import { Target, Eye, ShieldCheck, Zap } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { title: "Elite Community", desc: "A gym culture that motivates and pushes you beyond limits.", icon: <ShieldCheck /> },
    { title: "Peak Performance", desc: "State-of-the-art equipment designed for professional athletes.", icon: <Zap /> },
    { title: "Certified Guidance", desc: "Every trainer is handpicked and internationally certified.", icon: <Target /> },
    { title: "Holistic Health", desc: "Nutrition and recovery focused approach to total well-being.", icon: <Eye /> },
  ];

  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-6xl md:text-8xl font-display font-black italic uppercase tracking-tighter mb-8">
            About <span style={{ color: theme.colors.primary }}>The Fitness Club</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Founded with a vision to redefine the fitness landscape in Ahmedabad, The Fitness Club Fitness isn't just a gym—it's a lifestyle. We believe in high-intensity training, scientific nutrition, and creating a community of winners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-rose-600/20 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800" 
              alt="Gym Interior"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-rose-600 font-bold uppercase tracking-widest mb-4">Our Vision</h3>
              <p className="text-xl text-gray-300">To be the #1 destination for transformative fitness in Gujarat, setting new benchmarks in coaching and member results.</p>
            </div>
            <div>
              <h3 className="text-rose-600 font-bold uppercase tracking-widest mb-4">Our Mission</h3>
              <p className="text-xl text-gray-300">To empower individuals with the tools, knowledge, and environment needed to achieve their absolute physical and mental peak.</p>
            </div>
            <div className="pt-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900 rounded-2xl border border-white/5">
                  <div className="text-4xl font-display font-black text-rose-600 italic">10K+</div>
                  <div className="text-sm text-gray-500 uppercase font-bold tracking-widest">SF Built</div>
                </div>
                <div className="p-6 bg-zinc-900 rounded-2xl border border-white/5">
                  <div className="text-4xl font-display font-black text-rose-600 italic">25+</div>
                  <div className="text-sm text-gray-500 uppercase font-bold tracking-widest">Expert Coaches</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/50 rounded-3xl p-12 md:p-20 border border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter">Why Choose Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-rose-600 rounded-2xl flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform duration-300">
                  {v.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 uppercase">{v.title}</h4>
                <p className="text-gray-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
