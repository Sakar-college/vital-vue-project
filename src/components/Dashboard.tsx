import { Activity, Users, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  const stats = [
    {
      title: "Active Patients",
      value: "2,847",
      change: "+12%",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "Appointments Today",
      value: "156",
      change: "+8%",
      icon: Calendar,
      color: "text-secondary"
    },
    {
      title: "Health Metrics",
      value: "98.2%",
      change: "+2%",
      icon: Activity,
      color: "text-primary"
    },
    {
      title: "System Efficiency",
      value: "94.7%",
      change: "+5%",
      icon: TrendingUp,
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Intuitive <span className="text-gradient">Dashboard Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get real-time insights into your practice with our comprehensive dashboard. 
            Monitor patient care, track performance metrics, and make data-driven decisions.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-white rounded-3xl shadow-strong p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-card transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-secondary">
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sample Patient List */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Recent Patients</h3>
              <div className="space-y-3">
                {[
                  { name: "Sarah Johnson", time: "10:30 AM", status: "Completed" },
                  { name: "Michael Chen", time: "11:15 AM", status: "In Progress" },
                  { name: "Emma Davis", time: "2:00 PM", status: "Scheduled" }
                ].map((patient, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                    <div>
                      <p className="font-medium">{patient.name}</p>
                      <p className="text-sm text-muted-foreground">{patient.time}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      patient.status === 'Completed' ? 'bg-secondary/20 text-secondary' :
                      patient.status === 'In Progress' ? 'bg-primary/20 text-primary' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {patient.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: "New Patient", color: "bg-primary" },
                  { title: "Schedule", color: "bg-secondary" },
                  { title: "Lab Results", color: "bg-primary" },
                  { title: "Messages", color: "bg-secondary" }
                ].map((action, index) => (
                  <button 
                    key={index}
                    className={`${action.color} text-white p-4 rounded-xl font-medium hover:opacity-90 transition-opacity`}
                  >
                    {action.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;