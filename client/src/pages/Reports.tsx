import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Calendar, TrendingUp, Users, MapPin } from "lucide-react";

export default function Reports() {
  const reports = [
    {
      id: 1,
      name: "User Activity Report",
      description: "Detailed analysis of user engagement and activity patterns",
      type: "Analytics",
      lastGenerated: "2024-03-10",
      status: "ready",
      size: "2.4 MB"
    },
    {
      id: 2,
      name: "Trip Performance Report",
      description: "Performance metrics and success rates for all trips",
      type: "Performance",
      lastGenerated: "2024-03-08",
      status: "ready",
      size: "1.8 MB"
    },
    {
      id: 3,
      name: "Monthly Revenue Report",
      description: "Financial overview and revenue breakdown by category",
      type: "Financial",
      lastGenerated: "2024-03-05",
      status: "generating",
      size: "3.2 MB"
    },
    {
      id: 4,
      name: "Customer Satisfaction Survey",
      description: "Feedback analysis and satisfaction metrics from users",
      type: "Survey",
      lastGenerated: "2024-03-01",
      status: "ready",
      size: "1.5 MB"
    }
  ];

  const quickReports = [
    {
      title: "User Registrations",
      description: "New user sign-ups in the last 30 days",
      icon: Users,
      value: "234 new users",
      change: "+12%"
    },
    {
      title: "Trip Bookings",
      description: "Total bookings completed this month",
      icon: MapPin,
      value: "89 bookings",
      change: "+18%"
    },
    {
      title: "Revenue Growth",
      description: "Monthly revenue compared to last month",
      icon: TrendingUp,
      value: "$45,230",
      change: "+24%"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ready":
        return <Badge className="bg-green-100 text-green-800">Ready</Badge>;
      case "generating":
        return <Badge className="bg-blue-100 text-blue-800">Generating</Badge>;
      case "error":
        return <Badge className="bg-red-100 text-red-800">Error</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    const colors: { [key: string]: string } = {
      Analytics: "bg-purple-100 text-purple-800",
      Performance: "bg-blue-100 text-blue-800",
      Financial: "bg-green-100 text-green-800",
      Survey: "bg-yellow-100 text-yellow-800"
    };
    
    return <Badge className={colors[type] || "bg-gray-100 text-gray-800"}>{type}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">
            Generate and access comprehensive data reports
          </p>
        </div>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          Create Report
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        {quickReports.map((report, index) => {
          const Icon = report.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{report.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{report.value}</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <span className="text-green-600 font-medium mr-1">{report.change}</span>
                  {report.description}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
          <CardDescription>Download or generate new reports for your data analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">{report.name}</h3>
                    <p className="text-sm text-muted-foreground">{report.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Last generated: {new Date(report.lastGenerated).toLocaleDateString()}</span>
                      </div>
                      <span>Size: {report.size}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {getTypeBadge(report.type)}
                  {getStatusBadge(report.status)}
                  <Button 
                    variant="outline" 
                    size="sm"
                    disabled={report.status !== 'ready'}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Report Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Report Templates</CardTitle>
          <CardDescription>Quick access to commonly used report formats</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
              <div className="space-y-2">
                <h4 className="font-medium">Weekly Summary</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive overview of weekly performance metrics
                </p>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  Generate
                </Button>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
              <div className="space-y-2">
                <h4 className="font-medium">User Demographics</h4>
                <p className="text-sm text-muted-foreground">
                  Detailed breakdown of user base characteristics
                </p>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  Generate
                </Button>
              </div>
            </div>

            <div className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
              <div className="space-y-2">
                <h4 className="font-medium">Custom Report</h4>
                <p className="text-sm text-muted-foreground">
                  Build a custom report with your specific requirements
                </p>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  Create
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}