
import React from "react";
import Footer from "@/components/layout/Footer";


const AppLayout = ({ children, showFooter = true }) => {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] flex flex-col">
      <main className="flex-1">{children}</main>

      {showFooter && <Footer />}
    </div>
  );
};

export default AppLayout;