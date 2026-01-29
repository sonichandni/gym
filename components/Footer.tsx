
import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { theme } from '../theme/theme';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold italic">
              {siteConfig.logo} <span style={{ color: theme.colors.primary }}>FITNESS</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Ahmedabad's premier fitness destination. We provide elite coaching, world-class equipment, and a culture of performance.
            </p>
            <div className="flex space-x-4">
              <a href={siteConfig.socials.instagram} className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href={siteConfig.socials.facebook} className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href={siteConfig.socials.youtube} className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">Our Vision</a></li>
              <li><a href="#trainers" className="hover:text-white transition-colors">Certified Trainers</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gym Gallery</a></li>
              <li><a href="#membership" className="hover:text-white transition-colors">Membership</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={20} className="shrink-0 mt-1" style={{ color: theme.colors.primary }} />
                <span>{siteConfig.contact.address}, {siteConfig.contact.city}, {siteConfig.contact.pincode}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={20} style={{ color: theme.colors.primary }} />
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={20} style={{ color: theme.colors.primary }} />
                <span>{siteConfig.contact.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Opening Hours</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between"><span>Mon - Sat</span> <span>05:30 AM - 10:30 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>07:00 AM - 01:00 PM</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {siteConfig.gymName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
