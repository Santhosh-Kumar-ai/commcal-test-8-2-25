
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-400/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left Side: Image */}
            <div className="bg-primary/10 h-64 md:h-auto">
              <div className="h-full w-full flex items-center justify-center">
                <p className="text-lg font-medium text-primary">CTA Image</p>
              </div>
            </div>
            
            {/* Right Side: Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to <span className="text-gradient">Experience</span> the Difference?
              </h2>
              
              <p className="text-muted-foreground mb-8">
                Join thousands of satisfied customers who have transformed their workflow with our intuitive, elegantly designed products.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-full inline-flex items-center justify-center text-base font-medium transition-all duration-200 hover:bg-primary/90 shadow-sm hover:shadow"
                >
                  Get Started Now
                  <ArrowRight size={16} className="ml-2" />
                </Link>
                
                <Link
                  to="/products"
                  className="px-6 py-3 rounded-full inline-flex items-center justify-center text-base font-medium border border-border hover:border-primary/20 transition-all duration-200 hover:bg-primary/5"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
