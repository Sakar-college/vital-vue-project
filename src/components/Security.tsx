import { Shield, Lock, Eye, Server, CheckCircle, AlertTriangle } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Full compliance with HIPAA regulations including administrative, physical, and technical safeguards."
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "256-bit AES encryption for data at rest and TLS 1.3 for data in transit."
    },
    {
      icon: Eye,
      title: "Audit Trails",
      description: "Comprehensive logging of all user activities and data access for complete accountability."
    },
    {
      icon: Server,
      title: "SOC 2 Certified",
      description: "Type II SOC 2 certification ensuring the highest standards of security and availability."
    }
  ];

  const certifications = [
    "HIPAA Compliant",
    "SOC 2 Type II",
    "ISO 27001",
    "GDPR Ready",
    "HITECH Act",
    "21 CFR Part 11"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <div className="flex justify-center mb-4">
            <Shield className="w-16 h-16 text-primary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gradient">Security & Compliance</span> First
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your patients' data deserves the highest level of protection. Our platform meets and exceeds 
            all healthcare security standards and compliance requirements.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div 
              key={index}
              className="medical-card flex items-start space-x-6 group hover:scale-105"
            >
              <div className="flex-shrink-0">
                <feature.icon className="w-12 h-12 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="medical-card">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Certifications & Compliance</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center p-4 bg-muted/50 rounded-xl hover:bg-primary/10 transition-colors"
                >
                  <div className="text-center">
                    <CheckCircle className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-12 p-6 bg-primary/10 border border-primary/20 rounded-2xl">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-primary mb-2">Security Commitment</h4>
              <p className="text-sm text-muted-foreground">
                We undergo regular third-party security audits and maintain continuous monitoring 
                to ensure your data remains protected against evolving threats. Our security team 
                works around the clock to maintain the highest standards of data protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;