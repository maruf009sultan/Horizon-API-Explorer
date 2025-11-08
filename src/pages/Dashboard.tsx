import { DashboardLayout } from "@/components/Dashboard/DashboardLayout";
import { StatsCard } from "@/components/Dashboard/StatsCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, Satellite, Globe, Orbit, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import spaceHero from "@/assets/space-hero.jpg";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 backdrop-blur-sm border border-primary/30">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url(${spaceHero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="relative z-10 p-8">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary animate-glow" />
              <span className="text-sm font-medium text-primary">NASA JPL Horizons System</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
              Solar System Explorer
            </h1>
            <p className="text-lg text-foreground/90 mb-6 max-w-2xl">
              Access comprehensive ephemeris data for planets, moons, asteroids, and comets. 
              Generate observer tables, state vectors, orbital elements, and close-approach predictions.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                onClick={() => navigate("/search")}
                variant="cosmic"
              >
                Start Exploring
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate("/observer")}
                className="border-primary/30 hover:bg-primary/10 bg-background/80 backdrop-blur-sm"
              >
                Generate Ephemeris
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Ephemeris Types"
            value="5"
            icon={Rocket}
            trend="Observer, Vectors, Elements, SPK, Approach"
            color="primary"
          />
          <StatsCard
            title="Celestial Bodies"
            value="1M+"
            icon={Satellite}
            trend="Planets, Moons, Asteroids, Comets"
            color="secondary"
          />
          <StatsCard
            title="Data Formats"
            value="2"
            icon={Globe}
            trend="JSON & Plain Text"
            color="accent"
          />
          <StatsCard
            title="Query Parameters"
            value="50+"
            icon={Orbit}
            trend="Comprehensive customization"
            color="primary"
          />
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            className="group cursor-pointer bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:scale-105"
            onClick={() => navigate("/observer")}
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Observer Ephemeris</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Generate sky position tables with RA/DEC coordinates, azimuth/elevation, and observability data.
              </p>
              <div className="flex items-center text-sm text-primary group-hover:gap-2 transition-all">
                <span>Start observing</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </Card>

          <Card 
            className="group cursor-pointer bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 transform hover:scale-105"
            onClick={() => navigate("/vectors")}
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                  <Satellite className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">State Vectors</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Access Cartesian position and velocity vectors for orbital mechanics and trajectory analysis.
              </p>
              <div className="flex items-center text-sm text-secondary group-hover:gap-2 transition-all">
                <span>Get vectors</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </Card>

          <Card 
            className="group cursor-pointer bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 transform hover:scale-105"
            onClick={() => navigate("/approach")}
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-accent/20 group-hover:bg-accent/30 transition-colors">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Close Approaches</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Track near-Earth objects and planetary encounters with detailed close-approach tables.
              </p>
              <div className="flex items-center text-sm text-accent group-hover:gap-2 transition-all">
                <span>View approaches</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </Card>
        </div>

        {/* Features Section */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h4 className="font-semibold mb-1">Real-time Data</h4>
                    <p className="text-sm text-muted-foreground">
                      Access NASA JPL's latest ephemeris data for accurate celestial mechanics calculations
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                  <div>
                    <h4 className="font-semibold mb-1">Multiple Formats</h4>
                    <p className="text-sm text-muted-foreground">
                      Choose between JSON for programmatic access or plain text for human-readable output
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <h4 className="font-semibold mb-1">Comprehensive Coverage</h4>
                    <p className="text-sm text-muted-foreground">
                      Over 1 million celestial objects including planets, moons, asteroids, and comets
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h4 className="font-semibold mb-1">Custom Elements</h4>
                    <p className="text-sm text-muted-foreground">
                      Define your own objects with heliocentric ecliptic osculating elements
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                  <div>
                    <h4 className="font-semibold mb-1">SPK Files</h4>
                    <p className="text-sm text-muted-foreground">
                      Generate binary trajectory files for visualization and navigation tools
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <h4 className="font-semibold mb-1">Flexible Time Control</h4>
                    <p className="text-sm text-muted-foreground">
                      Precise time stepping with calendar dates, fixed intervals, or angular change
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
