import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream font-sans selection:bg-saffron selection:text-maroon-dark">
      <Navbar />
      <main>
        <Hero />
        <div className="relative">
           {/* Decorative elements between sections */}
           <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-cream -translate-y-full"></div>
           <About />
           <Rooms />
           <Amenities />
           <Gallery />
           <Reviews />
           <Location />
           {/* Section Separator */}
           <div className="h-px w-full bg-gold/10 max-w-7xl mx-auto"></div>
           <BookingForm />
           <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
