
import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { theme } from '../theme/theme';
import { MapPin, Phone, Mail, MessageSquare, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-display font-black italic uppercase tracking-tighter mb-4">
            Get <span style={{ color: theme.colors.primary }}>In Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to change your life? Visit us today or drop a message to book your facility tour.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Contact Details Column */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl hover:border-rose-600/30 transition-all">
                <MapPin className="text-rose-600 mb-4" size={32} />
                <h4 className="font-bold uppercase tracking-widest text-gray-500 text-sm mb-2">Location</h4>
                <p className="text-lg font-bold">{siteConfig.contact.address}</p>
                <p className="text-gray-400">{siteConfig.contact.city}, {siteConfig.contact.pincode}</p>
              </div>
              <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl hover:border-rose-600/30 transition-all">
                <Phone className="text-rose-600 mb-4" size={32} />
                <h4 className="font-bold uppercase tracking-widest text-gray-500 text-sm mb-2">Call Us</h4>
                <p className="text-lg font-bold">{siteConfig.contact.phone}</p>
                <p className="text-gray-400">Available 6am - 10pm</p>
              </div>
              <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl hover:border-rose-600/30 transition-all">
                <Clock className="text-rose-600 mb-4" size={32} />
                <h4 className="font-bold uppercase tracking-widest text-gray-500 text-sm mb-2">Timings</h4>
                <p className="text-lg font-bold">Mon - Sat: 5:30am - 10:30pm</p>
                <p className="text-gray-400">Sunday: 7am - 1pm</p>
              </div>
              <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl hover:border-rose-600/30 transition-all">
                <Mail className="text-rose-600 mb-4" size={32} />
                <h4 className="font-bold uppercase tracking-widest text-gray-500 text-sm mb-2">Email</h4>
                <p className="text-lg font-bold break-all">{siteConfig.contact.email}</p>
                <p className="text-gray-400">Response in 24 hours</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/${siteConfig.contact.whatsapp}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-5 bg-green-600 hover:bg-green-700 text-white font-black uppercase tracking-widest rounded-2xl flex items-center justify-center space-x-3 transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-green-600/20"
              >
                <MessageSquare size={20} />
                <span>WhatsApp Us</span>
              </a>
              <a 
                href={`tel:${siteConfig.contact.phone}`}
                className="flex-1 py-5 bg-white text-black hover:bg-rose-600 hover:text-white font-black uppercase tracking-widest rounded-2xl flex items-center justify-center space-x-3 transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Map Column */}
          <div className="h-full min-h-[500px] rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl group relative">
             <div className="absolute inset-0 bg-rose-600/5 group-hover:bg-transparent transition-colors pointer-events-none"></div>
             <iframe 
                src={siteConfig.mapIframeUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="max-w-4xl mx-auto py-12 border-t border-white/5">
           <h3 className="text-2xl font-display font-bold uppercase italic text-center mb-8">Frequently Asked Questions</h3>
           <div className="space-y-4">
              {[
                { q: "Is there a trial period?", a: "Yes, we offer a 1-day guest pass for all first-time visitors in Ahmedabad." },
                { q: "Do you offer parking?", a: "Yes, we have dedicated basement parking for members at Elite Plaza." }
              ].map((faq, i) => (
                <div key={i} className="p-6 bg-zinc-900/30 rounded-2xl border border-white/5">
                  <h4 className="font-bold text-rose-600 mb-2">{faq.q}</h4>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
