
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '0.1');
        const rotateX = y * 10 * speed;
        const rotateY = -x * 10 * speed;
        
        (el as HTMLElement).style.transform = 
          `translate3d(${x * 20 * speed}px, ${y * 20 * speed}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="min-h-[90vh] flex flex-col justify-center items-center pt-24 pb-16 px-6 relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-[20%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-[20%] w-80 h-80 rounded-full bg-blue-400/5 blur-3xl"></div>
      
      {/* Floating elements - will move with mouse */}
      <div className="parallax absolute top-32 left-1/4 w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm" data-speed="0.12"></div>
      <div className="parallax absolute bottom-32 right-1/4 w-12 h-12 rounded-full bg-blue-400/20 backdrop-blur-sm" data-speed="0.08"></div>
      <div className="parallax absolute top-1/2 left-1/5 w-6 h-6 rounded-sm bg-primary/10 backdrop-blur-sm rotate-45" data-speed="0.15"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs uppercase tracking-wider font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 animate-fade-in">Innovative Solutions</span>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-slide-in">
            <span className="text-gradient">Elegance</span> through simplicity and careful design
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 mx-auto max-w-2xl animate-slide-in" style={{ animationDelay: '0.1s' }}>
            Creating beautifully crafted digital experiences with meticulous attention to detail and focus on what truly matters.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <Link
              to="/products"
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3 rounded-full inline-flex items-center justify-center text-base font-medium transition-all duration-200 hover:bg-primary/90 shadow-sm hover:shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Explore Products
              <ArrowRight size={16} className="ml-2" />
            </Link>
            
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3 rounded-full inline-flex items-center justify-center text-base font-medium border border-border hover:border-primary/20 transition-all duration-200 hover:bg-primary/5"
            >
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* Product image or illustration could go here */}
        <div className="mt-16 max-w-4xl mx-auto parallax" data-speed="0.04">
          <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-white to-secondary shadow-xl">
            <div className="w-full h-full glass p-8 flex items-center justify-center">
              <p className="text-lg font-medium text-muted-foreground">Product Showcase Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
