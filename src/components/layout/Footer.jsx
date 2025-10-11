// /**
//  * Footer Component - TwinRally Layout
//  *
//  * Global footer component that appears across all pages of the TwinRally platform.
//  * Provides navigation, company information, and engagement opportunities.
//  *
//  * Architecture:
//  * - Responsive 4-column layout (collapses to stacked on mobile)
//  * - Consistent with TwinRally color scheme and animations
//  * - Accessible navigation with proper semantic structure
//  * - Newsletter signup integration ready
//  * - Social media links with hover effects
//  *
//  * Usage:
//  * import Footer from '@/components/layout/Footer';
//  * <Footer />
//  *
//  * Dependencies:
//  * - Custom animations from index.css (animate-slide-up, animate-float)
//  * - Lucide React icons for social media and newsletter
//  * - TwinRally color variables (--bg, --pink, --blue)
//  *
//  * @author Wasiu - TwinRally Team
//  * @version 1.0.0
//  */

// import React, { useState } from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   Youtube,
//   Send,
//   Heart,
//   Users,
// } from "lucide-react";

// const Footer = () => {
//   // Newsletter subscription state
//   const [email, setEmail] = useState("");
//   const [isSubscribed, setIsSubscribed] = useState(false);

//   /**
//    * Handles newsletter subscription
//    * TODO: Integrate with actual email service (Mailchimp, ConvertKit, etc.)
//    */
//   const handleNewsletterSubmit = () => {
//     if (email.trim()) {
//       setIsSubscribed(true);
//       setEmail("");
//       // Reset success message after 3 seconds
//       setTimeout(() => setIsSubscribed(false), 3000);
//     }
//   };

//   /**
//    * Footer navigation configuration
//    * Organized by sections for easy maintenance and updates
//    */
//   const footerSections = [
//     {
//       title: "Platform",
//       links: [
//         { name: "Features", href: "#features" },
//         { name: "Pricing", href: "#pricing" },
//         { name: "Download App", href: "#download" },
//         { name: "Twin Finder", href: "#twin-finder" },
//       ],
//     },
//     {
//       title: "Resources",
//       links: [
//         { name: "Blog & Insights", href: "/blog" },
//         { name: "FAQ's", href: "/faq" },
//         { name: "Help Center", href: "/help" },
//         { name: "Contact Support", href: "/contact" },
//       ],
//     },
//     {
//       title: "Company",
//       links: [
//         { name: "About TwinRally", href: "/about" },
//         { name: "Our Team", href: "/team" },
//         { name: "Careers", href: "/careers" },
//         { name: "Press Kit", href: "/press" },
//       ],
//     },
//   ];

//   /**
//    * Social media configuration
//    * Easy to update social links and add new platforms
//    */
//   const socialLinks = [
//     {
//       name: "Facebook",
//       icon: Facebook,
//       href: "https://facebook.com/twinrally",
//       color: "hover:text-blue-400",
//     },
//     {
//       name: "Twitter",
//       icon: Twitter,
//       href: "https://twitter.com/twinrally",
//       color: "hover:text-blue-300",
//     },
//     {
//       name: "Instagram",
//       icon: Instagram,
//       href: "https://instagram.com/twinrally",
//       color: "hover:text-pink-400",
//     },
//     {
//       name: "LinkedIn",
//       icon: Linkedin,
//       href: "https://linkedin.com/company/twinrally",
//       color: "hover:text-blue-500",
//     },
//     {
//       name: "YouTube",
//       icon: Youtube,
//       href: "https://youtube.com/twinrally",
//       color: "hover:text-red-400",
//     },
//   ];

//   /**
//    * Contact information
//    * Centralized for easy updates across the application
//    */
//   const contactInfo = [
//     {
//       icon: Mail,
//       text: "hello@twinrally.com",
//       href: "mailto:hello@twinrally.com",
//     },
//     { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
//     { icon: MapPin, text: "Global Platform", href: "#locations" },
//   ];

//   return (
//     <footer className="bg-[color:var(--bg)] text-white border-t border-white/10 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-10 left-1/4 w-64 h-64 bg-[color:var(--pink)]/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[color:var(--blue)]/20 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative container mx-auto px-6 lg:px-8">
//         {/* Main footer content */}
//         <div className="py-16">
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
//             {/* Company branding and description */}
//             <div className="lg:col-span-2 animate-slide-up">
//               <div className="mb-8">
//                 {/* Logo/Brand */}
//                 <div className="flex items-center mb-6">
//                   <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[color:var(--pink)]/20 to-[color:var(--blue)]/20 border border-white/10 mr-4 animate-float">
//                     <Users className="w-6 h-6 text-[color:var(--pink)]" />
//                   </div>
//                   <span className="text-2xl font-bold bg-gradient-to-r from-white to-[color:var(--pink)] bg-clip-text text-transparent">
//                     TwinRally
//                   </span>
//                 </div>

//                 {/* Mission statement */}
//                 <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
//                   The global platform connecting twins worldwide through shared
//                   experiences, celebrations, and lifelong bonds.
//                 </p>

//                 {/* Contact information */}
//                 <div className="space-y-3">
//                   {contactInfo.map((contact, index) => {
//                     const IconComponent = contact.icon;
//                     return (
//                       <a
//                         key={index}
//                         href={contact.href}
//                         className="flex items-center text-gray-400 hover:text-[color:var(--pink)] transition-colors duration-300 group"
//                       >
//                         <IconComponent className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
//                         <span className="text-sm">{contact.text}</span>
//                       </a>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>

//             {/* Navigation sections */}
//             {footerSections.map((section, sectionIndex) => (
//               <div
//                 key={section.title}
//                 className={`animate-slide-up-delay-${Math.min(
//                   sectionIndex + 1,
//                   3
//                 )}`}
//               >
//                 <h3 className="text-lg font-semibold mb-6 text-white">
//                   {section.title}
//                 </h3>
//                 <ul className="space-y-4">
//                   {section.links.map((link) => (
//                     <li key={link.name}>
//                       <a
//                         href={link.href}
//                         className="text-gray-400 hover:text-[color:var(--pink)] transition-colors duration-300 text-sm group flex items-start"
//                       >
//                         <span className="group-hover:translate-x-1 transition-transform duration-300">
//                           {link.name}
//                         </span>
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Newsletter subscription section */}
//         <div className="py-12 border-t border-white/10">
//           <div className="max-w-2xl mx-auto text-center animate-slide-up-delay-2">
//             <div className="mb-8">
//               <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-[color:var(--blue)] bg-clip-text text-transparent">
//                 Stay Connected with the Twin Community
//               </h3>
//               <p className="text-gray-300 text-lg">
//                 Get the latest updates on twin festivals, platform features, and
//                 community stories.
//               </p>
//             </div>

//             {/* Newsletter form */}
//             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//               <div className="flex-1">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email address"
//                   className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent transition-all duration-300"
//                 />
//               </div>
//               <button
//                 type="button"
//                 onClick={handleNewsletterSubmit}
//                 disabled={isSubscribed}
//                 className={`
//                   px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[color:var(--pink)]/30
//                   ${
//                     isSubscribed
//                       ? "bg-green-500 text-white cursor-not-allowed"
//                       : "bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-[color:var(--bg)] hover:shadow-lg"
//                   }
//                 `}
//               >
//                 {isSubscribed ? (
//                   <span className="flex items-center">
//                     <Heart className="w-4 h-4 mr-2" />
//                     Subscribed!
//                   </span>
//                 ) : (
//                   <span className="flex items-center">
//                     <Send className="w-4 h-4 mr-2" />
//                     Subscribe
//                   </span>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Bottom section - Copyright and social links */}
//         <div className="py-8 border-t border-white/10">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//             {/* Copyright and legal links */}
//             <div className="text-center md:text-left animate-slide-up-delay-1">
//               <p className="text-gray-400 text-sm mb-2">
//                 © {new Date().getFullYear()} TwinRally. All rights reserved.
//               </p>
//               <div className="flex flex-wrap justify-center md:justify-start gap-6 text-xs text-gray-500">
//                 <a
//                   href="/privacy"
//                   className="hover:text-[color:var(--pink)] transition-colors duration-300"
//                 >
//                   Privacy Policy
//                 </a>
//                 <a
//                   href="/terms"
//                   className="hover:text-[color:var(--pink)] transition-colors duration-300"
//                 >
//                   Terms of Service
//                 </a>
//                 <a
//                   href="/cookies"
//                   className="hover:text-[color:var(--pink)] transition-colors duration-300"
//                 >
//                   Cookie Policy
//                 </a>
//               </div>
//             </div>

//             {/* Social media links */}
//             <div className="flex items-center gap-4 animate-slide-up-delay-3">
//               <span className="text-gray-400 text-sm mr-2">Follow us:</span>
//               {socialLinks.map((social) => {
//                 const IconComponent = social.icon;
//                 return (
//                   <a
//                     key={social.name}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`
//                       p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 
//                       ${social.color} hover:scale-110 hover:bg-white/10 
//                       transition-all duration-300 group
//                     `}
//                     title={`Follow us on ${social.name}`}
//                   >
//                     <IconComponent className="w-4 h-4 group-hover:animate-pulse" />
//                   </a>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


/**
 * Footer Component - TwinRally Layout
 * 
 * Global footer component that appears across all pages of the TwinRally platform.
 * Provides navigation, company information, and engagement opportunities.
 * 
 * Architecture:
 * - Responsive 4-column layout (collapses to stacked on mobile)
 * - Consistent with TwinRally color scheme and animations
 * - Accessible navigation with proper semantic structure
 * - Newsletter signup integration ready
 * - Social media links with hover effects
 * 
 * Usage:
 * import Footer from '@/components/layout/Footer';
 * <Footer />
 * 
 * Dependencies:
 * - Custom animations from index.css (animate-slide-up, animate-float)
 * - Lucide React icons for social media and newsletter
 * - TwinRally color variables (--bg, --pink, --blue)
 * 
 * @author Wasiu - TwinRally Team
 * @version 1.0.0
 */

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  Send,
  Heart,
  Users
} from 'lucide-react';

const Footer = () => {
  // Newsletter subscription state
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  /**
   * Handles newsletter subscription
   * TODO: Integrate with actual email service (Mailchimp, ConvertKit, etc.)
   */
  const handleNewsletterSubmit = () => {
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  /**
   * Footer navigation configuration
   * Organized by sections for easy maintenance and updates
   */
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Download App", href: "#download" },
        { name: "Twin Finder", href: "#twin-finder" }
      ]
    },
    {
      title: "Resources", 
      links: [
        { name: "Blog & Insights", href: "/blog" },
        { name: "FAQ's", href: "/faq" },
        { name: "Help Center", href: "/help" },
        { name: "Contact Support", href: "/contact" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About TwinRally", href: "/about" },
        { name: "Our Team", href: "/team" }
      ]
    }
  ];

  /**
   * Social media configuration
   * Easy to update social links and add new platforms
   */
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/twinrally", color: "hover:text-blue-400" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/twinrally", color: "hover:text-blue-300" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/twinrally", color: "hover:text-pink-400" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/twinrally", color: "hover:text-blue-500" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/twinrally", color: "hover:text-red-400" }
  ];

  /**
   * Contact information
   * Centralized for easy updates across the application
   */
  const contactInfo = [
    { icon: Mail, text: "hello@twinrally.com", href: "mailto:hello@twinrally.com" },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, text: "Global Platform", href: "#locations" }
  ];

  return (
    <footer className="bg-[color:var(--bg)] text-white border-t border-white/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-[color:var(--pink)]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[color:var(--blue)]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Company branding and description */}
            <div className="lg:col-span-2 animate-slide-up">
              <div className="mb-8">
                {/* TwinRally Logo */}
                <div className="mb-6">
                  <img 
                    src="../public/twinrally_lg_01.png" 
                    alt="TwinRally Logo" 
                    className="h-18 w-auto animate-float"
                  />
                </div>
                
                {/* Mission statement */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                  The global platform connecting twins worldwide through shared experiences, 
                  celebrations, and lifelong bonds.
                </p>
                
                {/* Contact information */}
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        className="flex items-center text-gray-400 hover:text-[color:var(--pink)] transition-colors duration-300 group"
                      >
                        <IconComponent className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm">{contact.text}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Navigation sections */}
            {footerSections.map((section, sectionIndex) => (
              <div 
                key={section.title} 
                className={`animate-slide-up-delay-${Math.min(sectionIndex + 1, 3)}`}
              >
                <h3 className="text-lg font-semibold mb-6 text-white">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-[color:var(--pink)] transition-colors duration-300 text-sm group flex items-start"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter subscription section */}
        <div className="py-12 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center animate-slide-up-delay-2">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-[color:var(--blue)] bg-clip-text text-transparent">
                Stay Connected with the Twin Community
              </h3>
              <p className="text-gray-300 text-lg">
                Get the latest updates on twin festivals, platform features, and community stories.
              </p>
            </div>

            {/* Newsletter form */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--pink)]/50 focus:border-transparent transition-all duration-300"
                />
              </div>
              <button
                type="button"
                onClick={handleNewsletterSubmit}
                disabled={isSubscribed}
                className={`
                  px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[color:var(--pink)]/30
                  ${isSubscribed 
                    ? 'bg-green-500 text-white cursor-not-allowed' 
                    : 'bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-[color:var(--bg)] hover:shadow-lg'
                  }
                `}
              >
                {isSubscribed ? (
                  <span className="flex items-center">
                    <Heart className="w-4 h-4 mr-2" />
                    Subscribed!
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section - Copyright and social links */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright and legal links */}
            <div className="text-center md:text-left animate-slide-up-delay-1">
              <p className="text-gray-400 text-sm mb-2">
                © {new Date().getFullYear()} TwinRally. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-xs text-gray-500">
                <a href="/privacy" className="hover:text-[color:var(--pink)] transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-[color:var(--pink)] transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="/cookies" className="hover:text-[color:var(--pink)] transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>

            {/* Social media links */}
            <div className="flex items-center gap-4 animate-slide-up-delay-3">
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 
                      ${social.color} hover:scale-110 hover:bg-white/10 
                      transition-all duration-300 group
                    `}
                    title={`Follow us on ${social.name}`}
                  >
                    <IconComponent className="w-4 h-4 group-hover:animate-pulse" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
