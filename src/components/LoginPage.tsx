import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Users, AlertTriangle, Shield, Heart } from 'lucide-react';

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
      description: 'Access your medical reports and health information',
      icon: User,
      color: 'from-primary to-primary-light',
      placeholder: 'Enter Patient ID'
    },
    {
      id: 'frontdesk',
      title: 'Front Desk Portal',
      description: 'Manage patient registration and report uploads',
      icon: Users,
      color: 'from-secondary to-secondary-light',
      placeholder: 'Enter Staff ID'
    },
    {
      id: 'emergency',
      title: 'Emergency Portal',
      description: 'Quick access to critical patient information',
      icon: AlertTriangle,
      color: 'from-destructive to-red-400',
      placeholder: 'Enter Emergency ID'
    },
    {
      id: 'admin',
      title: 'Admin Portal',
      description: 'Complete system administration and management',
      icon: Shield,
      color: 'from-purple-600 to-purple-400',
      placeholder: 'Enter Admin ID'
    }
  ];

  const handleLogin = () => {
    if (selectedPortal && credentials.identifier && credentials.password) {
      onLogin(selectedPortal, credentials);
    }
  };

  const selectedPortalData = portals.find(p => p.id === selectedPortal);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Logo and Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gradient">Falano</h1>
          </div>
          <p className="text-xl text-muted-foreground">Centralized E-Hospital System</p>
        </div>

        {!selectedPortal ? (
          /* Portal Selection */
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center mb-8">Select Your Portal</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {portals.map((portal) => (
                <Card 
                  key={portal.id}
                  className="cursor-pointer hover:shadow-strong transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20"
                  onClick={() => setSelectedPortal(portal.id)}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${portal.color} flex items-center justify-center mb-4`}>
                      <portal.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{portal.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{portal.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          /* Login Form */
          <div className="max-w-md mx-auto">
            <Card className="shadow-strong">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${selectedPortalData?.color} flex items-center justify-center mb-4`}>
                  {selectedPortalData && <selectedPortalData.icon className="w-8 h-8 text-white" />}
                </div>
                <CardTitle className="text-2xl">{selectedPortalData?.title}</CardTitle>
                <p className="text-muted-foreground">{selectedPortalData?.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder={selectedPortalData?.placeholder}
                      value={credentials.identifier}
                      onChange={(e) => setCredentials(prev => ({ ...prev, identifier: e.target.value }))}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="password"
                      placeholder="Enter Password"
                      value={credentials.password}
                      onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button 
                    onClick={handleLogin}
                    className={`w-full h-12 bg-gradient-to-r ${selectedPortalData?.color} text-white hover:opacity-90`}
                    disabled={!credentials.identifier || !credentials.password}
                  >
                    Login to {selectedPortalData?.title}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedPortal('')}
                    className="w-full"
                  >
                    Back to Portal Selection
                  </Button>
                </div>

                {/* Demo Credentials */}
                <div className="bg-muted/50 p-4 rounded-lg text-sm">
                  <p className="font-medium mb-2">Demo Credentials:</p>
                  <p>ID: demo123 | Password: password</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;