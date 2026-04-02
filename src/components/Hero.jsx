import React from 'react';
import { motion } from 'framer-motion';
import { Hotel, MapPin, Calendar, ArrowRight } from 'lucide-react';
import heroImg from '../assets/hero.png'; // Assuming hero.png is the Shiva/Ganga painting

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Narayan Places Homestay Varanasi"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark/60 via-maroon-dark/20 to-transparent"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/10 via-transparent to-transparent"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-start pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 50, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 text-saffron font-bold tracking-widest uppercase mb-4">
            <span className="w-12 h-1 bg-saffron rounded-full"></span>
            Heritage & Hospitality
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white font-bold leading-none mb-6">
            Experience <br />
            <span className="text-saffron italic">Peaceful Stay</span> <br />
            In Heart of Varanasi
          </h1>
          <p className="text-cream/90 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
            Immerse yourself in the spiritual essence of the oldest living city. 
            Tradition meets luxury at Narayan Places Homestay.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#booking"
              className="px-10 py-4 bg-saffron text-maroon-dark font-bold text-lg rounded-full 
                         hover:bg-gold-dark hover:scale-105 transition-all duration-300 
                         flex items-center justify-center gap-2 shadow-2xl shadow-saffron/20"
            >
              Book Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#rooms"
              className="px-10 py-4 border-2 border-white/30 backdrop-blur-sm text-white font-bold text-lg rounded-full 
                         hover:bg-white hover:text-maroon-dark transition-all duration-300"
            >
              View Rooms
            </a>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12"
        >
          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-saffron group-hover:border-saffron transition-all">
              <Hotel className="text-white group-hover:text-maroon-dark w-6 h-6" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">Premium Rooms</p>
              <p className="text-cream/60 text-sm">Comfort & Luxury</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-saffron group-hover:border-saffron transition-all">
              <MapPin className="text-white group-hover:text-maroon-dark w-6 h-6" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">Prime Location</p>
              <p className="text-cream/60 text-sm">Near Ganga Ghats</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 group">
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-saffron group-hover:border-saffron transition-all">
              <Calendar className="text-white group-hover:text-maroon-dark w-6 h-6" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">Easy Booking</p>
              <p className="text-cream/60 text-sm">Hassle Free</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-cream to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
