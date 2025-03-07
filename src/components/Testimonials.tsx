
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "The attention to detail is remarkable. Every interaction feels thoughtful and purposeful. It's rare to find products that combine such elegant design with practical functionality.",
    author: "Alexandra Chen",
    title: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&auto=format&fit=crop&q=80"
  },
  {
    text: "I've been using this product for six months now, and it has transformed my workflow. The minimalist approach eliminates distractions and lets me focus on what matters.",
    author: "Michael Roberts",
    title: "Product Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format&fit=crop&q=80"
  },
  {
    text: "The thoughtfulness in the design shows a deep understanding of user needs. It's not just beautiful—it's functional in ways that make my daily tasks more efficient.",
    author: "Sophia Kim",
    title: "UX Researcher",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&auto=format&fit=crop&q=80"
  },
  {
    text: "This product exemplifies 'less but better.' They've stripped away everything unnecessary while perfecting what remains. The result is something that feels essential.",
    author: "David Martinez",
    title: "Design Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&auto=format&fit=crop&q=80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    resetAutoplay();
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    resetAutoplay();
  };

  const resetAutoplay = () => {
    if (timer.current) clearTimeout(timer.current);
    startAutoplay();
  };

  const startAutoplay = () => {
    timer.current = setTimeout(() => {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => {
    const onAnimationEnd = () => {
      setIsAnimating(false);
      if (timer.current) clearTimeout(timer.current);
      startAutoplay();
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('animationend', onAnimationEnd);
      return () => {
        container.removeEventListener('animationend', onAnimationEnd);
      };
    }
  }, [currentIndex]);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-xs uppercase tracking-wider font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We take pride in delivering exceptional experiences that our clients love to talk about.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-4 -top-4 text-primary opacity-20">
            <Quote size={80} />
          </div>
          
          <div
            ref={containerRef}
            className={`overflow-hidden relative bg-secondary/30 rounded-2xl p-8 md:p-12 shadow-sm ${
              isAnimating ? 'animate-fade-out' : 'animate-fade-in'
            }`}
          >
            <div>
              <p className="text-lg md:text-xl leading-relaxed mb-8 relative z-10">
                {testimonials[currentIndex].text}
              </p>
              
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author}
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold">{testimonials[currentIndex].author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].title}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button 
              onClick={handlePrev}
              className="h-10 w-10 rounded-full border border-border flex items-center justify-center mr-2 hover:bg-primary/5 hover:border-primary/20 transition-colors"
              aria-label="Previous testimonial"
              disabled={isAnimating}
            >
              <ChevronLeft size={18} />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating || index === currentIndex) return;
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    resetAutoplay();
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'w-6 bg-primary' : 'w-2 bg-muted'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  disabled={isAnimating}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="h-10 w-10 rounded-full border border-border flex items-center justify-center ml-2 hover:bg-primary/5 hover:border-primary/20 transition-colors"
              aria-label="Next testimonial"
              disabled={isAnimating}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
