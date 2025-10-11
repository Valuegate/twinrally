// /**
//  * FeaturesPage - TwinRally Features Page
//  *
//  * Dedicated page showcasing platform capabilities.
//  * Focuses on business logic and page-specific concerns.
//  *
//  * Route: /features
//  *
//  * Responsibilities:
//  * - Display platform features
//  * - Handle feature-related interactions
//  * - Manage page-specific state (if needed)
//  * - SEO and meta information
//  *
//  * Architecture:
//  * - Uses AppLayout for consistent structure
//  * - Pure business logic, no layout concerns
//  * - Easy to maintain and extend
//  *
//  * @author Wasiu - TwinRally Team
//  * @version 1.0.0
//  */

// import React from "react";
// import AppLayout from "@/layouts/AppLayout";
// import FeaturesSection from "@/components/features/FeaturesSection";

// const FeaturesPage = () => {
//   // TODO: Add any page-specific logic here
//   // - Analytics tracking
//   // - Feature usage metrics
//   // - A/B testing variations

//   return (
//     <AppLayout>
//       <FeaturesSection />
//     </AppLayout>
//   );
// };

// export default FeaturesPage;

import React from 'react';
import FeaturesSection from '@/components/features/FeaturesSection';
import Footer from '@/components/layout/Footer';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-[color:var(--bg)]">
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default FeaturesPage;