import React, { useState } from "react";
import Image from "next/image";
import { Box, Button, Divider, Link, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Approach = () => {
  const [showBoxes, setShowBoxes] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleExplore = () => {
    setShowBoxes(!showBoxes);
  };
  const [views, setViews] = useState([
    { id: 1, view: false },
    { id: 2, view: false },
    { id: 3, view: false },
    { id: 4, view: false },
    { id: 5, view: false },
    { id: 6, view: false },
  ]);

  const handleView = (id: number) => {
    setViews((val) =>
      val.map((box) => (box.id === id ? { ...box, view: !box.view } : box))
    );
  };
  const BoxContents = {
    display: "flex",
    justifyContent: {
      xs: "center",
      lg: "space-between",
    },
    flexDirection: { xs: "column", lg: "row" },
    gap: { xs: "2em", lg: "3em", xl: "15em" },
  };
  const textContents = {
    display: "flex",
    alignItems: "flex-end",
    width: { xs: "auto", lg: "fit-content" },
    color: "white",
    justifyContent: {
      xs: "space-between",
      lg: "flex-start",
    },
  };
  const Title = {
    fontSize: { xs: "2.2em", lg: "4em" },
    textTransform: "uppercase",
    width: { xs: "7em", lg: "auto" },
  };
  const BoxDetails = {
    mb: { xs: "1em", lg: "1.2em" },
    ml: { xs: "0.3em", lg: "1.5em" },
    mr: "0.3em",
  };
  const Details = {
    color: "primary.main",
    width: "auto",
    fontWeight: "600",
    fontSize: { xs: ".9em", lg: "1.1em" },
    textAlign: "right",
    lineHeight: "1.3em",
    cursor: "pointer",
  };
  const Icons = {
    fontSize: { xs: "1.7em", lg: "2.3em" },
    mb: ".7em",
  };
  const image = {
    position: "relative",
    width: { xs: "auto", lg: "100%" },
    height: { xs: "200px", sm: "280px", lg: "300px", xl: "380px" },
  };
  const divider = {
    bgcolor: "primary.light",
    mt: "2em",
  };
  const exploreIcons = {
    fontSize: "1em",
    mb: { xs: ".1em", lg: ".3em" },
    ml: ".3em",
  };
  const oddOrders = {
    order: { xs: 1, lg: 0 },
  };
  const evenOrders = {
    order: { xs: 1, lg: 1 },
  };
  const description = {
    color: "white",
    width: { xs: "auto", lg: "24em" },
    mt: "1.3em",
    fontSize: { xs: "1em", lg: "1.1em" },
    fontWeight: "600",
    textAlign: { xs: "center", lg: "left" },
  };
  const viewBox = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  };
  return (
    <Box
      id="OurApproach"
      sx={{
        bgcolor: "black",
        px: { xs: "1.3em", lg: "8em" },
        py: { xs: "2em", lg: "4em" },
      }}
    >
      <Typography
        sx={{
          color: "primary.main",
          fontWeight: "600",
          fontSize: { xs: "1.9em", lg: "2.3em" },
          mb: { xs: "1.4em", lg: "3em" },
          display: "flex",
          justifyContent: { xs: "center", lg: "flex-start" },
        }}
      >
        Our Approach
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: { xs: "auto", lg: "auto auto auto" },
          gap: { xs: "2em", lg: "4em" },
        }}
      >
        <Box>
          <Box sx={BoxContents}>
            <Box sx={oddOrders}>
              <Box sx={textContents}>
                <Box>
                  <Typography variant="h2" sx={Title}>
                    DESIGN
                  </Typography>
                  <Typography variant="h2" sx={Title}>
                    THINKING
                  </Typography>
                </Box>
                <Box sx={viewBox} onClick={() => handleView(1)}>
                  <Box sx={BoxDetails}>
                    <Typography sx={Details}>View</Typography>
                    <Typography sx={Details}>Details</Typography>
                  </Box>
                  {views[0].view ? (
                    <RemoveIcon sx={Icons} />
                  ) : (
                    <ArrowOutwardIcon sx={Icons} />
                  )}
                </Box>
              </Box>
              {views[0].view && (
                <Typography sx={description}>
                  A dynamic and human-centered problem-solving approach that
                  fosters innovation, creativity, and meaningful engagement.
                </Typography>
              )}
            </Box>
            <Box sx={image}>
              <Image
                src="https://i.postimg.cc/CxkGHSK4/Approach-1.png"
                alt=""
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>
          <Divider sx={divider} />
        </Box>
        <Box>
          <Box sx={BoxContents}>
            <Box sx={evenOrders}>
              <Box sx={textContents}>
                <Box>
                  <Typography variant="h2" sx={Title}>
                    Strategic
                  </Typography>
                  <Typography variant="h2" sx={Title}>
                    Design
                  </Typography>
                </Box>
                <Box sx={viewBox} onClick={() => handleView(2)}>
                  <Box sx={BoxDetails}>
                    <Typography sx={Details}>View</Typography>
                    <Typography sx={Details}>Details</Typography>
                  </Box>
                  {views[1].view ? (
                    <RemoveIcon sx={Icons} />
                  ) : (
                    <ArrowOutwardIcon sx={Icons} />
                  )}
                </Box>
              </Box>
              {views[1].view && (
                <Typography sx={description}>
                  Purpose-driven and forward-thinking approach that aligns
                  design with business goals, market insights, and user
                  engagement.
                </Typography>
              )}
            </Box>
            <Box sx={image}>
              <Image
                src="https://i.postimg.cc/nhFFT1Fw/Approach2.png"
                alt=""
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>
          <Divider sx={divider} />
        </Box>
        <Box>
          <Box sx={BoxContents}>
            <Box sx={oddOrders}>
              <Box sx={textContents}>
                <Box>
                  <Typography variant="h2" sx={Title}>
                    Farfetched
                  </Typography>
                  <Typography variant="h2" sx={Title}>
                    Creativity
                  </Typography>
                </Box>
                <Box sx={viewBox} onClick={() => handleView(3)}>
                  <Box sx={BoxDetails}>
                    <Typography sx={Details}>View</Typography>
                    <Typography sx={Details}>Details</Typography>
                  </Box>
                  {views[2].view ? (
                    <RemoveIcon sx={Icons} />
                  ) : (
                    <ArrowOutwardIcon sx={Icons} />
                  )}
                </Box>
              </Box>
              {views[2].view && (
                <Typography sx={description}>
                  Efficient project management that prioritizes timely
                  execution, fostering engagement and momentum for successful
                  outcomes.
                </Typography>
              )}
            </Box>
            <Box sx={image}>
              <Image
                src="https://i.postimg.cc/LXc4TK5z/Approach3.png"
                alt=""
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>
          <Divider sx={divider} />
        </Box>
        {showBoxes && (
          <>
            <Box>
              <Box sx={BoxContents}>
                <Box sx={evenOrders}>
                  <Box sx={textContents}>
                    <Box>
                      <Typography variant="h2" sx={Title}>
                        Design
                      </Typography>
                      <Typography variant="h2" sx={Title}>
                        Feedbacks
                      </Typography>
                    </Box>
                    <Box sx={viewBox} onClick={() => handleView(4)}>
                      <Box sx={BoxDetails}>
                        <Typography sx={Details}>View</Typography>
                        <Typography sx={Details}>Details</Typography>
                      </Box>
                      {views[3].view ? (
                        <RemoveIcon sx={Icons} />
                      ) : (
                        <ArrowOutwardIcon sx={Icons} />
                      )}
                    </Box>
                  </Box>
                  {views[3].view && (
                    <Typography sx={description}>
                      Unconventional and imaginative design ideas that ignite
                      curiosity, inspiration, and engagement by challenging
                      traditional norms.
                    </Typography>
                  )}
                </Box>
                <Box sx={image}>
                  <Image
                    src="https://i.postimg.cc/BZPX1NbT/Approach4.png"
                    alt=""
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Box>
              <Divider sx={divider} />
            </Box>
            <Box>
              <Box sx={BoxContents}>
                <Box sx={oddOrders}>
                  <Box sx={textContents}>
                    <Box>
                      <Typography variant="h2" sx={Title}>
                        Timed
                      </Typography>
                      <Typography variant="h2" sx={Title}>
                        Delivery
                      </Typography>
                    </Box>
                    <Box sx={viewBox} onClick={() => handleView(5)}>
                      <Box sx={BoxDetails}>
                        <Typography sx={Details}>View</Typography>
                        <Typography sx={Details}>Details</Typography>
                      </Box>
                      {views[4].view ? (
                        <RemoveIcon sx={Icons} />
                      ) : (
                        <ArrowOutwardIcon sx={Icons} />
                      )}
                    </Box>
                  </Box>
                  {views[4].view && (
                    <Typography sx={description}>
                      Thoughtful evaluation of design outcomes to assess the
                      real-world effects, inspiring engagement and driving
                      meaningful change.
                    </Typography>
                  )}
                </Box>
                <Box sx={image}>
                  <Image
                    src="https://i.postimg.cc/5NMNQVZJ/Approach5.png"
                    alt=""
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Box>
              <Divider sx={divider} />
            </Box>
            <Box>
              <Box sx={BoxContents}>
                <Box sx={evenOrders}>
                  <Box sx={textContents}>
                    <Box>
                      <Typography variant="h2" sx={Title}>
                        Impact
                      </Typography>
                      <Typography variant="h2" sx={Title}>
                        Measure
                      </Typography>
                    </Box>
                    <Box sx={viewBox} onClick={() => handleView(6)}>
                      <Box sx={BoxDetails}>
                        <Typography sx={Details}>View</Typography>
                        <Typography sx={Details}>Details</Typography>
                      </Box>
                      {views[5].view ? (
                        <RemoveIcon sx={Icons} />
                      ) : (
                        <ArrowOutwardIcon sx={Icons} />
                      )}
                    </Box>
                  </Box>
                  {views[5].view && (
                    <Typography sx={description}>
                      Collaborative and insightful input from stakeholders,
                      users, or peers that encourages creativity, sparks
                      engagement, and refines design solutions.
                    </Typography>
                  )}
                </Box>
                <Box sx={image}>
                  <Image
                    src="https://i.postimg.cc/L8xHWZh4/Approach6.png"
                    alt=""
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Box>
      <Link
        href="#OurApproach"
        sx={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          disableRipple
          sx={{
            fontSize: { xs: "3em", lg: "5em" },
            fontWeight: "600",
            color: "white",
            mt: { xs: ".6em", lg: "1.5em" },
            ":hover": {
              bgcolor: "transparent",
            },
          }}
          onClick={handleExplore}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          EXPLORE
          {showBoxes ? (
            <RemoveIcon sx={exploreIcons} />
          ) : (
            <AddIcon
              sx={{
                ...exploreIcons,
                color: hovered ? "primary.main" : "inherit",
                transition: ".3s",
                transform: {
                  xs: "none",
                  lg: hovered ? "rotate(40deg)" : "none",
                },
              }}
            />
          )}
        </Button>
      </Link>
    </Box>
  );
};

export default Approach;