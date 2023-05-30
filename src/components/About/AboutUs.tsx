import React from "react";
import { Box, Typography } from "@mui/material";

const AboutUs = () => {
  const title = {
    my: { xs: ".2em", sm: ".2em", lg: "0.5em" },
    mx: { xs: ".2em", sm: ".2em", lg: ".1em" },
    fontSize: { xs: "1.7em", sm: "1.7em", lg: "3.75rem" },
    textTransform: "uppercase",
    fontWeight: "400",
  };
  return (
    <Box
      id="AboutUs"
      sx={{
        py: { xs: "2em", sm: "2em", lg: "8em" },
        px: { xs: "1.3em", sm: "1.3em", lg: "10em" },
        textAlign: "center",
        mt: { xs: "5em", sm: "5em", lg: "0" },
      }}
    >
      <Typography
        sx={{
          color: "primary.main",
          fontSize: { xs: "1.9em", sm: "1.9em", lg: "2.3em" },
          fontWeight: "600",
          mb: { xs: ".7em", sm: ".7em", lg: "0" },
        }}
      >
        About us
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "column", lg: "row" },
            justifyContent: "center",
            mb: { xs: "0", sm: "0", lg: "-5em" },
          }}
        >
          <Typography sx={title} variant="h2">
            Unleashing Creative
          </Typography>

          <Typography
            sx={{
              ...title,
              fontWeight: "700",
            }}
          >
            Excellence
          </Typography>
        </Box>
      </Box>
      <Typography sx={title} variant="h2">
        in AV Production
      </Typography>
      <Typography
        sx={{
          fontWeight: "400",
          lineHeight: "1.5em",
          fontSize: { xs: "1.1em", sm: "1.1em", lg: "1.4em" },
          width: { xs: "auto", sm: "auto", lg: "53em" },
          mx: "auto",
          mb: "4.3em",
          mt: { xs: "1.8em", sm: "1.8em", lg: "0" },
        }}
      >
        Hyge Clapperboard is a leading provider of comprehensive AV production
        solutions. With a passion for creativity and a commitment to excellence,
        we strive to deliver exceptional services across various facets of the
        filmmaking industry. From pre-production to post-production, our
        dedicated team works closely with clients to bring their vision to life.
        At Hyge Clapperboard, we understand the importance of meticulous
        planning and attention to detail. Our pre-production services encompass
        scriptwriting, storyboarding, and casting, ensuring that every aspect of
        your project is carefully crafted. With our expertise in location
        scouting, we help you discover captivating settings that enhance the
        visual appeal of your productions.
      </Typography>
    </Box>
  );
};

export default AboutUs;