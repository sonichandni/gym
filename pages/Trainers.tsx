
import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { theme } from '../theme/theme';
import { Instagram, Award, Briefcase, Zap } from 'lucide-react';

const Trainers: React.FC<{ setActivePage: (p: string) => void }> = ({ setActivePage }) => {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-display font-black italic uppercase tracking-tighter mb-4">
            Elite <span style={{ color: theme.colors.primary }}>Coaches</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Guidance from Ahmedabad's most qualified fitness experts to ensure you reach your goals safely and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {siteConfig.trainers.map((trainer) => (
            <div key={trainer.id} className="group flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 mb-6">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Charges</div>
                    <button 
                      onClick={() => setActivePage('contact')}
                      className="text-xs font-bold text-rose-600 uppercase tracking-widest hover:underline"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4 px-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-display font-bold italic uppercase">{trainer.name}</h3>
                    <p className="text-rose-600 font-bold text-sm tracking-wider uppercase">{trainer.specialization}</p>
                  </div>
                  <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-rose-600 transition-colors">
                    <Instagram size={20} />
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Briefcase size={16} />
                    <span className="text-xs font-bold uppercase">{trainer.experience} Exp</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Award size={16} />
                    <span className="text-xs font-bold uppercase">Certified</span>
                  </div>
                </div>

                <button 
                  onClick={() => setActivePage('contact')}
                  className="w-full py-4 bg-zinc-900 hover:bg-white hover:text-black text-white font-black uppercase tracking-[0.2em] transition-all rounded-xl border border-white/5"
                >
                  Book Assessment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Join CTA for Trainers */}
        <div className="mt-32 p-12 bg-zinc-900/50 rounded-3xl border border-white/5 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
          <div>
            <h3 className="text-3xl font-display font-bold italic uppercase mb-2">Want to join the Elite coaching team?</h3>
            <p className="text-gray-400">We are always looking for certified, high-energy trainers in Ahmedabad.</p>
          </div>
          <a 
            href={`mailto:${siteConfig.contact.email}`}
            className="px-8 py-4 bg-rose-600 text-white font-bold uppercase tracking-widest rounded-full hover:bg-rose-700 transition-all"
          >
            Send Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
