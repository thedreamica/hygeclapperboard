import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import marqueeData from "./marquee";

const WhatWeDo = () => {
  const BoxContents = {
    display: "flex",
    justifyContent: { xs: "center", sm: "center", lg: "space-between" },
    position: "relative",
    flexDirection: { xs: "column", sm: "column", lg: "row" },
    textAlign: { xs: "center", sm: "center", lg: "start" },
    alignItems: { xs: "center", sm: "center", lg: "flex-start" },
    width: { xs: "auto", sm: "auto", lg: "auto" },
    px: { xs: "1.3em", sm: "1.3em", lg: "10em" },
  };
  const MarqueePara = {
    fontSize: { xs: "2em", sm: "2em", lg: "3em" },
    fontWeight: "900",
    textTransform: "uppercase",
    mr: "10px",
    // fontFamily: 'Poppins !important'
  };
  const imageStyles: {
    [key: number]: {
      width: {
        xs: string;
        sm: string;
        lg: string;
      };
      height: {
        xs: string;
        sm: string;
        lg: string;
      };
    };
  } = {
    1: {
      width: { xs: "100%", sm: "100%", lg: "800px" },
      height: { xs: "230px", sm: "230px", lg: "400px" },
    },
    2: {
      width: { xs: "250px", sm: "250px", lg: "450px" },
      height: { xs: "250px", sm: "250px", lg: "430px" },
    },
    3: {
      width: { xs: "200px", sm: "200px", lg: "400px" },
      height: { xs: "250px", sm: "250px", lg: "400px" },
    },
    4: {
      width: { xs: "300px", sm: "300px", lg: "600px" },
      height: { xs: "200px", sm: "200px", lg: "400px" },
    },
    5: {
      width: { xs: "100%", sm: "100%", lg: "800px" },
      height: { xs: "160px", sm: "160px", lg: "300px" },
    },
  };
  const titleStyles: {
    [key: number]: {
      width: {
        xs: string;
        sm: string;
        lg: string;
      };
    };
  } = {
    1: {
      width: { xs: "auto", sm: "auto", lg: "4em" },
    },
    2: {
      width: { xs: "auto", sm: "auto", lg: "auto" },
    },
    3: {
      width: { xs: "auto", sm: "auto", lg: "10em" },
    },
    4: {
      width: { xs: "auto", sm: "auto", lg: "auto" },
    },
    5: {
      width: { xs: "auto", sm: "auto", lg: "7em" },
    },
  };
  return (
    <Box
      id="Services"
      sx={{
        py: { xs: "2em", sm: "2em", lg: "4em" },
      }}
    >
      <Typography
        sx={{
          color: "primary.main",
          fontWeight: "600",
          fontSize: { xs: "1.9em", sm: "1.9em", lg: "2.3em" },
          mb: { xs: ".5em", sm: ".5em", lg: "2.5em" },
          textAlign: { xs: "center", sm: "center", lg: "left" },
          px: { xs: "1.3em", sm: "1.3em", lg: "4.5em" },
        }}
      >
        What We Do
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto",
          gap: { xs: "7em", sm: "7em", lg: "15em" },
        }}
      >
        {marqueeData.map((item) => {
          const { id, title, description, img, marquee } = item;
          const imageStyle = imageStyles[id] || {};
          const { width, height } = imageStyle;
          const titleStyle = titleStyles[id] || {};
          const textOrder = id % 2 === 1 ? 1 : 2;
          const ImageOrder = id % 2 === 1 ? 2 : 1;
          return (
            <Box key={id}>
              <Box sx={{ position: "relative" }}>
                <Box sx={BoxContents}>
                  <Box sx={{ order: { xs: 2, sm: 2, lg: textOrder } }}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "2.5em", sm: "2.5em", lg: "6em" },
                        textTransform: "uppercase",
                        fontWeight: "400",
                        ...titleStyle,
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "1.3em", sm: "1.3em", lg: "1.8em" },
                        fontWeight: "400",
                      }}
                    >
                      {description}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width,
                      height,
                      position: "relative",
                      mb: { xs: "2em", sm: "2em", lg: "0" },
                      order: { xs: "1", sm: "1", lg: ImageOrder },
                    }}
                  >
                    <Image
                      src={img}
                      alt=""
                      fill={true}
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    zIndex: -1,
                    bottom: { xs: "-6.3em", sm: "-6.3em", lg: "-3em" },
                  }}
                >
                  <Marquee speed={230}>
                    {(marquee ?? []).map((val) => {
                      return (
                        <Box key={val.id} sx={{ display: "flex", alignItems: "center" }}>
                          <Typography
                            sx={{
                              color: "primary.main",
                              fontSize: { xs: "3.5em", sm: "3.5em", lg: "6em" },
                              mt: { xs: ".3em", sm: ".3em", lg: ".6em" },
                              mr: ".1em",
                            }}
                          >
                            *
                          </Typography>
                          <Typography
                            sx={{
                              ...MarqueePara,
                              color: "white",
                              textShadow:
                                "#000 0px 0px 1px,#000 0px 0px 1px,#000 0px 0px 1px,#000 0px 0px 1px,#000 0px 0px 1px,#000 0px 0px 1px",
                            }}
                          >
                            {val.paraOne}
                          </Typography>
                          <Typography
                            sx={{ ...MarqueePara, color: "primary.light" }}
                          >
                            {val.paraTwo}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Marquee>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default WhatWeDo;