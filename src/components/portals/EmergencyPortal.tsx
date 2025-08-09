import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  AlertTriangle, 
  Fingerprint, 
  Heart, 
  Activity, 
  Phone, 
  Clock,
  User,
  MapPin,
  AlertCircle,
  FileText
} from 'lucide-react';

interface EmergencyPortalProps {
  onLogout: () => void;
  emergencyData: any;
}

const EmergencyPortal = ({ onLogout, emergencyData }: EmergencyPortalProps) => {
  const [fingerprintId, setFingerprintId] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [patientFound, setPatientFound] = useState<any>(null);

  // Mock critical patient data
  const mockCriticalData = {
    id: 'P001',
    name: 'John Smith',
    age: 45,
    gender: 'Male',
    bloodGroup: 'O+',
    allergies: ['Penicillin', 'Shellfish'],
    criticalConditions: ['Hypertension', 'Type 2 Diabetes'],
    emergencyContact: {
      name: 'Jane Smith',
      relation: 'Spouse',
      phone: '+1-555-0124'
    },
    medications: [
      { name: 'Metformin', dosage: '500mg twice daily' },
      { name: 'Lisinopril', dosage: '10mg once daily' }
    ],
    lastVitals: {
      bloodPressure: '140/90',
      heartRate: '78 bpm',
      temperature: '98.6°F',
      oxygen: '98%',
      recorded: '2024-01-15 10:30 AM'
    },
    insurance: {
      provider: 'HealthCare Plus',
      policyNumber: 'HC123456789'
    }
  };

  const handleFingerprintScan = () => {
    setIsScanning(true);
    
    // Simulate fingerprint scanning
    setTimeout(() => {
      setIsScanning(false);
      if (fingerprintId === 'demo123' || fingerprintId.length > 0) {
        setPatientFound(mockCriticalData);
      } else {
        alert('Patient not found. Please try again.');
      }
    }, 2000);
  };

  const handleQuickAccess = () => {
    setPatientFound(mockCriticalData);
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-destructive to-red-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Emergency Portal</h1>
                <p className="text-red-100">Critical Patient Access • {emergencyData.hospital}</p>
              </div>
            </div>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" onClick={onLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {!patientFound ? (
          /* Fingerprint Scanner */
          <div className="max-w-2xl mx-auto">
            <Card className="border-red-200 shadow-strong">
              <CardHeader className="text-center bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center justify-center space-x-2">
                  <Fingerprint className="w-8 h-8" />
                  <span>Emergency Patient Access</span>
                </CardTitle>
                <p className="text-red-100">Quick access to critical patient information</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-8">
                  {/* Fingerprint Scanner Area */}
                  <div className="text-center space-y-6">
                    <div className={`w-32 h-32 mx-auto rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                      isScanning 
                        ? 'border-red-500 bg-red-50 animate-pulse' 
                        : 'border-gray-300 bg-gray-50 hover:border-red-400'
                    }`}>
                      <Fingerprint className={`w-16 h-16 transition-colors ${
                        isScanning ? 'text-red-500' : 'text-gray-400'
                      }`} />
                    </div>
                    
                    {isScanning ? (
                      <div className="space-y-2">
                        <p className="text-lg font-semibold text-red-600">Scanning fingerprint...</p>
                        <p className="text-muted-foreground">Please keep finger steady</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-lg font-semibold">Place patient's finger on scanner</p>
                        <p className="text-muted-foreground">Or enter fingerprint ID manually below</p>
                      </div>
                    )}
                  </div>

                  {/* Manual Entry */}
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Fingerprint ID (Manual Entry)</label>
                      <Input
                        placeholder="Enter fingerprint ID for emergency access"
                        value={fingerprintId}
                        onChange={(e) => setFingerprintId(e.target.value)}
                        className="mt-1 h-12"
                      />
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button 
                        onClick={handleFingerprintScan}
                        disabled={isScanning || !fingerprintId}
                        className="flex-1 h-12 bg-red-600 hover:bg-red-700"
                      >
                        {isScanning ? (
                          <>
                            <Activity className="w-5 h-5 mr-2 animate-spin" />
                            Scanning...
                          </>
                        ) : (
                          <>
                            <Fingerprint className="w-5 h-5 mr-2" />
                            Access Patient Data
                          </>
                        )}
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={handleQuickAccess}
                        className="border-red-300 text-red-600 hover:bg-red-50"
                      >
                        Demo Access
                      </Button>
                    </div>
                  </div>

                  {/* Emergency Notice */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-yellow-800">Emergency Access Notice</p>
                        <p className="text-yellow-700 mt-1">
                          This portal provides immediate access to critical patient information during emergencies. 
                          All access is logged and monitored for security compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Patient Critical Information */
          <div className="space-y-6">
            {/* Patient Header */}
            <Card className="border-red-200">
              <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">{patientFound.name}</CardTitle>
                    <p className="text-red-100">Patient ID: {patientFound.id} • {patientFound.age} years old, {patientFound.gender}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">Blood Type: {patientFound.bloodGroup}</p>
                    <p className="text-red-100">Emergency Patient</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Critical Alerts */}
              <Card className="border-yellow-300 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-yellow-800">
                    <AlertTriangle className="w-5 h-5" />
                    <span>Critical Alerts</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Allergies</h4>
                    <div className="space-y-1">
                      {patientFound.allergies.map((allergy: string, index: number) => (
                        <span key={index} className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
                          {allergy}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Critical Conditions</h4>
                    <div className="space-y-1">
                      {patientFound.criticalConditions.map((condition: string, index: number) => (
                        <span key={index} className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-blue-800">
                    <Phone className="w-5 h-5" />
                    <span>Emergency Contact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-lg">{patientFound.emergencyContact.name}</p>
                      <p className="text-muted-foreground">{patientFound.emergencyContact.relation}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <a href={`tel:${patientFound.emergencyContact.phone}`} className="text-blue-600 font-semibold text-lg">
                        {patientFound.emergencyContact.phone}
                      </a>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Emergency Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Current Medications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span>Current Medications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {patientFound.medications.map((med: any, index: number) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <div>
                          <p className="font-semibold">{med.name}</p>
                          <p className="text-sm text-muted-foreground">{med.dosage}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Last Vitals */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="w-5 h-5 text-green-500" />
                    <span>Last Recorded Vitals</span>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Recorded: {patientFound.lastVitals.recorded}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Blood Pressure</p>
                      <p className="text-lg font-bold">{patientFound.lastVitals.bloodPressure}</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Heart Rate</p>
                      <p className="text-lg font-bold">{patientFound.lastVitals.heartRate}</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Temperature</p>
                      <p className="text-lg font-bold">{patientFound.lastVitals.temperature}</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Oxygen Sat</p>
                      <p className="text-lg font-bold">{patientFound.lastVitals.oxygen}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button className="bg-red-600 hover:bg-red-700" size="lg">
                <FileText className="w-5 h-5 mr-2" />
                View Full Medical History
              </Button>
              <Button variant="outline" size="lg">
                <User className="w-5 h-5 mr-2" />
                Search Another Patient
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setPatientFound(null)}
              >
                New Search
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmergencyPortal;