import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Shield, Users, Heart, Settings, Activity, Building2, Lock, CheckCircle } from 'lucide-react';

interface LoginPageProps {
  onLogin: (portal: string, credentials: any) => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [selectedPortal, setSelectedPortal] = useState<string>('');
  const [credentials, setCredentials] = useState({
    identifier: '',
    password: ''
  });

  const portals = [
    {
      id: 'patient',
      title: 'Patient Portal',
      description: 'Access your medical records and health information',
      icon: Heart,
      color: 'from-emerald-600 to-emerald-400',
      placeholder: 'Enter Patient ID',
      features: ['Medical Records', 'Lab Results', 'Appointment History']
    },
    {
      id: 'frontdesk',
      title: 'Provider Portal',
      description: 'Manage patient care and clinical workflows',
      icon: Users,
      color: 'from-blue-600 to-blue-400',
      placeholder: 'Enter Provider ID',
      features: ['Patient Management', 'Clinical Notes', 'Treatment Plans']
    },
    {
      id: 'emergency',
      title: 'Emergency Access',
      description: 'Critical patient information for emergency care',
      icon: Activity,
      color: 'from-red-600 to-red-400',
      placeholder: 'Enter Emergency ID',
      features: ['Emergency Records', 'Vital Information', 'Quick Access']
    },
    {
      id: 'admin',
      title: 'Administration',
      description: 'System administration and practice management',
      icon: Settings,
      color: 'from-purple-600 to-purple-400',
      placeholder: 'Enter Admin ID',
      features: ['User Management', 'System Settings', 'Analytics']
    }
  ];

  const handleLogin = () => {
    if (selectedPortal && credentials.identifier && credentials.password) {
      onLogin(selectedPortal, credentials);
    }
  };

  const selectedPortalData = portals.find(p => p.id === selectedPortal);

  return (
    <div className="min-h-screen hero-section relative overflow-hidden">
      {/* Professional background elements inspired by athenahealth */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="floating-element top-32 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" style={{ animationDelay: '1.5s' }}></div>
        <div className="floating-element bottom-20 left-1/4 w-72 h-72 bg-primary-glow/5 rounded-full blur-3xl" style={{ animationDelay: '3s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up-professional">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-4 glass-panel">
              <Building2 className="h-10 w-10 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-5xl font-bold text-white mb-2">Falano EHR</h1>
              <p className="text-xl text-white/80">Healthcare Excellence Platform</p>
            </div>
          </div>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Providing care can be simpler with our AI-powered, all-in-one healthcare solution that enables 
            clinical and operational efficiency across your organization.
          </p>
        </div>

        {!selectedPortal ? (
          /* Portal Selection */
          <div className="max-w-7xl mx-auto animate-fade-in-professional">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-white mb-4">Choose Your Portal</h2>
              <p className="text-white/80 text-lg">Select the portal that matches your role in the healthcare organization</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {portals.map((portal, index) => {
                const Icon = portal.icon;
                return (
                  <div 
                    key={portal.id}
                    className="athena-portal-card transform hover:scale-105 animate-fade-in-professional"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedPortal(portal.id)}
                  >
                    <div className="text-center">
                      <div className={`mx-auto p-6 rounded-2xl bg-gradient-to-br ${portal.color} mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{portal.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{portal.description}</p>
                      
                      <div className="space-y-3">
                        {portal.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust indicators */}
            <div className="mt-16 text-center">
              <div className="glass-panel p-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-8 text-white/80">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    <span className="text-sm font-medium">HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5" />
                    <span className="text-sm font-medium">End-to-End Encryption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">SOC 2 Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Login Form */
          <div className="max-w-lg mx-auto animate-slide-up-professional">
            <Card className="athena-card border-white/10 shadow-professional">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto p-4 glass-panel rounded-2xl mb-6">
                  {(() => {
                    const portal = portals.find(p => p.id === selectedPortal);
                    const Icon = portal?.icon || Shield;
                    return <Icon className="h-8 w-8 text-primary" />;
                  })()}
                </div>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  {portals.find(p => p.id === selectedPortal)?.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  Sign in to access your healthcare platform
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="id" className="text-sm font-medium text-foreground">
                    {selectedPortalData?.placeholder?.replace('Enter ', '')}
                  </Label>
                  <Input
                    id="id"
                    type="text"
                    placeholder={selectedPortalData?.placeholder}
                    value={credentials.identifier}
                    onChange={(e) => setCredentials(prev => ({ ...prev, identifier: e.target.value }))}
                    className="athena-input h-12"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-foreground">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    className="athena-input h-12"
                    required
                  />
                </div>
                
                <div className="bg-muted/30 border border-border/50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-foreground mb-2">Demo Credentials:</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>ID: <span className="font-mono text-foreground">demo123</span></p>
                    <p>Password: <span className="font-mono text-foreground">password</span></p>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-col space-y-4 pt-6">
                <Button 
                  onClick={handleLogin}
                  className="athena-button-primary w-full h-12 text-lg"
                  disabled={!credentials.identifier || !credentials.password}
                >
                  Sign In to Portal
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedPortal('')}
                  className="w-full athena-button-secondary h-12"
                >
                  ← Back to Portal Selection
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-16 text-white/70">
          <div className="glass-panel p-4 max-w-md mx-auto">
            <p className="text-sm">© 2024 Falano EHR. Trusted by healthcare professionals worldwide.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;