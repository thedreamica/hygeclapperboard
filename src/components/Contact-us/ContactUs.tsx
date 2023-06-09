import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ContactUs = () => {
  const [submit, setSubmit] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleSubmit = () => {
    setSubmit(true);
  };
  const buttonStyle = {
    fontSize: { xs: "2.5em", lg: "3em" },
    fontWeight: "600",
    mt: "1em",
    color: "black",
    mb: { xs: "1.3em", lg: ".5em" },
    display: "flex",
    mx: { xs: "auto", lg: "0" },
  };

  const iconStyle = {
    fontSize: { xs: "1.4em", lg: "1.3em" },
    color: {
      xs: "primary.main",
      lg: submit ? "blue" : "primary.main",
    },
    mb: "0.2em",
    ml: { xs: ".2em", lg: submit || hovered ? "1.2em" : "0.2em" },
    transform: {
      xs: "rotate(-40deg)",
      lg: submit || hovered ? "rotate(0deg)" : "rotate(-40deg)",
    },
    transition: "transform 0.3s ease",
  };

  return (
    <Box
      id="Contactus"
      sx={{
        px: { xs: "1.3em", lg: "8em" },
        pt: { xs: "1.5em", lg: "6em" },
        pb: { xs: "0em", lg: "3.5em" },
      }}
    >
      <Typography
        sx={{
          color: "primary.main",
          fontWeight: "600",
          fontSize: "2em",
          mb: { xs: "1.4em", lg: "0.5em" },
          textAlign: { xs: "center", lg: "left" },
        }}
      >
        Contact us
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "auto", lg: "auto auto" },
          gap: { xs: "3em", lg: "5.5em" },
          overflow: "hidden",
          mt: { xs: "1em", lg: "2.5em" },
        }}
      >
        <TextField label="YOUR NAME" variant="standard" />
        <TextField label="YOUR EMAIL" variant="standard" />
        <TextField label="YOUR PHONE" variant="standard" />
        <TextField label="SUBJECT" variant="standard" />
        <TextField
          sx={{ width: "210%" }}
          label="MESSAGE"
          multiline
          rows={8}
          variant="standard"
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          disableRipple
          sx={buttonStyle}
          onClick={handleSubmit}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          SUBMIT
          <ArrowForwardIcon sx={iconStyle} />
        </Button>
        {submit && (
          <Typography
            sx={{
              fontSize: { lg: "1.1em", xl: "1.8em" },
              textTransform: "uppercase",
              mt: ".4em",
              display: { xs: "none", lg: "block" },
            }}
          >
            <span style={{ color: "blue", margin: "0 6px" }}>thank you,</span>
            our team will get back to you shortly!
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ContactUs;