import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  Users, 
  Database, 
  Settings, 
  Plus,
  Edit,
  Trash2,
  Search,
  Eye,
  Download,
  Upload,
  BarChart3,
  Activity,
  FileText,
  User
} from 'lucide-react';

interface AdminPortalProps {
  onLogout: () => void;
  adminData: any;
}

const AdminPortal = ({ onLogout, adminData }: AdminPortalProps) => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for admin dashboard
  const mockStats = {
    totalPatients: 2847,
    totalReports: 15432,
    activeStaff: 156,
    emergencyAccess: 23,
    monthlyGrowth: 12.5,
    systemUptime: 99.9
  };

  const mockPatients = [
    {
      id: 'P001',
      name: 'John Smith',
      age: 45,
      gender: 'Male',
      bloodGroup: 'O+',
      contact: '+1-555-0123',
      reportsCount: 8,
      lastVisit: '2024-01-15',
      status: 'Active'
    },
    {
      id: 'P002', 
      name: 'Sarah Wilson',
      age: 32,
      gender: 'Female',
      bloodGroup: 'A+',
      contact: '+1-555-0125',
      reportsCount: 12,
      lastVisit: '2024-01-14',
      status: 'Active'
    },
    {
      id: 'P003',
      name: 'Michael Johnson',
      age: 28,
      gender: 'Male',
      bloodGroup: 'B-',
      contact: '+1-555-0127',
      reportsCount: 5,
      lastVisit: '2024-01-10',
      status: 'Inactive'
    }
  ];

  const mockStaff = [
    {
      id: 'S001',
      name: 'Dr. Sarah Johnson',
      role: 'Doctor',
      department: 'Cardiology',
      contact: '+1-555-0200',
      status: 'Active',
      lastLogin: '2024-01-15 09:30'
    },
    {
      id: 'S002',
      name: 'Nurse Mary Davis',
      role: 'Front Desk',
      department: 'Reception',
      contact: '+1-555-0201',
      status: 'Active',
      lastLogin: '2024-01-15 08:45'
    },
    {
      id: 'S003',
      name: 'Dr. Michael Chen',
      role: 'Emergency Staff',
      department: 'Emergency',
      contact: '+1-555-0202',
      status: 'On Duty',
      lastLogin: '2024-01-15 07:00'
    }
  ];

  const filteredPatients = mockPatients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredStaff = mockStaff.filter(staff =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Admin Portal</h1>
                <p className="text-purple-100">Full System Administration • {adminData.name}</p>
              </div>
            </div>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" onClick={onLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="staff">Staff Management</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">{mockStats.totalPatients.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Total Patients</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <p className="text-2xl font-bold">{mockStats.totalReports.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Medical Reports</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{mockStats.activeStaff}</p>
                  <p className="text-sm text-muted-foreground">Active Staff</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Activity className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{mockStats.emergencyAccess}</p>
                  <p className="text-sm text-muted-foreground">Emergency Access</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold">+{mockStats.monthlyGrowth}%</p>
                  <p className="text-sm text-muted-foreground">Monthly Growth</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Database className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{mockStats.systemUptime}%</p>
                  <p className="text-sm text-muted-foreground">System Uptime</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Patient Registrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockPatients.slice(0, 3).map((patient) => (
                      <div key={patient.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div>
                          <p className="font-semibold">{patient.name}</p>
                          <p className="text-sm text-muted-foreground">{patient.id}</p>
                        </div>
                        <span className="text-sm text-muted-foreground">{patient.lastVisit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Staff Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockStaff.map((staff) => (
                      <div key={staff.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div>
                          <p className="font-semibold">{staff.name}</p>
                          <p className="text-sm text-muted-foreground">{staff.role}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          staff.status === 'Active' ? 'bg-green-100 text-green-800' : 
                          staff.status === 'On Duty' ? 'bg-blue-100 text-blue-800' : 
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {staff.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Patients Management Tab */}
          <TabsContent value="patients" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Patient Management</span>
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Generate Patient ID
                    </Button>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export Data
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search patients by name or ID..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
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
                              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm text-muted-foreground mt-2">
                                <span>ID: {patient.id}</span>
                                <span>Age: {patient.age}</span>
                                <span>Blood: {patient.bloodGroup}</span>
                                <span>Reports: {patient.reportsCount}</span>
                                <span className={`font-medium ${
                                  patient.status === 'Active' ? 'text-green-600' : 'text-gray-500'
                                }`}>
                                  {patient.status}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4 mr-2" />
                              Edit
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Staff Management Tab */}
          <TabsContent value="staff" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span>Staff & User Management</span>
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Add New Staff
                    </Button>
                    <Button variant="outline">
                      <Settings className="w-4 h-4 mr-2" />
                      Manage Permissions
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search staff by name or ID..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredStaff.map((staff) => (
                    <Card key={staff.id} className="hover:shadow-card transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                              <Shield className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{staff.name}</h3>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground mt-2">
                                <span>ID: {staff.id}</span>
                                <span>Role: {staff.role}</span>
                                <span>Dept: {staff.department}</span>
                                <span>Last Login: {staff.lastLogin}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              staff.status === 'Active' ? 'bg-green-100 text-green-800' : 
                              staff.status === 'On Duty' ? 'bg-blue-100 text-blue-800' : 
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {staff.status}
                            </span>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Edit className="w-4 h-4 mr-2" />
                                Edit
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Remove
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5" />
                  <span>System Reports & Analytics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-20 flex flex-col">
                    <Download className="w-6 h-6 mb-2" />
                    Patient Reports
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col">
                    <BarChart3 className="w-6 h-6 mb-2" />
                    Usage Analytics
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col">
                    <Activity className="w-6 h-6 mb-2" />
                    System Logs
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col">
                    <FileText className="w-6 h-6 mb-2" />
                    Audit Trail
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5" />
                  <span>System Configuration</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Button variant="outline">Password Policy</Button>
                      <Button variant="outline">Access Control</Button>
                      <Button variant="outline">Audit Configuration</Button>
                      <Button variant="outline">Backup Settings</Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">System Maintenance</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Button variant="outline">Database Backup</Button>
                      <Button variant="outline">System Update</Button>
                      <Button variant="outline">Clear Cache</Button>
                      <Button variant="outline">Export Data</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPortal;