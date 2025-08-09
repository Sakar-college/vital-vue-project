import { 
  FileText, 
  Shield, 
  BarChart3, 
  Calendar, 
  MessageSquare, 
  Database,
  Smartphone,
  Clock,
  CheckCircle
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "Comprehensive Patient Records",
      description: "Complete medical history, lab results, and treatment plans in one secure location."
    },
    {
      icon: Shield,
      title: "HIPAA Compliant Security",
      description: "End-to-end encryption and advanced security protocols to protect sensitive health data."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights and reporting to improve patient outcomes and operational efficiency."
    },
    {
      icon: Calendar,
      title: "Integrated Scheduling",
      description: "Seamless appointment management with automated reminders and calendar sync."
    },
    {
      icon: MessageSquare,
      title: "Secure Messaging",
      description: "HIPAA-compliant communication between providers, staff, and patients."
    },
    {
      icon: Database,
      title: "Interoperability",
      description: "Seamlessly exchange data with other healthcare systems and medical devices."
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description: "Access patient records and system features securely from any device, anywhere."
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Instant synchronization across all devices and locations for up-to-date information."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Built-in clinical decision support and automated quality measure tracking."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Everything You Need for <span className="text-gradient">Modern Healthcare</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive EHR platform provides all the tools healthcare professionals need 
            to deliver exceptional patient care while maintaining the highest security standards.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="medical-card group hover:scale-105 transition-all duration-300"
            >
              <div className="space-y-4">
                <feature.icon className="medical-icon" />
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
      </div>
    </section>
  );
};

export default Features;