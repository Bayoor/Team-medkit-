// REACT DEFAULTS'

// COMPONENTS
// import Container from '../Container'
// import Logo_dark from '../../assets/images/ticked_logo_light.png'

import Twitter from "../../assets/icons/twitter.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import logo from "../../assets/icons/logo.svg";
import "./footer-module.scss";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__content">
        <div className="footer__content-item">
          <img className="footer-logo" src={logo} alt="Logo" />
          <div className="footer-text">
            <h2>MEDKIT.COM</h2>
            <p>Health is wealth</p>
          </div>
        </div>
        <div className="footer__content-text">
          <p>
            Access to medical services with Certified Medical<br/> Consultants on
            Medkit.
          </p>
          <span>Contact@medkit.com</span>
          <span>(233) 678-0202</span>
        </div>

        <div className="footer__icons">
          <img src={Twitter} alt={`Twitter icon`} />
          <img src={Facebook} alt={`Facebook icon`} />
          <img src={Instagram} alt={`Instagram icon`} />
        </div>
      </div>

      <div className="footer__content">
        <h2>Information</h2>
        <p>Blog</p>
        <p>Special Offers</p>
        <p>F.A.Q</p>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
      </div>

      <div className="footer__content">
        <h2>Quick Links</h2>
        <p>Book an Appointment</p>
        <p>Free Consultation</p>
      </div>

      <div className="footer__content">
        <h2>Company</h2>
        <p>About Us</p>
        <p>Help Center</p>
        <p>Privacy Policy</p>
      </div>
  

      <div className="footer__mobile-content">
        <p>Find & follow us</p>

        <div className="footer__mobile-icons">
          <img src={Twitter} alt={`Twitter icon`} />
          <img src={Facebook} alt={`Facebook icon`} />
          <img src={Instagram} alt={`Instagram icon`} />
        </div>

        <div className="footer__mobile-contact">
          <p>Tel: (233) 678-0202</p>
          <p>Fax: 0300000025</p>
          <p>Email: medkit@gmail.com</p>
        </div>
        <hr/>

          <div className="span">
          <span>Copyright  &copy; </span>
          <span>2023 All Rights Reserved</span>
           </div>        
      </div>



    </section>
  );
};

export default Footer;

//   Box,
//   Divider,
//   Flex,
//   Grid,
//   GridItem,
//   Image,
//   Link,
//   List,
//   ListItem,
//   Text,
// } from "@chakra-ui/react";

// <Box
//   className={style.footer}
//   bgColor={`bgBlack`}
//   // className="page_alignment"
// >
//   {/* <Container noPaddingBlock={'0'}> */}
//   <Box color={`white`}>
//     <Grid
//       textAlign={{ base: `center`, md: `left` }}
//       templateColumns={{ base: `repeat(1, 1fr)`, xl: `repeat(7, 1fr)` }}
//       gap={{ xl: 6 }}
//     >
//       <GridItem colSpan={3}>
//         <Box
//           h={`3rem`}
//           m={{ base: `auto`, md: `initial` }}
//           w={`fit-content`}
//         >
//           <Link as={ReactLink} to={`/`}>
//             <Image
//               src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1680856120/project-yemsays/Group_87_qudnxl.png`}
//             />
//           </Link>
//         </Box>
//         <Text
//           color={`textGrey`}
//           maxW={`351px`}
//           margin={{ base: `auto`, md: `initial` }}
//         >
//           Lörem ipsum birade fanas. Tridonar myvis, seng om äniskort. Lörem
//           ipsum birade fanas. Tridonarse fanas. Tridonar jmyvis, seng om
//           äniskort.
//         </Text>
//       </GridItem>
//       <GridItem colSpan={{ base: 2, xl: 1 }}>
//         <Box>
//           <Box h={`3rem`}>
//             <Text fontWeight={`bold`}>About</Text>
//           </Box>
//           <List as={`div`}>
//             <ListItem
//               cursor={`pointer`}
//               _hover={{ color: `primary` }}
//               color={`textGrey`}
//               textTransform={`capitalize`}
//               mb={`9px`}
//             >
//               Company
//             </ListItem>
//             <ListItem
//               cursor={`pointer`}
//               _hover={{ color: `primary` }}
//               color={`textGrey`}
//               textTransform={`capitalize`}
//               mb={`9px`}
//             >
//               <Link as={ReactLink} display={`inline`} to={"/about-us"}>
//                 Team
//               </Link>
//             </ListItem>
//             <ListItem
//               cursor={`pointer`}
//               _hover={{ color: `primary` }}
//               color={`textGrey`}
//               textTransform={`capitalize`}
//               mb={`9px`}
//             >
//               <Link as={ReactLink} display={`inline`} to={"#testimonials"}>
//                 Testimonial
//               </Link>
//             </ListItem>
//             <ListItem
//               cursor={`pointer`}
//               _hover={{ color: `primary` }}
//               color={`textGrey`}
//               textTransform={`capitalize`}
//               mb={`9px`}
//             >
//               <Link as={ReactLink} display={`inline`} to={"/contact"}>
//                 Contact
//               </Link>
//             </ListItem>
//           </List>
//         </Box>
//       </GridItem>
//       <GridItem colSpan={{ base: 2, xl: 1 }}>
//         <Box>
//           <Box h={`3rem`}>
//             <Text fontWeight={`bold`}>Properties</Text>
//           </Box>
//           <List>
//             <ListItem
//               cursor={`pointer`}
//               _hover={{ color: `primary` }}
//               color={`textGrey`}
//               textTransform={`capitalize`}
//               mb={`9px`}
//             >
//               Listings
//             </ListItem>
//             <ListItem
//               cursor={`pointer`}
//               _hover={{ color: `primary` }}
//               color={`textGrey`}
//               textTransform={`capitalize`}
//               mb={`9px`}
//             >
//               Lands
//             </ListItem>
//             <ListItem
//               cursor={`pointer`}
//               _hover={{ color: `primary` }}
//               color={`textGrey`}
//               textTransform={`capitalize`}
//               mb={`9px`}
//             >
//               Houses
//             </ListItem>
//             <ListItem
//               cursor={`pointer`}
//               _hover={{ color: `primary` }}
//               color={`textGrey`}
//               textTransform={`capitalize`}
//               mb={`9px`}
//             >
//               <Link as={ReactLink} display={`inline`} to={"/book-now"}>
//                 Book Now
//               </Link>
//             </ListItem>
//           </List>
//         </Box>
//       </GridItem>
//       <GridItem colSpan={{ base: 2, xl: 2 }}>
//         <Box>
//           <Box h={`3rem`}>
//             <Text fontWeight={`bold`}>Contact</Text>
//           </Box>
//           <List>
//             <ListItem
//               cursor={`pointer`}
//               _hover={{ color: `primary` }}
//               color={`textGrey`}
//               textTransform={`capitalize`}
//               mb={`9px`}
//             >
//               35a, Lörem ipsum birade fanas.
//             </ListItem>
//             <ListItem
//               cursor={`pointer`}
//               _hover={{ color: `primary` }}
//               color={`textGrey`}
//               textTransform={`capitalize`}
//               mb={`9px`}
//             >
//               www.realestate.com
//             </ListItem>
//             <ListItem
//               cursor={`pointer`}
//               _hover={{ color: `primary` }}
//               color={`textGrey`}
//               textTransform={`capitalize`}
//               mb={`9px`}
//             >
//               Support@realestate.com
//             </ListItem>
//             <ListItem
//               cursor={`pointer`}
//               _hover={{ color: `primary` }}
//               color={`textGrey`}
//               textTransform={`capitalize`}
//               mb={`9px`}
//             >
//               0145782624
//             </ListItem>
//           </List>
//         </Box>
//       </GridItem>
//     </Grid>
//     <Box>
//       <Box
//         display={`flex`}
//         justifyContent={{ base: `center`, md: `initial` }}
//         gap={3}
//       >
//         <Flex
//           p={2}
//           borderRadius={`100%`}
//           bgColor={`white`}
//           color={`primary`}
//         >
//           <FaLinkedin />
//         </Flex>
//         <Flex
//           p={2}
//           borderRadius={`100%`}
//           bgColor={`white`}
//           color={`primary`}
//         >
//           <FaFacebookF />
//         </Flex>
//         <Flex
//           p={2}
//           borderRadius={`100%`}
//           bgColor={`white`}
//           color={`primary`}
//         >
//           <FaTwitter />
//         </Flex>
//       </Box>
//       <Divider my={5} />
//       <Box textAlign={`center`} color={`primary`}>
//         &copy;{new Date().getFullYear()} Yemsays All Rights Reserved
//       </Box>
//     </Box>
//   </Box>
//   {/* </Container> */}
// </Box>
