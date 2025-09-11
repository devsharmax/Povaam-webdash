import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, MapPin, Calendar, Users } from "lucide-react";

export default function Trips() {
  const trips = [
    {
      id: 1,
      title: "Tokyo Adventure",
      destination: "Tokyo, Japan",
      date: "2024-03-15",
      participants: 4,
      status: "active",
      duration: "7 days"
    },
    {
      id: 2,
      title: "European Explorer",
      destination: "Paris, France",
      date: "2024-04-20",
      participants: 2,
      status: "planned",
      duration: "10 days"
    },
    {
      id: 3,
      title: "Tropical Escape",
      destination: "Bali, Indonesia",
      date: "2024-02-10",
      participants: 6,
      status: "completed",
      duration: "5 days"
    },
    {
      id: 4,
      title: "Mountain Retreat",
      destination: "Swiss Alps",
      date: "2024-05-01",
      participants: 3,
      status: "planned",
      duration: "8 days"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "planned":
        return <Badge className="bg-blue-100 text-blue-800">Planned</Badge>;
      case "completed":
        return <Badge className="bg-gray-100 text-gray-800">Completed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Trips</h1>
          <p className="text-muted-foreground">
            Manage and track all travel plans and activities
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Trip
        </Button>
      </div>

      {/* Trip Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Active Trips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Currently in progress</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Planned Trips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Upcoming adventures</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Successfully finished</p>
          </CardContent>
        </Card>
      </div>

      {/* Trips List */}
      <Card>
        <CardHeader>
          <CardTitle>All Trips</CardTitle>
          <CardDescription>Complete overview of your travel portfolio</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trips.map((trip) => (
              <div key={trip.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">{trip.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{trip.destination}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(trip.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-3 w-3" />
                        <span>{trip.participants} participants</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-sm font-medium">{trip.duration}</div>
                    <div className="text-xs text-muted-foreground">Duration</div>
                  </div>
                  {getStatusBadge(trip.status)}
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}