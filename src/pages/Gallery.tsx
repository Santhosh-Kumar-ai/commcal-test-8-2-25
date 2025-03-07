
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { Search, X } from 'lucide-react';

// Sample gallery data
const galleryImages = [
  { id: 1, category: 'design', title: 'Minimalist Design Concept', description: 'A clean, modern approach to product design.' },
  { id: 2, category: 'product', title: 'Product Showcase', description: 'Our flagship product in natural environment.' },
  { id: 3, category: 'design', title: 'Interface Details', description: 'Close-up of the intuitive user interface.' },
  { id: 4, category: 'product', title: 'Product Collection', description: 'Our complete product family shown together.' },
  { id: 5, category: 'lifestyle', title: 'In Everyday Use', description: 'See how our products integrate with daily life.' },
  { id: 6, category: 'lifestyle', title: 'Customer Experience', description: 'Real people enjoying our solutions.' },
  { id: 7, category: 'design', title: 'Design Process', description: 'Behind the scenes of our creative process.' },
  { id: 8, category: 'product', title: 'Detail View', description: 'Highlighting the precision in every detail.' },
  { id: 9, category: 'lifestyle', title: 'Real World Application', description: 'Our products making a difference.' }
];

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  
  useEffect(() => {
    // Set page title
    document.title = 'commcal - Gallery';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    let result = galleryImages;
    
    // Apply category filter
    if (filter !== 'all') {
      result = result.filter(image => image.category === filter);
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        image => 
          image.title.toLowerCase().includes(query) || 
          image.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredImages(result);
  }, [filter, searchQuery]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-xs uppercase tracking-wider font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 animate-fade-in">Our Gallery</span>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-in">
                Visual <span className="text-gradient">Excellence</span>
              </h1>
              
              <p className="text-muted-foreground text-lg mb-8 animate-slide-in" style={{ animationDelay: '0.1s' }}>
                Explore our collection of high-quality images showcasing our products and design philosophy.
              </p>
            </div>
          </div>
        </section>
        
        {/* Gallery Controls */}
        <section className="py-8 px-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === 'all' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter('design')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === 'design' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                >
                  Design
                </button>
                <button
                  onClick={() => setFilter('product')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === 'product' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                >
                  Products
                </button>
                <button
                  onClick={() => setFilter('lifestyle')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === 'lifestyle' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                >
                  Lifestyle
                </button>
              </div>
              
              {/* Search */}
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={16} className="text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Search gallery..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 bg-white border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <X size={16} className="text-muted-foreground hover:text-foreground" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Gallery Grid */}
        <section className="py-8 px-6 pb-16">
          <div className="container mx-auto">
            {filteredImages.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No images found matching your criteria.</p>
                <button
                  onClick={() => {
                    setFilter('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages.map((image) => (
                  <div 
                    key={image.id} 
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border group"
                  >
                    {/* Image Container */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-blue-400/10 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-lg font-medium text-primary">Gallery Image</p>
                      </div>
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button className="px-4 py-2 bg-white text-foreground rounded-full text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                          View Full Size
                        </button>
                      </div>
                    </div>
                    
                    {/* Image Info */}
                    <div className="p-4">
                      <div className="flex items-center mb-2">
                        <span className="text-xs px-2 py-1 bg-secondary rounded-full uppercase tracking-wider">
                          {image.category}
                        </span>
                      </div>
                      <h3 className="font-medium mb-1">{image.title}</h3>
                      <p className="text-sm text-muted-foreground">{image.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Gallery;
