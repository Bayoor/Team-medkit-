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
// import service_bg from "../../../assets/images/service_bg.png";

const ServicesHeader = () => {
  return (
    <Box bgColor={`#DEF1F9`} padding={[`1rem 2.5rem`, `1rem 6rem`]} >

      <Box className="cc-container" >
        <Box >
          <Box
            display={`grid`}
            gridTemplateColumns={`repeat(2,1fr)`}
            justifyContent={`center`}
            alignItems={`center`}
            gap={[`1.6rem`, `10rem`]}
           
          >
            <Box>
              <Image src={line} alt={`A  shot straight`} w={{base: `3.5rem`, lg:`7rem`}}  mt={{base:`-6rem`, md: `18.5rem`}} />
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
                Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut
                netus dictum tellus nunc ullamcorper quisque. Lectus in nisl
                viverra nisl faucibus. Id pharetra nisl a amet leo non mollis.
                Phasellus lectus ut suspendisse tortor eget sit senectus.
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
                mt={{lg:`8.9rem`}}
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
              <Image src={line} alt={`A  shot straight`} margin={`2rem 0`} w={{base: `3.5rem`, lg:`7rem`}}/>
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
                Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut
                netus dictum tellus nunc ullamcorper quisque. Lectus in nisl
                viverra nisl faucibus. Id pharetra nisl a amet leo non mollis.
                Phasellus lectus ut suspendisse tortor eget sit senectus.
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
              <Image src={line} alt={`A  shot straight`} margin={`2rem 0`} w={{base: `3.5rem`, lg:`7rem`}}/>
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
                Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut
                netus dictum tellus nunc ullamcorper quisque. Lectus in nisl
                viverra nisl faucibus. Id pharetra nisl a amet leo non mollis.
                Phasellus lectus ut suspendisse tortor eget sit senectus.
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
              <Image src={line} alt={`A  shot straight`} margin={`2rem 0`} w={{base: `3.5rem`, lg:`7rem`}}/>
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
                Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut
                netus dictum tellus nunc ullamcorper quisque. Lectus in nisl
                viverra nisl faucibus. Id pharetra nisl a amet leo non mollis.
                Phasellus lectus ut suspendisse tortor eget sit senectus.
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
              <Image src={line} alt={`A  shot straight`} margin={`2rem 0`} w={{base: `3.5rem`, lg:`7rem`}}/>
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
                Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut
                netus dictum tellus nunc ullamcorper quisque. Lectus in nisl
                viverra nisl faucibus. Id pharetra nisl a amet leo non mollis.
                Phasellus lectus ut suspendisse tortor eget sit senectus.
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
              <Image src={line} alt={`A  shot straight`} margin={`2rem 0`} w={{base: `3.5rem`, lg:`7rem`}}/>
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
                Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut
                netus dictum tellus nunc ullamcorper quisque. Lectus in nisl
                viverra nisl faucibus. Id pharetra nisl a amet leo non mollis.
                Phasellus lectus ut suspendisse tortor eget sit senectus.
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
    </Box>
  );
};

export default ServicesHeader;
