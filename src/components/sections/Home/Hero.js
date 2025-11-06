"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
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
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent="space-between"
        spacing={{ xs: 4, md: 6 }}
        sx={{ width: "100%", maxWidth: "1300px" }}
      >
        {/* Left Text Section */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: "white",
              bgcolor: "black",
              borderRadius: 10,
              py: "2px",
              px: 4,
              width: "fit-content",
              mb: 2,
            }}
          >
            Welcome To LearningCreed
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2.5rem", sm: "3rem", md: "96px" },
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 2,
            }}
          >
            DISCOVER
            <Box
              component="img"
              src="/hero_text.svg"
              alt="Discover text"
              height={100}
              display={{ xs: "none", lg: "block" }}
            />
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              maxWidth: 600,
              mb: 2,
              fontSize: { xs: "32px", md: "48px" },
            }}
          >
            Every Funded Course in the UK All in One Place
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 600,
              fontSize: { xs: "16px", md: "18px" },
              mt: 4,
              color: "gray",
            }}
          >
            Access comprehensive qualification data, funding eligibility,
            awarding body information, and live analytics — empowering
            providers, employers, and learners with data-driven decisions.
          </Typography>

          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              color: "white",
              textTransform: "capitalize",
              fontWeight: 600,
              borderRadius: 10,
              py: 1.5,
              px: 3,
              fontSize: "16px",
              mt: 4,
              "&:hover": {
                bgcolor: "#111",
              },
            }}
            endIcon={<FaCircleArrowRight />}
          >
            Get Started
          </Button>
        </Box>
        {/* Right Image Section */}
        <Box
          component="img"
          src="/hero.png"
          alt="Hero"
          sx={{
            flex: 1,
            width: "50%",
            objectFit: "contain",
            objectPosition: "center",
            display: { xs: "none", md: "flex" },
          }}
        />
      </Stack>
    </Box>
  );
};

export default Hero;
