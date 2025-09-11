import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays, MapPin, Filter, RotateCcw } from "lucide-react";

interface TripFiltersProps {
  onFiltersChange?: (filters: {
    dateFrom: string;
    dateTo: string;
    city: string;
    region: string;
  }) => void;
}

export default function TripFilters({ onFiltersChange }: TripFiltersProps) {
  const [filters, setFilters] = useState({
    dateFrom: '',
    dateTo: '',
    city: '',
    region: ''
  });

  const cities = [
    'All Cities',
    'New York',
    'Los Angeles', 
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas'
  ];

  const regions = [
    'All Regions',
    'Northeast',
    'Southeast', 
    'Midwest',
    'Southwest',
    'West',
    'Pacific'
  ];

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const resetFilters = () => {
    const emptyFilters = {
      dateFrom: '',
      dateTo: '',
      city: '',
      region: ''
    };
    setFilters(emptyFilters);
    onFiltersChange?.(emptyFilters);
  };

  const hasActiveFilters = Object.values(filters).some(filter => filter !== '');

  return (
    <Card className="bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-lg shadow-blue-50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2 text-blue-900">
              <Filter className="h-5 w-5" />
              <span>Trip Filters</span>
            </CardTitle>
            <CardDescription className="text-blue-600">
              Filter travel data by date range and location
            </CardDescription>
          </div>
          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={resetFilters}
              className="hover:bg-blue-50 border-blue-200 text-blue-700"
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Date Range */}
          <div className="space-y-2">
            <Label htmlFor="date-from" className="text-sm font-semibold text-blue-800 flex items-center">
              <CalendarDays className="h-4 w-4 mr-1" />
              From Date
            </Label>
            <Input
              id="date-from"
              type="date"
              value={filters.dateFrom}
              onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
              className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="date-to" className="text-sm font-semibold text-blue-800 flex items-center">
              <CalendarDays className="h-4 w-4 mr-1" />
              To Date
            </Label>
            <Input
              id="date-to"
              type="date"
              value={filters.dateTo}
              onChange={(e) => handleFilterChange('dateTo', e.target.value)}
              className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
            />
          </div>

          {/* City Selection */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-blue-800 flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              City
            </Label>
            <Select value={filters.city} onValueChange={(value) => handleFilterChange('city', value)}>
              <SelectTrigger className="border-blue-200 focus:border-blue-400 focus:ring-blue-400">
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent className="bg-white border-blue-200">
                {cities.map((city) => (
                  <SelectItem 
                    key={city} 
                    value={city}
                    className="hover:bg-blue-50 focus:bg-blue-50"
                  >
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Region Selection */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-blue-800 flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              Region
            </Label>
            <Select value={filters.region} onValueChange={(value) => handleFilterChange('region', value)}>
              <SelectTrigger className="border-blue-200 focus:border-blue-400 focus:ring-blue-400">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent className="bg-white border-blue-200">
                {regions.map((region) => (
                  <SelectItem 
                    key={region} 
                    value={region}
                    className="hover:bg-blue-50 focus:bg-blue-50"
                  >
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="mt-4 p-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl border border-blue-200">
            <p className="text-sm font-medium text-blue-800 mb-2">Active Filters:</p>
            <div className="flex flex-wrap gap-2">
              {filters.dateFrom && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-200 text-blue-800">
                  From: {filters.dateFrom}
                </span>
              )}
              {filters.dateTo && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-200 text-blue-800">
                  To: {filters.dateTo}
                </span>
              )}
              {filters.city && filters.city !== 'All Cities' && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-200 text-blue-800">
                  City: {filters.city}
                </span>
              )}
              {filters.region && filters.region !== 'All Regions' && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-200 text-blue-800">
                  Region: {filters.region}
                </span>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}