import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

const ContactItem = ({ icon, label, value, href }) => {
  return (
    <a
      href={href}
      className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white border border-gold/10 rounded-3xl md:rounded-[2.5rem] shadow-lg md:shadow-xl hover:shadow-2xl hover:border-saffron hover:scale-[1.03] transition-all duration-300 group"
    >
      <div className="w-10 h-10 md:w-14 md:h-14 bg-saffron/10 rounded-xl md:rounded-2xl flex items-center justify-center text-saffron group-hover:bg-saffron group-hover:text-white transition-all duration-300">
        {icon}
      </div>

      <div>
        <p className="text-[10px] md:text-xs font-bold text-maroon/40 uppercase tracking-widest">
          {label}
        </p>

        <p className="text-sm md:text-lg font-bold text-maroon-dark">
          {value}
        </p>
      </div>
    </a>
  );
};

const Contact = () => {

  return (
    <section id="contact" className="section-padding bg-cream relative overflow-hidden">

      {/* background decoration */}
      <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-maroon/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-6">

        {/* heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">

          <h2 className="text-3xl md:text-6xl font-heading font-black text-maroon-dark mb-3 md:mb-4">
            Let's <span className="text-saffron italic">Connect</span>
          </h2>

          <div className="h-1 w-20 md:w-24 bg-saffron mx-auto rounded-full mb-4 md:mb-6"></div>

          <p className="text-sm md:text-lg text-maroon/70">
            Have a question? We're here to help you plan your perfect Varanasi stay.
          </p>

        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">

          {/* Call */}
          <ContactItem
            icon={<Phone className="w-5 h-5 md:w-7 md:h-7" />}
            label="Call Us"
            value="+91 9838102517"
            href="tel:+919838102517"
          />

          {/* WhatsApp */}
          <ContactItem
            icon={<MessageCircle className="w-5 h-5 md:w-7 md:h-7" />}
            label="WhatsApp"
            value="+91 9838102517"
            href="https://wa.me/9838102517"
          />

          {/* Email */}
          <ContactItem
            icon={<Mail className="w-5 h-5 md:w-7 md:h-7" />}
            label="Email"
            value="ravinagw@gmail.com"
            href="mailto:ravinagw@gmail.com"
          />

          {/* Location */}
          <div className="p-4 md:p-6 bg-maroon-dark text-white rounded-3xl md:rounded-[2.5rem] shadow-lg md:shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300">

            <div className="absolute top-0 right-0 p-6 md:p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <MapPin size={60} />
            </div>

            <h4 className="text-lg md:text-2xl font-heading font-bold mb-3 md:mb-4 relative z-10">
              Our Location
            </h4>

            <p className="text-xs md:text-base text-cream/70 mb-4 md:mb-6 relative z-10 leading-relaxed">
              Near, Jagannath Mandir Rd, Assi Ghat,<br/>
              Dumraon Colony, Varanasi, Uttar Pradesh 221005<br/>
              
            </p>


            <div className="flex gap-3 md:gap-4 relative z-10">

              <a className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg md:rounded-xl flex items-center justify-center hover:bg-saffron hover:text-maroon-dark transition">
                <Instagram size={16} />
              </a>

              <a className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg md:rounded-xl flex items-center justify-center hover:bg-saffron hover:text-maroon-dark transition">
                <Facebook size={16} />
              </a>

              <a className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg md:rounded-xl flex items-center justify-center hover:bg-saffron hover:text-maroon-dark transition">
                <Twitter size={16} />
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;