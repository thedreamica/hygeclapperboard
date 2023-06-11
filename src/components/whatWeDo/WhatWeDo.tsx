import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import marqueeData from "./marquee";

const WhatWeDo = () => {
  const MarqueePara = {
    fontSize: { xs: "2em", lg: "3em" },
    fontWeight: "900",
    textTransform: "uppercase",
    mr: "10px",
  };
  const imageStyles: {
    [key: number]: {
      width: {
        xs: string;
        lg: string;
      };
      height: {
        xs: string;
        lg: string;
      };
    };
  } = {
    1: {
      width: { xs: "100%", lg: "800px" },
      height: { xs: "230px", lg: "400px" },
    },
    2: {
      width: { xs: "250px", lg: "450px" },
      height: { xs: "250px", lg: "430px" },
    },
    3: {
      width: { xs: "200px", lg: "350px" },
      height: { xs: "250px", lg: "400px" },
    },
    4: {
      width: { xs: "300px", lg: "630px" },
      height: { xs: "200px", lg: "430px" },
    },
    5: {
      width: { xs: "100%", lg: "900px" },
      height: { xs: "160px", lg: "370px" },
    },
  };
  const titleStyles: {
    [key: number]: {
      width: {
        xs: string;
        lg: string;
      };
    };
  } = {
    1: {
      width: { xs: "auto", lg: "4em" },
    },
    2: {
      width: { xs: "auto", lg: "auto" },
    },
    3: {
      width: { xs: "auto", lg: "9em" },
    },
    4: {
      width: { xs: "auto", lg: "auto" },
    },
    5: {
      width: { xs: "auto", lg: "auto" },
    },
  };

  return (
    <Box
      id="Services"
      sx={{
        py: { xs: "2em", lg: "4em" },
      }}
    >
      <Typography
        sx={{
          color: "primary.main",
          fontWeight: "600",
          fontSize: { xs: "1.9em", lg: "2.3em" },
          mb: { xs: ".5em", lg: "2.5em" },
          textAlign: { xs: "center", lg: "left" },
          px: { xs: "1.3em", lg: "3.5em" },
        }}
      >
        What We Do
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto",
          gap: { xs: "7em", lg: "15em" },
        }}
      >
        {marqueeData.map((item) => {
          const { id, title, description, img, marquee } = item;
          const titleStyle = titleStyles[id] || {};
          const imageStyle = imageStyles[id] || {};
          const { width, height } = imageStyle;
          const textOrder = id % 2 === 1 ? 1 : 2;
          const ImageOrder = id % 2 === 1 ? 2 : 1;
          const descStyles = id % 2 === 1 ? "left" : "right";
          return (
            <Box key={id}>
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      lg: "space-between",
                    },
                    alignItems: {
                      xs: "center",
                      lg: "flex-start",
                    },
                    flexDirection: { xs: "column", lg: "row" },
                    gap: { xs: "2em", lg: "3em" },
                    position: "relative",
                    MaxWidth: { xs: "auto", lg: "auto" },
                    px: { xs: "1.3em", xl: "8em" },
                    textAlign: { xs: "center", lg: descStyles },
                  }}
                >
                  <Box
                    sx={{
                      order: { xs: 2, lg: textOrder },
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "2.5em", lg: "5em" },
                        textTransform: "uppercase",
                        fontWeight: "400",
                        ...titleStyle,
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "1.3em", lg: "1.8em" },
                        fontWeight: "400",
                      }}
                    >
                      {description}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: { xs: "100%", lg: "auto" },
                      display: "flex",
                      justifyContent: { xs: "center", lg: "flex-start" },
                      order: { xs: 1, lg: ImageOrder },
                    }}
                  >
                    <Box
                      sx={{
                        width,
                        height,
                        position: "relative",
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
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    zIndex: -1,
                    bottom: { xs: "-6.3em", lg: "-3em" },
                  }}
                >
                  <Marquee speed={230}>
                    {(marquee ?? []).map((val) => {
                      return (
                        <Box
                          key={val.id}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <Typography
                            sx={{
                              color: "primary.main",
                              fontSize: { xs: "3.5em", lg: "6em" },
                              mt: { xs: ".3em", lg: ".6em" },
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