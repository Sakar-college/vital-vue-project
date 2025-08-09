import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Download, 
  FileText, 
  Calendar, 
  MapPin, 
  User, 
  Search,
  Filter,
  Eye
} from 'lucide-react';

interface PatientPortalProps {
  onLogout: () => void;
  patientData: any;
}

const PatientPortal = ({ onLogout, patientData }: PatientPortalProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Mock patient reports data
  const mockReports = [
    {
      id: 'RPT001',
      title: 'Blood Test Results',
      date: '2024-01-15',
      time: '10:30 AM',
      hospital: 'City General Hospital',
      doctor: 'Dr. Sarah Johnson',
      type: 'Lab Report',
      status: 'Normal',
      size: '1.2 MB'
    },
    {
      id: 'RPT002', 
      title: 'X-Ray Chest',
      date: '2024-01-10',
      time: '2:15 PM',
      hospital: 'Metro Medical Center',
      doctor: 'Dr. Michael Chen',
      type: 'Radiology',
      status: 'Review Required',
      size: '3.8 MB'
    },
    {
      id: 'RPT003',
      title: 'Cardiac Checkup',
      date: '2024-01-05',
      time: '9:00 AM',
      hospital: 'Heart Care Institute',
      doctor: 'Dr. Emily Davis',
      type: 'Consultation',
      status: 'Normal',
      size: '856 KB'
    },
    {
      id: 'RPT004',
      title: 'Prescription Update',
      date: '2024-01-02',
      time: '4:45 PM',
      hospital: 'City General Hospital',
      doctor: 'Dr. Sarah Johnson',
      type: 'Prescription',
      status: 'Active',
      size: '234 KB'
    }
  ];

  const filteredReports = mockReports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.hospital.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterType === 'all' || report.type.toLowerCase() === filterType.toLowerCase();
    
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'normal': return 'text-secondary bg-secondary/20';
      case 'review required': return 'text-yellow-600 bg-yellow-100';
      case 'active': return 'text-primary bg-primary/20';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-white shadow-soft border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Patient Portal</h1>
                <p className="text-muted-foreground">Welcome, {patientData.name}</p>
              </div>
            </div>
            <Button variant="outline" onClick={onLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Patient Info Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>Patient Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-muted-foreground">Patient ID</p>
                <p className="font-semibold">{patientData.id}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Blood Group</p>
                <p className="font-semibold">{patientData.bloodGroup}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Age</p>
                <p className="font-semibold">{patientData.age} years</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Gender</p>
                <p className="font-semibold">{patientData.gender}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Contact</p>
                <p className="font-semibold">{patientData.contact}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Emergency Contact</p>
                <p className="font-semibold">{patientData.emergencyContact}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filter */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search reports by title, hospital, or doctor..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex space-x-2">
                <select 
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-4 py-2 border rounded-lg bg-background"
                >
                  <option value="all">All Types</option>
                  <option value="lab report">Lab Reports</option>
                  <option value="radiology">Radiology</option>
                  <option value="consultation">Consultations</option>
                  <option value="prescription">Prescriptions</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medical Reports */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Medical Reports ({filteredReports.length})</h2>
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download All</span>
            </Button>
          </div>

          {filteredReports.map((report) => (
            <Card key={report.id} className="hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg">{report.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                          {report.status}
                        </span>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{report.date} at {report.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{report.doctor}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{report.hospital}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4" />
                          <span>{report.type} • {report.size}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 ml-4">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" className="bg-primary">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {filteredReports.length === 0 && (
            <Card>
              <CardContent className="text-center py-12">
                <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No reports found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientPortal;