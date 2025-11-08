const CORS_PROXY = "https://proxi.jammesop007.workers.dev/";
const BASE_URL = "https://ssd.jpl.nasa.gov/api/horizons.api";

export interface HorizonsParams {
  format?: "json" | "text";
  COMMAND?: string;
  OBJ_DATA?: "YES" | "NO";
  MAKE_EPHEM?: "YES" | "NO";
  EPHEM_TYPE?: "OBSERVER" | "VECTORS" | "ELEMENTS" | "SPK" | "APPROACH";
  CENTER?: string;
  START_TIME?: string;
  STOP_TIME?: string;
  STEP_SIZE?: string;
  QUANTITIES?: string;
  [key: string]: string | undefined;
}

export const buildHorizonsUrl = (params: HorizonsParams): string => {
  const queryParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.append(key, value);
    }
  });

  return `${CORS_PROXY}${BASE_URL}?${queryParams.toString()}`;
};

export const fetchHorizonsData = async (params: HorizonsParams) => {
  const url = buildHorizonsUrl(params);
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const contentType = response.headers.get("content-type");
    
    if (params.format === "json" || contentType?.includes("application/json")) {
      return await response.json();
    } else {
      return await response.text();
    }
  } catch (error) {
    console.error("Error fetching Horizons data:", error);
    throw error;
  }
};

// Predefined celestial objects - Comprehensive list
export const CELESTIAL_OBJECTS = {
  planets: [
    { id: "199", name: "Mercury" },
    { id: "299", name: "Venus" },
    { id: "399", name: "Earth" },
    { id: "499", name: "Mars" },
    { id: "599", name: "Jupiter" },
    { id: "699", name: "Saturn" },
    { id: "799", name: "Uranus" },
    { id: "899", name: "Neptune" },
    { id: "999", name: "Pluto" },
  ],
  moons: [
    { id: "301", name: "Moon (Earth)" },
    { id: "401", name: "Phobos (Mars)" },
    { id: "402", name: "Deimos (Mars)" },
    { id: "501", name: "Io (Jupiter)" },
    { id: "502", name: "Europa (Jupiter)" },
    { id: "503", name: "Ganymede (Jupiter)" },
    { id: "504", name: "Callisto (Jupiter)" },
    { id: "601", name: "Mimas (Saturn)" },
    { id: "602", name: "Enceladus (Saturn)" },
    { id: "603", name: "Tethys (Saturn)" },
    { id: "604", name: "Dione (Saturn)" },
    { id: "605", name: "Rhea (Saturn)" },
    { id: "606", name: "Titan (Saturn)" },
    { id: "607", name: "Hyperion (Saturn)" },
    { id: "608", name: "Iapetus (Saturn)" },
    { id: "701", name: "Ariel (Uranus)" },
    { id: "702", name: "Umbriel (Uranus)" },
    { id: "703", name: "Titania (Uranus)" },
    { id: "704", name: "Oberon (Uranus)" },
    { id: "705", name: "Miranda (Uranus)" },
    { id: "801", name: "Triton (Neptune)" },
  ],
  asteroids: [
    { id: "1;", name: "Ceres (dwarf planet)" },
    { id: "2;", name: "Pallas" },
    { id: "3;", name: "Juno" },
    { id: "4;", name: "Vesta" },
    { id: "5;", name: "Astraea" },
    { id: "6;", name: "Hebe" },
    { id: "7;", name: "Iris" },
    { id: "8;", name: "Flora" },
    { id: "10;", name: "Hygiea" },
    { id: "433;", name: "Eros (near-Earth)" },
    { id: "243;", name: "Ida" },
    { id: "253;", name: "Mathilde" },
    { id: "951;", name: "Gaspra" },
    { id: "99942;", name: "Apophis (potentially hazardous)" },
    { id: "1862;", name: "Apollo (near-Earth)" },
    { id: "1566;", name: "Icarus (near-Earth)" },
    { id: "4179;", name: "Toutatis (near-Earth)" },
    { id: "25143;", name: "Itokawa (visited by Hayabusa)" },
    { id: "101955;", name: "Bennu (visited by OSIRIS-REx)" },
    { id: "162173;", name: "Ryugu (visited by Hayabusa2)" },
  ],
  comets: [
    { id: "1P", name: "1P/Halley" },
    { id: "2P", name: "2P/Encke" },
    { id: "9P", name: "9P/Tempel 1" },
    { id: "19P", name: "19P/Borrelly" },
    { id: "67P", name: "67P/Churyumov-Gerasimenko (Rosetta)" },
    { id: "81P", name: "81P/Wild 2" },
    { id: "103P", name: "103P/Hartley 2" },
  ],
  spacecraft: [
    { id: "-125", name: "Mars Reconnaissance Orbiter" },
    { id: "-82", name: "Cassini" },
    { id: "-61", name: "Juno" },
    { id: "-98", name: "New Horizons" },
    { id: "-31", name: "Voyager 1" },
    { id: "-32", name: "Voyager 2" },
  ],
  dwarfPlanets: [
    { id: "999", name: "Pluto" },
    { id: "1;", name: "Ceres" },
    { id: "136199;", name: "Eris" },
    { id: "136108;", name: "Haumea" },
    { id: "136472;", name: "Makemake" },
  ],
};

// Common observer locations
export const OBSERVER_LOCATIONS = [
  { value: "500@399", label: "Geocentric (Earth center)" },
  { value: "568@399", label: "Mauna Kea Observatory, Hawaii" },
  { value: "675@399", label: "Palomar Observatory, California" },
  { value: "309@399", label: "Kitt Peak Observatory, Arizona" },
  { value: "645@399", label: "La Silla Observatory, Chile" },
  { value: "950@399", label: "Very Large Telescope (VLT), Chile" },
  { value: "I11@399", label: "Gemini North, Hawaii" },
  { value: "I41@399", label: "Gemini South, Chile" },
  { value: "608@399", label: "Keck Observatory, Hawaii" },
  { value: "662@399", label: "Hubble Space Telescope (HST)" },
  { value: "399", label: "Earth center (geocentric)" },
];

// Observer quantities - Complete list from JPL Horizons API
export const OBSERVER_QUANTITIES = [
  { value: "1", label: "Astrometric RA & DEC", description: "J2000 astrometric right ascension and declination" },
  { value: "2", label: "Apparent RA & DEC", description: "Apparent right ascension and declination with light-time correction" },
  { value: "3", label: "Rates: RA & DEC", description: "Time derivatives of RA and DEC" },
  { value: "4", label: "Apparent AZ & EL", description: "Apparent azimuth and elevation (horizon coordinates)" },
  { value: "5", label: "Rates: AZ & EL", description: "Time derivatives of azimuth and elevation" },
  { value: "6", label: "Satellite X & Y ang-separ", description: "Satellite angular separation in X and Y" },
  { value: "7", label: "Astrometric RA & DEC rates", description: "RA*cos(DEC) and DEC rate (arcsec/hr)" },
  { value: "8", label: "Constellation ID", description: "IAU constellation designation" },
  { value: "9", label: "Delta T (S-E-T)", description: "Sun-Earth-Target angle" },
  { value: "10", label: "Observer range & range-rate", description: "Distance and rate of change to observer" },
  { value: "11", label: "Satellite angular separation", description: "Planet-satellite angular distance" },
  { value: "12", label: "Target angular diameter", description: "Apparent angular size" },
  { value: "13", label: "Illuminated fraction", description: "Fraction of target illuminated by Sun" },
  { value: "14", label: "Defect of illumination", description: "Angular width of unilluminated limb" },
  { value: "15", label: "Target center phase angle", description: "Sun-Target-Observer angle" },
  { value: "16", label: "Surface brightness", description: "Visual magnitude per square arcsec" },
  { value: "17", label: "Apparent magnitude", description: "Visual magnitude V(mag)" },
  { value: "18", label: "Absolute magnitude", description: "Magnitude at 1 AU from Sun and Earth" },
  { value: "19", label: "Heliocentric range & range-rate", description: "Distance from Sun and rate" },
  { value: "20", label: "Observer sub-lon & sub-lat", description: "Observer-centered planetographic coordinates" },
  { value: "21", label: "Sun sub-lon & sub-lat", description: "Sub-solar point planetographic coordinates" },
  { value: "22", label: "Sub-Sun position angle", description: "North pole position angle" },
  { value: "23", label: "Sub-Obs position angle", description: "Target north pole to sub-observer point angle" },
  { value: "24", label: "Target primary elongation", description: "Sun-observer-target angle" },
  { value: "25", label: "North pole position angle", description: "Angle from north to target's north pole" },
  { value: "26", label: "North pole distance", description: "Angular distance to target's north pole" },
  { value: "27", label: "Heliocentric ecliptic lon & lat", description: "Ecliptic longitude and latitude" },
  { value: "28", label: "Apparent local sidereal time", description: "Local apparent sidereal time" },
  { value: "29", label: "Sky brightness", description: "Sky background brightness (mag/arcsec^2)" },
  { value: "30", label: "Local hour angle", description: "Local hour angle for topocentric observers" },
  { value: "31", label: "Phase angle bisector", description: "Phase angle bisector longitude" },
  { value: "32", label: "Satellite orbit plane angle", description: "Satellite orbit plane position angle" },
  { value: "33", label: "Galactic longitude & latitude", description: "Galactic coordinate system" },
  { value: "34", label: "Proper motion: RA & DEC", description: "Apparent proper motion in RA and DEC" },
  { value: "35", label: "Orbital plane angle", description: "Observer to orbital plane angle" },
  { value: "36", label: "Constellation ID & fraction", description: "Detailed constellation information" },
  { value: "37", label: "Target radial velocity", description: "Line-of-sight velocity" },
  { value: "38", label: "1-way light time", description: "Signal travel time from target" },
  { value: "39", label: "Observer primary distance", description: "Distance from observer to primary body" },
  { value: "40", label: "Visibility code", description: "Target visibility conditions" },
  { value: "41", label: "Satellite tracking rates", description: "Tracking rate for satellite" },
  { value: "42", label: "Moon phase", description: "Lunar phase angle and illumination" },
  { value: "43", label: "Target centered phase angle", description: "Alternative phase angle computation" },
];
