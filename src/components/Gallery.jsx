import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import img1 from '../assets/hero.png';
import img2 from '../assets/about.png';
import img3 from '../assets/room.png';
import img4 from '../assets/amenity_1.png';
import img5 from '../assets/amenity_2.png';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: img1,
      title: 'Divine Hero Mural',
      category: 'Art'
    },
    {
      id: 2,
      src: img2,
      title: 'Our Welcoming Hallway',
      category: 'Interior'
    },
    {
      id: 3,
      src: img3,
      title: 'Comfortable Deluxe Room',
      category: 'Rooms'
    },
    {
      id: 4,
      src: img4,
      title: 'Glistening Chandelier',
      category: 'Lobby'
    },
    {
      id: 5,
      src: img5,
      title: 'Modern Spa Bathroom',
      category: 'Bathroom'
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-cream relative overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl font-heading font-black text-maroon-dark mb-4">
          Capturing <span className="text-saffron italic">Moments</span>
        </h2>
        <div className="h-1.5 w-24 bg-saffron mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-maroon/70">
          A glimpse into the soulful ambiance and heritage of Narayan Places Homestay. 
          Every image tells a story of tradition and hospitality.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`cursor-pointer overflow-hidden rounded-2xl group relative ${
              index === 0 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-maroon-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-saffron rounded-full flex items-center justify-center text-maroon-dark shadow-xl -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <Search size={24} />
              </div>
              <p className="mt-4 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300 delay-100">
                {image.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-maroon-dark/95 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full"
            >
              <X size={32} />
            </motion.button>
            
            <motion.div
              layoutId={`gallery-${selectedImage.id}`}
              className="max-w-5xl w-full max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-2xl shadow-2xl border-4 border-white/20"
              />
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <p className="text-white text-2xl font-bold font-heading">{selectedImage.title}</p>
                <p className="text-saffron font-medium uppercase tracking-widest text-sm mt-1">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
