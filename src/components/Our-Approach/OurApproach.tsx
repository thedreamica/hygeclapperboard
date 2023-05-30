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
      sm: "center",
      lg: "space-between",
    },
    flexDirection: { xs: "column", sm: "column", lg: "row" },
  };
  const textContents = {
    display: "flex",
    alignItems: "flex-end",
    width: { xs: "20em", sm: "20em", lg: "30em" },
    color: "white",
  };
  const Title = {
    fontSize: { xs: "2.2em", sm: "2.2em", lg: "4em" },
    textTransform: "uppercase",
    width: { xs: "7em", sm: "7em", lg: "9em" },
  };
  const Details = {
    mb: { xs: "1em", sm: "1em", lg: "1.2em" },
    ml: { xs: "0.3em", sm: "0.3em", lg: "1.5em" },
    mr: "0.3em",
    color: "primary.main",
    width: "5em",
    fontWeight: "600",
    fontSize: { xs: ".9em", sm: ".9em", lg: "1.1em" },
    textAlign: "right",
    lineHeight: "1.3em",
    cursor: "pointer",
  };
  const Icons = {
    fontSize: { xs: "1.7em", sm: "1.7em", lg: "2.3em" },
    mb: "1em",
  };
  const image = {
    position: "relative",
    width: { xs: "auto", sm: "auto", lg: "700px" },
    height: { xs: "200px", sm: "200px", lg: "300px" },
    mt: { xs: "1.4em", sm: "1.4em", lg: "0" },
    mb: { xs: "2.8em", sm: "2.8em", lg: "0" },
  };
  const divider = {
    bgcolor: "primary.light",
    mt: "2em",
  };
  const exploreIcons = {
    fontSize: { xs: "1em", sm: "1em", lg: "1em" },
    mb: { xs: ".1em", sm: ".1em", lg: ".3em" },
    ml: ".3em",
  };
  const oddOrders = {
    order: { xs: 1, sm: 1, lg: 0 },
  };
  const evenOrders = { order: { xs: 1, sm: 1, lg: 1 } };
  const description = {
    color: "white",
    width: { xs: "auto", sm: "auto", lg: "24em" },
    mt: "1.3em",
    fontSize: { xs: "1em", sm: "1em", lg: "1.1em" },
    fontWeight: "600",
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
        px: { xs: "1.3em", sm: "1.3em", lg: "10em" },
        py: { xs: "2em", sm: "2em", lg: "4em" },
      }}
    >
      <Typography
        sx={{
          color: "primary.main",
          fontWeight: "600",
          fontSize: { xs: "1.9em", sm: "1.9em", lg: "2.3em" },
          mb: { xs: "1.4em", sm: "1.4em", lg: "3em" },
          display: "flex",
          justifyContent: { xs: "center", sm: "center", lg: "flex-start" },
        }}
      >
        Our Approach
      </Typography>
      {/* grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: { xs: "auto", sm: "auto", lg: "auto auto auto" },
          gap: { xs: "2em", sm: "2em", lg: "4em" },
        }}
      >
        {/* first Box */}
        <Box>
          <Box sx={BoxContents}>
            {/* Text */}
            <Box sx={oddOrders}>
              <Box sx={textContents}>
                <Typography variant="h2" sx={Title}>
                  DESIGN THINKING
                </Typography>
                <Box sx={viewBox} onClick={() => handleView(1)}>
                  <Typography sx={Details}>View Details</Typography>
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
            {/* Image */}
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
        {/* Second Box */}
        <Box>
          <Box sx={BoxContents}>
            {/* Text */}
            <Box sx={evenOrders}>
              <Box sx={textContents}>
                <Typography variant="h2" sx={Title}>
                  Strategic Design
                </Typography>
                <Box sx={viewBox} onClick={() => handleView(2)}>
                  <Typography sx={Details}>View Details</Typography>
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
            {/* Image */}
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
        {/* Third Box */}
        <Box>
          <Box sx={BoxContents}>
            {/* Text */}
            <Box sx={oddOrders}>
              <Box sx={textContents}>
                <Typography variant="h2" sx={Title}>
                  Farfetched Creativity
                </Typography>
                <Box sx={viewBox} onClick={() => handleView(3)}>
                  <Typography sx={Details}>View Details</Typography>
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
            {/* Image */}
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
            {/* fourth Box */}
            <Box>
              <Box sx={BoxContents}>
                {/* Text */}
                <Box sx={evenOrders}>
                  <Box sx={textContents}>
                    <Typography variant="h2" sx={Title}>
                      Design Feedbacks
                    </Typography>
                    <Box sx={viewBox} onClick={() => handleView(4)}>
                      <Typography sx={Details}>View Details</Typography>
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
                {/* Image */}
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
            {/* fifth Box */}
            <Box>
              <Box sx={BoxContents}>
                {/* Text */}
                <Box sx={oddOrders}>
                  <Box sx={textContents}>
                    <Typography variant="h2" sx={Title}>
                      Timed Delivery
                    </Typography>
                    <Box sx={viewBox} onClick={() => handleView(5)}>
                      <Typography sx={Details}>View Details</Typography>
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
                {/* Image */}
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
            {/* sixth Box */}
            <Box>
              <Box sx={BoxContents}>
                {/* Text */}
                <Box sx={evenOrders}>
                  <Box sx={textContents}>
                    <Typography variant="h2" sx={Title}>
                      Impact Measure
                    </Typography>
                    <Box sx={viewBox} onClick={() => handleView(6)}>
                      <Typography sx={Details}>View Details</Typography>
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
                {/* Image */}
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
            {/* end of sixth Box */}
          </>
        )}
      </Box>
      <Link sx={{ textDecoration: "none" }} href="#OurApproach">
        <Button
          disableRipple
          sx={{
            fontSize: { xs: "3em", sm: "3em", lg: "5em" },
            fontWeight: "600",
            color: "white",
            ml: { xs: "0.3em", sm: "0.3em", lg: "auto" },
            display: "flex",
            mx: "auto",
            mt: "1.5em",
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
                  sm: "none",
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