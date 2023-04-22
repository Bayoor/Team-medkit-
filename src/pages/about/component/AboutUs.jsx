import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import HealthWorker from "../../../assets/images/health-worker.png";
import HealthWorker_1 from "../../../assets/images/health-worker1.png";
import square_tick from "../../../assets/images/square-tick.png";
import line_1 from "../../../assets/images/line_2.png";
import line_3 from "../../../assets/images/line_3.png";
import box from "../../../assets/images/box.png";
import box_1 from "../../../assets/images/box_1.png";
import box_2 from "../../../assets/images/box_2.png";
import box_3 from "../../../assets/images/box_3.png";
import ellipse from "../../../assets/images/ellipse.png";

const AboutUs = () => {
  return (
    <Box bg={[`#def1f9`]}>
      <Box className="cc-container" p={[`1rem 1rem`, `1rem 6rem`]} w={`100%`}>
        <Box
          marginRight={[`3rem`, `20rem`]}
          marginTop={[`1rem`, `7rem`]}
          w={`100%`}
        >
          <Flex
            justifyContent={[`space-around`]}
            alignContent={[`center`]}
            gap={{ base: `3rem`, lg: `0` }}
          >
            <Box width={{ base: `70%`, lg: `50%` }}>
              <img src={HealthWorker} alt="" />
            </Box>

            <Box mt={[`-1rem`, `-3rem`]} w={{ base: `100%`, lg: `70%` }}>
              <Text
                as={`span`}
                fontSize={[`1.2rem`, `2.4rem`]}
                fontWeight={[300]}
                lineHeight={[`1.61rem`, `3.221rem`]}
                mb={[`2rem`]}
              >
                About Us
              </Text>
              <Heading
                fontSize={[`1.2rem`, `1.4rem`, `2.2rem`, `3.2rem`]}
                fontWeight={[600]}
                lineHeight={[`1.61rem`, `1.6rem`, `3rem`, `4.294rem`]}
                mr={{ base: `6rem`, md: `2rem`, lg: `18.5rem` }}
              >
                We Are Thoroughly Committed To Making Your Health Our Priority
              </Heading>
              <Text
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={[400, 500]}
                lineHeight={[`1.61rem`, `1.8rem`, `2.2rem`, `2.684rem`]}
                // outline={`1px solid red`}
                mt={[`1rem`, `2rem`]}
                mr={{ base: `4rem`, lg: `18.5rem` }}
              >
                Lorem ipsum dolor sit amet consectetur. Sed nec ornare vitae
                duis leo lacus pellentesque sit. Turpis amet ut tortor
                scelerisque risus adipiscing et non. Interdum ac integer pretium
                aliquam auc. Tristique aliquet nisl odio risus diam. Morbi
                pellentesque ultricis id faucibus aliquam sed sit sed. Proin
                fermentum mauris mi aliquet sed vel. Quam id sed congue diam
                tincidunt enim.{" "}
              </Text>
              <Button
                fontSize={[`1.2rem`, `1,4rem`, `1.6rem`, `2rem`]}
                fontWeight={[600]}
                lineHeight={[`1.61rem`, `2.344rem`]}
                w={[`8.9rem`, `9.2rem`, `12rem`, `15.6rem`]}
                h={[`3.9rem`, `6rem`]}
                borderRadius={[`1.5rem`, `2rem`]}
                bgColor={[`#2f98c2`]}
                color={[`#fff`]}
                _hover={{ bg: `#1e3673` }}
                mt={[`2rem`]}
              >
                Learn More
              </Button>
              <Image mt={[`2rem`]} src={line_1} alt={`A straight line`} />
            </Box>
          </Flex>

          <Flex
            justifyContent={[
              `flex-start`,
              `flex-start`,
              `flex-start`,
              `space-around`,
            ]}
            alignItems={[`flex-start`, `flex-start`, `flex-start`, `center`]}
            mt={{ lg: `8rem` }}
            position={{ lg: `relative` }}
          >
            <Box
              position={{ lg: `relative` }}
              top={{ lg: `-14rem` }}
              left={{ lg: `12rem` }}
              display={{ base: `none`, sm: `none`, md: `none`, lg: `flex` }}

              // top={[`0`, `-6rem`]}
              // left={[`0`, `10rem`]}
            >
              <img src={HealthWorker_1} alt="" />
            </Box>

            <Box
              listStyleType={`none`}
              ml={{ lg: `17rem` }}
              mt={{ lg: `3rem` }}
              w={{ lg: `58%` }}
            >
              <Heading
                fontSize={[`2rem`, `3.2rem`]}
                fontWeight={[600]}
                lineHeight={[`2.684rem`, `4.294rem`]}
                mt={[`4rem`, `4rem`, `4rem`, `-31rem`]}
                mb={[`2rem`]}
                // ml={[`0`, `.6rem`]}
              >
                Why Patients Choose Our Hospital?
              </Heading>
              <Box
                display={[`flex`]}
                justifyContent={`start`}
                alignItems={[`center`]}
                gap={`1rem`}
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={[400]}
                lineHeight={[`1.61rem`, `2.684rem`]}
                m={`2rem 0`}
              >
                <Image
                  w={[`2.5rem`, `5rem`]}
                  h={[`2.5rem`, `5rem`]}
                  src={square_tick}
                  alt={`square-tick`}
                />
                <li>Lorem ipsum dolor sit amet consectetur vestibulum.</li>
              </Box>

              <Box
                display={`flex`}
                justifyContent={`start`}
                alignItems={[`center`]}
                gap={`1rem`}
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={[400]}
                lineHeight={[`1.61rem`, `2.684rem`]}
                m={`2rem 0`}
              >
                <Image
                  w={[`2.5rem`, `5rem`]}
                  h={[`2.5rem`, `5rem`]}
                  src={square_tick}
                  alt={`square-tick`}
                />
                <li>Lorem ipsum dolor sit amet consectetur vestibulum.</li>
              </Box>

              <Box
                display={`flex`}
                justifyContent={`start`}
                alignItems={[`center`]}
                gap={`1rem`}
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={[400]}
                lineHeight={[`1.61rem`, `2.684rem`]}
                m={`2rem 0`}
              >
                <Image
                  w={[`2.5rem`, `5rem`]}
                  h={[`2.5rem`, `5rem`]}
                  src={square_tick}
                  alt={`square-tick`}
                />
                <li>Lorem ipsum dolor sit amet consectetur vestibulum.</li>
              </Box>

              <Box
                display={`flex`}
                justifyContent={`start`}
                alignItems={[`center`]}
                gap={`1rem`}
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={[400]}
                lineHeight={[`1.61rem`, `2.684rem`]}
                m={`2rem 0`}
              >
                <Image
                  w={[`2.5rem`, `5rem`]}
                  h={[`2.5rem`, `5rem`]}
                  src={square_tick}
                  alt={`square-tick`}
                />
                <li>Lorem ipsum dolor sit amet consectetur vestibulum.</li>
              </Box>

              <Box
                display={`flex`}
                justifyContent={`start`}
                alignItems={[`center`]}
                gap={`1rem`}
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={[400]}
                lineHeight={[`1.61rem`, `2.684rem`]}
                m={`2rem 0`}
              >
                <Image
                  w={[`2.5rem`, `5rem`]}
                  h={[`2.5rem`, `5rem`]}
                  src={square_tick}
                  alt={`square-tick`}
                />
                <li>Lorem ipsum dolor sit amet consectetur vestibulum.</li>
              </Box>

              <Box
                display={`flex`}
                justifyContent={`start`}
                alignItems={[`center`]}
                gap={`1rem`}
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={[400]}
                lineHeight={[`1.61rem`, `2.684rem`]}
                m={`2rem 0`}
              >
                <Image
                  w={[`2.5rem`, `5rem`]}
                  h={[`2.5rem`, `5rem`]}
                  src={square_tick}
                  alt={`square-tick`}
                />
                <li>Lorem ipsum dolor sit amet consectetur vestibulum.</li>
              </Box>

              <Box
                display={`flex`}
                justifyContent={`start`}
                alignItems={[`center`]}
                gap={`1rem`}
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={[400]}
                lineHeight={[`1.61rem`, `2.684rem`]}
                m={`2rem 0`}
              >
                <Image
                  w={[`2.5rem`, `5rem`]}
                  h={[`2.5rem`, `5rem`]}
                  src={square_tick}
                  alt={`square-tick`}
                />
                <li>Lorem ipsum dolor sit amet consectetur vestibulum.</li>
              </Box>
            </Box>
          </Flex>
        </Box>

        <Flex
          flexDir={[`column`, `row`]}
          justifyContent={[
            `flex-start`,
            `flex-start`,
            `flex-start`,
            `space-around`,
          ]}
          alignItems={[`flex-start`, `flex-start`, `flex-start`, `center`]}
          mb={[`6rem`]}
          gap={{ md: `5.5rem` }}
        >
          <Box
            display={`flex`}
            flexDir={`column`}
            justifyContent={`start`}
            alignItems={[`center`, `flex-start`]}
            w={[`100%`, `47%`]}
          >
            <Heading m={[`2rem 0`]}>Our Story</Heading>
            <Text
              fontSize={[`2rem`]}
              fontWeight={[500]}
              lineHeight={[`2.684rem`]}
              textAlign={[`center`, `start`]}
            >
              Lorem ipsum dolor sit amet consectetur. Cras viverra vulputate
              scelerisque sem. Nullam lectus mauris malesuada rhoncus. Risus
              quis penatibus sodales cursus. Velit massa dolor leo fermentia
              amet sit mattis. Sit praesent imperdiet pretium enim ut bibendum
              in dolor. Integer arcu cursus morbi mauris posuere. Risus pulvinar
              et nulla in dignissim lacus suscipit maecenas luctus. Non orci
              ornare nulla ut sit gravida dui fermentum sed. Semper pharetra
              urna pretium massa ut fermentum etiam amet. Elementum a
              sollicitudin viverra tempus a mi nibh aliquam nisl.
            </Text>

            <Button
              fontSize={[`2rem`]}
              fontWeight={[600]}
              lineHeight={[`2.344rem`]}
              mt={[`2rem`]}
              w={[`15.6rem`]}
              h={[`6rem`]}
              borderRadius={[`2rem`]}
              color={[`#fff`]}
              bg={[`#2f98c2`]}
              _hover={{ bg: `#1e3673` }}
            >
              Learn More
            </Button>
          </Box>

          <Box
            display={`flex`}
            flexDir={`column`}
            justifyContent={`start`}
            alignItems={[`center`, `flex-start`]}
            w={[`100%`, `30%`]}
          >
            <Box
              display={`flex`}
              flexDir={`column`}
              justifyContent={`start`}
              alignItems={[`center`, `flex-start`]}
            >
              <Heading m={[`2rem 0`]}>Our Vision</Heading>
              <Image mb={[`1.6rem`]} src={line_3} alt={`A straight line`} />
              <Text
                fontSize={[`2rem`]}
                fontWeight={[500]}
                lineHeight={[`2.684rem`]}
                textAlign={[`center`, `start`]}
              >
                Lorem ipsum dolor sit amet consectetur. Velit massa dolor leo
                fermentia amet sit mattis. Sit praesent imperdiet pretium enim
                ut bibendum in.
              </Text>
            </Box>

            <Box
              display={`flex`}
              flexDir={`column`}
              justifyContent={[`center`, `start`]}
              alignItems={[`center`, `flex-start`]}
            >
              <Heading m={[`2rem 0`]}>Mission</Heading>
              <Image mb={[`1.6rem`]} src={line_3} alt={`A straight line`} />
              <Text
                fontSize={[`2rem`]}
                fontWeight={[500]}
                lineHeight={[`2.684rem`]}
                textAlign={[`center`, `start`]}
              >
                Lorem ipsum dolor sit amet consectetur. Velit massa dolor leo
                fermentia amet sit mattis. Sit praesent imperdiet pretium enim
                ut bibendum in.
              </Text>
            </Box>
          </Box>
        </Flex>

        <Flex
          justifyContent={[`space-around`]}
          alignItems={[`center`]}
          mb={[`6rem`]}
        >
          <Box display={[`none`, `none`, `none`, `block`]}>
            <Image src={box} alt={`A container`} />
            <Image src={box_1} alt={`A container`} />
          </Box>

          <Box display={[`none`, `none`, `none`, `block`]}>
            <Image src={box_2} alt={`A container`} />
            <Image src={box_3} alt={`A container`} />
          </Box>

          <Box>
            <Image src={ellipse} alt={`A ellipse`} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutUs;
