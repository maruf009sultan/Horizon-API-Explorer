import { DashboardLayout } from "@/components/Dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Clock, FileText, Navigation, Orbit, Rocket, Sparkles, Trash2, Download, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useHistoryTracking } from "@/hooks/use-history-tracking";
import { Separator } from "@/components/ui/separator";

interface HistoryItem {
  id: string;
  type: string;
  command: string;
  timestamp: string;
  // Extended details would come from actual API calls if we stored them
}

const History = () => {
  const { getHistory, clearHistory: clearHistoryFromStorage } = useHistoryTracking();
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    setHistory(getHistory());
  }, [getHistory]);

  const clearHistory = () => {
    clearHistoryFromStorage();
    setHistory([]);
  };

  const exportHistory = () => {
    const dataStr = JSON.stringify(history, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `horizons-history-${new Date().toISOString().split("T")[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "OBSERVER":
        return FileText;
      case "VECTORS":
        return Navigation;
      case "ELEMENTS":
        return Orbit;
      case "APPROACH":
        return Rocket;
      case "SPK":
        return Sparkles;
      default:
        return Clock;
    }
  };

  const getColorClass = (type: string) => {
    switch (type) {
      case "OBSERVER":
        return "from-primary/20 to-primary/5 border-primary/30";
      case "VECTORS":
        return "from-secondary/20 to-secondary/5 border-secondary/30";
      case "ELEMENTS":
        return "from-accent/20 to-accent/5 border-accent/30";
      case "APPROACH":
        return "from-destructive/20 to-destructive/5 border-destructive/30";
      default:
        return "from-muted/20 to-muted/5 border-muted/30";
    }
  };

  const getTypeDescription = (type: string) => {
    switch (type) {
      case "OBSERVER":
        return "Sky position calculations with RA/DEC, azimuth, elevation, and observable quantities";
      case "VECTORS":
        return "Cartesian state vectors (X, Y, Z position and velocity components) for orbital mechanics";
      case "ELEMENTS":
        return "Classical Keplerian orbital elements including semi-major axis, eccentricity, and inclination";
      case "APPROACH":
        return "Close-approach tables showing when small bodies pass near major planets";
      case "SPK":
        return "SPK kernel files for high-precision ephemeris propagation";
      default:
        return "Horizons API query";
    }
  };

  const groupByDate = (items: HistoryItem[]) => {
    const grouped: { [key: string]: HistoryItem[] } = {};
    items.forEach((item) => {
      const date = new Date(item.timestamp).toLocaleDateString();
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(item);
    });
    return grouped;
  };

  const groupedHistory = groupByDate(history);
  const sortedDates = Object.keys(groupedHistory).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Clock className="w-8 h-8 text-primary" />
              Query History
            </h1>
            <p className="text-muted-foreground">
              Complete log of all your API queries with timestamps and parameters
            </p>
            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
              <span>{history.length} total queries</span>
              {history.length > 0 && (
                <>
                  <span>•</span>
                  <span>
                    Latest: {new Date(history[history.length - 1].timestamp).toLocaleString()}
                  </span>
                </>
              )}
            </div>
          </div>
          {history.length > 0 && (
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={exportHistory}
                className="border-primary/30 hover:bg-primary/10"
              >
                <Download className="w-4 h-4 mr-2" />
                Export JSON
              </Button>
              <Button
                variant="outline"
                onClick={clearHistory}
                className="border-destructive/30 hover:bg-destructive/10"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear All
              </Button>
            </div>
          )}
        </div>

        {/* Statistics Cards */}
        {history.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {["OBSERVER", "VECTORS", "ELEMENTS", "APPROACH", "SPK"].map((type) => {
              const count = history.filter((item) => item.type === type).length;
              const Icon = getIcon(type);
              return (
                <Card
                  key={type}
                  className="bg-card/50 backdrop-blur-sm border-border/50 p-4 text-center"
                >
                  <Icon className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-2xl font-bold">{count}</p>
                  <p className="text-xs text-muted-foreground mt-1">{type}</p>
                </Card>
              );
            })}
          </div>
        )}

        {/* History List or Empty State */}
        {history.length === 0 ? (
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-12 text-center">
            <Clock className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <h3 className="text-xl font-semibold mb-2">No History Yet</h3>
            <p className="text-muted-foreground mb-6">
              Your query history will appear here once you start making API requests
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Info className="w-4 h-4" />
              <span>History is stored locally in your browser</span>
            </div>
          </Card>
        ) : (
          <div className="space-y-8">
            {sortedDates.map((date) => (
              <div key={date} className="space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold">{date}</h3>
                  <Separator className="flex-1" />
                  <span className="text-sm text-muted-foreground">
                    {groupedHistory[date].length} queries
                  </span>
                </div>

                <div className="space-y-3">
                  {groupedHistory[date].map((item) => {
                    const Icon = getIcon(item.type);
                    return (
                      <Card
                        key={item.id}
                        className={`bg-gradient-to-br ${getColorClass(
                          item.type
                        )} backdrop-blur-sm border p-5 hover:scale-[1.01] transition-transform cursor-default`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-background/50 flex-shrink-0">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <div>
                                <h4 className="text-base font-semibold flex items-center gap-2">
                                  {item.type} Ephemeris
                                </h4>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {getTypeDescription(item.type)}
                                </p>
                              </div>
                              <span className="text-xs text-muted-foreground whitespace-nowrap">
                                {new Date(item.timestamp).toLocaleTimeString()}
                              </span>
                            </div>

                            <div className="bg-background/70 rounded p-3 mt-3">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                <div>
                                  <p className="text-xs text-muted-foreground mb-1">Target Object:</p>
                                  <p className="font-mono text-foreground">{item.command}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground mb-1">Query Type:</p>
                                  <p className="font-semibold">{item.type}</p>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              <span>
                                {new Date(item.timestamp).toLocaleString("en-US", {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                })}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" />
              About Query History
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              This history is stored locally in your browser's localStorage and tracks all API queries 
              you make through the dashboard. Use it to review previous searches, track your research workflow, 
              and maintain a record of commonly used configurations.
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Local Storage:</strong> History is stored in your browser 
                  and persists across sessions
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Privacy:</strong> No data is sent to external servers; 
                  everything stays on your device
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Export:</strong> Download your history as JSON for backup 
                  or analysis
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
            <h2 className="text-xl font-semibold mb-4">Query Type Reference</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">OBSERVER</p>
                  <p className="text-xs text-muted-foreground">
                    Sky positions and observable quantities from any location
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Navigation className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">VECTORS</p>
                  <p className="text-xs text-muted-foreground">
                    Cartesian position and velocity for trajectory analysis
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Orbit className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">ELEMENTS</p>
                  <p className="text-xs text-muted-foreground">
                    Keplerian orbital elements and parameters
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Rocket className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">APPROACH</p>
                  <p className="text-xs text-muted-foreground">
                    Close-approach tables for near-Earth objects
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">SPK</p>
                  <p className="text-xs text-muted-foreground">
                    SPK kernel files for precision ephemeris
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default History;