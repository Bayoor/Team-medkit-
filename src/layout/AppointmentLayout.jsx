import React from "react";
import Footer from "./Footer";
import AppointmentNavbar from "./AppointmentNavbar";

const AppointmentLayout = ({ children }) => {
  return (
    <main>
      <AppointmentNavbar />
      {children}
      <Footer />
    </main>
  );
};

export default AppointmentLayout;
