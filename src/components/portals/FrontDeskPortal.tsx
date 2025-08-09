import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  UserPlus, 
  Upload, 
  Users, 
  FileText, 
  Calendar,
  User,
  Plus,
  Eye,
  Edit
} from 'lucide-react';

interface FrontDeskPortalProps {
  onLogout: () => void;
  staffData: any;
}

const FrontDeskPortal = ({ onLogout, staffData }: FrontDeskPortalProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [showNewPatientForm, setShowNewPatientForm] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);

  // Mock patients data
  const mockPatients = [
    {
      id: 'P001',
      name: 'John Smith',
      age: 45,
      gender: 'Male',
      bloodGroup: 'O+',
      contact: '+1-555-0123',
      address: '123 Main St, City',
      emergencyContact: '+1-555-0124',
      lastVisit: '2024-01-15',
      reportsCount: 3
    },
    {
      id: 'P002',
      name: 'Sarah Wilson',
      age: 32,
      gender: 'Female', 
      bloodGroup: 'A+',
      contact: '+1-555-0125',
      address: '456 Oak Ave, City',
      emergencyContact: '+1-555-0126',
      lastVisit: '2024-01-10',
      reportsCount: 5
    },
    {
      id: 'P003',
      name: 'Michael Johnson',
      age: 28,
      gender: 'Male',
      bloodGroup: 'B-',
      contact: '+1-555-0127',
      address: '789 Pine Rd, City',
      emergencyContact: '+1-555-0128',
      lastVisit: '2024-01-08',
      reportsCount: 2
    }
  ];

  const filteredPatients = mockPatients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.contact.includes(searchTerm)
  );

  const handleCreatePatient = (formData: any) => {
    console.log('Creating patient:', formData);
    setShowNewPatientForm(false);
    // In real app, this would create the patient record
  };

  const handleUploadReport = (formData: any) => {
    console.log('Uploading report:', formData);
    setShowUploadForm(false);
    // In real app, this would upload the report
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-white shadow-soft border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-secondary to-secondary-light rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Front Desk Portal</h1>
                <p className="text-muted-foreground">Welcome, {staffData.name}</p>
              </div>
            </div>
            <Button variant="outline" onClick={onLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="search" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="search">Search Patients</TabsTrigger>
            <TabsTrigger value="create">Create New Patient</TabsTrigger>
            <TabsTrigger value="upload">Upload Reports</TabsTrigger>
          </TabsList>

          {/* Search Patients Tab */}
          <TabsContent value="search" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Search Patients</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search by Patient ID, Name, or Contact Number"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>

                <div className="space-y-4">
                  {filteredPatients.map((patient) => (
                    <Card key={patient.id} className="hover:shadow-card transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <User className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{patient.name}</h3>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground mt-2">
                                <span>ID: {patient.id}</span>
                                <span>Age: {patient.age}</span>
                                <span>Blood: {patient.bloodGroup}</span>
                                <span>Reports: {patient.reportsCount}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => setSelectedPatient(patient)}
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                            <Button size="sm">
                              <Edit className="w-4 h-4 mr-2" />
                              Edit
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {filteredPatients.length === 0 && searchTerm && (
                    <Card>
                      <CardContent className="text-center py-8">
                        <User className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No patients found</h3>
                        <p className="text-muted-foreground mb-4">No patients match your search criteria.</p>
                        <Button onClick={() => setShowNewPatientForm(true)}>
                          <Plus className="w-4 h-4 mr-2" />
                          Create New Patient
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Patient Details Modal */}
            {selectedPatient && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Patient Details - {selectedPatient.name}</span>
                    <Button variant="outline" onClick={() => setSelectedPatient(null)}>
                      Close
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Patient ID</p>
                        <p className="font-semibold">{selectedPatient.id}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Full Name</p>
                        <p className="font-semibold">{selectedPatient.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Age & Gender</p>
                        <p className="font-semibold">{selectedPatient.age} years, {selectedPatient.gender}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Blood Group</p>
                        <p className="font-semibold">{selectedPatient.bloodGroup}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Contact Number</p>
                        <p className="font-semibold">{selectedPatient.contact}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Address</p>
                        <p className="font-semibold">{selectedPatient.address}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Emergency Contact</p>
                        <p className="font-semibold">{selectedPatient.emergencyContact}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Last Visit</p>
                        <p className="font-semibold">{selectedPatient.lastVisit}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex space-x-4">
                    <Button>
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Report
                    </Button>
                    <Button variant="outline">
                      <FileText className="w-4 h-4 mr-2" />
                      View All Reports
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Create New Patient Tab */}
          <TabsContent value="create">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <UserPlus className="w-5 h-5" />
                  <span>Create New Patient Profile</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium">Full Name *</label>
                      <Input placeholder="Enter full name" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Age *</label>
                      <Input type="number" placeholder="Enter age" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Gender *</label>
                      <select className="w-full px-3 py-2 border rounded-lg mt-1">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Blood Group *</label>
                      <select className="w-full px-3 py-2 border rounded-lg mt-1">
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Contact Number *</label>
                      <Input placeholder="Enter contact number" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Emergency Contact *</label>
                      <Input placeholder="Enter emergency contact" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Address</label>
                    <Textarea placeholder="Enter full address" className="mt-1" />
                  </div>
                  <div className="flex space-x-4">
                    <Button type="submit" className="bg-secondary hover:bg-secondary/90">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Create Patient Profile
                    </Button>
                    <Button type="button" variant="outline">
                      Reset Form
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Upload Reports Tab */}
          <TabsContent value="upload">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="w-5 h-5" />
                  <span>Upload Medical Report</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium">Patient ID *</label>
                      <Input placeholder="Enter or search patient ID" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Report Type *</label>
                      <select className="w-full px-3 py-2 border rounded-lg mt-1">
                        <option value="">Select Report Type</option>
                        <option value="lab">Lab Report</option>
                        <option value="radiology">Radiology</option>
                        <option value="consultation">Consultation</option>
                        <option value="prescription">Prescription</option>
                        <option value="surgery">Surgery Report</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Doctor Name *</label>
                      <Input placeholder="Enter doctor name" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Date & Time *</label>
                      <Input type="datetime-local" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Report Title *</label>
                    <Input placeholder="Enter descriptive report title" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Additional Notes</label>
                    <Textarea placeholder="Enter any additional notes or observations" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Upload Files *</label>
                    <div className="mt-1 border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-2">Drag and drop files here, or click to browse</p>
                      <p className="text-sm text-muted-foreground">Supports PDF, DOC, DOCX, JPG, PNG (Max 10MB each)</p>
                      <Button variant="outline" className="mt-4">
                        Choose Files
                      </Button>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <Button type="submit" className="bg-secondary hover:bg-secondary/90">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Report
                    </Button>
                    <Button type="button" variant="outline">
                      Save as Draft
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FrontDeskPortal;