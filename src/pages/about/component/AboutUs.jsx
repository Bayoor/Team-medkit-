import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Grid,
} from "@chakra-ui/react";
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
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <Box bg={[`#def1f9`]}>
      <Box className="cc-container">
        <Grid
          // templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          justifyContent={{ lg: `space-evenly` }}
          alignItems={{ lg: `center` }}
          gap={{ base: `3.6rem`, lg: `0` }}
        >
          <Box
            ml={{ base: `2rem`, lg: `10rem` }}
            pt={{ base: `3.7rem`, lg: `11.9rem` }}
           
          >
            <img
              w={{ lg: `41.2rem` }}
              h={{ base: `100%`, lg: `53rem` }}
              src={HealthWorker}
              alt=""
              style={{
                height: "100%",
              }}
            />
          </Box>

          <Box mt={{ base: `2.5rem`, lg: `-4.4rem` }}>
            <Text
              fontSize={{ base: `1.2rem`, lg: `2.4rem` }}
              fontWeight={[300]}
              lineHeight={{ base: `1.61rem`, lg: `3.221rem` }}
            >
              About Us
            </Text>
            <Heading
              mt={{ base: `.5rem`, lg: `1rem` }}
              mr={{ base: `3rem`, lg: `20.2rem` }}
              fontSize={{ base: `1.2rem`, md: `2.2rem`, lg: `3.2rem` }}
              fontWeight={[600]}
              lineHeight={{ base: `1.61rem`, md: `3rem`, lg: `4.294rem` }}
            >
              We Are Thoroughly Committed To Making Your Health Our Priority
            </Heading>

            <Text
              mr={{ lg: `14.7rem` }}
              fontSize={{ md: `1.2rem`, lg: `2rem` }}
              fontWeight={{ md: 500 }}
              lineHeight={{ md: `2.2rem`, lg: `2.684rem` }}
              display={{ base: `none`, md: `flex`, lg: `flex` }}
              mt={{lg: `2rem`}}
            >
              Lorem ipsum dolor sit amet consectetur. Sed nec ornare vitae duis
              leo lacus pellentesque sit. Turpis amet ut tortor scelerisque
              risus adipiscing et non. Interdum ac integer pretium aliquam auc.
              Tristique aliquet nisl odio risus diam. Morbi pellentesque
              ultricis id faucibus aliquam sed sit sed. Proin fermentum mauris
              mi aliquet sed vel. Quam id sed congue diam tincidunt enim.{" "}
            </Text>

            <Text
              display={{ base: `flex`, md: `none` }}
              textAlign={`start`}
              fontSize={{ base: `1.2rem` }}
              fontWeight={{ base: 400 }}
              lineHeight={{ base: `1.61rem` }}
              mr={{ base: `4.2rem` }}
              mt={{ base: `1.1rem` }}
            >
              Lorem ipsum dolor sit amet consectetur. Sed nec ornare vitae.Morbi
              pellentesque ultricis id faucibus aliquam sed sit sed.
              Proiermentum mauris mi aliquet sed vel. Quam id secongue diam
              tincidunt enim.
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
              mt={{ base: `1rem`, lg: `2rem` }}
              // mb={{ base: `2rem`, lg: `2.9rem` }}
            >
              <Link to={`/404page`}> Learn More</Link>
            </Button>
            <Image
              mt={{ base: `1.5rem`, md: `2.9rem` }}
              src={line_1}
              alt={`A straight line`}
              w={{base:`13.802rem`, lg: `58.802rem`}}
            />
          </Box>
        </Grid>

        <Grid
          templateColumns={{ lg: `repeat(2, 1fr)` }}
          justifyContent={{ lg: `space-evenly` }}
          alignItems={{ lg: `center` }}
          pos={{ lg: `relative` }}
        >
          <Box
            // ml={{ lg: `18.1rem` }}
            pos={{ lg: `relative` }}
            top={{ lg: `-6rem` }}
            left={{ lg: `24.1rem` }}
            w={{ lg: `36.3rem` }}
            h={{ lg: `48.1rem` }}
            display={{ base: `none`, lg: `flex` }}
          >
            <img src={HealthWorker_1} alt="" />
          </Box>

          <Box
            listStyleType={`none`}
            display={{ base: `block` }}
            // outline={{ base: `1px solid red` }}
            // w={{ base: `100%` }}
            ml={{ base: `2.5rem`, md: `5rem`, lg: `0` }}
          >
            <Heading
              fontSize={{ base: `2rem`, lg: `3.2rem` }}
              fontWeight={[600]}
              lineHeight={{ base: `2.684rem`, lg: `4.294rem` }}
              mt={{ base: `2.5rem`, md: `4rem`, lg: `-9.528rem` }}
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
              mt={{ base: `2rem`, lg: `2.5rem` }}
            >
              <Image
                w={{ base: `2.5rem`, md: `5rem` }}
                h={{ base: `2.5rem`, md: `5rem` }}
                src={square_tick}
                alt={`square-tick`}
              />
              <li>Lorem ipsum dolor sit amet consectetur vestibulum.</li>
            </Box>

            <Box
              display={[`flex`]}
              justifyContent={`start`}
              alignItems={[`center`]}
              gap={`1rem`}
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={[400]}
              lineHeight={[`1.61rem`, `2.684rem`]}
              mt={{ base: `1.7rem`, lg: `2rem` }}
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
              display={[`flex`]}
              justifyContent={`start`}
              alignItems={[`center`]}
              gap={`1rem`}
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={[400]}
              lineHeight={[`1.61rem`, `2.684rem`]}
              mt={{ base: `1.7rem`, lg: `2rem` }}
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
              display={[`flex`]}
              justifyContent={`start`}
              alignItems={[`center`]}
              gap={`1rem`}
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={[400]}
              lineHeight={[`1.61rem`, `2.684rem`]}
              mt={{ base: `1.7rem`, lg: `2rem` }}
             
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
              display={[`flex`]}
              justifyContent={`start`}
              alignItems={[`center`]}
              gap={`1rem`}
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={[400]}
              lineHeight={[`1.61rem`, `2.684rem`]}
              mt={{ base: `1.7rem`, lg: `2rem` }}
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
              display={[`flex`]}
              justifyContent={`start`}
              alignItems={[`center`]}
              gap={`1rem`}
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={[400]}
              lineHeight={[`1.61rem`, `2.684rem`]}
              mt={{ base: `1.7rem`, lg: `2rem` }}
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
              display={[`flex`]}
              justifyContent={`start`}
              alignItems={[`center`]}
              gap={`1rem`}
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={[400]}
              lineHeight={[`1.61rem`, `2.684rem`]}
              mt={{ base: `1.7rem`, lg: `2rem` }}
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
        </Grid>

        <Flex
          flexDir={{ base: `column`, lg: `row` }}
          justifyContent={[
            `flex-start`,
            `flex-start`,
            `flex-start`,
            `space-around`,
          ]}
          alignItems={[`center`]}
          // mb={[`6rem`]}
          gap={{ md: `5.5rem` }}
        >
          <Box
            display={`flex`}
            flexDir={`column`}
            justifyContent={`start`}
            alignItems={{ base: `center`, lg: `flex-start` }}
            w={{ base: `100%`, lg: `47%` }}
            padding={{ base: ` 0 2.5rem`, md: ` 0 5rem`, lg: `0` }}
           mt={{base:`2.3rem`}}
           
          >
            <Heading mt={{lg:`13.1rem`}} fontSize={{lg:`3.2rem`}} fontWeight={{lg:700}} lineHeight={{lg: `4.294rem`}}>Our Story</Heading>
            <Text
              fontSize={[`1.2rem`, `1.6rem`, `2rem`]}
              fontWeight={[700]}
              lineHeight={[`1.4rem`, `1.7rem`, `2.684rem`]}
              textAlign={{ base: `center`, md: `start`, lg: `start` }}
              display={{ base: `none`, md: `flex` }}
              mt={{md: `1.8rem`}}
              mr={{lg:`1rem`}}
             
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

            <Text
              display={{ base: `flex`, md: `none` }}
              fontSize={{base:`1.2rem`}}
              fontWeight={[400]}
              lineHeight={{base:`1.4rem`}}
              textAlign={{ base: `center`}}
              mt={{ base: `.7rem` }}
            >
              Lorem ipsum dolor sit amet consectetur. Cras viverra vulputate
              scelerisque sem. Nullam lectus mauris malesuada rhoncus. Risus
              quis penatibus sodales cursus. Velit massa dolor leo fermentia
              amet sit mattis. Sit praesent imperdiet pretium enim ut bibendum
              in dolor.
            </Text>

            <Button
              fontSize={{base:`1.2rem`,lg:`2rem`}}
              fontWeight={[600]}
              lineHeight={{base: `1.406rem`, lg:`2.344rem`}}
              mt={{base:`1.7rem`, lg:`4.5rem`}}
              w={{base:`8.9rem`,lg:`15.6rem`}}
              h={{base:`3.9rem`, lg:`6rem`}}
              borderRadius={{base:`1.5rem`,lg:`2rem`}}
              color={[`#fff`]}
              bg={[`#2f98c2`]}
              _hover={{ bg: `#1e3673` }}
              alignSelf={{ base: `center`, md: `flex-start`, lg: `flex-start` }}
            >
              <Link to={`/404page`}> Learn More</Link>
            </Button>
          </Box>

          <Box
            display={`flex`}
            flexDir={{ base: `column`, md: `row`, lg: `column` }}
            justifyContent={{ base: `space-around`, lg: `start` }}
            alignItems={[`center`, `flex-start`]}
            w={{ base: `100%`, lg: `30%` }}
           
          >
            <Box
              display={`flex`}
              flexDir={`column`}
              justifyContent={`start`}
              alignItems={[`center`, `flex-start`]}
            >
              <Heading mt={{ base: `1.7rem `, md: `2rem 0` }} fontSize={{lg:`3.2rem`}} fontWeight={{lg:700}} lineHeight={{lg: `4.294rem`}}>Our Vision</Heading>
              <Image
                mt={{ md: `1.416rem` }}
                src={line_3}
                alt={`A straight line`}
                display={{ base: `none`, md: `flex` }}
              />
              <Text
                fontSize={[`1.2rem`, `1.6rem`, `2rem`]}
                fontWeight={{base:`400`, lg:`700`}}
                lineHeight={{base:`1.61rem`, lg: `2.684rem`}}
                textAlign={[`center`, `start`]}
                padding={{ base: `0  2.5rem`, md: `3rem  5rem`, lg: `0` }}
                mt={{md:`1.984rem`}}

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
              <Heading mt={{ base: `2.1rem `, md: `4.1rem ` }} fontSize={{lg:`3.2rem`}} fontWeight={{lg:700}} lineHeight={{lg: `4.294rem`}}>Mission</Heading>
              <Image
                mt={{ md: `1.8rem` }}
                src={line_3}
                alt={`A straight line`}
                display={{ base: `none`, md: `flex` }}
              />
              <Text
                fontSize={[`1.2rem`, `1.6rem`, `2rem`]}
                fontWeight={{base:`400`, lg:`700`}}
                lineHeight={{base:`1.61rem`, lg: `2.684rem`}}
                padding={{ base: `0  2.5rem`, md: `3rem  5rem`, lg: `0` }}
                textAlign={[`center`, `start`]}
                mt={{lg:`2.4rem`}}
              >
                Lorem ipsum dolor sit amet consectetur. Velit massa dolor leo
                fermentia amet sit mattis. Sit praesent imperdiet pretium enim
                ut bibendum in.
              </Text>
            </Box>
          </Box>
        </Flex>

        <Grid
       
          display={`flex`}
          justifyContent={`space-evenly`}
           alignItems={`center`}
          
        >
        
          <Box display={[`none`, `none`, `none`, `grid`]} mt={{lg: `21.2rem`}} gap={{lg: `7.3rem 8.4rem`}} mb={{lg: `15.6rem`}} gridTemplateColumns={`repeat(2, 1fr)`} justifyContent={`space-eventy`}
          alignItems={`center`}>
            <Image src={box} alt={`A container`}  />
            <Image src={box_1} alt={`A container`} />
            <Image src={box_2} alt={`A container`} />
            <Image src={box_3} alt={`A container`} />
          </Box>

          <Box  mt={{base:`2.5rem`}}  mb={{base:`2.5rem`}} m={{base:`2.5 auto`}}>
            <Image
              src={ellipse}
              alt={`A ellipse`}
              w={{ base: `22.4rem`, lg: `60rem` }}
              h={{ base: `22.4rem`, lg: `60rem` }}
             
            />
          </Box>

            </Grid>
         
 
          
         
        
      </Box>
    </Box>
  );
};

export default AboutUs;
