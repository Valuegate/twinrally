import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/HomePage/Header';
import Footer from '@/components/layout/Footer';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Joshua Fayomi",
      role: "Founder & CEO",
      bio: "Non twin with a passion for connecting people. Economist and Consultant with years of experience.",
      avatar: "👨‍💼",
      image: "https://ca.slack-edge.com/TCGE2RFJB-UCF6FC0DA-f5b5fe1f709a-512"
    },
    {
      name: "Rahul Singh",
      role: "Head of Product",
      bio: "Co-Founder | Tech Lead | Sn.Service Engineer | IT Enthusiast. Believes in creating inclusive digital spaces for unique communities.",
      avatar: "👩‍💻",
      image: "https://ca.slack-edge.com/TCGE2RFJB-UCGE2RFN3-be6c5234de9a-512"
    },
    {
      name: "Faith Onwuemeri",
      role: "Product Manager",
      bio: "Non-Identical twin with passion for building meaningful offline connections.",
      avatar: "👨‍👧‍👦",
      image: "https://ca.slack-edge.com/TCGE2RFJB-U090WKAM9LH-82237c62a0a0-512"
    },
    {
      name: "Wasiu Oseni",
      role: "Community Manager | Team Lead",
      bio: "Team Lead for Twin Rally. Backend Developer that ensures platform supports twin wellbeing.",
      avatar: "👩‍⚕️",
      image: "https://ca.slack-edge.com/TCGE2RFJB-U09CWUAS9H8-83f9136c4d38-512"
    }
  ];

  const values = [
    {
      icon: "🤝",
      title: "Authentic Connections",
      description: "We believe in fostering genuine relationships that celebrate the unique twin bond.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop"
    },
    {
      icon: "🌍",
      title: "Global Community",
      description: "Breaking geographical barriers to unite twins from every corner of the world.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop"
    },
    {
      icon: "🎉",
      title: "Celebration",
      description: "Every twin story deserves to be celebrated and every connection cherished.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop"
    },
    {
      icon: "🔒",
      title: "Safe Space",
      description: "A secure environment where twins can share openly and connect confidently.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    }
  ];

  const milestones = [
    { 
      year: "2023", 
      event: "TwinRally Founded", 
      description: "Concept born from twin founders' vision",
      image: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=400&h=300&fit=crop"
    },
    { 
      year: "2024", 
      event: "Platform Launch", 
      description: "First version released to early users",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    { 
      year: "2024", 
      event: "10K Twins Joined", 
      description: "Reached milestone of 10,000 registered twins",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop"
    },
    { 
      year: "2025", 
      event: "Global Festival", 
      description: "First international twin festival planned",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop"
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
                About TwinRally
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed">
                Where twins unite, celebrate, and build lifelong connections across the globe.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                alt="Twins connecting globally"
                className="rounded-3xl shadow-2xl w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FBC2EB]/20 to-[#A6C0EE]/20 rounded-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop" 
                alt="Twin community celebration"
                className="rounded-3xl shadow-2xl w-full h-64 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040E28] to-transparent rounded-3xl"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#FBC2EB]">Our Story</h2>
              <div className="space-y-4 text-white/80 text-lg leading-relaxed">
                <p>
                  TwinRally was born from a simple realization: while twins share an incredible bond, 
                  they often lack dedicated spaces to connect with other twins worldwide.
                </p>
                <p>
                  Founded by twins for twins, our platform combines social networking, event hosting, 
                  and community engagement to create the ultimate destination for twin connections.
                </p>
                <p>
                  From daily conversations to global festivals, we're building a world where every 
                  twin can find their community and celebrate their unique identity.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-[#FBC2EB] mb-2">10K+</div>
                  <div className="text-white/60 text-sm">Twins Connected</div>
                </div>
                <div className="text-center bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-[#A6C0EE] mb-2">50+</div>
                  <div className="text-white/60 text-sm">Countries</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#FBC2EB]/5 to-[#A6C0EE]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm relative overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" 
                alt="Mission"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="relative z-10">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-[#FBC2EB] mb-4">Our Mission</h3>
                <p className="text-white/80 leading-relaxed">
                  To create the world's most comprehensive platform exclusively for twins, 
                  providing tools for connection, celebration, and community building that 
                  honor the unique twin experience.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm relative overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop" 
                alt="Vision"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="relative z-10">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="text-2xl font-bold text-[#A6C0EE] mb-4">Our Vision</h3>
                <p className="text-white/80 leading-relaxed">
                  A world where twins are united through shared experiences, celebrations, 
                  and lifelong connections—both online and offline, breaking all geographical 
                  and cultural boundaries.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#FBC2EB]">Our Values</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The principles that guide everything we do at TwinRally
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 backdrop-blur-sm text-center group cursor-pointer relative overflow-hidden"
              >
                <img 
                  src={value.image}
                  alt={value.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-10"
                />
                <div className="relative z-10">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#FBC2EB]/5 to-[#A6C0EE]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#A6C0EE]">Our Journey</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              From concept to global community - the TwinRally story so far
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className="lg:w-1/2">
                  <img 
                    src={milestone.image}
                    alt={milestone.event}
                    className="rounded-2xl shadow-xl w-full h-48 lg:h-64 object-cover"
                  />
                </div>
                
                <div className="lg:w-1/2 text-center lg:text-left">
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-[#FBC2EB] mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.event}</h3>
                    <p className="text-white/70">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#FBC2EB]">Meet Our Team</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Passionate individuals dedicated to building the ultimate twin community
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-6 border border-white/10 backdrop-blur-sm text-center group overflow-hidden"
              >
                <div className="relative mb-4">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FBC2EB]/20 to-[#A6C0EE]/20"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-[#A6C0EE] font-semibold mb-3">{member.role}</div>
                <p className="text-white/70 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#FBC2EB]/10 to-[#A6C0EE]/10 rounded-3xl p-12 border border-white/10 backdrop-blur-sm relative overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop"
              alt="Join our community"
              className="absolute inset-0 w-full h-full object-cover opacity-10"
            />
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Ready to Join Our Growing Community?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Connect with thousands of twins worldwide and start your journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-gradient-to-r from-[#FBC2EB] to-[#A6C0EE] text-white font-bold rounded-full px-8 py-3 shadow-2xl">
                    Sign Up Free
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-2 border-white/20 text-white font-bold rounded-full px-8 py-3 bg-white/5 backdrop-blur-sm">
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;