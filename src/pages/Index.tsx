import { useState } from 'react';
import LoginPage from '@/components/LoginPage';
import PatientPortal from '@/components/portals/PatientPortal';
import FrontDeskPortal from '@/components/portals/FrontDeskPortal';
import EmergencyPortal from '@/components/portals/EmergencyPortal';
import AdminPortal from '@/components/portals/AdminPortal';

const Index = () => {
  const [currentPortal, setCurrentPortal] = useState<string>('');
  const [currentUser, setCurrentUser] = useState<any>(null);

  // Mock user data based on portal type
  const getMockUserData = (portal: string, credentials: any) => {
    switch (portal) {
      case 'patient':
        return {
          id: 'P001',
          name: 'John Smith',
          age: 45,
          gender: 'Male',
          bloodGroup: 'O+',
          contact: '+1-555-0123',
          emergencyContact: '+1-555-0124'
        };
      case 'frontdesk':
        return {
          id: 'S001',
          name: 'Mary Johnson',
          role: 'Front Desk Staff',
          department: 'Reception'
        };
      case 'emergency':
        return {
          id: 'E001',
          name: 'Dr. Sarah Wilson',
          role: 'Emergency Staff',
          hospital: 'City General Hospital'
        };
      case 'admin':
        return {
          id: 'A001',
          name: 'Administrator',
          role: 'System Admin',
          permissions: 'Full Access'
        };
      default:
        return null;
    }
  };

  const handleLogin = (portal: string, credentials: any) => {
    // In a real app, this would validate credentials
    const userData = getMockUserData(portal, credentials);
    setCurrentUser(userData);
    setCurrentPortal(portal);
  };

  const handleLogout = () => {
    setCurrentPortal('');
    setCurrentUser(null);
  };

  // Render appropriate portal based on current selection
  const renderPortal = () => {
    switch (currentPortal) {
      case 'patient':
        return <PatientPortal onLogout={handleLogout} patientData={currentUser} />;
      case 'frontdesk':
        return <FrontDeskPortal onLogout={handleLogout} staffData={currentUser} />;
      case 'emergency':
        return <EmergencyPortal onLogout={handleLogout} emergencyData={currentUser} />;
      case 'admin':
        return <AdminPortal onLogout={handleLogout} adminData={currentUser} />;
      default:
        return <LoginPage onLogin={handleLogin} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderPortal()}
    </div>
  );
};

export default Index;
