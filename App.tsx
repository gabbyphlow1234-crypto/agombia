import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import GalleryStrip from './components/GalleryStrip';
import Benefits from './components/Benefits';
import Ingredients from './components/Ingredients';
import Timeline from './components/Timeline';
import ProductShowcase from './components/ProductShowcase';
import DosageGuide from './components/DosageGuide';
import ImageGrid from './components/ImageGrid';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ChatWidget from './components/ChatWidget';
import StickyMobileCTA from './components/StickyMobileCTA';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <StatsBanner />
        <GalleryStrip />
        <Benefits />
        <Ingredients />
        <ProductShowcase />
        <Timeline />
        <ImageGrid />
        <Testimonials />
        <DosageGuide />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCTA />
      <WhatsAppButton />
      <ChatWidget />
    </div>
  );
}

export default App;