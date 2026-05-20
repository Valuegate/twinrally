import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/HomePage/Header';
import Footer from '@/components/layout/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      description: "Send us an email anytime",
      contact: "hello@twinrally.com",
      link: "mailto:hello@twinrally.com"
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Get instant help from our team",
      contact: "Start Chat",
      link: "#chat"
    },
    {
      icon: "📞",
      title: "Call Us",
      description: "Mon-Fri from 9am to 6pm",
      contact: "+1 (555) 123-TWIN",
      link: "tel:+15551238946"
    },
    {
      icon: "📍",
      title: "Visit Us",
      description: "Come say hello at our office",
      contact: "123 Twin Street, City, State 12345",
      link: "#location"
    }
  ];

  const faqs = [
    {
      question: "How do I join TwinRally?",
      answer: "Simply sign up on our platform, create your twin profile, and start connecting with twins worldwide!"
    },
    {
      question: "Is TwinRally free to use?",
      answer: "Yes! We offer a free forever plan with basic features. Premium features are available with our paid plans."
    },
    {
      question: "Can I host events on TwinRally?",
      answer: "Absolutely! You can create and host twin events, meetups, and festivals through our event hosting feature."
    },
    {
      question: "How do I verify my twin account?",
      answer: "We have a simple verification process that helps ensure our community remains authentic and safe for all twins."
    }
  ];

  return (
    <div className="min-h-screen bg-[#040E28] text-white">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#FBC2EB] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#A6C0EE] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-[#FBC2EB] via-[#FF9ECF] to-[#A6C0EE] bg-clip-text text-transparent">
                Get In Touch
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed mb-8">
                We'd love to hear from you. Reach out and let's start a conversation about your twin journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-gradient-to-r from-[#FBC2EB] to-[#A6C0EE] text-white font-bold rounded-full px-8 py-3 shadow-2xl">
                    Join Community
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-2 border-white/20 text-white font-bold rounded-full px-8 py-3 bg-white/5 backdrop-blur-sm">
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                alt="Twins connecting and communicating"
                className="rounded-3xl shadow-2xl w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FBC2EB]/20 to-[#A6C0EE]/20 rounded-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#FBC2EB]">Multiple Ways to Connect</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Choose your preferred method to get in touch with our team
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 backdrop-blur-sm text-center group cursor-pointer"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-white/70 text-sm mb-3">{method.description}</p>
                <a 
                  href={method.link} 
                  className="text-[#A6C0EE] font-semibold hover:text-[#FBC2EB] transition-colors duration-300"
                >
                  {method.contact}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#FBC2EB]/5 to-[#A6C0EE]/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#A6C0EE]">Send Us a Message</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Have questions about TwinRally? Want to share your twin story? 
                We're here to listen and help you on your twin journey.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">💌</div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Quick Response</h4>
                    <p className="text-white/70 text-sm">We typically respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🤝</div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Personal Support</h4>
                    <p className="text-white/70 text-sm">Get help from our dedicated twin community team</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🔒</div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Privacy First</h4>
                    <p className="text-white/70 text-sm">Your information is safe and secure with us</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FBC2EB] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#A6C0EE] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FBC2EB] focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#A6C0EE] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#FBC2EB] to-[#A6C0EE] text-white font-bold rounded-xl py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#FBC2EB]">Frequently Asked Questions</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Quick answers to common questions about TwinRally
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-white/70 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;