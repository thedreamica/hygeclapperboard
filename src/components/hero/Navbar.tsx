import React, { useState } from "react";
import Image from "next/image";
import { Box, Button, Link } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const handleLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleLinkBoxEnter = (id: any) => {
    setHoveredId(id);
  };

  const handleLinkBoxLeave = () => {
    setHoveredId(null);
  };

  const icon = {
    fontSize: { xs: "2.7em", sm: "2.7em", lg: "3.5em" },
    color: "white",
    ml: { xs: "4em", sm: "4em", lg: "0" },
  };
  const linkBoxes = [
    { id: 1, label: "Home", href: "#Home" },
    { id: 2, label: "Services", href: "#Services" },
    { id: 3, label: "Our Approach", href: "#OurApproach" },
    { id: 4, label: "About Us", href: "#AboutUs" },
    { id: 5, label: "Contact us", href: "#Contactus" },
  ];
  const linksIcons = (id: number) => ({
    color: "primary.main",
    fontSize: { xs: "2.5em", sm: "2.5em", lg: "3em" },
    transform: hoveredId === id ? "rotate(0deg)" : "rotate(-140deg)",
    transition: ".3s",
  });
  const linkBox = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: { xs: "77%", sm: "77%", lg: "30em" },
    my: "1em",
    cursor: "pointer",
  };
  const links = {
    fontSize: { xs: "1.4em", sm: "1.4em", lg: "2.5em" },
    fontWeight: "600",
    textDecoration: "none",
    color: "white",
    textTransform: "uppercase",
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: ".5em", sm: ".5em", lg: "3em" },
        }}
      >
        {/* image */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "140px", sm: "140px", lg: "150px" },
            height: "87px",
          }}
        >
          <Image
            style={{ objectFit: "contain" }}
            src="https://i.postimg.cc/bJCr5xjp/Clapper-Logo.png"
            alt=""
            fill={true}
          />
        </Box>
        {/* menu */}
        <Button
          sx={{ ":hover": { bgcolor: "transparent" } }}
          onClick={handleLinks}
          disableRipple
        >
          {showLinks ? (
            <ClearIcon sx={{ ...icon, zIndex: 2 }} />
          ) : (
            <DragHandleIcon sx={icon} />
          )}
        </Button>
      </Box>
      {/* links */}
      {showLinks && (
        <Box
          sx={{
            bgcolor: "black",
            color: "white",
            position: "absolute",
            height: { xs: "80vh", sm: "80vh", lg: "100vh" },
            top: 0,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            zIndex: 1,
          }}
        >
          {linkBoxes.map((val) => (
            <Box
              sx={linkBox}
              key={val.id}
              onMouseEnter={() => handleLinkBoxEnter(val.id)}
              onMouseLeave={handleLinkBoxLeave}
            >
              <Link sx={links} href={val.href}>
                {val.label}
              </Link>
              <Link href={val.href}>
                <ArrowDownwardIcon sx={linksIcons(val.id)} />
              </Link>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Navbar;