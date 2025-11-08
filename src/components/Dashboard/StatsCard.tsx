import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  color?: "primary" | "secondary" | "accent";
}

export const StatsCard = ({ title, value, icon: Icon, trend, color = "primary" }: StatsCardProps) => {
  const colorClasses = {
    primary: "from-primary/20 to-primary/5 border-primary/30",
    secondary: "from-secondary/20 to-secondary/5 border-secondary/30",
    accent: "from-accent/20 to-accent/5 border-accent/30",
  };

  return (
    <Card className={`relative overflow-hidden bg-gradient-to-br ${colorClasses[color]} backdrop-blur-sm border transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-${color}/20`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl bg-${color}/20 backdrop-blur-sm`}>
            <Icon className={`w-6 h-6 text-${color}`} />
          </div>
          {trend && (
            <span className="text-xs text-muted-foreground">{trend}</span>
          )}
        </div>
        <h3 className="text-sm font-medium text-muted-foreground mb-1">{title}</h3>
        <p className="text-3xl font-bold text-foreground">{value}</p>
      </div>
      <div className={`absolute bottom-0 right-0 w-32 h-32 bg-${color}/10 rounded-full blur-2xl`} />
    </Card>
  );
};
