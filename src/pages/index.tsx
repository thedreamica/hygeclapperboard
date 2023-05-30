import { Box } from "@mui/material";
import Hero from "@/components/hero/Hero";
import WhatWeDo from "@/components/whatWeDo/WhatWeDo";
import AboutUs from "@/components/About/AboutUs";
import Approach from "@/components/Our-Approach/OurApproach";
import ContactUs from "@/components/Contact-us/ContactUs";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <Box>
      <Hero />
      <WhatWeDo />
      <AboutUs />
      <Approach />
      <ContactUs />
      <Footer />
    </Box>
  );
}
