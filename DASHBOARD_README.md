# NASA JPL Horizons API Dashboard

A modern, stunning 3D dashboard for exploring the NASA JPL Horizons API. Built with React, TypeScript, and Tailwind CSS with a beautiful space-themed design.

## 🚀 Features

### Complete API Coverage

This dashboard implements **ALL** major features of the NASA JPL Horizons API:

#### 1. **Dashboard Home** (`/`)
- Beautiful hero section with cosmic imagery
- Quick stats overview
- Navigation cards to all features
- Comprehensive feature list

#### 2. **Object Search** (`/search`)
- Search any celestial object by ID, name, or designation
- Quick-select categories:
  - **Planets**: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto
  - **Moons**: Earth's Moon, Phobos, Deimos, Io, Europa, Ganymede, Callisto
  - **Asteroids**: Ceres, Pallas, Vesta, Eros, Apophis
- Real-time object data retrieval
- JSON result visualization

#### 3. **Observer Ephemeris** (`/observer`)
- Generate observable sky position tables
- Configure:
  - Target object selection
  - Observer location (geocentric or custom)
  - Time range (start/stop dates)
  - Step size (days, hours, minutes)
  - Output quantities (RA/DEC, Az/El, range, angles, etc.)
- Support for 15+ output quantities
- Interactive quantity selection

#### 4. **State Vectors** (`/vectors`)
- Cartesian position and velocity vectors
- Reference frame selection (Ecliptic, ICRF/J2000, Body Equator)
- Coordinate origin options (Sun, Barycenter, Geocentric)
- Output unit selection (KM-S, AU-D, KM-D)
- Vector correction levels (None, Light-Time, Light-Time + Aberration)

#### 5. **Orbital Elements** (`/elements`)
- Osculating orbital elements generation
- Elements include:
  - Semi-major axis
  - Eccentricity
  - Inclination
  - Longitude of ascending node
  - Argument of perihelion
  - Mean anomaly
- Flexible time stepping
- Multiple reference frames

#### 6. **Close-Approach Tables** (`/approach`)
- Track near-Earth objects
- Planetary encounter predictions
- Standard and Extended table formats
- Detection radii reference guide
- Focused on small-body (asteroid/comet) close approaches

#### 7. **SPK Binary Files** (`/spk`)
- Generate SPICE SPK trajectory files
- Binary format for:
  - Mission planning
  - Visualization tools (Cosmographia, etc.)
  - SPICE toolkit integration
  - Navigation software
- Asteroid and comet support
- Usage instructions included

#### 8. **Query History** (`/history`)
- Track all API queries
- Local browser storage
- Organized by ephemeris type
- Quick reference to previous searches
- Clear history option

## 🎨 Design Features

### Space Theme
- **Deep space color palette**: Navy, purple, blue, cyan
- **Cosmic gradients**: Multiple gradient overlays
- **3D effects**: Card hover transformations, floating animations
- **Animated starfield**: Canvas-based particle system
- **Glassmorphism**: Frosted glass effect on cards
- **Glowing accents**: Pulsing glow animations

### Design System
- **Semantic tokens**: All colors defined in design system
- **HSL color space**: Consistent color management
- **Custom animations**: Float, glow, spin-slow
- **Responsive design**: Mobile-first approach
- **Custom scrollbar**: Themed scrollbar styling

### UI Components
- Custom sidebar navigation
- Glassmorphic cards
- Gradient buttons with cosmic variant
- Loading states
- Toast notifications
- Form controls with validation

## 🔧 Technical Implementation

### API Integration
- **CORS Proxy**: Uses `https://proxi.jammesop007.workers.dev/` for API calls
- **Flexible parameters**: Support for all API parameters
- **Error handling**: Comprehensive error management
- **Format support**: JSON and plain text responses

### Code Structure
```
src/
├── components/
│   ├── Dashboard/
│   │   ├── DashboardLayout.tsx    # Main layout wrapper
│   │   ├── Sidebar.tsx            # Navigation sidebar
│   │   └── StatsCard.tsx          # Stat display cards
│   ├── ui/                        # Shadcn components
│   ├── StarField.tsx              # Animated background
│   └── LoadingSpinner.tsx         # Loading indicator
├── lib/
│   ├── horizons-api.ts            # API client & utilities
│   └── utils.ts                   # Helper functions
├── pages/
│   ├── Dashboard.tsx              # Home page
│   ├── Search.tsx                 # Object search
│   ├── Observer.tsx               # Observer ephemeris
│   ├── Vectors.tsx                # State vectors
│   ├── Elements.tsx               # Orbital elements
│   ├── Approach.tsx               # Close approaches
│   ├── SPK.tsx                    # SPK file generator
│   ├── History.tsx                # Query history
│   └── NotFound.tsx               # 404 page
└── index.css                      # Design system & styles
```

### Key Technologies
- **React 18** with TypeScript
- **Vite** for blazing fast builds
- **Tailwind CSS** for styling
- **Shadcn UI** for components
- **React Router** for navigation
- **React Query** for data fetching
- **Sonner** for toast notifications

## 🌟 Unique Features

1. **Complete API Coverage**: Every parameter and ephemeris type supported
2. **Beautiful UI**: Professional space-themed design
3. **3D Animations**: Smooth floating and glow effects
4. **Starfield Background**: Dynamic particle system
5. **Responsive**: Works on all screen sizes
6. **Type-Safe**: Full TypeScript implementation
7. **Semantic Design**: Design system with HSL tokens
8. **SEO Optimized**: Meta tags and descriptions

## 📊 API Parameters Supported

### Common Parameters
- `format` (json, text)
- `COMMAND` (object selection)
- `OBJ_DATA` (object summary)
- `MAKE_EPHEM` (ephemeris generation)
- `EPHEM_TYPE` (5 types supported)

### Ephemeris-Specific
- `CENTER` (observer location)
- `REF_PLANE` (reference frame)
- `START_TIME` / `STOP_TIME` (time range)
- `STEP_SIZE` (output stepping)
- `QUANTITIES` (observer output selection)
- `OUT_UNITS` (distance/time units)
- `VEC_CORR` (vector corrections)
- And 40+ more parameters!

## 🎯 Use Cases

- **Amateur Astronomy**: Plan observations, track objects
- **Research**: Orbital mechanics calculations
- **Education**: Learn about celestial mechanics
- **Mission Planning**: Trajectory analysis
- **Software Development**: Integrate ephemeris data
- **Visualization**: Generate data for 3D tools

## 🚀 Getting Started

1. Open the dashboard
2. Browse the home page for an overview
3. Use Object Search to find celestial bodies
4. Generate ephemeris data using the various tools
5. View results in JSON format
6. Check history to review previous queries

## 📝 Notes

- Uses NASA JPL Horizons System data
- CORS proxy required for API access
- All queries are logged locally
- No server-side storage
- Real-time data from JPL

## 🎨 Color Palette

- **Primary**: Purple (270° 80% 65%)
- **Secondary**: Cyan (195° 90% 55%)
- **Accent**: Magenta (280° 85% 60%)
- **Background**: Deep Space Navy (240° 20% 6%)
- **Foreground**: Light (210° 40% 98%)

## 📚 Resources

- [NASA JPL Horizons System](https://ssd.jpl.nasa.gov/horizons/)
- [Horizons API Documentation](https://ssd-api.jpl.nasa.gov/doc/horizons.html)
- [SPICE Toolkit](https://naif.jpl.nasa.gov/naif/toolkit.html)

---

Built with ❤️ for space exploration enthusiasts
