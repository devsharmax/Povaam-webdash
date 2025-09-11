import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, TrendingUp, TrendingDown, Car, Bus, Train } from "lucide-react";
import TripFilters from "@/components/TripFilters";
import TravelTimeByHourChart from "@/components/charts/TravelTimeByHourChart";
import TransportModeChart from "@/components/charts/TransportModeChart";

export default function Trips() {
  const [filters, setFilters] = useState({
    dateFrom: '',
    dateTo: '',
    city: '',
    region: ''
  });

  const handleFiltersChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    console.log('Filters updated:', newFilters);
    // Here you would typically update the charts with filtered data
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-2">
          Trip Analytics
        </h1>
        <p className="text-blue-600 text-lg font-medium">
          Analyze travel patterns and transportation data ✨
        </p>
      </div>

      {/* Filters */}
      <TripFilters onFiltersChange={handleFiltersChange} />

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="cursor-pointer transition-all duration-200 hover:shadow-xl hover:shadow-blue-100 hover:scale-105 bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-lg shadow-blue-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-900">Total Trips</CardTitle>
            <div className="flex items-center space-x-1">
              <Car className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-800">12,847</div>
            <div className="flex items-center space-x-1 text-xs text-blue-600">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+8.2%</span>
              <span>from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer transition-all duration-200 hover:shadow-xl hover:shadow-blue-100 hover:scale-105 bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-lg shadow-blue-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-900">Avg Travel Time</CardTitle>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-800">28.5 min</div>
            <div className="flex items-center space-x-1 text-xs text-blue-600">
              <TrendingDown className="h-3 w-3 text-orange-500" />
              <span className="text-orange-500">-1.3 min</span>
              <span>from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer transition-all duration-200 hover:shadow-xl hover:shadow-blue-100 hover:scale-105 bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-lg shadow-blue-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-900">Most Used Transport</CardTitle>
            <div className="flex items-center space-x-1">
              <Car className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-800">Private Car</div>
            <p className="text-xs text-blue-600">
              38% of all trips
            </p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer transition-all duration-200 hover:shadow-xl hover:shadow-blue-100 hover:scale-105 bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-lg shadow-blue-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-900">Rush Hour Peak</CardTitle>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-800">8:00 AM</div>
            <div className="flex items-center space-x-1 text-xs text-blue-600">
              <TrendingUp className="h-3 w-3 text-red-500" />
              <span className="text-red-500">+15 min</span>
              <span>delay avg</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-lg shadow-blue-50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2 text-blue-900">
                  <Clock className="h-5 w-5" />
                  <span>Travel Time by Hour</span>
                </CardTitle>
                <CardDescription className="text-blue-600">
                  Average travel duration throughout the day
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <TravelTimeByHourChart />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-lg shadow-blue-50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2 text-blue-900">
                  <div className="flex space-x-1">
                    <Car className="h-4 w-4" />
                    <Bus className="h-4 w-4" />
                    <Train className="h-4 w-4" />
                  </div>
                  <span>Transport Mode Share</span>
                </CardTitle>
                <CardDescription className="text-blue-600">
                  Distribution of transportation methods used
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <TransportModeChart />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insights Section */}
      <Card className="bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-lg shadow-blue-50">
        <CardHeader>
          <CardTitle className="text-blue-900">Key Insights</CardTitle>
          <CardDescription className="text-blue-600">
            Transportation patterns and trends from the data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <h3 className="font-semibold text-blue-800">Peak Hours</h3>
              </div>
              <p className="text-sm text-blue-700">
                Morning rush (7-9 AM) and evening rush (5-7 PM) show highest travel times, with up to 15 minutes additional delay.
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <Car className="h-4 w-4 text-blue-600" />
                <h3 className="font-semibold text-blue-800">Transport Preference</h3>
              </div>
              <p className="text-sm text-blue-700">
                Private cars dominate at 38% share, followed by public bus at 22%. Walking accounts for 15% of trips.
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                <h3 className="font-semibold text-blue-800">Growth Trend</h3>
              </div>
              <p className="text-sm text-blue-700">
                Trip volume increased 8.2% this month, while average travel time decreased by 1.3 minutes due to route optimizations.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}