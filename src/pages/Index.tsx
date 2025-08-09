import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Dashboard from '@/components/Dashboard';
import Security from '@/components/Security';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Dashboard />
      <Security />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
