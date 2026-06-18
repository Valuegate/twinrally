import React from "react";
import { Header } from "../HomePage/Header";
// import Footer from '@/components/layout/Footer';

const PricingSection = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "$0",
      period: "/forever",
      description: "Perfect for twins getting started",
      features: [
        "Create a profile",
        "Join public groups",
        "Basic messaging",
        "Access to Twin Finder",
        "Join free events",
      ],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "/month",
      description: "Unlock full twin experience",
      features: [
        "Everything in Freemium",
        "Host events with ticketing",
        "Advanced Twin Finder filters",
        "Priority support",
        "Ad-free experience",
        "Twin Analytics & Insights",
      ],
      cta: "Upgrade to Premium",
      popular: true,
    },
  ];

  return (
    <>
      <Header />
      <section className="py-24 bg-[color:var(--bg)] text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[color:var(--pink)]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[color:var(--blue)]/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6 border border-white/20 animate-float">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Pricing Plans
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[color:var(--pink)] to-[color:var(--blue)] bg-clip-text text-transparent leading-tight">
              Choose Your Twin Journey
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Whether you're just starting your twin adventure or ready to unlock
              the full experience
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`group relative p-8 rounded-3xl border backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                  plan.popular
                    ? "bg-gradient-to-br from-[color:var(--pink)]/20 to-[color:var(--blue)]/20 border-white/40 ring-2 ring-white/20 shadow-2xl shadow-[color:var(--pink)]/20"
                    : "bg-white/5 border-white/20 hover:bg-white/10"
                } ${index === 0 ? "animate-slide-up" : "animate-slide-up-delay-2"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[color:var(--pink)] to-[color:var(--blue)] text-[color:var(--bg)] text-sm font-bold px-6 py-2 rounded-full shadow-lg animate-float">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-5xl font-black">{plan.price}</span>
                    <span className="text-lg text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={feature}
                        className={`flex items-center text-gray-200 group-hover:text-white transition-colors duration-300 ${`animate-slide-up-delay-${Math.min(featureIndex + 1, 3)}`}`}
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-400/20 flex items-center justify-center mr-3">
                          <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 ${
                    plan.popular
                      ? "text-[color:var(--bg)] animate-shimmer hover:shadow-2xl focus:ring-[color:var(--pink)]/50"
                      : "bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 focus:ring-white/30"
                  }`}
                  style={
                    plan.popular
                      ? {
                          background:
                            "linear-gradient(90deg, var(--pink), #ffffff, var(--blue), #ffffff, var(--pink))",
                        }
                      : {}
                  }
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-slide-up-delay-3">
            <p className="text-gray-400 text-sm mb-4">
              Need a custom plan?{" "}
              <a href="#contact" className="text-[color:var(--pink)] hover:text-white transition-colors underline">
                Contact our team
              </a>
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
};

export default PricingSection;
