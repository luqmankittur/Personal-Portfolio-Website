import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from '../components/SEO';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <SEO 
        title="Page Not Found (404 Error) - Return to Luqman Graphics Homepage"
        description="The page you're looking for doesn't exist. Return to Luqman Graphics to explore premium stream overlays, free downloads, and professional graphic design services."
        canonical={location.pathname}
      />
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Oops! This page seems to have disappeared into the creative void or never existed.
          </p>
          <p className="mb-8 text-muted-foreground">
            Don't worry, let's get you back to exploring some amazing designs!
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="btn-hero inline-flex items-center justify-center w-full"
          >
            Return to Home
          </Link>
          <Link 
            to="/downloads" 
            className="btn-secondary inline-flex items-center justify-center w-full"
          >
            Browse Downloads
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
