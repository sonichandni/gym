
import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { theme } from '../theme/theme';
import { ArrowRight, Star, Dumbbell, Activity, UserCheck, Award } from 'lucide-react';

const FeatureIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'Dumbbell': return <Dumbbell size={32} />;
    case 'Activity': return <Activity size={32} />;
    case 'UserCheck': return <UserCheck size={32} />;
    case 'Award': return <Award size={32} />;
    default: return <Activity size={32} />;
  }
};

const Home: React.FC<{ setActivePage: (p: string) => void }> = ({ setActivePage }) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Background"
            className="w-full h-full object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <h2 
              className="text-sm md:text-xl font-bold tracking-[0.3em] uppercase mb-4 animate-fade-in"
              style={{ color: theme.colors.primary }}
            >
              The Ultimate Fitness Hub in Ahmedabad
            </h2>
            <h1 className="text-6xl md:text-9xl font-display font-black leading-tight italic mb-8 uppercase tracking-tighter">
              {siteConfig.tagline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              {siteConfig.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setActivePage('contact')}
                className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-rose-600 hover:text-white transition-all transform hover:scale-105 active:scale-95"
                style={{ borderRadius: theme.borderRadius.button }}
              >
                <span>Start Training</span>
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => setActivePage('about')}
                className="px-10 py-5 border-2 border-white/20 text-white font-black uppercase tracking-widest backdrop-blur-sm hover:bg-white/10 transition-all"
                style={{ borderRadius: theme.borderRadius.button }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Features */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {siteConfig.features.map((feature, i) => (
              <div 
                key={i} 
                className="group p-8 bg-zinc-900/50 border border-white/5 rounded-2xl hover:border-rose-600/50 transition-all duration-300"
              >
                <div className="mb-6 text-rose-600 group-hover:scale-110 transition-transform duration-300 inline-block">
                  <FeatureIcon name={feature.icon} />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Google Rating Badge */}
      <section className="py-12 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 px-8 py-6 bg-zinc-900 rounded-3xl border border-white/10">
            <div className="flex items-center space-x-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-8 h-8" />
              <div className="text-left">
                <div className="font-bold">Google Reviews</div>
                <div className="flex text-amber-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
              </div>
            </div>
            <div className="h-8 w-px bg-white/10 hidden md:block"></div>
            <div className="text-4xl font-display font-black text-white italic">
              {siteConfig.googleRating.score} <span className="text-sm font-sans font-bold text-gray-500 uppercase">Rating</span>
            </div>
            <div className="text-gray-400 text-sm font-medium">
              Based on {siteConfig.googleRating.reviewsCount}+ verified members in Ahmedabad
            </div>
          </div>
        </div>
      </section>

      {/* Quick Testimonial Section */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-rose-600 font-bold uppercase tracking-widest mb-2">Member Success</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black uppercase italic">What they say</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.testimonials.map((t) => (
              <div key={t.id} className="p-10 bg-zinc-900/40 rounded-3xl border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Star size={120} fill="white" />
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-2 border-rose-600 object-cover" />
                  <div>
                    <h4 className="font-bold text-xl">{t.name}</h4>
                    <div className="flex text-amber-400">
                      {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-lg italic leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-rose-600"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-black italic text-white mb-8 uppercase tracking-tighter">
            Stop making excuses. <br/> Start making progress.
          </h2>
          <button 
            onClick={() => setActivePage('contact')}
            className="px-12 py-6 bg-black text-white font-black uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all shadow-2xl"
          >
            Claim Free Trial Pass
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
