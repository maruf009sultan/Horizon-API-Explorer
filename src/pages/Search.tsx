import { useState } from "react";
import { DashboardLayout } from "@/components/Dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, Loader2 } from "lucide-react";
import { fetchHorizonsData, CELESTIAL_OBJECTS } from "@/lib/horizons-api";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HorizonsDataDisplay } from "@/components/HorizonsDataDisplay";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleSearch = async (command: string) => {
    setLoading(true);
    try {
      const data = await fetchHorizonsData({
        format: "json",
        COMMAND: `'${command}'`,
        OBJ_DATA: "YES",
        MAKE_EPHEM: "NO",
      });
      setResults(data);
      toast.success("Object data retrieved successfully!");
    } catch (error) {
      toast.error("Failed to fetch object data");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickSelect = (id: string) => {
    setSearchQuery(id);
    handleSearch(id);
  };

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Object Search</h1>
          <p className="text-muted-foreground">
            Search for celestial objects or browse predefined categories
          </p>
        </div>

        {/* Search Bar */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
          <div className="flex gap-4">
            <Input
              placeholder="Enter object ID, name, or designation (e.g., '499' for Mars, '1;' for Ceres)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch(searchQuery)}
              className="flex-1 bg-background/50"
            />
            <Button
              onClick={() => handleSearch(searchQuery)}
              disabled={loading || !searchQuery}
              className="bg-gradient-to-r from-primary to-accent"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <SearchIcon className="w-4 h-4" />
              )}
              Search
            </Button>
          </div>
        </Card>

        {/* Quick Select Categories */}
        <Tabs defaultValue="planets" className="w-full">
          <TabsList className="bg-card/50 backdrop-blur-sm border border-border/50">
            <TabsTrigger value="planets">Planets</TabsTrigger>
            <TabsTrigger value="moons">Moons</TabsTrigger>
            <TabsTrigger value="asteroids">Asteroids</TabsTrigger>
          </TabsList>

          <TabsContent value="planets" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CELESTIAL_OBJECTS.planets.map((obj) => (
                <Card
                  key={obj.id}
                  className="group cursor-pointer bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 p-4"
                  onClick={() => handleQuickSelect(obj.id)}
                >
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {obj.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">ID: {obj.id}</p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="moons" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CELESTIAL_OBJECTS.moons.map((obj) => (
                <Card
                  key={obj.id}
                  className="group cursor-pointer bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 p-4"
                  onClick={() => handleQuickSelect(obj.id)}
                >
                  <h3 className="font-semibold text-lg group-hover:text-secondary transition-colors">
                    {obj.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">ID: {obj.id}</p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="asteroids" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CELESTIAL_OBJECTS.asteroids.map((obj) => (
                <Card
                  key={obj.id}
                  className="group cursor-pointer bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 p-4"
                  onClick={() => handleQuickSelect(obj.id)}
                >
                  <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                    {obj.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">ID: {obj.id}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Results Display */}
        {results && (
          <HorizonsDataDisplay 
            data={results} 
            title="Object Data"
            icon={<SearchIcon className="w-5 h-5 text-primary" />}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default Search;
