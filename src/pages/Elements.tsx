import { useState } from "react";
import { DashboardLayout } from "@/components/Dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { fetchHorizonsData } from "@/lib/horizons-api";
import { toast } from "sonner";
import { Loader2, Orbit } from "lucide-react";
import { Combobox } from "@/components/ui/combobox";
import { DatePickerInput } from "@/components/DatePickerInput";
import { StepSizeInput } from "@/components/StepSizeInput";
import { HorizonsDataDisplay } from "@/components/HorizonsDataDisplay";
import { useHistoryTracking } from "@/hooks/use-history-tracking";

const Elements = () => {
  const { addToHistory } = useHistoryTracking();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [formData, setFormData] = useState({
    command: "1;",
    center: "@sun",
    refPlane: "ECLIPTIC",
    startTime: "2024-01-01",
    stopTime: "2024-12-31",
    stepSize: "30 d",
    outUnits: "AU-D",
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
        EPHEM_TYPE: "ELEMENTS",
        CENTER: `'${formData.center}'`,
        REF_PLANE: formData.refPlane,
        START_TIME: `'${formData.startTime}'`,
        STOP_TIME: `'${formData.stopTime}'`,
        STEP_SIZE: `'${formData.stepSize}'`,
        OUT_UNITS: formData.outUnits,
      });
      
      setResults(data);
      addToHistory("ELEMENTS", formData.command);
      toast.success("Orbital elements generated successfully!");
    } catch (error) {
      toast.error("Failed to generate elements");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Orbit className="w-8 h-8 text-accent" />
            Orbital Elements
          </h1>
          <p className="text-muted-foreground">
            Generate osculating orbital elements for celestial mechanics and orbit analysis
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
            <h2 className="text-xl font-semibold mb-6">Target Configuration</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="command">Target Object</Label>
                <Combobox
                  options={[
                    { value: "199", label: "Mercury" },
                    { value: "299", label: "Venus" },
                    { value: "499", label: "Mars" },
                    { value: "1;", label: "Ceres" },
                    { value: "2;", label: "Pallas" },
                    { value: "3;", label: "Juno" },
                    { value: "4;", label: "Vesta" },
                    { value: "10;", label: "Hygiea" },
                    { value: "433;", label: "Eros" },
                    { value: "99942;", label: "Apophis" },
                    { value: "101955;", label: "Bennu" },
                    { value: "162173;", label: "Ryugu" },
                    { value: "1P", label: "1P/Halley" },
                    { value: "67P", label: "67P/Churyumov-Gerasimenko" },
                  ]}
                  value={formData.command}
                  onChange={(value) => setFormData({...formData, command: value})}
                  placeholder="Select target..."
                  searchPlaceholder="Search objects..."
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="center">Orbit Center</Label>
                <Combobox
                  options={[
                    { value: "@sun", label: "Sun" },
                    { value: "@0", label: "Solar System Barycenter" },
                    { value: "500@399", label: "Earth" },
                  ]}
                  value={formData.center}
                  onChange={(value) => setFormData({...formData, center: value})}
                  placeholder="Select center..."
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="refPlane">Reference Plane</Label>
                <Combobox
                  options={[
                    { value: "ECLIPTIC", label: "Ecliptic" },
                    { value: "FRAME", label: "ICRF/J2000" },
                    { value: "BODY EQUATOR", label: "Body Equator" },
                  ]}
                  value={formData.refPlane}
                  onChange={(value) => setFormData({...formData, refPlane: value})}
                  placeholder="Select plane..."
                  className="bg-background/50"
                />
              </div>
            </div>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
            <h2 className="text-xl font-semibold mb-6">Time Range</h2>
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
            <h2 className="text-xl font-semibold mb-6">Output Units</h2>
            <div className="space-y-2">
              <Label htmlFor="outUnits">Distance & Time Units</Label>
              <Combobox
                options={[
                  { value: "AU-D", label: "AU, Days" },
                  { value: "KM-S", label: "Kilometers, Seconds" },
                  { value: "KM-D", label: "Kilometers, Days" },
                ]}
                value={formData.outUnits}
                onChange={(value) => setFormData({...formData, outUnits: value})}
                placeholder="Select units..."
                className="bg-background/50"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Elements include: Semi-major axis, Eccentricity, Inclination, Longitude of ascending node, 
              Argument of perihelion, and Mean anomaly
            </p>
          </Card>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-accent to-primary hover:opacity-90"
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating Elements...
              </>
            ) : (
              "Generate Orbital Elements"
            )}
          </Button>
        </form>

        {results && (
          <HorizonsDataDisplay 
            data={results} 
            title="Osculating Elements"
            icon={<Orbit className="w-5 h-5 text-accent" />}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default Elements;
