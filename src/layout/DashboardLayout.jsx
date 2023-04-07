import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const DashboardLayout = ({ children }) => {
  return (
    <main>
      <Footer />
      {children}
      <NavBar />
    </main>
  );
};

export default DashboardLayout;
