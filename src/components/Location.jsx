import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plane, Train, Navigation, Info } from 'lucide-react';

const Location = () => {
  const attractions = [
    { name: 'Kashi Vishwanath Temple', dist: '2.4 km', icon: <Info size={16} /> },
    { name: 'Dashashwamedh Ghat', dist: '1.8 km', icon: <Navigation size={16} /> },
    { name: 'Assi Ghat', dist: '200 m', icon: <Navigation size={16} /> },
    { name: 'Sarnath Buddhist Site', dist: '13 km', icon: <Info size={16} /> },
    { name: 'Varanasi Junction Station', dist: '5.2 km', icon: <Train size={16} /> },
    { name: 'Lal Bahadur Shastri Airport', dist: '27 km', icon: <Plane size={16} /> }
  ];

  return (
    <section id="location" className="section-padding bg-cream relative overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Left: Map Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group p-4 bg-white rounded-[3rem] shadow-2xl border-4 border-white/50"
        >
          {/* Mock Map Placeholder */}
          <div className="w-full h-[500px] bg-stone/10 rounded-[2.5rem] relative overflow-hidden flex items-center justify-center p-8 text-center">
            <div className="absolute inset-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=25.3176,82.9739&zoom=15&size=800x800&key=YOUR_API_KEY_HERE')] bg-cover"></div>
            <div className="relative z-10 p-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl max-w-md border-2 border-saffron">
              <div className="w-16 h-16 bg-saffron rounded-full mx-auto flex items-center justify-center text-maroon-dark mb-6 shadow-lg animate-bounce">
                <MapPin size={32} />
              </div>
              <h4 className="text-2xl font-heading font-black text-maroon-dark mb-4">You're Looking at Paradise</h4>
              <p className="text-maroon/70 font-medium mb-6">We are located in the heart of traditional Varanasi, just minutes away from the spiritual hotspots.</p>
              <a 
                href="https://maps.app.goo.gl/v6ubHr9qtyiquGHp6" 
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-3 bg-maroon-dark text-white font-bold rounded-xl hover:bg-saffron transition-all block w-full shadow-lg hover:shadow-saffron/20"
              >
                Open Google Maps
              </a>
            </div>
          </div>
          
          {/* Coordinates decorative box */}
          <div className="absolute -bottom-10 -right-10 p-6 bg-saffron rounded-3xl shadow-2xl rotate-3 z-20">
            <p className="text-maroon-dark font-black tracking-widest text-lg">25.3176° N, 82.9739° E</p>
          </div>
        </motion.div>

        {/* Right: Info */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1.5 bg-saffron/10 border border-saffron/20 text-saffron-dark font-bold text-sm rounded-full mb-6 italic">
            Location Highlights
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-maroon-dark mb-8 leading-tight">
            Perfectly <span className="text-saffron italic">Connected</span> <br /> 
            To History & Modernity
          </h2>
          <p className="text-lg text-maroon/70 mb-10 leading-relaxed">
            Situated in a peaceful enclave, Narayan Places Homestay provides easy access 
            to the vibrant spiritual life of Varanasi while offering a quiet sanctuary 
            to return to.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {attractions.map((place, idx) => (
              <div 
                key={idx} 
                className="p-4 bg-white rounded-2xl border border-gold/10 hover:border-saffron hover:bg-white hover:shadow-xl transition-all duration-300 group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-saffron/10 flex items-center justify-center text-saffron group-hover:bg-saffron group-hover:text-white transition-all">
                      {place.icon}
                   </div>
                   <h5 className="font-bold text-maroon-dark text-sm">{place.name}</h5>
                </div>
                <span className="text-xs font-bold text-maroon/40 py-1 px-3 bg-cream rounded-full group-hover:bg-saffron/10 group-hover:text-saffron-dark transition-all">{place.dist}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-white/50 border-2 border-dashed border-gold/20 rounded-3xl flex items-start gap-4">
             <div className="p-3 bg-white rounded-2xl shadow-md text-saffron">
                <Navigation size={24} />
             </div>
             <div>
                <h4 className="font-bold text-maroon-dark text-lg mb-1">Easy Exploration</h4>
                <p className="text-maroon/60 text-sm leading-relaxed">
                  We provide bicycle rentals, walking tours, and direct access to auto-rickshaws 
                  to make your local travel absolutely seamless.
                </p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
