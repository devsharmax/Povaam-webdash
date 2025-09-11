import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  MapPin, 
  Users, 
  FileText,
  Settings,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Trips", href: "/trips", icon: MapPin },
  { name: "Users", href: "/users", icon: Users },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
];

function NavigationItems({ onItemClick }: { onItemClick?: () => void }) {
  return (
    <nav className="space-y-2">
      {navigation.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.name}
            to={item.href}
            end={item.href === "/"}
            onClick={onItemClick}
            className={({ isActive }) =>
              cn(
                "flex items-center space-x-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ease-in-out group",
                isActive
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105 border border-blue-400"
                  : "text-blue-700 hover:text-blue-900 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 hover:shadow-md hover:transform hover:scale-[1.02] border border-transparent hover:border-blue-300"
              )
            }
          >
            <Icon className={cn(
              "h-5 w-5 transition-all duration-200",
              "group-hover:scale-110"
            )} />
            <span>{item.name}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}

interface NavigationProps {
  mobileMenuOpen?: boolean;
  onMobileMenuClose?: () => void;
}

export default function Navigation({ mobileMenuOpen = false, onMobileMenuClose }: NavigationProps) {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col lg:top-16">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-blue-200 bg-gradient-to-b from-white via-blue-50 to-blue-100 px-6 pb-4 pt-6 shadow-xl">
          <NavigationItems />
        </div>
      </div>

      {/* Mobile Navigation Sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={onMobileMenuClose}>
        <SheetContent side="left" className="w-72 bg-gradient-to-b from-white via-blue-50 to-blue-100 border-blue-200">
          <div className="flex h-16 shrink-0 items-center border-b border-blue-200 pb-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-xl shadow-lg border border-blue-200">
                <span className="text-blue-700 font-bold text-lg">N</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">NATPAC</h1>
            </div>
          </div>
          <div className="mt-6">
            <NavigationItems onItemClick={onMobileMenuClose} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}