import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, FileCheck, Clock, Car, TrendingUp, TrendingDown, ArrowRight, Eye } from "lucide-react";
import TripsByDayChart from "@/components/charts/TripsByDayChart";
import TripPurposeChart from "@/components/charts/TripPurposeChart";
import { useState } from "react";

export default function Dashboard() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedChart, setSelectedChart] = useState<'bar' | 'pie' | null>(null);

  const handleCardClick = (cardType: string) => {
    console.log(`Clicked on ${cardType} card`);
    // Add your navigation or modal logic here
  };

  const handleQuickActionClick = (action: string) => {
    console.log(`Quick action clicked: ${action}`);
    // Add your action logic here
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your data dashboard overview
        </p>
      </div>

      {/* Interactive Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card 
          className="cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-105 hover:bg-accent/5"
          onMouseEnter={() => setHoveredCard('surveys')}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => handleCardClick('surveys')}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Surveys Completed</CardTitle>
            <div className="flex items-center space-x-1">
              <FileCheck className={`h-4 w-4 transition-colors duration-200 ${hoveredCard === 'surveys' ? 'text-primary' : 'text-muted-foreground'}`} />
              {hoveredCard === 'surveys' && <ArrowRight className="h-3 w-3 text-primary animate-pulse" />}
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,847</div>
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+18%</span>
              <span>from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-105 hover:bg-accent/5"
          onMouseEnter={() => setHoveredCard('duration')}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => handleCardClick('duration')}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Trip Duration</CardTitle>
            <div className="flex items-center space-x-1">
              <Clock className={`h-4 w-4 transition-colors duration-200 ${hoveredCard === 'duration' ? 'text-primary' : 'text-muted-foreground'}`} />
              {hoveredCard === 'duration' && <ArrowRight className="h-3 w-3 text-primary animate-pulse" />}
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5 min</div>
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <TrendingDown className="h-3 w-3 text-orange-500" />
              <span className="text-orange-500">-2.1 min</span>
              <span>from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-105 hover:bg-accent/5"
          onMouseEnter={() => setHoveredCard('transport')}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => handleCardClick('transport')}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Most Common Mode of Transport</CardTitle>
            <div className="flex items-center space-x-1">
              <Car className={`h-4 w-4 transition-colors duration-200 ${hoveredCard === 'transport' ? 'text-primary' : 'text-muted-foreground'}`} />
              {hoveredCard === 'transport' && <ArrowRight className="h-3 w-3 text-primary animate-pulse" />}
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Private Car</div>
            <p className="text-xs text-muted-foreground">
              43% of all trips
            </p>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-105 hover:bg-accent/5"
          onMouseEnter={() => setHoveredCard('users')}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => handleCardClick('users')}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <div className="flex items-center space-x-1">
              <Users className={`h-4 w-4 transition-colors duration-200 ${hoveredCard === 'users' ? 'text-primary' : 'text-muted-foreground'}`} />
              {hoveredCard === 'users' && <ArrowRight className="h-3 w-3 text-primary animate-pulse" />}
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+12%</span>
              <span>from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Charts Section */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card 
          className={`group transition-all duration-200 hover:shadow-lg ${selectedChart === 'bar' ? 'ring-2 ring-primary' : ''}`}
          onClick={() => setSelectedChart(selectedChart === 'bar' ? null : 'bar')}
        >
          <CardHeader className="cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <span>Trips Per Day</span>
                  {selectedChart === 'bar' && <Eye className="h-4 w-4 text-primary" />}
                </CardTitle>
                <CardDescription>Number of trips recorded in the last 7 days</CardDescription>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('View Details clicked for bar chart');
                }}
              >
                View Details
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <TripsByDayChart />
            </div>
            {selectedChart === 'bar' && (
              <div className="mt-4 p-3 bg-accent/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Click on bars to see detailed trip information for that day. 
                  Peak activity was yesterday with 67 trips recorded.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card 
          className={`group transition-all duration-200 hover:shadow-lg ${selectedChart === 'pie' ? 'ring-2 ring-primary' : ''}`}
          onClick={() => setSelectedChart(selectedChart === 'pie' ? null : 'pie')}
        >
          <CardHeader className="cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <span>Trip Purpose Distribution</span>
                  {selectedChart === 'pie' && <Eye className="h-4 w-4 text-primary" />}
                </CardTitle>
                <CardDescription>Breakdown of trip purposes across all users</CardDescription>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('View Details clicked for pie chart');
                }}
              >
                View Details
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <TripPurposeChart />
            </div>
            {selectedChart === 'pie' && (
              <div className="mt-4 p-3 bg-accent/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Click on pie segments to filter data by trip purpose. 
                  Work trips are the most common at 35% of total trips.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Interactive Recent Activity & Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest user activities and system updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div 
              className="group flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-accent/50 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              role="button"
              tabIndex={0}
              onClick={() => console.log('Clicked: New survey completed')}
              onKeyDown={(e) => e.key === 'Enter' && console.log('Clicked: New survey completed')}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium group-hover:text-primary transition-colors">New survey completed</p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
              <ArrowRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div 
              className="group flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-accent/50 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              role="button"
              tabIndex={0}
              onClick={() => console.log('Clicked: Trip data synchronized')}
              onKeyDown={(e) => e.key === 'Enter' && console.log('Clicked: Trip data synchronized')}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium group-hover:text-primary transition-colors">Trip data synchronized</p>
                <p className="text-xs text-muted-foreground">5 minutes ago</p>
              </div>
              <ArrowRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div 
              className="group flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-accent/50 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              role="button"
              tabIndex={0}
              onClick={() => console.log('Clicked: Weekly report generated')}
              onKeyDown={(e) => e.key === 'Enter' && console.log('Clicked: Weekly report generated')}
            >
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium group-hover:text-primary transition-colors">Weekly report generated</p>
                <p className="text-xs text-muted-foreground">1 hour ago</p>
              </div>
              <ArrowRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <Button variant="ghost" className="w-full mt-4 hover:bg-primary hover:text-primary-foreground transition-all">
              View All Activity
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div 
              className="flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-accent/50 hover:scale-[1.02] group"
              onClick={() => handleQuickActionClick('Generate Report')}
            >
              <span className="text-sm group-hover:text-primary transition-colors">Generate Report</span>
              <Badge variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">Available</Badge>
            </div>
            <div 
              className="flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-accent/50 hover:scale-[1.02] group"
              onClick={() => handleQuickActionClick('Survey Analysis')}
            >
              <span className="text-sm group-hover:text-primary transition-colors">Survey Analysis</span>
              <Badge variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">Active</Badge>
            </div>
            <div 
              className="flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-accent/50 hover:scale-[1.02] group"
              onClick={() => handleQuickActionClick('Trip Analytics')}
            >
              <span className="text-sm group-hover:text-primary transition-colors">Trip Analytics</span>
              <Badge variant="secondary" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">New</Badge>
            </div>
            <Button className="w-full mt-4 hover:scale-105 transition-all duration-200">
              View All Actions
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}