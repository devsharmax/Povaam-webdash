import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { User, Settings, LogOut, Menu } from "lucide-react";

interface TopNavbarProps {
  onMobileMenuToggle?: () => void;
}

export default function TopNavbar({ onMobileMenuToggle }: TopNavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-blue-200 bg-gradient-to-r from-white via-blue-50 to-white shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="flex h-16 items-center px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden mr-2 hover:bg-blue-100 text-blue-700 hover:text-blue-900 transition-all duration-200"
          onClick={onMobileMenuToggle}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>

        {/* NATPAC Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-xl shadow-lg border border-blue-200">
            <span className="text-blue-700 font-bold text-lg">N</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">NATPAC</h1>
            <p className="text-xs text-blue-600 font-medium">Data Dashboard</p>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* User Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-12 w-12 rounded-full hover:bg-blue-100 border-2 border-blue-200 shadow-md transition-all duration-200 hover:scale-105">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://api.dicebear.com/6/initials/svg?seed=User" alt="User" />
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg">U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-white border-blue-200 shadow-xl rounded-xl" align="end" forceMount>
            <DropdownMenuLabel className="font-normal bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-xl">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-semibold leading-none text-blue-900">User Name</p>
                <p className="text-xs leading-none text-blue-600">
                  user@natpac.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-blue-200" />
            <DropdownMenuItem className="hover:bg-blue-50 text-blue-700 hover:text-blue-900 rounded-lg mx-1 my-1 transition-all duration-200">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-blue-50 text-blue-700 hover:text-blue-900 rounded-lg mx-1 my-1 transition-all duration-200">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-blue-200" />
            <DropdownMenuItem className="hover:bg-red-50 text-red-600 hover:text-red-800 rounded-lg mx-1 my-1 transition-all duration-200">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}