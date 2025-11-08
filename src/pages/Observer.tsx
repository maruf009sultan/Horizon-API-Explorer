import { useState } from "react";
import { DashboardLayout } from "@/components/Dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { fetchHorizonsData, OBSERVER_QUANTITIES } from "@/lib/horizons-api";
import { toast } from "sonner";
import { Loader2, FileText } from "lucide-react";
import { Combobox } from "@/components/ui/combobox";
import { DatePickerInput } from "@/components/DatePickerInput";
import { StepSizeInput } from "@/components/StepSizeInput";
import { HorizonsDataDisplay } from "@/components/HorizonsDataDisplay";
import { useHistoryTracking } from "@/hooks/use-history-tracking";

const Observer = () => {
  const { addToHistory } = useHistoryTracking();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [formData, setFormData] = useState({
    command: "499",
    center: "500@399",
    startTime: "2024-01-01",
    stopTime: "2024-01-31",
    stepSize: "1 d",
    quantities: ["1", "9", "20", "23"],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const data = await fetchHorizonsData({
        format: "json",
        COMMAND: `'${formData.command}'`,
        OBJ_DATA: "YES",
        MAKE_EPHEM: "YES",
        EPHEM_TYPE: "OBSERVER",
        CENTER: `'${formData.center}'`,
        START_TIME: `'${formData.startTime}'`,
        STOP_TIME: `'${formData.stopTime}'`,
        STEP_SIZE: `'${formData.stepSize}'`,
        QUANTITIES: `'${formData.quantities.join(",")}'`,
      });
      
      setResults(data);
      addToHistory("OBSERVER", formData.command);
      toast.success("Ephemeris generated successfully!");
    } catch (error) {
      toast.error("Failed to generate ephemeris");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const toggleQuantity = (value: string) => {
    setFormData(prev => ({
      ...prev,
      quantities: prev.quantities.includes(value)
        ? prev.quantities.filter(q => q !== value)
        : [...prev.quantities, value]
    }));
  };

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <FileText className="w-8 h-8 text-primary" />
            Observer Ephemeris
          </h1>
          <p className="text-muted-foreground">
            Generate observable sky position tables with RA/DEC coordinates, azimuth/elevation, and more
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
            <h2 className="text-xl font-semibold mb-6">Target Selection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="command">Target Object</Label>
                <Combobox
                  options={[
                    { value: "199", label: "Mercury" },
                    { value: "299", label: "Venus" },
                    { value: "399", label: "Earth" },
                    { value: "499", label: "Mars" },
                    { value: "599", label: "Jupiter" },
                    { value: "699", label: "Saturn" },
                    { value: "799", label: "Uranus" },
                    { value: "899", label: "Neptune" },
                    { value: "999", label: "Pluto" },
                    { value: "301", label: "Moon (Earth)" },
                    { value: "501", label: "Io (Jupiter)" },
                    { value: "502", label: "Europa (Jupiter)" },
                    { value: "606", label: "Titan (Saturn)" },
                    { value: "1;", label: "Ceres (dwarf planet)" },
                    { value: "4;", label: "Vesta" },
                    { value: "433;", label: "Eros (near-Earth)" },
                    { value: "99942;", label: "Apophis (potentially hazardous)" },
                    { value: "101955;", label: "Bennu (OSIRIS-REx target)" },
                    { value: "1P", label: "1P/Halley comet" },
                    { value: "67P", label: "67P/Churyumov-Gerasimenko (Rosetta)" },
                  ]}
                  value={formData.command}
                  onChange={(value) => setFormData({...formData, command: value})}
                  placeholder="Select target object..."
                  searchPlaceholder="Search objects..."
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="center">Observer Location</Label>
                <Combobox
                  options={[
                    { value: "500@399", label: "Geocentric (Earth center)" },
                    { value: "568@399", label: "Mauna Kea Observatory, Hawaii" },
                    { value: "675@399", label: "Palomar Observatory, California" },
                    { value: "309@399", label: "Kitt Peak Observatory, Arizona" },
                    { value: "645@399", label: "La Silla Observatory, Chile" },
                    { value: "950@399", label: "Very Large Telescope (VLT), Chile" },
                    { value: "I11@399", label: "Gemini North, Hawaii" },
                    { value: "I41@399", label: "Gemini South, Chile" },
                    { value: "608@399", label: "Keck Observatory, Hawaii" },
                    { value: "@sun", label: "Sun (heliocentric)" },
                  ]}
                  value={formData.center}
                  onChange={(value) => setFormData({...formData, center: value})}
                  placeholder="Select observer location..."
                  searchPlaceholder="Search locations..."
                  className="bg-background/50"
                />
              </div>
            </div>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
            <h2 className="text-xl font-semibold mb-6">Time Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="startTime">Start Time</Label>
                <DatePickerInput
                  id="startTime"
                  value={formData.startTime}
                  onChange={(value) => setFormData({...formData, startTime: value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="stopTime">Stop Time</Label>
                <DatePickerInput
                  id="stopTime"
                  value={formData.stopTime}
                  onChange={(value) => setFormData({...formData, stopTime: value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="stepSize">Step Size</Label>
                <StepSizeInput
                  id="stepSize"
                  value={formData.stepSize}
                  onChange={(value) => setFormData({...formData, stepSize: value})}
                  className="bg-background/50"
                />
              </div>
            </div>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
            <h2 className="text-xl font-semibold mb-6">Output Quantities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {OBSERVER_QUANTITIES.map((q) => (
                <div key={q.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={q.value}
                    checked={formData.quantities.includes(q.value)}
                    onCheckedChange={() => toggleQuantity(q.value)}
                  />
                  <Label
                    htmlFor={q.value}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {q.label}
                  </Label>
                </div>
              ))}
            </div>
          </Card>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating Ephemeris...
              </>
            ) : (
              "Generate Ephemeris"
            )}
          </Button>
        </form>

        {results && (
          <HorizonsDataDisplay 
            data={results} 
            title="Ephemeris Results"
            icon={<FileText className="w-5 h-5 text-primary" />}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default Observer;
