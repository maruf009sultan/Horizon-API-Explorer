import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { StarField } from "../StarField";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <StarField />
      
      {/* Gradient overlays */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="fixed top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: "3s" }} />
      
      <Sidebar />
      
      <main className="ml-64 relative z-10">
        {children}
      </main>
    </div>
  );
};
