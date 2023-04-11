import React from "react";
import Layout from "../../layout/Layout";
import SectionOne from "./component/SectionOne";
import SectionTwo from "./component/SectionTwo";
import SectionThree from "./component/SectionThree";
import SectionFour from "./component/SectionFour";

const Home = () => {
  return (
    <Layout>
      <>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </>
    </Layout>
  );
};

export default Home;
