
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  useEffect(() => {
    // Set page title
    document.title = 'commcal - Contact Us';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    // Simulate API call with timeout
    setTimeout(() => {
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      toast.success('Your message has been sent successfully!', {
        description: 'We will get back to you as soon as possible.',
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-xs uppercase tracking-wider font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 animate-fade-in">Get In Touch</span>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-in">
                Contact <span className="text-gradient">Us</span>
              </h1>
              
              <p className="text-muted-foreground text-lg mb-8 animate-slide-in" style={{ animationDelay: '0.1s' }}>
                Have questions or want to learn more? We'd love to hear from you. Get in touch with our team today.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Address */}
              <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin size={24} className="text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                
                <p className="text-muted-foreground">
                  123 Innovation Drive<br />
                  Creative Valley, CA 94043<br />
                  United States
                </p>
              </div>
              
              {/* Contact */}
              <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone size={24} className="text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                
                <p className="text-muted-foreground mb-2">
                  <a href="tel:+15551234567" className="hover:text-primary transition-colors">+1 (555) 123-4567</a>
                </p>
                
                <p className="text-muted-foreground">
                  <a href="mailto:hello@commcal.com" className="hover:text-primary transition-colors">hello@commcal.com</a>
                </p>
              </div>
              
              {/* Hours */}
              <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock size={24} className="text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                
                <p className="text-muted-foreground">
                  Monday - Friday: 9am - 6pm<br />
                  Saturday: 10am - 4pm<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-border">
              <div className="grid md:grid-cols-2">
                {/* Map or Image */}
                <div className="bg-gradient-to-br from-primary/10 to-blue-400/10 min-h-96 flex items-center justify-center">
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-6">We'd Love To Hear From You</h3>
                    <p className="text-muted-foreground mb-6">
                      Whether you have a question about our products, pricing, or just want to say hello, we're here to help.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Mail size={18} className="text-primary mt-0.5 mr-3" />
                        <span className="text-muted-foreground">hello@commcal.com</span>
                      </div>
                      <div className="flex items-start">
                        <Phone size={18} className="text-primary mt-0.5 mr-3" />
                        <span className="text-muted-foreground">+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin size={18} className="text-primary mt-0.5 mr-3" />
                        <span className="text-muted-foreground">123 Innovation Drive, Creative Valley, CA</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Form */}
                <div className="p-8">
                  {formStatus.isSubmitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <CheckCircle size={32} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We'll get back to you as soon as possible.
                      </p>
                      <button
                        onClick={() => setFormStatus(prev => ({ ...prev, isSubmitted: false }))}
                        className="px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full text-sm font-medium transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
                      
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      
                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="Your email"
                        />
                      </div>
                      
                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="support">Product Support</option>
                          <option value="feedback">Feedback</option>
                          <option value="partnership">Partnership Opportunity</option>
                        </select>
                      </div>
                      
                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>
                      
                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={formStatus.isSubmitting}
                        className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
                      >
                        {formStatus.isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Send Message
                            <Send size={16} className="ml-2" />
                          </span>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Contact;
