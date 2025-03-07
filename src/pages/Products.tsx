
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const products = [
  {
    id: 1,
    name: 'Premium Product',
    description: 'A beautifully crafted product with attention to every detail.',
    price: '$99',
    features: ['High quality', 'Elegant design', 'Intuitive interface', 'Premium support']
  },
  {
    id: 2,
    name: 'Essential Product',
    description: 'The perfect balance of functionality and simplicity.',
    price: '$49',
    features: ['Quality materials', 'Clean design', 'User-friendly', 'Regular updates']
  },
  {
    id: 3,
    name: 'Basic Product',
    description: 'Simple, effective, and affordable solution for everyone.',
    price: '$29',
    features: ['Durable construction', 'Minimalist design', 'Easy to use', 'Community support']
  }
];

const Products = () => {
  useEffect(() => {
    // Set page title
    document.title = 'commcal - Products';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-xs uppercase tracking-wider font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 animate-fade-in">Our Products</span>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-in">
                Explore Our <span className="text-gradient">Collection</span>
              </h1>
              
              <p className="text-muted-foreground text-lg mb-8 animate-slide-in" style={{ animationDelay: '0.1s' }}>
                Discover our range of premium products designed with precision and care to elevate your experience.
              </p>
            </div>
          </div>
        </section>
        
        {/* Products List */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border flex flex-col"
                >
                  {/* Product Image */}
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-blue-400/10 flex items-center justify-center">
                    <p className="text-lg font-medium text-primary">Product Image</p>
                  </div>
                  
                  {/* Product Details */}
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Product Action */}
                  <div className="p-6 pt-0 mt-auto">
                    <Link
                      to={`/products/${product.id}`}
                      className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-full inline-flex items-center justify-center text-sm font-medium transition-all duration-200"
                    >
                      View Details
                      <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Products;
