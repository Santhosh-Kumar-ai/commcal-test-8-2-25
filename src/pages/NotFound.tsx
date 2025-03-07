
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  useEffect(() => {
    // Set page title
    document.title = "commcal - Page Not Found";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <span className="inline-block text-xs uppercase tracking-wider font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">404 Error</span>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Oops!</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 px-5 py-2 border border-border rounded-full hover:bg-primary/5 hover:border-primary/20 transition-all"
            >
              <ArrowLeft size={16} />
              Go Back
            </button>
            
            <Link 
              to="/"
              className="flex items-center justify-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              <Home size={16} />
              Return Home
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
