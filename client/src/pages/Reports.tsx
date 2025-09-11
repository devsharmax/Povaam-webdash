import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Calendar, TrendingUp, Users, MapPin, FileSpreadsheet, FileDown, BarChart3, Clock } from "lucide-react";
import { downloadCSV, downloadPDF, getSurveyData } from "@/utils/reportUtils";
import TripsByRegionChart from "@/components/charts/TripsByRegionChart";

export default function Reports() {
  const surveyData = getSurveyData();

  const handleCSVDownload = () => {
    downloadCSV();
    console.log('Survey data CSV download initiated');
  };

  const handlePDFDownload = () => {
    downloadPDF();
    console.log('Survey data PDF download initiated');
  };

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
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-2">
          Data Reports
        </h1>
        <p className="text-blue-600 text-lg font-medium">
          Generate and access comprehensive survey and analytics reports ✨
        </p>
      </div>

      {/* Survey Data Downloads */}
      <Card className="bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-lg shadow-blue-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2 text-blue-900">
                <FileDown className="h-5 w-5" />
                <span>Survey Data Export</span>
              </CardTitle>
              <CardDescription className="text-blue-600">
                Download comprehensive survey data with summary statistics
              </CardDescription>
            </div>
            <div className="flex space-x-2">
              <Button 
                onClick={handleCSVDownload}
                variant="outline"
                className="hover:bg-blue-50 border-blue-200 text-blue-700"
              >
                <FileSpreadsheet className="h-4 w-4 mr-2" />
                CSV
              </Button>
              <Button 
                onClick={handlePDFDownload}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
              >
                <FileText className="h-4 w-4 mr-2" />
                PDF
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Summary Stats */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <BarChart3 className="h-4 w-4 text-blue-600" />
                <h3 className="font-semibold text-blue-800">Total Trips</h3>
              </div>
              <div className="text-2xl font-bold text-blue-900">{surveyData.tripCount.toLocaleString()}</div>
              <p className="text-sm text-blue-700">Survey responses recorded</p>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <h3 className="font-semibold text-blue-800">Avg Duration</h3>
              </div>
              <div className="text-2xl font-bold text-blue-900">{surveyData.averageDuration} min</div>
              <p className="text-sm text-blue-700">Average trip time</p>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <h3 className="font-semibold text-blue-800">Top Mode</h3>
              </div>
              <div className="text-2xl font-bold text-blue-900">Car</div>
              <p className="text-sm text-blue-700">{surveyData.modeShare.car}% share</p>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                <h3 className="font-semibold text-blue-800">Top Region</h3>
              </div>
              <div className="text-2xl font-bold text-blue-900">Southeast</div>
              <p className="text-sm text-blue-700">{surveyData.regionalData.southeast.toLocaleString()} trips</p>
            </div>
          </div>
          
          {/* Regional Chart */}
          <Card className="bg-white border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-900">
                <BarChart3 className="h-5 w-5" />
                <span>Trips by Region</span>
              </CardTitle>
              <CardDescription className="text-blue-600">
                Geographic distribution of survey responses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px]">
                <TripsByRegionChart />
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        {quickReports.map((report, index) => {
          const Icon = report.icon;
          return (
            <Card key={index} className="cursor-pointer transition-all duration-200 hover:shadow-xl hover:shadow-blue-100 hover:scale-105 bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-lg shadow-blue-50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-blue-900">{report.title}</CardTitle>
                <Icon className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-800">{report.value}</div>
                <div className="flex items-center text-xs text-blue-600 mt-1">
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