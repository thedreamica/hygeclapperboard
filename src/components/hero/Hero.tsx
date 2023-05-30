import React from "react";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import Navbar from "./Navbar";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Hero = () => {
  const title = {
    color: "primary.main",
    fontSize: { xs: "1em", sm: "1em", lg: "1.5em" },
    fontWeight: "600",
  };
  const description = {
    fontSize: "1.3em",
    fontWeight: "400",
    lineHeight: "1.8em",
  };
  return (
    <Box
      id="Home"
      sx={{
        width: "100%",
        height: { xs: "auto", sm: "auto", lg: "100vh" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* nav */}
      <Navbar />
      {/* background Image */}
      <Box sx={{ display: { xs: "none", sm: "none", lg: "block" } }}>
        <Image
          src="https://i.postimg.cc/rwbZZBkV/hero-image.png"
          alt=""
          fill={true}
          style={{ zIndex: -1 }}
        />
      </Box>
      {/* Mobile background Image */}
      <Box sx={{ display: { xs: "block", sm: "block", lg: "none" } }}>
        <Image
          src="https://i.postimg.cc/rwbZZBkV/hero-image.png"
          alt=""
          fill={true}
          style={{ zIndex: -1, objectFit: "cover" }}
        />
      </Box>
      {/* Image border */}
      <Image
        src="https://i.postimg.cc/J4SLjd1H/grey.png"
        alt=""
        style={{ zIndex: -1 }}
        fill={true}
      />
      <Box
        sx={{
          overflow: "auto",
          height: { xs: "75vh", sm: "75vh", lg: "100vh" },
          px: { xs: "1.3em", sm: "1.3em", lg: "10em" },
          pt: { xs: "10em", sm: "10em", lg: "3.5em" },
        }}
      >
        {/* first box */}
        <Box
          sx={{
            color: "white",
            zIndex: 2,
          }}
        >
          <Box>
            {/* sassy */}
            <Typography
              sx={{
                fontFamily: "'Sassy Frass', cursive !important",
                fontSize: { xs: "2.5em", sm: "2.5em", lg: "5em" },
                fontWeight: '500'
              }}
            >
              Crafting Dreams Into Reality
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "2.1em", sm: "2.1em", lg: "5.5em" },
                width: { xs: "auto", sm: "auto", lg: "10em" },
                my: { xs: ".5em", sm: ".5em", lg: ".2em" },
                fontWeight: "500",
              }}
              variant="h1"
            >
              LET CLAPPERBOARD COMFORT YOUR CREATIVE NEEDS
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              sx={{
                width: { xs: "auto", sm: "auto", lg: "15em" },
                fontSize: { xs: "1em", sm: "1em", lg: "1.4em" },
              }}
            >
              Let&apos;s inspire, engage and impress. Your Story, Our Impact. We
              Begin From Creative Dilemma And Finish At Ecstasy!
            </Typography>
            {/* <Link href="#scroll"> */}
            <Button
              disableRipple
              sx={{ display: { xs: "none", sm: "none", lg: "block" } }}
            >
              <ArrowDownwardIcon
                sx={{
                  color: "primary.main",
                  zIndex: -1,
                  fontSize: "2.5em",
                  ml: "3em",
                }}
              />
            </Button>
            {/* </Link> */}
          </Box>
          {/* second */}
          <Box
            sx={{
              mt: "12em",
              display: { xs: "none", sm: "none", lg: "flex" },
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: "40em",
              }}
            >
              <Typography sx={title}>
                Ignite Your Creative Vision With Hyge Clapperboard
              </Typography>
              <Typography sx={{ ...description, mt: "2em" }}>
                We are a dynamic AV production company dedicated to bringing
                your creative vision to life with precision and passion. Whether
                you&apos;re working on an album, documentary, short film, or
                marketing and sales campaign, we have the expertise and services
                to make your project stand out. Our comprehensive range of
                services covers every stage of the filmmaking process.
              </Typography>
            </Box>
            {/* */}
            <Box
              // id="scroll"
              sx={{
                mt: "11em",
                mb: "15em",
              }}
            >
              <Typography sx={title}>Know Us</Typography>
              <Typography
                sx={{ ...description, width: "20em", mr: "4em", mt: ".3em" }}
              >
                We are not your ordinary AV production company - we are your
                creative partners, your storytellers, and your visionaries.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  color: "primary.main",
                  alignItems: "flex-start",
                  mt: "6em",
                  mb: "8em",
                }}
              >
                <Button
                  disableRipple
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "1.3em",
                    ":hover": { bgcolor: "transparent" },
                  }}
                >
                  get in touch
                </Button>
                <ArrowOutwardIcon
                  sx={{
                    fontSize: { xs: "2em", sm: "2em", lg: "1.6em" },
                    mt: ".1em",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;