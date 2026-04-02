import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Amit Sharma',
      rating: 5,
      role: 'Business Traveler',
      text: 'Exceeded all expectations. The rooms are clean, modern, and perfectly themed around Varanasi. The staff went above and beyond to make me feel at home. Best stay in Kashi!',
    },
    {
      id: 2,
      name: 'Elena Rodriguez',
      rating: 5,
      role: 'Backpacker from Spain',
      text: 'Amazing atmosphere! The mural paintings are stunning. It’s so close to the Ganga ghats yet so peaceful. I loved the traditional breakfast and the warm hospitality.',
    },
    {
      id: 3,
      name: 'Dr. Ramesh Kumar',
      rating: 4,
      role: 'Family Trip',
      text: 'A very comfortable stay for my family. The kids loved the space and the amenities were top-notch. Very clean and safe environment. Highly recommended for families.',
    },
    {
      id: 4,
      name: 'Sunita Mehra',
      rating: 5,
      role: 'Solo Spiritual Traveler',
      text: 'Found absolute peace here. The property has a soul that perfectly matches the spiritual vibe of Varanasi. Every detail is thoughtfully curated for a premium yet authentic experience.',
    }
  ];

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="section-padding bg-cream relative overflow-hidden">
      {/* Decorative Ornaments */}
      <Quote className="absolute top-1/2 left-1/4 w-64 h-64 text-saffron/5 -z-10 -translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-heading font-black text-maroon-dark mb-4">
          Guest <span className="text-saffron italic">Stories</span>
        </h2>
        <div className="h-1.5 w-24 bg-saffron mx-auto rounded-full mb-16"></div>

        <div className="relative px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gold/10 relative"
            >
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-saffron fill-saffron w-6 h-6" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-maroon-dark italic leading-relaxed mb-10 font-medium">
                "{reviews[activeIndex].text}"
              </p>
              
              <div>
                <h4 className="text-2xl font-bold text-maroon-dark">{reviews[activeIndex].name}</h4>
                <p className="text-saffron font-medium uppercase tracking-widest text-sm mt-1">{reviews[activeIndex].role}</p>
              </div>

              {/* Navigation Controls */}
              <div className="absolute top-1/2 -left-6 md:-left-12 -translate-y-1/2">
                <button
                  onClick={prevReview}
                  className="w-12 h-12 md:w-16 md:h-16 bg-white border border-gold/20 rounded-full flex items-center justify-center text-maroon hover:bg-saffron hover:text-white hover:scale-110 transition-all shadow-xl"
                >
                  <ChevronLeft size={32} />
                </button>
              </div>
              <div className="absolute top-1/2 -right-6 md:-right-12 -translate-y-1/2">
                <button
                  onClick={nextReview}
                  className="w-12 h-12 md:w-16 md:h-16 bg-white border border-gold/20 rounded-full flex items-center justify-center text-maroon hover:bg-saffron hover:text-white hover:scale-110 transition-all shadow-xl"
                >
                  <ChevronRight size={32} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-saffron w-10' : 'bg-gold/30 hover:bg-gold/50'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-sm font-bold tracking-widest uppercase text-maroon-dark">TripAdvisor</div>
          <div className="text-sm font-bold tracking-widest uppercase text-maroon-dark">Booking.com</div>
          <div className="text-sm font-bold tracking-widest uppercase text-maroon-dark">Airbnb</div>
          <div className="text-sm font-bold tracking-widest uppercase text-maroon-dark">Google Reviews</div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
