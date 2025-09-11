import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  MapPin, 
  Users, 
  FileText, 
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
            onClick={onItemClick}
            className={({ isActive }) =>
              cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-accent",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-accent-foreground"
              )
            }
          >
            <Icon className="h-4 w-4" />
            <span>{item.name}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r bg-background px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <h1 className="text-xl font-bold">Data Dashboard</h1>
          </div>
          <NavigationItems />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b bg-background px-4 shadow-sm sm:gap-x-6 sm:px-6">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="-m-2.5">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open sidebar</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <div className="flex h-16 shrink-0 items-center">
                <h1 className="text-xl font-bold">Data Dashboard</h1>
              </div>
              <div className="mt-5">
                <NavigationItems onItemClick={() => setOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex items-center">
              <h1 className="text-lg font-semibold">Data Dashboard</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}