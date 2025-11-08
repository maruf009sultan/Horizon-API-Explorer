import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="fixed top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: "3s" }} />
      
      <div className="text-center relative z-10 max-w-2xl px-6">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <AlertTriangle className="w-24 h-24 text-primary animate-glow" />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
        
        <h1 className="mb-4 text-8xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          404
        </h1>
        
        <h2 className="mb-4 text-3xl font-bold text-foreground">
          Lost in Space
        </h2>
        
        <p className="mb-8 text-lg text-muted-foreground">
          The celestial coordinates you're looking for don't exist in our system. 
          Let's navigate you back to familiar territory.
        </p>
        
        <Button 
          onClick={() => navigate("/")}
          size="lg"
          variant="cosmic"
        >
          <Home className="mr-2 w-4 h-4" />
          Return to Dashboard
        </Button>
        
        <div className="mt-8 text-sm text-muted-foreground">
          Attempted route: <code className="bg-muted/50 px-2 py-1 rounded">{location.pathname}</code>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
