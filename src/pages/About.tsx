import { DashboardLayout } from "@/components/Dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Github, Rocket, Target, Sparkles, Database, Download, Search, 
  TrendingUp, FileText, Navigation, Orbit, Clock, Info, Code, 
  Globe, BookOpen, Terminal, Zap, AlertCircle, CheckCircle2
} from "lucide-react";

const About = () => {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-3">
            <Sparkles className="w-10 h-10 text-primary" />
            Horizons Explorer - Complete Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive documentation for accessing NASA JPL's most powerful astronomical database
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Database className="w-4 h-4" />
              1.2M+ Objects
            </span>
            <span className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              Real-time NASA Data
            </span>
            <span className="flex items-center gap-1">
              <Code className="w-4 h-4" />
              Full API Access
            </span>
          </div>
        </div>

        {/* Creator Section */}
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 p-6">
          <div className="flex items-start gap-4">
            <Github className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-xl mb-2">About This Project</h3>
              <p className="text-muted-foreground mb-4">
                Built with passion by <strong>Maruf Sultan</strong> to democratize access to space science data. 
                This web application transforms NASA's complex Horizons system into an intuitive, accessible tool 
                for researchers, educators, students, and astronomy enthusiasts worldwide.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                <a href="https://github.com/maruf009sultan" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Visit GitHub Profile
                </a>
              </Button>
            </div>
          </div>
        </Card>

        {/* Table of Contents */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a href="#what-is-horizons" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              1. What is NASA JPL Horizons?
            </a>
            <a href="#why-this-exists" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              2. Why This Tool Exists
            </a>
            <a href="#getting-started" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              3. Getting Started Guide
            </a>
            <a href="#search-page" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              4. Object Search Page
            </a>
            <a href="#observer-page" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              5. Observer Ephemeris (Sky Positions)
            </a>
            <a href="#vectors-page" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              6. State Vectors (Position & Velocity)
            </a>
            <a href="#elements-page" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              7. Orbital Elements
            </a>
            <a href="#approach-page" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              8. Close Approach Tables
            </a>
            <a href="#spk-page" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              9. SPK Files (Ephemeris Kernels)
            </a>
            <a href="#api-reference" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              10. Complete API Reference
            </a>
            <a href="#data-formats" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              11. Understanding Data Formats
            </a>
            <a href="#best-practices" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              12. Best Practices & Tips
            </a>
          </div>
        </Card>

        <Separator />

        {/* Section 1: What is Horizons */}
        <Card id="what-is-horizons" className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-primary" />
            1. What is NASA JPL Horizons?
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">NASA's Jet Propulsion Laboratory (JPL) Horizons System</strong> is one of the most comprehensive 
              and accurate astronomical databases in existence. It provides high-precision ephemeris data (positional and velocity information) 
              for over 1.2 million objects in our Solar System.
            </p>
            
            <div className="bg-background/70 p-4 rounded-lg border border-border/50">
              <h4 className="font-semibold text-foreground mb-3">Database Coverage:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Major Planets:</strong> Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune (and Pluto)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Natural Satellites:</strong> 290+ moons including Earth's Moon, Titan, Europa, Ganymede, etc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Asteroids:</strong> 1,200,000+ numbered and multi-opposition asteroids</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Comets:</strong> 3,900+ known comets (periodic and long-period)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Spacecraft:</strong> 200+ active and historical spacecraft (ISS, Hubble, Voyager, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Special Objects:</strong> Lagrange points, Sun, Solar System Barycenter</span>
                </li>
              </ul>
            </div>

            <p>
              The system uses sophisticated numerical integration methods and incorporates the latest observational data 
              to provide ephemerides accurate to arc-seconds for major bodies and meters per second for spacecraft trajectories.
            </p>

            <div className="bg-accent/10 p-4 rounded-lg border border-accent/30">
              <p className="text-sm font-semibold text-accent-foreground flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Key Features of Horizons Data:
              </p>
              <ul className="text-sm space-y-1 mt-2">
                <li>• High-precision positional accuracy (sub-arcsecond for planets)</li>
                <li>• Real-time data updates from ongoing observations</li>
                <li>• Coverage from 9000 BC to 9000 AD for major bodies</li>
                <li>• Multiple coordinate systems and reference frames</li>
                <li>• Includes physical parameters, uncertainties, and observability data</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Section 2: Why This Exists */}
        <Card id="why-this-exists" className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Rocket className="w-6 h-6 text-primary" />
            2. Why This Tool Exists
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              While NASA's original Horizons web interface and telnet service are powerful, they present significant 
              challenges for modern users:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/30">
                <h4 className="font-semibold text-foreground mb-2 text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-destructive" />
                  Traditional Challenges:
                </h4>
                <ul className="text-xs space-y-1">
                  <li>• Steep learning curve with command-line interface</li>
                  <li>• Complex parameter syntax and cryptic options</li>
                  <li>• No real-time validation or error prevention</li>
                  <li>• Difficult to visualize or export results</li>
                  <li>• Not mobile-friendly or modern</li>
                </ul>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
                <h4 className="font-semibold text-foreground mb-2 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Our Solutions:
                </h4>
                <ul className="text-xs space-y-1">
                  <li>• Clean, intuitive visual interface</li>
                  <li>• Form-based inputs with helpful descriptions</li>
                  <li>• Real-time feedback and validation</li>
                  <li>• Downloadable results in multiple formats</li>
                  <li>• Responsive design for all devices</li>
                </ul>
              </div>
            </div>

            <p>
              <strong className="text-foreground">Horizons Explorer</strong> makes professional-grade astronomical data 
              accessible to everyone—from middle school students learning about the solar system to PhD researchers 
              conducting cutting-edge orbital mechanics studies.
            </p>
          </div>
        </Card>

        {/* Section 3: Getting Started */}
        <Card id="getting-started" className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 p-6">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            3. Getting Started Guide
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-background/70 p-4 rounded-lg border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                <p className="text-sm font-semibold">Choose Query Type</p>
              </div>
              <p className="text-xs text-muted-foreground">
                Select from Observer, Vectors, Elements, Close Approach, or SPK based on your needs
              </p>
            </div>
            
            <div className="bg-background/70 p-4 rounded-lg border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">2</div>
                <p className="text-sm font-semibold">Configure Parameters</p>
              </div>
              <p className="text-xs text-muted-foreground">
                Set target object, time range, coordinates, and output options using intuitive forms
              </p>
            </div>
            
            <div className="bg-background/70 p-4 rounded-lg border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">3</div>
                <p className="text-sm font-semibold">Generate & Export</p>
              </div>
              <p className="text-xs text-muted-foreground">
                View results instantly, download data, or use in your own calculations
              </p>
            </div>
          </div>

          <div className="bg-accent/10 p-4 rounded-lg border border-accent/30">
            <h4 className="text-sm font-semibold text-accent-foreground mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Quick Start Tips:
            </h4>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• <strong>Beginners:</strong> Start with Object Search to find your target, then try Observer queries for sky positions</li>
              <li>• <strong>Students:</strong> Use Observer mode to track planets and create star charts for your location</li>
              <li>• <strong>Researchers:</strong> Use Vectors and Elements for orbital mechanics and trajectory analysis</li>
              <li>• <strong>Developers:</strong> All queries return JSON data that can be integrated into your applications</li>
            </ul>
          </div>
        </Card>

        <Separator />

        {/* Section 4: Object Search */}
        <Card id="search-page" className="bg-background/50 border-border/30 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Search className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-semibold">4. Object Search Page</h2>
              <p className="text-sm text-muted-foreground">Finding celestial objects in the JPL database</p>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Purpose */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Purpose & Overview</h3>
              <p className="text-sm text-muted-foreground mb-4">
                The Object Search tool queries NASA's massive database to locate any celestial object by name, 
                designation, or numeric ID. It returns detailed information including object type, orbital class, 
                physical parameters, and the exact identifiers needed for other query types.
              </p>
            </div>

            {/* How to Search */}
            <div className="bg-background/70 p-5 rounded-lg border border-border/40">
              <h3 className="text-lg font-semibold mb-4 text-foreground">How to Search</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">By Name (Common Names)</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground font-mono">
                    <li>• "Mars" → Planet Mars</li>
                    <li>• "Ceres" → Dwarf planet 1 Ceres</li>
                    <li>• "Halley" → 1P/Halley comet</li>
                    <li>• "Europa" → Jupiter's moon</li>
                    <li>• "ISS" → International Space Station</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">By Designation (Scientific IDs)</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground font-mono">
                    <li>• "1P/Halley" → Halley's comet</li>
                    <li>• "433 Eros" → Asteroid Eros</li>
                    <li>• "2001 SN263" → Near-Earth asteroid</li>
                    <li>• "C/2020 F3" → Comet NEOWISE</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">By Number (JPL IDs)</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground font-mono">
                    <li>• "499" → Mars</li>
                    <li>• "301" → Earth's Moon</li>
                    <li>• "1;" → Asteroid 1 Ceres</li>
                    <li>• "99942;" → Asteroid Apophis</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Wildcards (Advanced)</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground font-mono">
                    <li>• "C/*" → All comets</li>
                    <li>• "A/2024*" → 2024 asteroids</li>
                    <li>• "*;type=MBA" → Main belt asteroids</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Result Details */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Understanding Search Results</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Search results provide comprehensive object information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-primary/5 p-3 rounded border border-primary/20">
                  <p className="text-xs font-semibold mb-1">Identifiers</p>
                  <p className="text-xs text-muted-foreground">Name, SPK-ID, alternative designations, provisional names</p>
                </div>
                <div className="bg-secondary/5 p-3 rounded border border-secondary/20">
                  <p className="text-xs font-semibold mb-1">Physical Data</p>
                  <p className="text-xs text-muted-foreground">Mass, radius, rotation period, albedo, spectral type</p>
                </div>
                <div className="bg-accent/5 p-3 rounded border border-accent/20">
                  <p className="text-xs font-semibold mb-1">Orbital Info</p>
                  <p className="text-xs text-muted-foreground">Period, eccentricity, inclination, classification</p>
                </div>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="bg-accent/10 p-4 rounded-lg border border-accent/30">
              <p className="text-sm font-semibold text-accent-foreground mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Pro Tips:
              </p>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Copy the SPK-ID or numeric identifier from results to use in other query pages</li>
                <li>• For asteroids, append semicolon (;) after the number: "433;" for Eros</li>
                <li>• Planet barycenters use "99" suffix: Jupiter = 5, Jupiter barycenter = 599</li>
                <li>• Spacecraft IDs are negative: "-125" for Mars Reconnaissance Orbiter</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Section 5: Observer Ephemeris */}
        <Card id="observer-page" className="bg-background/50 border-border/30 p-6">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-semibold">5. Observer Ephemeris (Sky Positions)</h2>
              <p className="text-sm text-muted-foreground">Calculate observable quantities from any location</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Observer mode generates ephemerides showing where an object appears in the sky from a specific location 
              on Earth (or from any observer location in the solar system). This is essential for:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background/70 p-4 rounded-lg border border-border/40">
                <h4 className="font-semibold text-sm mb-2">Telescope Pointing</h4>
                <p className="text-xs text-muted-foreground">
                  Get precise RA/DEC or Az/El coordinates to point your telescope accurately at any object
                </p>
              </div>
              <div className="bg-background/70 p-4 rounded-lg border border-border/40">
                <h4 className="font-semibold text-sm mb-2">Observation Planning</h4>
                <p className="text-xs text-muted-foreground">
                  Determine visibility windows, best viewing times, and apparent brightness for photography
                </p>
              </div>
              <div className="bg-background/70 p-4 rounded-lg border border-border/40">
                <h4 className="font-semibold text-sm mb-2">Sky Charts & Education</h4>
                <p className="text-xs text-muted-foreground">
                  Track planet motions, create finder charts, and visualize celestial mechanics concepts
                </p>
              </div>
              <div className="bg-background/70 p-4 rounded-lg border border-border/40">
                <h4 className="font-semibold text-sm mb-2">Satellite Tracking</h4>
                <p className="text-xs text-muted-foreground">
                  Follow ISS, Hubble, or other spacecraft passes from your exact geographic location
                </p>
              </div>
            </div>

            {/* Parameters Explained */}
            <div className="bg-primary/5 p-5 rounded-lg border border-primary/20">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Required Parameters Explained</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">1. Target Object</h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    The celestial body you want to observe. Use Search page to find exact identifiers.
                  </p>
                  <div className="bg-background/80 p-2 rounded font-mono text-xs">
                    Examples: "499" (Mars), "301" (Moon), "1;" (Ceres), "99942;" (Apophis)
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">2. Observer Location (CENTER parameter)</h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Your observing site. Can be geocentric, topocentric, or any solar system body.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                    <div className="bg-background/80 p-2 rounded">
                      <p className="font-mono mb-1">500@399</p>
                      <p className="text-muted-foreground">Geocentric (Earth center)</p>
                    </div>
                    <div className="bg-background/80 p-2 rounded">
                      <p className="font-mono mb-1">coord@399</p>
                      <p className="text-muted-foreground">Topocentric (specific lat/lon/alt)</p>
                    </div>
                    <div className="bg-background/80 p-2 rounded">
                      <p className="font-mono mb-1">568@399</p>
                      <p className="text-muted-foreground">Mauna Kea Observatory</p>
                    </div>
                    <div className="bg-background/80 p-2 rounded">
                      <p className="font-mono mb-1">@sun</p>
                      <p className="text-muted-foreground">Solar system barycenter</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">3. Time Range & Step Size</h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Define the observation period and frequency of calculated positions.
                  </p>
                  <div className="bg-background/80 p-3 rounded">
                    <ul className="text-xs space-y-1 font-mono">
                      <li>• Start: 2024-01-01 (YYYY-MM-DD or Julian Date)</li>
                      <li>• Stop: 2024-01-31</li>
                      <li>• Step: 1 d (1 day) or 1 h (hourly) or 10 m (every 10 minutes)</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">4. Output Quantities (43 Options Available)</h4>
                  <p className="text-xs text-muted-foreground mb-3">
                    Select which observable quantities to include in your ephemeris. You can choose multiple options:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="bg-background/80 p-3 rounded border border-border/30">
                      <p className="font-semibold text-xs mb-2">Position Coordinates</p>
                      <ul className="text-xs space-y-0.5 text-muted-foreground">
                        <li>• Astrometric RA & DEC (Q1)</li>
                        <li>• Apparent RA & DEC (Q2)</li>
                        <li>• Azimuth & Elevation (Q4)</li>
                        <li>• Galactic coordinates (Q33)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-background/80 p-3 rounded border border-border/30">
                      <p className="font-semibold text-xs mb-2">Brightness & Visibility</p>
                      <ul className="text-xs space-y-0.5 text-muted-foreground">
                        <li>• Apparent magnitude (Q17)</li>
                        <li>• Illuminated fraction (Q13)</li>
                        <li>• Surface brightness (Q16)</li>
                        <li>• Sky brightness (Q29)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-background/80 p-3 rounded border border-border/30">
                      <p className="font-semibold text-xs mb-2">Distance & Motion</p>
                      <ul className="text-xs space-y-0.5 text-muted-foreground">
                        <li>• Observer range & rate (Q10)</li>
                        <li>• Heliocentric distance (Q19)</li>
                        <li>• Proper motion (Q34)</li>
                        <li>• Radial velocity (Q37)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-background/80 p-3 rounded border border-border/30">
                      <p className="font-semibold text-xs mb-2">Angular Parameters</p>
                      <ul className="text-xs space-y-0.5 text-muted-foreground">
                        <li>• Phase angle (Q15)</li>
                        <li>• Solar elongation (Q24)</li>
                        <li>• Angular diameter (Q12)</li>
                        <li>• Position angles (Q22, Q23)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Output Example */}
            <div className="bg-secondary/5 p-5 rounded-lg border border-secondary/20">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Understanding Output Data</h3>
              <p className="text-xs text-muted-foreground mb-3">
                Results are returned in tabular format with columns for date/time and your selected quantities:
              </p>
              <div className="bg-background/90 p-3 rounded font-mono text-xs overflow-x-auto">
                <pre className="text-muted-foreground">
{`Date__(UT)__HR:MN    R.A._(ICRF)    DEC_(ICRF)    APmag   Delta      dDelta
2024-Jan-01 00:00    16 45 32.44    -21 07 45.2   -1.80   0.94385    12.3456
2024-Jan-02 00:00    16 46 18.76    -21 10 22.1   -1.79   0.95234    12.4567`}
                </pre>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                All output can be downloaded as JSON or plain text for further processing.
              </p>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border border-accent/30">
              <p className="text-sm font-semibold text-accent-foreground mb-2">💡 Best Practices:</p>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Use 1-hour steps for Moon and fast-moving satellites, 1-day steps for planets</li>
                <li>• Select only needed quantities to reduce data volume and processing time</li>
                <li>• For photography planning, include magnitude (Q17), phase angle (Q15), and sky brightness (Q29)</li>
                <li>• Topocentric coordinates (your exact location) give more accurate rise/set times than geocentric</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Continue with other sections... */}
        <Card id="vectors-page" className="bg-background/50 border-border/30 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Navigation className="w-8 h-8 text-secondary" />
            <div>
              <h2 className="text-2xl font-semibold">6. State Vectors (Position & Velocity)</h2>
              <p className="text-sm text-muted-foreground">Cartesian coordinates for orbital mechanics</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-muted-foreground">
              State vectors provide precise 3D position (X, Y, Z) and velocity (VX, VY, VZ) vectors in Cartesian 
              coordinate systems. This is the foundational data format for:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background/70 p-4 rounded-lg border border-border/40">
                <h4 className="font-semibold text-sm mb-2">Orbital Mechanics</h4>
                <p className="text-xs text-muted-foreground">
                  Calculate orbital elements, period, energy, angular momentum from position/velocity data
                </p>
              </div>
              <div className="bg-background/70 p-4 rounded-lg border border-border/40">
                <h4 className="font-semibold text-sm mb-2">Trajectory Analysis</h4>
                <p className="text-xs text-muted-foreground">
                  Propagate orbits, predict future positions, analyze gravitational perturbations
                </p>
              </div>
              <div className="bg-background/70 p-4 rounded-lg border border-border/40">
                <h4 className="font-semibold text-sm mb-2">Mission Planning</h4>
                <p className="text-xs text-muted-foreground">
                  Design spacecraft trajectories, calculate maneuvers, optimize transfer orbits
                </p>
              </div>
              <div className="bg-background/70 p-4 rounded-lg border border-border/40">
                <h4 className="font-semibold text-sm mb-2">3D Visualization</h4>
                <p className="text-xs text-muted-foreground">
                  Plot orbital paths, animate solar system dynamics, create interactive models
                </p>
              </div>
            </div>

            <div className="bg-secondary/5 p-5 rounded-lg border border-secondary/20">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Key Parameters</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold mb-1">Reference Frame (REF_PLANE):</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                    <div className="bg-background/80 p-2 rounded">
                      <p className="font-mono mb-1">ECLIPTIC</p>
                      <p className="text-muted-foreground">Earth's orbital plane</p>
                    </div>
                    <div className="bg-background/80 p-2 rounded">
                      <p className="font-mono mb-1">FRAME (J2000)</p>
                      <p className="text-muted-foreground">ICRF inertial frame</p>
                    </div>
                    <div className="bg-background/80 p-2 rounded">
                      <p className="font-mono mb-1">BODY EQUATOR</p>
                      <p className="text-muted-foreground">Body's equatorial plane</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-1">Origin (CENTER):</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                    <div className="bg-background/80 p-2 rounded">
                      <p className="font-mono mb-1">@sun</p>
                      <p className="text-muted-foreground">Heliocentric (Sun center)</p>
                    </div>
                    <div className="bg-background/80 p-2 rounded">
                      <p className="font-mono mb-1">@0</p>
                      <p className="text-muted-foreground">Solar System Barycenter</p>
                    </div>
                    <div className="bg-background/80 p-2 rounded">
                      <p className="font-mono mb-1">500@399</p>
                      <p className="text-muted-foreground">Geocentric (Earth center)</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-1">Output Units (OUT_UNITS):</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                    <div className="bg-background/80 p-2 rounded">
                      <p className="font-mono mb-1">KM-S</p>
                      <p className="text-muted-foreground">Kilometers, km/s</p>
                    </div>
                    <div className="bg-background/80 p-2 rounded">
                      <p className="font-mono mb-1">AU-D</p>
                      <p className="text-muted-foreground">Astronomical Units, AU/day</p>
                    </div>
                    <div className="bg-background/80 p-2 rounded">
                      <p className="font-mono mb-1">KM-D</p>
                      <p className="text-muted-foreground">Kilometers, km/day</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Output Example */}
          <div className="bg-secondary/5 p-5 rounded-lg border border-secondary/20">
            <h3 className="text-lg font-semibold mb-3 text-foreground">Example Vector Output</h3>
            <p className="text-xs text-muted-foreground mb-3">
              State vectors provide X, Y, Z position and VX, VY, VZ velocity components:
            </p>
            <div className="bg-background/90 p-3 rounded font-mono text-xs overflow-x-auto">
              <pre className="text-muted-foreground">
{`JDTDB        X (km)           Y (km)           Z (km)          VX (km/s)      VY (km/s)      VZ (km/s)
2460676.5    -1.234567E+08    9.876543E+07    4.321098E+07    -2.987654E+01   -2.345678E+01  -1.012345E+01
2460677.5    -1.240123E+08    9.850234E+07    4.315432E+07    -2.989012E+01   -2.348901E+01  -1.013456E+01`}
              </pre>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Position units: kilometers (or AU), Velocity units: km/s (or AU/day depending on OUT_UNITS)
            </p>
          </div>

          <div className="bg-accent/10 p-4 rounded-lg border border-accent/30">
            <p className="text-sm font-semibold text-accent-foreground mb-2">💡 Pro Tips:</p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Use Solar System Barycenter (@0) for highest accuracy in planetary studies</li>
              <li>• ECLIPTIC frame is standard for solar system work, J2000 for star catalogs</li>
              <li>• Vectors can be converted to orbital elements using classical transformations</li>
              <li>• Light-time corrections (LT) are crucial for accurate observer-based calculations</li>
            </ul>
          </div>
        </Card>

        <Card id="elements-page" className="bg-background/50 border-border/30 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Orbit className="w-8 h-8 text-accent" />
            <div>
              <h2 className="text-2xl font-semibold">7. Orbital Elements</h2>
              <p className="text-sm text-muted-foreground">Classical Keplerian orbital parameters</p>
            </div>
          </div>
          
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              Orbital elements are the mathematical parameters that uniquely define an orbit's size, shape, 
              orientation, and timing. These are essential for orbit classification and long-term predictions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-background/70 p-3 rounded border border-border/40">
                <p className="font-semibold text-xs text-foreground mb-2">Size & Shape Elements:</p>
                <ul className="space-y-1 text-xs">
                  <li>• Semi-major axis (a) - orbit size</li>
                  <li>• Eccentricity (e) - 0=circle, 0-1=ellipse, &gt;1=hyperbola</li>
                  <li>• Perihelion distance (q) - closest point to Sun</li>
                  <li>• Aphelion distance (Q) - farthest point from Sun</li>
                </ul>
              </div>
              
              <div className="bg-background/70 p-3 rounded border border-border/40">
                <p className="font-semibold text-xs text-foreground mb-2">Orientation Elements:</p>
                <ul className="space-y-1 text-xs">
                  <li>• Inclination (i) - orbital plane tilt</li>
                  <li>• Longitude of ascending node (Ω) - where orbit crosses ecliptic upward</li>
                  <li>• Argument of perihelion (ω) - perihelion position in orbital plane</li>
                </ul>
              </div>
              
              <div className="bg-background/70 p-3 rounded border border-border/40">
                <p className="font-semibold text-xs text-foreground mb-2">Timing Elements:</p>
                <ul className="space-y-1 text-xs">
                  <li>• Mean anomaly (M) - average position in orbit</li>
                  <li>• Time of perihelion passage (Tp)</li>
                  <li>• Orbital period (P)</li>
                </ul>
              </div>
              
              <div className="bg-background/70 p-3 rounded border border-border/40">
                <p className="font-semibold text-xs text-foreground mb-2">Use Cases:</p>
                <ul className="space-y-1 text-xs">
                  <li>• Classify asteroid orbits (NEO, MBA, etc.)</li>
                  <li>• Compare planetary orbits</li>
                  <li>• Study orbital evolution over time</li>
                  <li>• Input for orbit propagation software</li>
                </ul>
              </div>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border border-accent/30">
              <p className="text-sm font-semibold text-accent-foreground mb-2">💡 Pro Tips:</p>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Elements change over time due to perturbations - always note the epoch</li>
                <li>• Osculating elements represent instantaneous orbit; mean elements are averaged</li>
                <li>• Use ELEM_LABELS parameter to get descriptions of each element in output</li>
                <li>• For asteroids, check for non-gravitational parameters and uncertainties</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Section 8: Close Approach */}
        <Card id="approach-page" className="bg-background/50 border-border/30 p-6">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-semibold">8. Close Approach Tables</h2>
              <p className="text-sm text-muted-foreground">Find when objects come closest to planets or other bodies</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Close Approach mode identifies when small bodies (asteroids, comets) pass near major planets or the Moon. 
              This is critical for:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background/70 p-4 rounded-lg border border-border/40">
                <h4 className="font-semibold text-sm mb-2">Planetary Defense</h4>
                <p className="text-xs text-muted-foreground">
                  Track potentially hazardous asteroids (PHAs) and near-Earth objects (NEOs)
                </p>
              </div>
              <div className="bg-background/70 p-4 rounded-lg border border-border/40">
                <h4 className="font-semibold text-sm mb-2">Gravity Assist Planning</h4>
                <p className="text-xs text-muted-foreground">
                  Identify natural flyby opportunities for spacecraft trajectory design
                </p>
              </div>
              <div className="bg-background/70 p-4 rounded-lg border border-border/40">
                <h4 className="font-semibold text-sm mb-2">Scientific Observations</h4>
                <p className="text-xs text-muted-foreground">
                  Plan telescope observations during favorable close approaches for better data
                </p>
              </div>
              <div className="bg-background/70 p-4 rounded-lg border border-border/40">
                <h4 className="font-semibold text-sm mb-2">Orbital Evolution Studies</h4>
                <p className="text-xs text-muted-foreground">
                  Study how gravitational encounters change asteroid and comet orbits over time
                </p>
              </div>
            </div>

            <div className="bg-primary/5 p-5 rounded-lg border border-primary/20">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Parameters Explained</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold mb-1">Target Body:</p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Small body ID (asteroid or comet). Most useful for NEOs and PHAs.
                  </p>
                  <div className="bg-background/80 p-2 rounded font-mono text-xs">
                    Examples: "99942;" (Apophis), "2023 DW", "1P/Halley"
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-1">Approach Body:</p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Planet or Moon that the target approaches. Defaults to Earth.
                  </p>
                  <div className="bg-background/80 p-2 rounded font-mono text-xs">
                    Examples: "399" (Earth), "301" (Moon), "499" (Mars)
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-1">Time Span:</p>
                  <p className="text-xs text-muted-foreground">
                    Date range to search for close approaches. Longer ranges may find multiple encounters.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/5 p-5 rounded-lg border border-secondary/20">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Understanding Results</h3>
              <p className="text-xs text-muted-foreground mb-3">
                Output includes date/time of closest approach, minimum distance, relative velocity, and geometry:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                <div className="bg-background/80 p-2 rounded">
                  <p className="font-semibold mb-1">CA Distance</p>
                  <p className="text-muted-foreground">Minimum separation in AU or lunar distances</p>
                </div>
                <div className="bg-background/80 p-2 rounded">
                  <p className="font-semibold mb-1">CA Velocity</p>
                  <p className="text-muted-foreground">Relative speed at closest approach (km/s)</p>
                </div>
                <div className="bg-background/80 p-2 rounded">
                  <p className="font-semibold mb-1">V-infinity</p>
                  <p className="text-muted-foreground">Hyperbolic excess velocity</p>
                </div>
                <div className="bg-background/80 p-2 rounded">
                  <p className="font-semibold mb-1">Geometry</p>
                  <p className="text-muted-foreground">Phase angle, elongation at approach time</p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border border-accent/30">
              <p className="text-sm font-semibold text-accent-foreground mb-2">⚠️ Important Notes:</p>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Close approach predictions for newly discovered objects have high uncertainty</li>
                <li>• Only approaches within a certain distance threshold are reported</li>
                <li>• Historical approaches are more certain than future predictions</li>
                <li>• Always check the orbital uncertainty and epoch of the elements used</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Section 9: SPK Files */}
        <Card id="spk-page" className="bg-background/50 border-border/30 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Download className="w-8 h-8 text-secondary" />
            <div>
              <h2 className="text-2xl font-semibold">9. SPK Files (Ephemeris Kernels)</h2>
              <p className="text-sm text-muted-foreground">Download binary ephemeris files for offline use</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-muted-foreground">
              SPK (Spacecraft and Planet Kernel) files are NASA's standard binary format for storing ephemerides. 
              They contain high-precision trajectory data that can be used offline with SPICE toolkit or other software.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background/70 p-4 rounded-lg border border-border/40">
                <h4 className="font-semibold text-sm mb-2">Offline Processing</h4>
                <p className="text-xs text-muted-foreground">
                  Process ephemeris data locally without internet connection or API calls
                </p>
              </div>
              <div className="bg-background/70 p-4 rounded-lg border border-border/40">
                <h4 className="font-semibold text-sm mb-2">Mission Planning Software</h4>
                <p className="text-xs text-muted-foreground">
                  Import into STK, GMAT, or custom trajectory propagation tools
                </p>
              </div>
              <div className="bg-background/70 p-4 rounded-lg border border-border/40">
                <h4 className="font-semibold text-sm mb-2">High-Speed Access</h4>
                <p className="text-xs text-muted-foreground">
                  Fast interpolation for real-time applications and visualization
                </p>
              </div>
              <div className="bg-background/70 p-4 rounded-lg border border-border/40">
                <h4 className="font-semibold text-sm mb-2">Reproducible Science</h4>
                <p className="text-xs text-muted-foreground">
                  Archive exact ephemeris data used in publications and research
                </p>
              </div>
            </div>

            <div className="bg-primary/5 p-5 rounded-lg border border-primary/20">
              <h3 className="text-lg font-semibold mb-4 text-foreground">SPK File Types</h3>
              <div className="space-y-3">
                <div className="bg-background/80 p-3 rounded">
                  <p className="font-semibold text-sm mb-2">Type 1 - Modified Difference Arrays (MDA)</p>
                  <p className="text-xs text-muted-foreground">
                    Compact format using Chebyshev polynomials. Best for planets and major moons with smooth trajectories.
                  </p>
                </div>
                <div className="bg-background/80 p-3 rounded">
                  <p className="font-semibold text-sm mb-2">Type 2 - Chebyshev Position Only</p>
                  <p className="text-xs text-muted-foreground">
                    Position data only (no velocity). Used for older spacecraft and asteroid ephemerides.
                  </p>
                </div>
                <div className="bg-background/80 p-3 rounded">
                  <p className="font-semibold text-sm mb-2">Type 21 - Extended MDA</p>
                  <p className="text-xs text-muted-foreground">
                    Modern format with higher accuracy. Standard for recent missions and updated planetary ephemerides.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/5 p-5 rounded-lg border border-secondary/20">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Using SPK Files</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold mb-2">SPICE Toolkit (Official NASA Software):</p>
                  <div className="bg-background/90 p-3 rounded font-mono text-xs">
                    <p className="text-muted-foreground"># Load SPK file and compute state vector</p>
                    <p>furnsh('ephemeris.bsp')</p>
                    <p>state = spkezr('MARS', et, 'J2000', 'NONE', 'EARTH')</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-1">Compatible Software:</p>
                  <ul className="text-xs space-y-1 text-muted-foreground ml-4">
                    <li>• NAIF SPICE Toolkit (C, Fortran, IDL, MATLAB, Python)</li>
                    <li>• AGI Systems Tool Kit (STK)</li>
                    <li>• NASA GMAT (General Mission Analysis Tool)</li>
                    <li>• Custom readers using SPICE library</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border border-accent/30">
              <p className="text-sm font-semibold text-accent-foreground mb-2">📦 Download Considerations:</p>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• SPK files can be large (MB to GB) depending on time span and interpolation degree</li>
                <li>• Longer time spans require larger files due to Chebyshev polynomial coefficients</li>
                <li>• Check SPK file time coverage before using - may not extend infinitely</li>
                <li>• Always verify SPK file integrity and reference frame before use in mission-critical applications</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* API Reference Summary */}
        <Card id="api-reference" className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 p-6">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Code className="w-6 h-6 text-primary" />
            10. Complete API Reference
          </h2>
          
          <div className="space-y-4">
            <div className="bg-background/70 p-4 rounded-lg border border-border/40">
              <h3 className="font-semibold mb-2">Base URL & Format</h3>
              <div className="bg-background/90 p-3 rounded font-mono text-xs">
                <p>https://ssd.jpl.nasa.gov/api/horizons.api</p>
                <p className="text-muted-foreground mt-2">Format: ?format=json (or text)</p>
              </div>
            </div>

            <div className="bg-background/70 p-4 rounded-lg border border-border/40">
              <h3 className="font-semibold mb-3">Common Parameters (All Ephemeris Types)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between p-2 bg-background/50 rounded">
                  <span className="font-mono">COMMAND</span>
                  <span className="text-muted-foreground">Target object ID</span>
                </div>
                <div className="flex justify-between p-2 bg-background/50 rounded">
                  <span className="font-mono">EPHEM_TYPE</span>
                  <span className="text-muted-foreground">OBSERVER|VECTORS|ELEMENTS|SPK|APPROACH</span>
                </div>
                <div className="flex justify-between p-2 bg-background/50 rounded">
                  <span className="font-mono">OBJ_DATA</span>
                  <span className="text-muted-foreground">YES|NO (return object info)</span>
                </div>
                <div className="flex justify-between p-2 bg-background/50 rounded">
                  <span className="font-mono">MAKE_EPHEM</span>
                  <span className="text-muted-foreground">YES|NO (generate ephemeris)</span>
                </div>
              </div>
            </div>

            <div className="bg-background/70 p-4 rounded-lg border border-border/40">
              <h3 className="font-semibold mb-2">Full Documentation</h3>
              <p className="text-sm text-muted-foreground mb-3">
                For complete parameter details, visit NASA's official documentation:
              </p>
              <Button asChild variant="outline" size="sm">
                <a href="https://ssd-api.jpl.nasa.gov/doc/horizons.html" target="_blank" rel="noopener noreferrer">
                  <Globe className="w-4 h-4 mr-2" />
                  NASA JPL Horizons API Docs
                </a>
              </Button>
            </div>
          </div>
        </Card>

        {/* Section 11: Data Formats */}
        <Card id="data-formats" className="bg-background/50 border-border/30 p-6">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary" />
            11. Understanding Data Formats & Output
          </h2>
          
          <div className="space-y-6">
            <div className="bg-primary/5 p-5 rounded-lg border border-primary/20">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Output Formats</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-background/80 p-4 rounded">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    JSON Format
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Machine-readable structured data format. Best for programming and automation.
                  </p>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    <li>• Easy to parse in any programming language</li>
                    <li>• Includes metadata and parameter details</li>
                    <li>• Suitable for web APIs and databases</li>
                    <li>• Can be processed with jq, Python, JavaScript</li>
                  </ul>
                </div>
                
                <div className="bg-background/80 p-4 rounded">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    Plain Text Format
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Human-readable ASCII tables. Best for manual inspection and documentation.
                  </p>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    <li>• Formatted tables with column headers</li>
                    <li>• Includes explanatory notes and warnings</li>
                    <li>• Can be opened in any text editor</li>
                    <li>• Easy to import into Excel or plotting tools</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-secondary/5 p-5 rounded-lg border border-secondary/20">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Time Formats</h3>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                  <div className="bg-background/80 p-3 rounded border border-border/30">
                    <p className="font-semibold mb-1">Calendar Date</p>
                    <p className="font-mono text-muted-foreground mb-1">2024-JAN-01 12:00</p>
                    <p className="text-muted-foreground">Human-readable Gregorian calendar</p>
                  </div>
                  <div className="bg-background/80 p-3 rounded border border-border/30">
                    <p className="font-semibold mb-1">Julian Date (JD)</p>
                    <p className="font-mono text-muted-foreground mb-1">2460310.5</p>
                    <p className="text-muted-foreground">Continuous day count since 4713 BC</p>
                  </div>
                  <div className="bg-background/80 p-3 rounded border border-border/30">
                    <p className="font-semibold mb-1">Modified JD (MJD)</p>
                    <p className="font-mono text-muted-foreground mb-1">60310.0</p>
                    <p className="text-muted-foreground">JD - 2400000.5 (more compact)</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  <strong>Time Scales:</strong> TT (Terrestrial Time), TDB (Barycentric Dynamical Time), UTC (Coordinated Universal Time). 
                  Horizons outputs in TDB/TT for ephemerides, UTC for observer tables.
                </p>
              </div>
            </div>

            <div className="bg-accent/5 p-5 rounded-lg border border-accent/20">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Coordinate Systems</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-background/80 p-3 rounded">
                  <p className="font-semibold text-sm mb-2">Equatorial (RA/DEC)</p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Right Ascension (0-24h) and Declination (-90° to +90°). Standard for star catalogs and telescope pointing.
                  </p>
                  <p className="text-xs font-mono text-muted-foreground">
                    Example: RA = 05h 55m 10.3s, DEC = +07° 24' 25.4"
                  </p>
                </div>
                
                <div className="bg-background/80 p-3 rounded">
                  <p className="font-semibold text-sm mb-2">Horizontal (Az/El)</p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Azimuth (0-360°, North=0°) and Elevation (0-90°). Local coordinates from observer location.
                  </p>
                  <p className="text-xs font-mono text-muted-foreground">
                    Example: Az = 135.5°, El = 45.2°
                  </p>
                </div>
                
                <div className="bg-background/80 p-3 rounded">
                  <p className="font-semibold text-sm mb-2">Ecliptic (Lon/Lat)</p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Longitude (0-360°) and Latitude (-90° to +90°). Earth's orbital plane as reference.
                  </p>
                  <p className="text-xs font-mono text-muted-foreground">
                    Example: Lon = 95.3°, Lat = +1.8°
                  </p>
                </div>
                
                <div className="bg-background/80 p-3 rounded">
                  <p className="font-semibold text-sm mb-2">Cartesian (X,Y,Z)</p>
                  <p className="text-xs text-muted-foreground mb-2">
                    3D rectangular coordinates in km or AU. Used for state vectors and orbit propagation.
                  </p>
                  <p className="text-xs font-mono text-muted-foreground">
                    Example: X = 1.2e8 km, Y = -8.5e7 km, Z = 3.2e6 km
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background/70 p-5 rounded-lg border border-border/40">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Reference Frames</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">ICRF/J2000 (International Celestial Reference Frame)</p>
                    <p className="text-xs text-muted-foreground">
                      Modern inertial frame based on quasar positions. Standard for astrometry and orbital mechanics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Ecliptic of Date</p>
                    <p className="text-xs text-muted-foreground">
                      Earth's orbital plane at a specific epoch. Changes due to precession.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Body-Fixed Frames</p>
                    <p className="text-xs text-muted-foreground">
                      Rotating with the body. Used for surface features and landing site coordinates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border border-accent/30">
              <p className="text-sm font-semibold text-accent-foreground mb-2">🔄 Data Conversions:</p>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Degrees to Radians: multiply by π/180</li>
                <li>• AU to Kilometers: multiply by 149,597,870.7</li>
                <li>• Hours to Degrees (RA): multiply by 15</li>
                <li>• JD to Unix Timestamp: (JD - 2440587.5) × 86400</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Best Practices */}
        <Card id="best-practices" className="bg-accent/5 border-accent/20 p-6">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-accent" />
            12. Best Practices & Tips
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-background/70 p-4 rounded-lg border border-border/40">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Query Optimization
              </h4>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Use appropriate step sizes (don't over-sample)</li>
                <li>• Select only needed output quantities</li>
                <li>• Limit time ranges to what you actually need</li>
                <li>• Cache results for repeated analyses</li>
              </ul>
            </div>

            <div className="bg-background/70 p-4 rounded-lg border border-border/40">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                Accuracy Considerations
              </h4>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Use topocentric coordinates for ground observations</li>
                <li>• Account for light-time corrections for precise work</li>
                <li>• Check data uncertainties for asteroids/comets</li>
                <li>• Verify epoch for orbital elements</li>
              </ul>
            </div>

            <div className="bg-background/70 p-4 rounded-lg border border-border/40">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                Data Management
              </h4>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Download JSON for programmatic processing</li>
                <li>• Use History feature to track queries</li>
                <li>• Document your parameters for reproducibility</li>
                <li>• Cite JPL Horizons in publications</li>
              </ul>
            </div>

            <div className="bg-background/70 p-4 rounded-lg border border-border/40">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-destructive" />
                Common Mistakes to Avoid
              </h4>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Forgetting semicolon after asteroid numbers</li>
                <li>• Using wrong coordinate system for analysis</li>
                <li>• Confusing barycentric vs body-centered IDs</li>
                <li>• Not accounting for observer location effects</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground space-y-2 pt-8">
          <p>
            This tool provides a user-friendly interface to NASA JPL's Horizons System.
          </p>
          <p>
            For questions, bug reports, or feature requests, contact the developer via GitHub.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button asChild variant="outline" size="sm">
              <a href="https://ssd.jpl.nasa.gov/horizons/" target="_blank" rel="noopener noreferrer">
                <Globe className="w-4 h-4 mr-2" />
                NASA JPL Horizons
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="https://github.com/maruf009sultan" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Developer GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default About;