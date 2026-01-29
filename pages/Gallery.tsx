
import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { theme } from '../theme/theme';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredImages = activeTab === 'all' 
    ? siteConfig.galleryImages 
    : siteConfig.galleryImages.filter(img => img.category === activeTab);

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-display font-black italic uppercase tracking-tighter mb-4">
            The <span style={{ color: theme.colors.primary }}>Facility</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our state-of-the-art facility located in the heart of Ahmedabad.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {siteConfig.galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-8 py-3 rounded-full font-bold uppercase tracking-widest transition-all ${
                activeTab === cat.id 
                  ? 'bg-rose-600 text-white shadow-xl shadow-rose-600/20' 
                  : 'bg-zinc-900 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div 
              key={img.id} 
              className="relative aspect-[4/3] group overflow-hidden rounded-2xl bg-zinc-900 border border-white/5"
            >
              <img 
                src={img.url} 
                alt="Gym Gallery" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <span className="text-white font-bold uppercase tracking-widest text-sm bg-rose-600 px-3 py-1 rounded">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
