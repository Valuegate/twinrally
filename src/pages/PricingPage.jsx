// /**
//  * PricingPage - TwinRally Pricing Page
//  *
//  * Dedicated page for pricing plans and conversions.
//  * Focuses on business logic and conversion optimization.
//  *
//  * Route: /pricing
//  *
//  * Responsibilities:
//  * - Display pricing plans
//  * - Handle plan selection and upgrades
//  * - Track conversion metrics
//  * - A/B testing for pricing strategies
//  *
//  * Architecture:
//  * - Uses AppLayout for consistent structure
//  * - Business logic focused
//  * - Ready for backend integration (plan management)
//  *
//  * @author Wasiu - TwinRally Team
//  * @version 1.0.0
//  */

// import React from "react";
// import AppLayout from "@/layouts/AppLayout";
// import PricingSection from "@/components/pricing/PricingSection";

// const PricingPage = () => {
//   // TODO: Add pricing-specific business logic
//   // - Track plan selections
//   // - Handle upgrade flows
//   // - Conversion analytics
//   // - Coupon/discount logic

//   /**
//    * Handle plan selection
//    * TODO: Connect to payment processing when backend is ready
//    */
//   const handlePlanSelect = (planType) => {
//     console.log("Plan selected:", planType);

//     if (planType === "premium") {
//       // TODO: Redirect to payment flow or signup
//       alert("Premium plan selected! (Would redirect to checkout)");
//     } else {
//       // TODO: Redirect to free signup
//       alert("Free plan selected! (Would redirect to signup)");
//     }
//   };

//   return (
//     <AppLayout>
//       <PricingSection onPlanSelect={handlePlanSelect} />
//     </AppLayout>
//   );
// };

// export default PricingPage;

import React from 'react';
import PricingSection from '@/components/pricing/PricingSection';
import Footer from '@/components/layout/Footer';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-[color:var(--bg)]">
      <PricingSection />
      <Footer />
    </div>
  );
};

export default PricingPage;