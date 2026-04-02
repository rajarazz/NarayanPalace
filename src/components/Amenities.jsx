import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  Wind, 
  Coffee, 
  Droplet, 
  Car, 
  Clock, 
  UserPlus, 
  Map, 
  ShieldCheck, 
  Tv,
  Thermometer,
  Zap
} from 'lucide-react';

const AmenityCard = ({ icon, title, desc, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-8 bg-white/50 backdrop-blur-sm border border-gold/10 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 group"
    >
      <div className="w-14 h-14 bg-saffron/10 rounded-2xl flex items-center justify-center text-saffron mb-6 group-hover:bg-saffron group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-maroon-dark mb-2">{title}</h4>
      <p className="text-sm text-maroon/60 leading-relaxed">{desc}</p>
    </motion.div>
  );
};

const Amenities = () => {
  const amenities = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Free High-Speed Wi-Fi',
      desc: 'Stay connected with your loved ones or catch up on work effortlessly.'
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Air Conditioning',
      desc: 'Cool, climate-controlled rooms for your comfort in all seasons.'
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: '24/7 Hot Water',
      desc: 'Rejuvenating hot showers available round the clock.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '24/7 Power Backup',
      desc: 'Uninterrupted power supply for a seamless stay experience.'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Parking Facility',
      desc: 'Secure parking space for your vehicles right at the property.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Room Service',
      desc: 'Delicious local and multi-cuisine food served in your room.'
    },
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: 'Family Friendly',
      desc: 'Spacious areas and services catering to families with children.'
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: 'Travel Assistance',
      desc: 'Guided tours, boat rides, and local travel arrangements.'
    }
  ];

  return (
    <section id="amenities" className="section-padding bg-cream/50 relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-saffron/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-maroon-dark mb-4">
              Modern <span className="text-saffron italic">Comforts</span>
            </h2>
            <div className="h-1.5 w-24 bg-saffron rounded-full mb-6"></div>
            <p className="text-lg text-maroon/70">
              We provide essential amenities and premium services to make your 
              Varanasi stay as comfortable and convenient as possible.
            </p>
          </div>
          <div className="bg-white px-8 py-4 rounded-3xl shadow-lg border border-gold/10 flex items-center gap-4">
            <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-maroon-dark leading-tight">ISO Certified</p>
              <p className="text-xs text-maroon/40 uppercase tracking-widest font-medium">Safety Standard</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {amenities.map((item, index) => (
            <AmenityCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
