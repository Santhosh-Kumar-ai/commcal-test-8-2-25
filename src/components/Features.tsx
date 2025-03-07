
import React from 'react';
import { Zap, Shield, Heart, RefreshCw, Clock, Star } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance, delivering a smooth experience.'
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: 'Secure by Design',
    description: 'Built with security as a priority, protecting your data at every step.'
  },
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    title: 'Crafted with Care',
    description: 'Every detail meticulously designed with your needs in mind.'
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-primary" />,
    title: 'Always Updating',
    description: 'Continuous improvements and new features to enhance your experience.'
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: 'Time-Saving',
    description: 'Intuitive workflows that help you accomplish more in less time.'
  },
  {
    icon: <Star className="h-6 w-6 text-primary" />,
    title: 'Premium Quality',
    description: 'Only the highest quality components and materials used throughout.'
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs uppercase tracking-wider font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've meticulously crafted our solutions to deliver maximum value while maintaining simplicity and elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className="bg-primary/5 p-3 rounded-xl w-fit mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
