import { useState } from "react";
import { DashboardLayout } from "@/components/Dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { fetchHorizonsData } from "@/lib/horizons-api";
import { toast } from "sonner";
import { Loader2, Rocket, AlertTriangle } from "lucide-react";
import { Combobox } from "@/components/ui/combobox";
import { HorizonsDataDisplay } from "@/components/HorizonsDataDisplay";
import { useHistoryTracking } from "@/hooks/use-history-tracking";

const Approach = () => {
  const { addToHistory } = useHistoryTracking();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [formData, setFormData] = useState({
    command: "99942;",
    tableType: "STANDARD",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const data = await fetchHorizonsData({
        format: "json",
        COMMAND: `'${formData.command}'`,
        MAKE_EPHEM: "YES",
        EPHEM_TYPE: "APPROACH",
        CA_TABLE_TYPE: formData.tableType,
      });
      
      setResults(data);
      addToHistory("APPROACH", formData.command);
      toast.success("Close-approach table generated!");
    } catch (error) {
      toast.error("Failed to generate approach table");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const nearEarthObjects = [
    { id: "99942;", name: "Apophis", description: "Potentially hazardous asteroid" },
    { id: "433;", name: "Eros", description: "Near-Earth asteroid" },
    { id: "1862;", name: "Apollo", description: "Earth-crossing asteroid" },
    { id: "1566;", name: "Icarus", description: "Sun-grazing asteroid" },
    { id: "4179;", name: "Toutatis", description: "Tumbling asteroid" },
  ];

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Rocket className="w-8 h-8 text-accent" />
            Close-Approach Tables
          </h1>
          <p className="text-muted-foreground">
            Track near-Earth objects and planetary encounters
          </p>
        </div>

        <Card className="bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/30 p-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">About Close-Approach Tables</h3>
              <p className="text-sm text-muted-foreground mb-2">
                These tables show when small-bodies (asteroids and comets) pass close to major planets 
                or the Moon. The system flags close approaches when the object passes within specified 
                spherical radii of target bodies.
              </p>
              <p className="text-sm text-muted-foreground">
                Extended tables include Julian Day numbers and B-plane information when covariance 
                data is available.
              </p>
            </div>
          </div>
        </Card>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
            <h2 className="text-xl font-semibold mb-6">Configuration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="command">Small-Body Object</Label>
                <Combobox
                  options={nearEarthObjects.map(obj => ({
                    value: obj.id,
                    label: `${obj.name} - ${obj.description}`
                  }))}
                  value={formData.command}
                  onChange={(value) => setFormData({...formData, command: value})}
                  placeholder="Select object..."
                  searchPlaceholder="Search objects..."
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tableType">Table Type</Label>
                <Combobox
                  options={[
                    { value: "STANDARD", label: "Standard" },
                    { value: "EXTENDED", label: "Extended (with JD & B-plane)" }
                  ]}
                  value={formData.tableType}
                  onChange={(value) => setFormData({...formData, tableType: value})}
                  placeholder="Select table type..."
                  className="bg-background/50"
                />
              </div>
            </div>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Reference</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-sm">Detection Radii (Planets)</h4>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>Mercury, Venus, Earth, Mars: 0.1 AU</li>
                  <li>Jupiter, Saturn: 1.0 AU</li>
                  <li>Uranus, Neptune, Pluto: 1.0 AU</li>
                  <li>Moon: 0.003 AU</li>
                </ul>
              </div>
              <div className="bg-background/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-sm">Detection Radii (Asteroids)</h4>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>Ceres, Pallas, Vesta: 0.05 AU</li>
                  <li>Other large asteroids: 0.05 AU</li>
                </ul>
              </div>
            </div>
          </Card>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-accent to-destructive hover:opacity-90"
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating Table...
              </>
            ) : (
              "Generate Close-Approach Table"
            )}
          </Button>
        </form>

        {results && (
          <HorizonsDataDisplay 
            data={results} 
            title="Close Approaches"
            icon={<Rocket className="w-5 h-5 text-accent" />}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default Approach;
