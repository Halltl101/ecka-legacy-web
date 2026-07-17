import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy text-ink">
      <div className="text-center">
        <h1 className="font-display text-6xl mb-4">404</h1>
        <p className="text-xl text-ink-muted mb-6">Oops! Page not found</p>
        <a href="/" className="text-[11px] uppercase tracking-[0.22em] text-gold hover:text-ink transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
