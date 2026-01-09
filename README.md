
# 🌌 Horizon API Explorer
## The Ultimate Unofficial Interface for NASA JPL Horizons

<p align="center">
  <img src="assets/banner.png" alt="Horizon API Explorer Banner" />
</p>

<p align="center">
  <strong>
    A modern, visual, human-first dashboard for NASA’s JPL Horizons System.<br/>
    Mission-grade data — without mission-grade pain.
  </strong>
</p>

<p align="center">
  <a href="https://horizon-api-explorer.vercel.app/">🌍 Live Demo</a> ·
  <a href="https://github.com/maruf009sultan/Horizon-API-Explorer/issues">🐞 Report Bug</a> ·
  <a href="https://github.com/maruf009sultan/Horizon-API-Explorer/issues">✨ Request Feature</a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/maruf009sultan/Horizon-API-Explorer?style=social" />
  <img src="https://img.shields.io/github/forks/maruf009sultan/Horizon-API-Explorer?style=social" />
  <img src="https://img.shields.io/github/issues/maruf009sultan/Horizon-API-Explorer" />
  <img src="https://img.shields.io/github/license/maruf009sultan/Horizon-API-Explorer" />
</p>

---

## 🚀 What Is This?

**Horizon API Explorer** is a **full-featured web interface** for the  
**NASA JPL Horizons System** — the same system used by NASA engineers, astronomers, and mission planners to compute:

- Planetary positions  
- Spacecraft trajectories  
- Orbital elements  
- Near-Earth object encounters  

This project **does not replace Horizons**.  
It **unlocks it**.

---

## 🧠 Why This Exists

NASA Horizons is one of the most powerful scientific tools ever built — and one of the least approachable.

### The problems:
- Command-line & telnet-era UX
- Cryptic parameter syntax
- No real-time validation
- No visualization
- Extremely steep learning curve

### The goal:
> Make **authoritative space data** usable by **humans**, not just engineers.

**Horizon API Explorer** keeps the science **intact** and fixes the experience.

---

## 🧑‍🚀 Who This Is For

| Audience | Why It’s Useful |
|--------|----------------|
| Students | Learn orbital mechanics visually |
| Educators | Teach using real NASA data |
| Amateur astronomers | Plan observations |
| Researchers | Generate ephemerides quickly |
| Engineers | State vectors & SPK kernels |
| Developers | Programmatic Horizons access |

---

## 🌠 What You Can Do

### 🔭 Explore the Entire Solar System
- **1.2M+ asteroids**
- **3,900+ comets**
- **290+ moons**
- **All planets & dwarf planets**
- **200+ spacecraft**
- **Lagrange points & barycenters**

### 📊 Generate Professional Outputs
- Observer ephemeris (RA/DEC, Az/El, magnitude)
- Cartesian state vectors
- Osculating orbital elements
- Close-approach tables (NEOs)
- SPICE SPK binary files

### 📦 Export & Share
- JSON
- CSV
- PDF
- Binary `.bsp`

---

## ✨ Feature Matrix

| Feature | Route | Description |
|------|------|-------------|
| Object Search | `/search` | Search by name, ID, designation |
| Observer Ephemeris | `/observer` | Sky position tables |
| State Vectors | `/vectors` | Position & velocity |
| Orbital Elements | `/elements` | Keplerian parameters |
| Close Approaches | `/approach` | NEO flybys |
| SPK Generator | `/spk` | SPICE kernels |
| Query History | `/history` | Local saved queries |

---

## 🎨 UI & Design Philosophy

- 🌌 Space-themed visuals (starfield, gradients)
- 🧊 Glassmorphism cards
- 🪐 Subtle 3D hover effects
- 🌙 Dark-mode first (astronomy optimized)
- ⚡ Fast, responsive, zero lag

UX rule:
> **Never hide the science — only remove friction.**

---

## 🛠️ Technologies Used

### Core Framework
- **React 18** — component-driven UI
- **TypeScript 5.8** — strict type safety
- **Vite** — instant dev & fast builds

### UI & Styling
- **Tailwind CSS** — utility-first styling
- **shadcn/ui + Radix UI** — accessible components
- **Lucide Icons** — consistent iconography
- **Next Themes** — dark/light mode

### Data & State
- **TanStack React Query** — server-state caching
- **React Hook Form** — complex forms
- **Zod** — schema validation
- **React Router** — client-side routing

### Tooling
- **ESLint** — code quality
- **PostCSS** — CSS processing
- **SWC** — fast compilation
- **GitHub Actions** — CI/CD

---

## 🏗️ How This Is Built (Architecture)

```mermaid
graph LR
  UI[React UI] --> Query[React Query]
  Query --> Client[Horizons API Client]
  Client --> Proxy[CORS Proxy]
  Proxy --> NASA[NASA JPL Horizons API]
````

### Why a CORS Proxy?

NASA’s API is **not browser-accessible**.
The proxy allows **safe, read-only access** with no data modification.

---

## 📖 How To Use (Step-by-Step)

### 1️⃣ Search an Object

* Go to `/search`
* Enter name, ID, or designation (`Mars`, `433`, `1P/Halley`)
* Select from suggestions

### 2️⃣ Generate Data

Choose a module:

* **Observer** → sky positions
* **Vectors** → position & velocity
* **Elements** → orbital parameters
* **Approach** → close encounters
* **SPK** → binary kernels

### 3️⃣ Configure Parameters

* Time range
* Observer location
* Reference frames
* Output units
* Correction models

### 4️⃣ Export or Share

* Download results
* Reuse previous queries via History

---

## ✏️ How To Modify / Extend

### Add a New Feature Page

1. Create page in `src/pages/`
2. Add route in `App.tsx`
3. Create form schema (Zod)
4. Call Horizons client
5. Render output

### Modify API Parameters

* Edit `src/lib/horizons-api.ts`
* Parameters map 1:1 with NASA docs

### Customize UI

* Tailwind config → `tailwind.config.js`
* Components → `src/components/ui/`

---

## 🚀 Local Development

### Prerequisites

* Node.js 18+
* npm or yarn

```bash
git clone https://github.com/maruf009sultan/Horizon-API-Explorer.git
cd Horizon-API-Explorer
npm install
npm run dev
```

Open → **[http://localhost:8080](http://localhost:8080)**

---

## 🌍 Deployment Guide

### Vercel / Netlify

* Import repo
* Set build command: `npm run build`
* Output: `dist`

### Docker

```bash
docker build -t horizon-api-explorer .
docker run -p 3000:3000 horizon-api-explorer
```

### Environment Variables

```env
VITE_HORIZONS_PROXY=https://proxi.jammesop007.workers.dev
```

---

## ⚡ Performance Principles

* Minimal bundle size
* Aggressive caching
* Progressive disclosure
* No unnecessary abstractions

---

## 🗺️ Roadmap

* Saved presets & sessions
* Multilingual UI
* Educational walkthroughs
* Optional authentication

---

## 🤝 Contributing

This project values:

* Clean code
* Clear UX
* Scientific integrity

Fork → Branch → Code → Lint → PR

---

## 📜 License

MIT — free for personal, educational, research & commercial use.

---

## 🌌 Final Note

> **Horizon API Explorer exists because space data should not be painful.**
>
> Same NASA data.
> Better human experience.
