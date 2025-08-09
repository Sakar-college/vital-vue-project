import { ArrowRight, Shield, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/ehr-hero.jpg';

const Hero = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Secure <span className="text-gradient">Electronic Health Records</span> for Modern Healthcare
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Streamline patient care with our comprehensive EHR solution. Secure, compliant, 
                and designed for healthcare professionals who demand excellence.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-primary" />
                <span className="font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-secondary" />
                <span className="font-medium">Real-time Updates</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-primary" />
                <span className="font-medium">Multi-provider</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-secondary">
                Schedule Demo
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl transform -rotate-6"></div>
              <img 
                src={heroImage} 
                alt="Modern EHR interface showing patient health records and medical data"
                className="relative rounded-3xl shadow-strong w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;