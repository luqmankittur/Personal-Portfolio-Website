import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, AlertCircle , Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  // Google Sheets script URL - replace with your own
  const scriptURL = 'https://script.google.com/macros/s/AKfycbw14LqMdZY_lmgepn2GjPv1L7AAdCxLUu96ERcx6D6N74VazurmSLcUjZ4YAWWCvz-p/exec';

  const validateForm = () => {
    const newErrors: {
      name?: string;
      email?: string;
      message?: string;
    } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Create FormData object with the form data and timestamp
      const formDataToSend = new FormData();
      formDataToSend.append('Name', formData.name);
      formDataToSend.append('Email', formData.email);
      formDataToSend.append('Message', formData.message);
      
      // Add timestamp (date and time)
      const now = new Date();
      const timestamp = now.toLocaleString(); // This will include both date and time
      formDataToSend.append('Timestamp', timestamp);
      
      // Send to Google Sheets
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formDataToSend
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        throw new Error('Network response was not ok');
      }
      
    } catch (error) {
      console.error('Error!', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Me',
      details: 'kitturluqman007@gmail.com',
      link: 'mailto:kitturluqman007@gmail.com'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      details: 'Luqman Kittur',
      link: 'https://www.linkedin.com/in/luqmankittur'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Germany',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. 
            Send me a message and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to bring your ideas to life? Whether you need a complete brand identity, 
                stunning graphics, or just want to say hello, I'm always excited to connect 
                with new people and explore creative possibilities.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-center space-x-4 p-4 glass-card rounded-xl hover:border-primary/50 transition-all duration-300"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target={item.title === 'LinkedIn' ? '_blank' : undefined}
                          rel={item.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                        >
                          {item.details}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.details}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Response Time */}
            <div className="glass-card p-6 rounded-xl">
              <h4 className="font-semibold text-foreground mb-2">Quick Response</h4>
              <p className="text-muted-foreground text-sm">
                I typically respond quick. For urgent projects, 
                feel free to reach out directly via email.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl animate-slide-up">
            <div className="space-y-6">
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : ''
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle size={14} className="mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : ''
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle size={14} className="mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical ${
                    errors.message ? 'border-red-500 focus:ring-red-500' : ''
                  }`}
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle size={14} className="mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center h-12 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="ml-2" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center justify-center text-green-400 bg-green-400/10 p-3 rounded-lg">
                  <Check size={18} className="mr-2" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center justify-center text-red-400 bg-red-400/10 p-3 rounded-lg">
                  <AlertCircle size={18} className="mr-2" />
                  <span>Something went wrong. Please try again or contact me directly.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;