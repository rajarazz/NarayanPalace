import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Heart, Users } from 'lucide-react';
import interiorImg from '../assets/about.png'; 

const About = () => {
  const highlights = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: 'Near Spiritual Landmarks',
      desc: 'Just moments away from the Ganga Ghats and Kashi Vishwanath Temple.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Premium Comfort',
      desc: 'Modern amenities blended with traditional Indian hospitality.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Warm Hospitality',
      desc: 'Experience the true essence of Atithi Devo Bhava.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Family Friendly',
      desc: 'A safe, peaceful environment for travelers from all walks of life.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-cream relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-maroon/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 bg-saffron/10 border border-saffron/20 text-saffron-dark font-bold text-sm rounded-full mb-6">
            ESTD 2024
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-maroon-dark mb-6 leading-tight">
            Discover Your Soulful <br /> 
            <span className="text-saffron">Retreat in Varanasi</span>
          </h2>
          <p className="text-lg text-maroon/80 mb-8 leading-relaxed">
            Welcome to Narayan Places Homestay, where every corner tells a story of the ancient city of Varanasi. 
            Nestled in a peaceful neighborhood, our homestay offers more than just a room; it’s an experience that 
            connects you to the spiritual heart of Kashi.
          </p>
          <p className="text-lg text-maroon/80 mb-10 leading-relaxed">
            From the hand-painted murals reflecting local culture to the warm smiles of our dedicated staff, 
            we ensure your stay is comfortable, authentic, and memorable. Choose us for a stay that feels 
            like home, away from home.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-saffron group-hover:bg-saffron group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-maroon-dark mb-1">{item.title}</h4>
                  <p className="text-sm text-maroon/60 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Images */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src={interiorImg} 
              alt="Narayan Places Interior" 
              className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-saffron rounded-3xl -z-10 rotate-12"></div>
          <div className="absolute top-1/2 -right-6 w-12 h-12 bg-maroon rounded-full -z-10 blur-sm"></div>
          <div className="absolute -top-10 left-1/4 p-6 bg-white rounded-2xl shadow-xl z-20 hidden md:block">
            <p className="font-heading text-maroon-dark text-center leading-none">
              <span className="block text-4xl font-bold text-saffron mb-1">4.9</span>
              <span className="text-sm font-medium tracking-widest uppercase">Guest Rating</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
