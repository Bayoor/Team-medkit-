import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Layout from "../../layout/Layout";

const About = () => {
  const [weight, setWeight] = useState(`20px`);
  return (
    <Layout>
      {/* children! */}
      <Box>
        <Text fontSize={`4rem`}>About page</Text>
        <Box>
          <Text fontSize={`3rem`} color="red">
            TEAM-MEDKIT About page
          </Text>
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
