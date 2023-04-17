import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import "../scss/serviceHeader-module.scss";
import line from "../../../assets/images/line.png";
import vaccine_1 from "../../../assets/images/vaccine_1.png";
import Ambulance from "../../../assets/images/Ambulance.png";
import gynecology from "../../../assets/images/gynecology.png";
import paediatrics from "../../../assets/images/paediatrics.png";
import optometry from "../../../assets/images/optometry.png";
import physician from "../../../assets/images/physician.png";

const ServicesHeader = () => {
  return (
    <Box
      // className="section__padding"
      //   outline={`1px solid red`}
      bgColor={`#DEF1F9`}
      padding={[`1rem 3rem`, `1rem 6rem`]}
    >
      <Box
        display={`flex`}
        flexDir={`column`}
        justifyContent={[`center`]}
        alignItems={[`center`]}
        padding={`2rem 0`}
        // outline={`1px solid blue`}
        // padding={`3rem 38rem`}
        w={[`100%`, `40%`]}
        margin={`8rem auto`}
        marginBottom={`12rem`}
      >
        <Heading
          color={`#2f98c2`}
          fontSize={`3.2rem`}
          fontWeight={700}
          lineHeight={`4.3rem`}
        >
          Services
        </Heading>
        <Text
          fontSize={[`1.2rem`, `1.6rem`, `2rem`]}
          fontWeight={400}
          lineHeight={[`1.61rem`, `2.684rem`]}
          marginTop={[`1rem`, `3rem`]}
          textAlign={[`center`]}
        >
          Lorem ipsum dolor sit amet consectetur. Ac tellus sed proin
          ullamcorper arcu ut eget augue. Fermentum eget id massa morbi risus.
        </Text>
      </Box>

      <Box marginTop={`6rem`}>
        <Box
          display={`grid`}
          gridTemplateColumns={`repeat(2,1fr)`}
          justifyContent={`center`}
          alignItems={`center`}
          gap={[`3rem`, `10rem`]}
          padding={`2rem 0`}
        >
          <Box>
            <Image src={line} alt={`A  shot straight`} margin={`2rem 0`} />
            <Heading
              fontSize={[`1.8rem`, `3.2rem`]}
              fontWeight={600}
              lineHeight={[`2.684rem`, `4.294rem`]}
              marginBottom={`2rem`}
            >
              COVID-19 Vaccine Administration
            </Heading>
            <Text
              fontSize={[`1rem`, `2rem`]}
              fontWeight={[500, 600]}
              lineHeight={[`1.61rem`, `2.684rem`]}
            >
              Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales
              <br /> ut netus dictum tellus nunc ullamcorper quisque. Lectus in
              <br /> nisl viverra nisl faucibus. Id pharetra nisl a amet leo non
              <br /> mollis. Phasellus lectus ut suspendisse tortor eget sit
              senectus.
            </Text>
            <Button
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={600}
              lineHeight={[`1.4rem`, `2.3rem`]}
              color={`white`}
              bgColor={`#2f98c2`}
              w={[`8.9rem`, `15.6rem`]}
              h={[`3.9rem`, `6rem`]}
              marginTop={[`1.5rem`, `2rem`]}
              borderRadius={`2rem`}
              _hover={{ bg: `#1e3673` }}
            >
              See Details
            </Button>
          </Box>

          <Box>
            <Image
              src={vaccine_1}
              alt={`Covid Vaccine`}
              w={[`12.1rem`, `100%`]}
              h={[`18.8rem`, `auto`]}
              borderRadius={[`2rem`, `none`]}
            />
          </Box>

          <Box>
            <Image
              src={Ambulance}
              alt={`A Picture of an Ambulance`}
              w={[`12.1rem`, `100%`]}
              h={[`18.8rem`, `auto`]}
              borderRadius={[`2rem`, `none`]}
            />
          </Box>

          <Box>
            <Image src={line} alt={`A  shot straight`} margin={`2rem 0`} />
            <Heading
              fontSize={[`1.8rem`, `3.2rem`]}
              fontWeight={600}
              lineHeight={[`2.684rem`, `4.294rem`]}
              marginBottom={`2rem`}
            >
              Ambulance
            </Heading>
            <Text
              fontSize={[`1rem`, `2rem`]}
              fontWeight={[500, 600]}
              lineHeight={[`1.61rem`, `2.684rem`]}
            >
              Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales
              <br /> ut netus dictum tellus nunc ullamcorper quisque. Lectus in
              <br /> nisl viverra nisl faucibus. Id pharetra nisl a amet leo non
              <br /> mollis. Phasellus lectus ut suspendisse tortor eget sit
              senectus.
            </Text>
            <Button
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={600}
              lineHeight={[`1.4rem`, `2.3rem`]}
              color={`white`}
              bgColor={`#2f98c2`}
              w={[`8.9rem`, `15.6rem`]}
              h={[`3.9rem`, `6rem`]}
              marginTop={[`1.5rem`, `2rem`]}
              borderRadius={`2rem`}
              _hover={{ bg: `#1e3673` }}
            >
              See Details
            </Button>
          </Box>

          <Box>
            <Image src={line} alt={`A  shot straight`} margin={`2rem 0`} />
            <Heading
              fontSize={[`1.8rem`, `3.2rem`]}
              fontWeight={600}
              lineHeight={[`2.684rem`, `4.294rem`]}
              marginBottom={`2rem`}
            >
              Gynecology
            </Heading>
            <Text
              fontSize={[`1rem`, `2rem`]}
              fontWeight={[500, 600]}
              lineHeight={[`1.61rem`, `2.684rem`]}
            >
              Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales
              <br /> ut netus dictum tellus nunc ullamcorper quisque. Lectus in
              <br /> nisl viverra nisl faucibus. Id pharetra nisl a amet leo non
              <br /> mollis. Phasellus lectus ut suspendisse tortor eget sit
              senectus.
            </Text>
            <Button
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={600}
              lineHeight={[`1.4rem`, `2.3rem`]}
              color={`white`}
              bgColor={`#2f98c2`}
              w={[`8.9rem`, `15.6rem`]}
              h={[`3.9rem`, `6rem`]}
              marginTop={[`1.5rem`, `2rem`]}
              borderRadius={`2rem`}
              _hover={{ bg: `#1e3673` }}
            >
              See Details
            </Button>
          </Box>

          <Box>
            <Image
              src={gynecology}
              alt={`A Picture of a Gynecologist`}
              w={[`12.1rem`, `100%`]}
              h={[`18.8rem`, `auto`]}
              borderRadius={[`2rem`, `none`]}
            />
          </Box>

          <Box>
            <Image
              src={paediatrics}
              alt={`A Picture of a Paediatric`}
              w={[`12.1rem`, `100%`]}
              h={[`18.8rem`, `auto`]}
              borderRadius={[`2rem`, `none`]}
            />
          </Box>

          <Box>
            <Image src={line} alt={`A  shot straight`} margin={`2rem 0`} />
            <Heading
              fontSize={[`1.8rem`, `3.2rem`]}
              fontWeight={600}
              lineHeight={[`2.684rem`, `4.294rem`]}
              marginBottom={`2rem`}
            >
              Paediatrics
            </Heading>
            <Text
              fontSize={[`1rem`, `2rem`]}
              fontWeight={[500, 600]}
              lineHeight={[`1.61rem`, `2.684rem`]}
            >
              Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales
              <br /> ut netus dictum tellus nunc ullamcorper quisque. Lectus in
              <br /> nisl viverra nisl faucibus. Id pharetra nisl a amet leo non
              <br /> mollis. Phasellus lectus ut suspendisse tortor eget sit
              senectus.
            </Text>
            <Button
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={600}
              lineHeight={[`1.4rem`, `2.3rem`]}
              color={`white`}
              bgColor={`#2f98c2`}
              w={[`8.9rem`, `15.6rem`]}
              h={[`3.9rem`, `6rem`]}
              marginTop={[`1.5rem`, `2rem`]}
              borderRadius={`2rem`}
              _hover={{ bg: `#1e3673` }}
            >
              See Details
            </Button>
          </Box>

          <Box>
            <Image src={line} alt={`A  shot straight`} margin={`2rem 0`} />
            <Heading
              fontSize={[`1.8rem`, `3.2rem`]}
              fontWeight={600}
              lineHeight={[`2.684rem`, `4.294rem`]}
              marginBottom={`2rem`}
            >
              Optometry
            </Heading>
            <Text
              fontSize={[`1rem`, `2rem`]}
              fontWeight={[500, 600]}
              lineHeight={[`1.61rem`, `2.684rem`]}
            >
              Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales
              <br /> ut netus dictum tellus nunc ullamcorper quisque. Lectus in
              <br /> nisl viverra nisl faucibus. Id pharetra nisl a amet leo non
              <br /> mollis. Phasellus lectus ut suspendisse tortor eget sit
              senectus.
            </Text>
            <Button
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={600}
              lineHeight={[`1.4rem`, `2.3rem`]}
              color={`white`}
              bgColor={`#2f98c2`}
              w={[`8.9rem`, `15.6rem`]}
              h={[`3.9rem`, `6rem`]}
              marginTop={[`1.5rem`, `2rem`]}
              borderRadius={`2rem`}
              _hover={{ bg: `#1e3673` }}
            >
              See Details
            </Button>
          </Box>

          <Box>
            <Image
              src={optometry}
              alt={`A Picture of Optometric`}
              margin={`2rem 0`}
              w={[`12.1rem`, `100%`]}
              h={[`18.8rem`, `auto`]}
              borderRadius={[`2rem`, `none`]}
            />
          </Box>

          <Box marginBottom={`2rem`}>
            <Image
              w={[`12.1rem`, `100%`]}
              h={[`18.8rem`, `auto`]}
              borderRadius={[`2rem`, `none`]}
              src={physician}
              alt={`A Picture of a Physician`}
            />
          </Box>

          <Box>
            <Image src={line} alt={`A  shot straight`} margin={`2rem 0`} />
            <Heading
              fontSize={[`1.8rem`, `3.2rem`]}
              fontWeight={600}
              lineHeight={[`2.684rem`, `4.294rem`]}
              marginBottom={`2rem`}
            >
              General Physician
            </Heading>
            <Text
              fontSize={[`1rem`, `2rem`]}
              fontWeight={[500, 600]}
              lineHeight={[`1.61rem`, `2.684rem`]}
            >
              Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales
              <br /> ut netus dictum tellus nunc ullamcorper quisque. Lectus in
              <br /> nisl viverra nisl faucibus. Id pharetra nisl a amet leo non
              <br /> mollis. Phasellus lectus ut suspendisse tortor eget sit
              senectus.
            </Text>
            <Button
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={600}
              lineHeight={[`1.4rem`, `2.3rem`]}
              color={`white`}
              bgColor={`#2f98c2`}
              w={[`8.9rem`, `15.6rem`]}
              h={[`3.9rem`, `6rem`]}
              marginTop={[`1.5rem`, `2rem`]}
              borderRadius={`2rem`}
              _hover={{ bg: `#1e3673` }}
            >
              See Details
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesHeader;
