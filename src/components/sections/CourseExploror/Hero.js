import React from "react";
import { Box, Typography } from "@mui/material";
const Hero = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(/hero_background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: { xs: "560px", md: "800px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: "16px", md: "24px", lg: "48px" },
        }}
      >
        <Box
          sx={{
            maxWidth: "1300px",
            display: "flex",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "32px", sm: "40px", md: "72px" },
              fontWeight: "500",
            }}
          >
            {" "}
            Course Explorer
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: { md: "60%" },
              color: "#666",
              fontSize: "20px",
              fontWeight: 400,
              mt: { xs: 2, md: 3 },
            }}
          >
            Access comprehensive data for over 35,000+ regulated courses — from
            diplomas and apprenticeships to vocational certificates. Highlight
            the breadth and richness of the course dataset before login.
          </Typography>
          <Box
            component={"img"}
            src="/coursesImg.webp"
            alt="Hero"
            sx={{
              flex: 1,
              maxWidth: "1000px",
              objectFit: "contain",
              objectPosition: "center",
              display: { xs: "none", md: "flex" },
              alignSelf: "center",
              mt: 10,
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Hero;
