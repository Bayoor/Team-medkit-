import React from "react";
import Layout from "../../layout/Layout";
import ServicesHeader from "./component/ServicesHeader";
import ServicesHeading from "./component/ServicesHeading";

const Service = () => {
  return (
    <Layout>
      <ServicesHeading />
      <ServicesHeader />
    </Layout>
  );
};

export default Service;
