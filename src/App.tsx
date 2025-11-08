import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Observer from "./pages/Observer";
import Vectors from "./pages/Vectors";
import Elements from "./pages/Elements";
import Approach from "./pages/Approach";
import SPK from "./pages/SPK";
import History from "./pages/History";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/observer" element={<Observer />} />
          <Route path="/vectors" element={<Vectors />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/spk" element={<SPK />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
