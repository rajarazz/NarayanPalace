import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  Hotel, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

const BookingForm = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '1 Guest',
    roomType: 'Deluxe Heritage Room',
    specialRequest: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
New Booking Inquiry

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Room Type: ${formData.roomType}
Guests: ${formData.guests}

Check-In: ${formData.checkIn}
Check-Out: ${formData.checkOut}

Special Request:
${formData.specialRequest || "None"}
`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/919838102517?text=${encodedMessage}`;

    window.location.href = whatsappURL;

    setIsSubmitted(true);
  };

  // UPDATED PLATFORM LINKS
  const platforms = [
    { 
      name: 'MakeMyTrip',
      color: 'bg-[#df2525]',
      icon: <ExternalLink size={18} />,
      url: 'https://www.makemytrip.com/'
    },
    { 
      name: 'Booking.com',
      color: 'bg-[#003580]',
      icon: <ExternalLink size={18} />,
      url: 'https://www.booking.com/hotel/in/narayan-palace-homestay.en-gb.html'
    },
    { 
      name: 'Airbnb',
      color: 'bg-[#ff385c]',
      icon: <ExternalLink size={18} />,
      url: 'https://www.airbnb.com/'
    },
    { 
      name: 'Agoda',
      color: 'bg-[#5392f9]',
      icon: <ExternalLink size={18} />,
      url: 'https://www.agoda.com/'
    }
  ];

  return (
    <section id="booking" className="section-padding bg-cream relative">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-5 space-y-10">

            <div>

              <h2 className="text-4xl md:text-6xl font-heading font-black text-maroon-dark mb-6">
                Reserve Your <br />
                <span className="text-saffron italic">Sanctuary</span>
              </h2>

              <div className="h-1.5 w-24 bg-saffron rounded-full mb-8"></div>

              <p className="text-lg text-maroon/70 leading-relaxed mb-8">
                Ready to experience the magic of Varanasi? Send us an inquiry 
                directly or book through your favorite platform.
              </p>
              
              <div className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-gold/10 shadow-xl">

                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-600">
                  <ShieldCheck size={28} />
                </div>

                <div>
                  <h4 className="font-bold text-maroon-dark">
                    Best Price Guaranteed
                  </h4>

                  <p className="text-xs text-maroon/40 uppercase tracking-widest font-medium">
                    Direct Booking Benefit
                  </p>
                </div>

              </div>

            </div>

            {/* PLATFORM SECTION */}
            <div className="space-y-6">

              <h4 className="font-heading text-2xl font-black text-maroon-dark">
                Book via Platforms
              </h4>

              <div className="grid grid-cols-2 gap-4">

                {platforms.map((p) => (

                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${p.color} text-white p-4 rounded-2xl flex items-center justify-between font-bold hover:scale-105 transition-all shadow-lg group`}
                  >
                    {p.name}

                    <span className="group-hover:translate-x-1 transition-transform">
                      {p.icon}
                    </span>

                  </a>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="lg:col-span-7">

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border-4 border-gold/5 relative overflow-hidden"
            >

              <AnimatePresence mode="wait">

                {isSubmitted ? (

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-20 text-center"
                  >

                    <div className="w-24 h-24 bg-saffron/10 rounded-full flex items-center justify-center text-saffron mx-auto mb-8 animate-pulse">
                      <CheckCircle size={64} />
                    </div>

                    <h3 className="text-3xl font-heading font-black text-maroon-dark mb-4">
                      Opening WhatsApp...
                    </h3>

                    <p className="text-lg text-maroon/60 max-w-sm mx-auto mb-10 leading-relaxed font-light">
                      Please send the booking message on WhatsApp to complete your inquiry.
                    </p>

                  </motion.div>

                ) : (

                  <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="flex items-center gap-2 mb-8">
                      <Hotel className="text-saffron w-6 h-6" />
                      <h3 className="text-2xl font-heading font-black text-maroon-dark uppercase tracking-tight">
                        Booking Inquiry
                      </h3>
                    </div>

                    {/* NAME + PHONE */}
                    <div className="grid md:grid-cols-2 gap-6">

                      <input
                        required
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-6 py-4 bg-cream/50 border border-gold/10 rounded-2xl"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />

                      <input
                        required
                        type="tel"
                        placeholder="+91 99999 99999"
                        className="w-full px-6 py-4 bg-cream/50 border border-gold/10 rounded-2xl"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />

                    </div>

                    {/* EMAIL + ROOM */}
                    <div className="grid md:grid-cols-2 gap-6">

                      <input
                        required
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-6 py-4 bg-cream/50 border border-gold/10 rounded-2xl"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />

                      <select
                        className="w-full px-6 py-4 bg-cream/50 border border-gold/10 rounded-2xl"
                        value={formData.roomType}
                        onChange={(e) =>
                          setFormData({ ...formData, roomType: e.target.value })
                        }
                      >
                        <option>Deluxe Heritage Room</option>
                        <option>Premium Family Suite</option>
                        <option>Standard Heritage Room</option>
                      </select>

                    </div>

                    {/* DATES + GUESTS */}
                    <div className="grid md:grid-cols-3 gap-6">

                      <input
                        type="date"
                        required
                        className="w-full px-6 py-4 bg-cream/50 border border-gold/10 rounded-2xl"
                        value={formData.checkIn}
                        onChange={(e) =>
                          setFormData({ ...formData, checkIn: e.target.value })
                        }
                      />

                      <input
                        type="date"
                        required
                        className="w-full px-6 py-4 bg-cream/50 border border-gold/10 rounded-2xl"
                        value={formData.checkOut}
                        onChange={(e) =>
                          setFormData({ ...formData, checkOut: e.target.value })
                        }
                      />

                      <select
                        className="w-full px-6 py-4 bg-cream/50 border border-gold/10 rounded-2xl"
                        value={formData.guests}
                        onChange={(e) =>
                          setFormData({ ...formData, guests: e.target.value })
                        }
                      >
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                        <option>4+ Guests</option>
                      </select>

                    </div>

                    <textarea
                      rows="3"
                      placeholder="Special Request"
                      className="w-full px-6 py-4 bg-cream/50 border border-gold/10 rounded-2xl"
                      value={formData.specialRequest}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          specialRequest: e.target.value
                        })
                      }
                    />

                    <button
                      type="submit"
                      className="w-full py-5 bg-saffron text-maroon-dark font-black text-xl rounded-2xl hover:bg-gold-dark transition-all flex items-center justify-center gap-3 shadow-xl"
                    >
                      Send Inquiry
                      <ArrowRight size={24} />
                    </button>

                  </form>

                )}

              </AnimatePresence>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BookingForm;