import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Ready to Transform Your Healthcare Practice?
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Join thousands of healthcare professionals who trust our EHR platform to 
            streamline their operations and improve patient outcomes.
          </p>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            <div className="text-center">
              <div className="text-3xl font-bold">99.9%</div>
              <div className="opacity-80">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">10,000+</div>
              <div className="opacity-80">Healthcare Providers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="opacity-80">Expert Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
            >
              Schedule Demo
            </Button>
          </div>

          {/* Contact Options */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-lg mb-6 opacity-90">Prefer to speak with someone? We're here to help.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:+1-800-EHR-HELP" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Phone className="w-5 h-5" />
                <span>1-800-EHR-HELP</span>
              </a>
              <a href="mailto:sales@ehrplatform.com" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Mail className="w-5 h-5" />
                <span>sales@ehrplatform.com</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Calendar className="w-5 h-5" />
                <span>Book a Meeting</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;