import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BedDouble, Check, ArrowRight, X, Star } from 'lucide-react';

import room1 from '../assets/room1.png';
import room2 from '../assets/room2.png';
import room3 from '../assets/room3.png';  

const RoomCard = ({ room, onShowDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card-premium group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {room.features.slice(0, 2).map((feat, idx) => (
            <span key={idx} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-maroon-dark text-xs font-bold rounded-full shadow-sm">
              {feat}
            </span>
          ))}
        </div>
        <div className="absolute top-4 right-4 bg-saffron text-maroon-dark px-3 py-1 rounded-full font-bold text-sm">
          ₹{room.price} / night
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-heading font-black text-maroon-dark mb-3">
          {room.name}
        </h3>
        <p className="text-maroon/70 text-sm mb-6 line-clamp-2">
          {room.description}
        </p>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-maroon/80 text-xs font-medium">
            <BedDouble className="w-4 h-4 text-saffron" />
            King Bed
          </div>
          <div className="flex items-center gap-2 text-maroon/80 text-xs font-medium">
            <Check className="w-4 h-4 text-saffron" />
            Free Wi-Fi
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => onShowDetails(room)}
            className="flex-1 px-4 py-3 bg-cream border border-gold/20 text-maroon-dark font-bold rounded-xl hover:bg-gold/10 transition-all text-sm"
          >
            View Details
          </button>
          <a
            href="#booking"
            className="flex-1 px-4 py-3 bg-saffron text-maroon-dark font-bold rounded-xl hover:bg-gold-dark transition-all flex items-center justify-center gap-2 text-sm"
          >
            Book Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      name: 'Deluxe Heritage Room',
      description: 'Experience true comfort in our spacious Deluxe Rooms, featuring traditional Varanasi aesthetics with modern luxury.',
      price: '1300',
      image: room1,
      longDescription: 'Our Deluxe Heritage Room is thoughtfully designed to provide a restful sanctuary after a day of exploring Varanasi. Each room features hand-selected decor, premium bedding, and a peaceful ambiance that ensures a rejuvenating stay. Enjoy the blend of ancient culture and contemporary convenience.',
      features: ['Air Conditioned','Wi-Fi Included',  'Attached Bath', 'Balcony View', 'Room Service']
    },
    {
      id: 2,
      name: 'Premium Family Suite',
      description: 'Ideal for families or groups, this suite offers extra space and privacy with a vibrant cultural touch.',
      price: '2000',
      image: room2,
      longDescription: 'Our Premium Family Suite is the perfect choice for families seeking a home-away-from-home experience. With interconnected spaces and ample living area, it allows for both togetherness and privacy. The suite is adorned with local artwork and offers top-tier amenities for all ages.',
      features: ['Air Conditioned', 'Wi-Fi Included', 'Spacious Closet', 'Attached Bath', 'Balcony View', 'Room Service']
    },
    {
      id: 3,
      name: 'Standard Heritage Room',
      description: 'A cozy and authentic stay experience for budget-conscious solo travelers or couples.',
      price: '1,000',
      image: room3,
      longDescription: 'Our Standard Heritage Room offers all the essential comforts without compromising on the authentic Varanasi vibe. Each room is meticulously cleaned and maintained to provide a safe and pleasant stay for our guests. A perfect base for your spiritual journey.',
      features: ['Wi-Fi Included', 'Ceiling Fan', 'Attached Bath', 'Balcony View', 'Room Service']
    }
  ];

  return (
    <section id="rooms" className="section-padding bg-cream relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl font-heading font-black text-maroon-dark mb-4 drop-shadow-sm">
          Our <span className="text-saffron italic">Luxe Rooms</span>
        </h2>
        <div className="h-1.5 w-24 bg-saffron mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-maroon/70">
          Stay in style. Choose from our hand-curated selection of rooms designed for 
          ultimate comfort and a touch of Varanasi soul.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} onShowDetails={setSelectedRoom} />
        ))}
      </div>

      {/* Room Detail Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 lg:p-8"
          >
            <div className="absolute inset-0 bg-maroon-dark/90 backdrop-blur-sm" onClick={() => setSelectedRoom(null)}></div>
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              className="bg-white w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col lg:flex-row"
            >
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-6 right-6 p-2 bg-white/10 backdrop-blur-md rounded-full text-white lg:text-maroon-dark hover:bg-saffron transition-all z-20"
              >
                <X size={24} />
              </button>

              <div className="lg:w-1/2 h-64 lg:h-auto relative">
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Star className="text-saffron fill-saffron w-4 h-4" />
                  <span className="text-sm font-bold text-maroon-dark">Super Host Fav</span>
                </div>
              </div>

              <div className="lg:w-1/2 p-8 lg:p-12 overflow-y-auto">
                <h3 className="text-3xl lg:text-4xl font-heading font-black text-maroon-dark mb-6">
                  {selectedRoom.name}
                </h3>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-maroon/40 uppercase tracking-widest">Price</span>
                    <span className="text-2xl font-bold text-maroon-dark">₹{selectedRoom.price} <span className="text-sm font-medium text-maroon/60">/ night</span></span>
                  </div>
                  <div className="w-[1px] h-10 bg-gold/20"></div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-maroon/40 uppercase tracking-widest">Size</span>
                    <span className="text-2xl font-bold text-maroon-dark">320 <span className="text-sm font-medium text-maroon/60">sqft</span></span>
                  </div>
                </div>

                <p className="text-lg text-maroon/70 mb-8 leading-relaxed">
                  {selectedRoom.longDescription}
                </p>

                <h4 className="font-bold text-maroon-dark mb-4 text-xl">What this room offers</h4>
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-10">
                  {selectedRoom.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-maroon/80">
                      <Check className="w-4 h-4 text-saffron flex-shrink-0" />
                      <span className="text-sm">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#booking"
                    onClick={() => setSelectedRoom(null)}
                    className="flex-1 py-4 bg-saffron text-maroon-dark font-black text-center rounded-2xl hover:bg-gold-dark transition-all shadow-xl shadow-saffron/20"
                  >
                    Reserver Now
                  </a>
                  <button
                    onClick={() => setSelectedRoom(null)}
                    className="flex-1 py-4 bg-white border-2 border-gold/30 text-maroon-dark font-black rounded-2xl hover:bg-gold/5 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Rooms;
