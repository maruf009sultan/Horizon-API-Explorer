import { NavLink } from "@/components/NavLink";
import { 
  Home, 
  Search, 
  FileText, 
  Navigation, 
  Orbit, 
  Rocket, 
  Clock,
  Sparkles,
  Info
} from "lucide-react";

const navItems = [
  { to: "/", icon: Home, label: "Dashboard" },
  { to: "/search", icon: Search, label: "Object Search" },
  { to: "/observer", icon: FileText, label: "Observer" },
  { to: "/vectors", icon: Navigation, label: "Vectors" },
  { to: "/elements", icon: Orbit, label: "Elements" },
  { to: "/approach", icon: Rocket, label: "Close Approach" },
  { to: "/spk", icon: Sparkles, label: "SPK Files" },
  { to: "/history", icon: Clock, label: "History" },
  { to: "/about", icon: Info, label: "About" },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-card/50 backdrop-blur-xl border-r border-border/50 z-40">
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-border/50">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Horizons API
          </h1>
          <p className="text-sm text-muted-foreground mt-1">NASA JPL Explorer</p>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-muted/50 group"
                activeClassName="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30"
              >
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {item.label}
                </span>
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border/50">
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-4 backdrop-blur-sm border border-primary/30">
            <p className="text-xs text-muted-foreground">
              Powered by NASA JPL Horizons System
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
