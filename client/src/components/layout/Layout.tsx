import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import TopNavbar from "./TopNavbar";
import { useState } from "react";

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navbar */}
      <TopNavbar onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
      
      {/* Sidebar Navigation */}
      <Navigation mobileMenuOpen={mobileMenuOpen} onMobileMenuClose={() => setMobileMenuOpen(false)} />
      
      {/* Main content */}
      <div className="lg:pl-72">
        <main className="pt-6 pb-6">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}