import { useState } from "react";
import { DashboardLayout } from "@/components/Dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { fetchHorizonsData } from "@/lib/horizons-api";
import { toast } from "sonner";
import { Sparkles, Download, Info, Loader2 } from "lucide-react";
import { Combobox } from "@/components/ui/combobox";
import { DatePickerInput } from "@/components/DatePickerInput";
import { useHistoryTracking } from "@/hooks/use-history-tracking";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SPK = () => {
  const { addToHistory } = useHistoryTracking();
  const [formData, setFormData] = useState({
    command: "1;",
    startTime: "2024-01-01",
    stopTime: "2024-12-31",
  });
  const [loading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState<string | null>(null);

  const extractBase64FromResponse = (response: string): string | null => {
    const marker = "SPK Binary Data Follows -- base64 encoded:";
    const index = response.indexOf(marker);
    if (index === -1) return null;
    
    const base64Start = index + marker.length;
    const base64Data = response.substring(base64Start).trim();
    return base64Data.split('\n').map(line => line.trim()).join('');
  };

  const downloadBSP = (base64Data: string, filename: string) => {
    try {
      const binaryString = atob(base64Data);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: 'application/octet-stream' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success("BSP file downloaded successfully!");
    } catch (error) {
      toast.error("Failed to decode and download BSP file");
      console.error(error);
    }
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await fetchHorizonsData({
        format: "text",
        COMMAND: `'${formData.command}'`,
        EPHEM_TYPE: "SPK",
        START_TIME: `'${formData.startTime}'`,
        STOP_TIME: `'${formData.stopTime}'`,
      });
      
      addToHistory("SPK", formData.command);
      setApiResponse(response);
      
      const base64Data = extractBase64FromResponse(response);
      if (base64Data) {
        const asteroidName = asteroids.find(a => a.id === formData.command)?.name || 'object';
        downloadBSP(base64Data, `${asteroidName.toLowerCase()}_${formData.startTime}_${formData.stopTime}.bsp`);
      } else {
        toast.error("No SPK binary data found in response");
      }
    } catch (error) {
      toast.error("Failed to generate SPK file");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const asteroids = [
    { id: "1;", name: "Ceres", description: "Largest asteroid in main belt" },
    { id: "2;", name: "Pallas", description: "Second largest asteroid" },
    { id: "4;", name: "Vesta", description: "Brightest asteroid" },
    { id: "433;", name: "Eros", description: "Near-Earth asteroid" },
    { id: "99942;", name: "Apophis", description: "Potentially hazardous" },
    { id: "243;", name: "Ida", description: "Asteroid with moon" },
  ];

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-primary" />
            SPK Binary Files
          </h1>
          <p className="text-muted-foreground">
            Generate binary trajectory files for asteroids and comets
          </p>
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 p-6">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">About SPK Files</h3>
              <p className="text-sm text-muted-foreground mb-2">
                SPK (Spacecraft and Planet Kernel) files are binary trajectory files in SPICE format. 
                They provide time-continuous state data for integration with visualization tools and 
                navigation software.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Restricted to small-bodies only (asteroids and comets)</li>
                <li>• Compatible with SPICE toolkit and visualization software</li>
                <li>• Provides precise position and velocity data</li>
                <li>• Ideal for mission planning and orbital simulations</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
          <h2 className="text-xl font-semibold mb-6">Configuration</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="command">Select Asteroid/Comet</Label>
              <Combobox
                options={asteroids.map((obj) => ({
                  value: obj.id,
                  label: `${obj.name} - ${obj.description}`
                }))}
                value={formData.command}
                onChange={(value) => setFormData({...formData, command: value})}
                placeholder="Select asteroid or comet..."
                searchPlaceholder="Search objects..."
                className="bg-background/50"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>
          </div>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
          <h2 className="text-xl font-semibold mb-4">Usage Instructions</h2>
          <div className="space-y-4">
            <div className="bg-background/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-sm">1. Generate SPK File</h4>
              <p className="text-sm text-muted-foreground">
                Click the button below to generate and download the SPK binary file for your selected object.
              </p>
            </div>
            <div className="bg-background/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-sm">2. Load in SPICE Toolkit</h4>
              <p className="text-sm text-muted-foreground">
                Use the SPICE toolkit (available in C, FORTRAN, IDL, MATLAB) to read and process the SPK file.
              </p>
            </div>
            <div className="bg-background/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-sm">3. Visualize or Analyze</h4>
              <p className="text-sm text-muted-foreground">
                Import into visualization tools like Cosmographia or use programmatically for trajectory analysis.
              </p>
            </div>
          </div>
        </Card>

        <Button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
          size="lg"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Download className="w-4 h-4 mr-2" />
              Generate & Download SPK File
            </>
          )}
        </Button>

        {apiResponse && (
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
            <Tabs defaultValue="raw" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="raw">Raw Response</TabsTrigger>
                <TabsTrigger value="download">Download Info</TabsTrigger>
              </TabsList>
              <TabsContent value="raw" className="mt-4">
                <div className="bg-background/50 p-4 rounded-lg max-h-96 overflow-auto">
                  <pre className="text-xs text-muted-foreground whitespace-pre-wrap font-mono">
                    {apiResponse}
                  </pre>
                </div>
              </TabsContent>
              <TabsContent value="download" className="mt-4">
                <div className="space-y-4">
                  <div className="bg-background/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">BSP File Generated</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      The binary SPK file has been automatically downloaded to your device.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Object:</span>
                        <span className="font-medium">{asteroids.find(a => a.id === formData.command)?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Start Date:</span>
                        <span className="font-medium">{formData.startTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">End Date:</span>
                        <span className="font-medium">{formData.stopTime}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => {
                      const base64Data = extractBase64FromResponse(apiResponse);
                      if (base64Data) {
                        const asteroidName = asteroids.find(a => a.id === formData.command)?.name || 'object';
                        downloadBSP(base64Data, `${asteroidName.toLowerCase()}_${formData.startTime}_${formData.stopTime}.bsp`);
                      }
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Again
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default SPK;
