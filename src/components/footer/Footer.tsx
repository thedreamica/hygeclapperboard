import React from "react";
import Image from "next/image";
import { Box, Button, Divider, Link, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Footer = () => {
  const socialLinks = {
    fontSize: { xs: "1.1em", lg: "1.3em" },
    fontWeight: "400",
    my: { xs: "0.50em", lg: "0" },
    textTransform: "capitalize",
  };
  const Title = {
    fontSize: { xs: "1.6em", lg: "2em" },
    fontWeight: "600",
    mb: "0.6em",
  };
  const para = { fontSize: "1em", fontWeight: "600" };
  return (
    <Box
      sx={{
        px: { xs: "1.3em", lg: "6em" },
        bgcolor: "black",
        color: "white",
        pt: { xs: "2.5em", lg: "6em" },
        pb: ".5em",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "1.4em", lg: "4.5em" },
            fontWeight: "600",
            display: "flex",
            justifyContent: {
              xs: "center",
              lg: "flex-start",
            },
          }}
        >
          info@hygeinfotech.com
        </Typography>
        <Divider sx={{ bgcolor: "primary.light" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xs: "center",
            lg: "space-between",
          },
          alignItems: "center",
          width: { xs: "auto", lg: "33em" },
          my: "2em",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Typography sx={socialLinks}>facebook</Typography>
        <Typography sx={socialLinks}>twitter</Typography>
        <Typography sx={socialLinks}>instagram</Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "auto", lg: "auto auto auto" },
          gap: "3em",
          my: { xs: "0", sm: "0", lg: "6em" },
          placeItems: { xs: "center", lg: "normal" },
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "center", lg: "flex-start" },
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "145px", lg: "200px" },
              height: "87px",
            }}
          >
            <Image
              style={{ objectFit: "contain", left: "-1em" }}
              src="https://i.postimg.cc/bJCr5xjp/Clapper-Logo.png"
              alt=""
              fill={true}
            />
          </Box>
          <Typography
            sx={{
              ...para,
              ml: { xs: "0", lg: "3.2em" },
              mt: "0.5em",
            }}
          >
            We unleash the magic of your strory
          </Typography>
        </Box>
        <Box
          sx={{
            mt: { xs: "0", lg: "2em" },
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          <Typography sx={Title}>Address</Typography>
          <Typography sx={{ ...para, width: "14em" }}>
            Dot Cowork - Tidel Park, 1st Floor D Block, Tharamani, Chennai -
            600113
          </Typography>
          <Typography
            sx={{
              ...para,
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              my: "0.50em",
            }}
          >
            support@hygeinfotech.com
          </Typography>
          <Typography sx={{ ...para }}>Mon - Friday, 8am : 5pm</Typography>
        </Box>
        <Box
          sx={{
            mt: { xs: "0", lg: "2em" },
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          <Typography sx={Title}>Creative & Dynamic</Typography>
          <Link sx={{ textDecoration: "none" }} href="#Contactus">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                my: { xs: "3em", lg: "0" },
              }}
            >
              <Button
                disableRipple
                sx={{
                  textTransform: "uppercase",
                  fontSize: { xs: "1.9em", lg: "2.2em" },
                  fontWeight: "600",
                  color: "white",
                }}
              >
                contact US
              </Button>
              <ArrowOutwardIcon
                sx={{
                  fontSize: { xs: "2.5em", lg: "3.3em" },
                  ml: "0.3em",
                  mb: { xs: ".1em", lg: ".3em" },
                  color: "primary.main",
                }}
              />
            </Box>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", lg: "none" },
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <Link href="#Home">
          <KeyboardArrowUpIcon
            sx={{
              color: "primary.main",
              fontSize: "2.5em",
            }}
          />
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          mb: { xs: "1em", lg: "0" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: ".7em", lg: "1em" },
            fontWeight: "600",
            mx: { xs: "auto", lg: "0" },
          }}
        >
          © Copyright 2023
          <span
            style={{
              color: "#EEB609",
              marginLeft: "4px",
              fontWeight: "900",
            }}
          >
            hyge Clapperboard
          </span>
          , All Rights Reserved.
        </Typography>
        <Link href="#Home">
          <KeyboardArrowUpIcon
            sx={{
              color: "primary.main",
              fontSize: "3.5em",
              display: { xs: "none", lg: "block" },
            }}
          />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;