
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { Clock, Users, Award, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    // Set page title
    document.title = 'commcal - About Us';
    
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
              <span className="inline-block text-xs uppercase tracking-wider font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 animate-fade-in">About Us</span>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-in">
                Our <span className="text-gradient">Story</span>
              </h1>
              
              <p className="text-muted-foreground text-lg mb-8 animate-slide-in" style={{ animationDelay: '0.1s' }}>
                Discover the passion and principles behind our brand and the team that makes it all possible.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-2xl aspect-square md:aspect-auto md:h-96 flex items-center justify-center">
                <p className="text-lg font-medium text-primary">Company Image</p>
              </div>
              
              {/* Content */}
              <div>
                <span className="inline-block text-xs uppercase tracking-wider font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">Our Mission</span>
                
                <h2 className="text-3xl font-bold mb-6">
                  Creating Products That <span className="text-gradient">Matter</span>
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  We believe in the power of thoughtful design to transform everyday experiences. Our mission is to create products that blend beauty with functionality, simplicity with innovation.
                </p>
                
                <p className="text-muted-foreground mb-6">
                  Founded in 2018, we've grown from a small team with big ideas to an industry leader known for our attention to detail and user-centered approach. Every product we create is a testament to our commitment to excellence.
                </p>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Clock size={20} className="text-primary" />
                    </div>
                    <span className="font-medium">5+ Years of Excellence</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Users size={20} className="text-primary" />
                    </div>
                    <span className="font-medium">20+ Team Members</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Award size={20} className="text-primary" />
                    </div>
                    <span className="font-medium">12 Industry Awards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-xs uppercase tracking-wider font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">Core Values</span>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Principles That <span className="text-gradient">Guide Us</span>
              </h2>
              
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our values shape every decision we make and every product we create.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-secondary/20 rounded-2xl p-8 hover:bg-secondary/30 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Heart size={24} className="text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">Passion for Excellence</h3>
                
                <p className="text-muted-foreground">
                  We're driven by a deep passion for creating exceptional products that exceed expectations and stand the test of time.
                </p>
              </div>
              
              {/* Value 2 */}
              <div className="bg-secondary/20 rounded-2xl p-8 hover:bg-secondary/30 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Users size={24} className="text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">User-Centered Design</h3>
                
                <p className="text-muted-foreground">
                  We believe that great design starts with understanding the people who use our products, their needs, and their contexts.
                </p>
              </div>
              
              {/* Value 3 */}
              <div className="bg-secondary/20 rounded-2xl p-8 hover:bg-secondary/30 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Award size={24} className="text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">Continuous Innovation</h3>
                
                <p className="text-muted-foreground">
                  We never stop questioning, learning, and improving. Innovation is at the core of everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-xs uppercase tracking-wider font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">Our Team</span>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet The <span className="text-gradient">People</span> Behind Our Success
              </h2>
              
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A diverse group of passionate individuals united by a common goal.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-blue-400/10 flex items-center justify-center">
                  <p className="text-lg font-medium text-primary">Team Member</p>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-lg">Sarah Johnson</h3>
                  <p className="text-primary text-sm mb-2">Founder & CEO</p>
                  <p className="text-muted-foreground text-sm">
                    Visionary leader with a passion for innovative design and user experience.
                  </p>
                </div>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-blue-400/10 flex items-center justify-center">
                  <p className="text-lg font-medium text-primary">Team Member</p>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-lg">David Chen</h3>
                  <p className="text-primary text-sm mb-2">Design Director</p>
                  <p className="text-muted-foreground text-sm">
                    Award-winning designer with an eye for detail and aesthetic perfection.
                  </p>
                </div>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-blue-400/10 flex items-center justify-center">
                  <p className="text-lg font-medium text-primary">Team Member</p>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-lg">Mia Rodriguez</h3>
                  <p className="text-primary text-sm mb-2">Product Manager</p>
                  <p className="text-muted-foreground text-sm">
                    Strategic thinker focused on creating products that solve real problems.
                  </p>
                </div>
              </div>
              
              {/* Team Member 4 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-blue-400/10 flex items-center justify-center">
                  <p className="text-lg font-medium text-primary">Team Member</p>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-lg">James Wilson</h3>
                  <p className="text-primary text-sm mb-2">Chief Technology Officer</p>
                  <p className="text-muted-foreground text-sm">
                    Technical genius with a knack for turning complex problems into elegant solutions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Join Our Team
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default About;
