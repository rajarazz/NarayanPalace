import React from 'react';
import { 
  Hotel, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Instagram, 
  Twitter, 
  Facebook,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-maroon-dark text-cream py-7 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-saffron/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-8">
            <a href="#home" className="flex items-center gap-3">
              <div className="p-2 bg-saffron rounded-lg">
                <Hotel className="text-maroon w-6 h-6" />
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight text-white uppercase">
                Narayan Places
              </span>
            </a>
            <p className="text-cream/60 leading-relaxed text-sm font-light">
              Providing a soulful and authentic Varanasi experience since 2024. 
              Join us for a stay that celebrates the spirit of India's spiritual capital.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-saffron transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-saffron transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-saffron transition-all"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-heading font-bold text-saffron mb-8 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Rooms', 'Amenities', 'Gallery'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-cream/60 hover:text-saffron flex items-center gap-2 transition-colors group"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-heading font-bold text-saffron mb-8 uppercase tracking-widest">Reach Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-saffron w-5 h-5 flex-shrink-0" />
                <span className="text-cream/60 text-sm leading-relaxed">
                  Near, Jagannath Mandir Rd, Assi Ghat,<br /> Dumraon Colony, Varanasi, Uttar Pradesh 221005
                </span>
                

              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-saffron w-5 h-5 flex-shrink-0" />
                <span className="text-cream/60 text-sm">+91 9838102517</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-saffron w-5 h-5 flex-shrink-0" />
                <span className="text-cream/60 text-sm">ravinagw@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter
          <div>
            <h4 className="text-xl font-heading font-bold text-saffron mb-8 uppercase tracking-widest">Stay Updated</h4>
            <p className="text-cream/60 text-sm mb-6 font-light">Join our list for travel guides & exclusive offers.</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-saffron text-sm transition-all"
              />
              <button className="w-full py-3 bg-saffron text-maroon-dark font-black text-sm rounded-xl hover:bg-gold transition-all shadow-lg shadow-saffron/10 uppercase tracking-widest">
                Subscribe
              </button>
            </div>
          </div> */}

        </div>

        {/* Footer Bottom */}
        <div className=" border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-cream/40 text-xs">
            © {currentYear} Narayan Places Homestay. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-cream/40 text-xs">
            Made with <a href="https://www.velryon.in/"> Velryon.in</a>
          </div>
          <div className="flex gap-6">
             <a href="#" className="text-cream/40 text-xs hover:text-saffron">Privacy Policy</a>
             <a href="#" className="text-cream/40 text-xs hover:text-saffron">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
