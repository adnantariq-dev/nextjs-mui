"use client";
import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FaCircleArrowRight } from "react-icons/fa6";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
  },
};

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
        component={motion.div}
        initial="hidden"
        animate="visible"
      >
        {/* Left Text Section */}
        <Box sx={{ flex: 1 }}>
          <Typography
            component={motion.div}
            variants={textVariant}
            custom={0}
            sx={{
              fontSize: "16px",
              fontWeight: 500,
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
            component={motion.div}
            variants={textVariant}
            custom={1}
            variant="h1"
            sx={{
              fontWeight: 500,
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
            component={motion.div}
            variants={textVariant}
            custom={2}
            variant="h3"
            sx={{
              fontWeight: 500,
              maxWidth: 600,
              mb: 2,
              fontSize: { xs: "32px", md: "48px" },
            }}
          >
            Every Funded Course in the UK All in One Place
          </Typography>

          <Typography
            component={motion.div}
            variants={textVariant}
            custom={3}
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
            component={motion.button}
            variants={textVariant}
            custom={4}
            variant="contained"
            sx={{
              bgcolor: "secondary.main",
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
          component={motion.img}
          src="/hero.png"
          alt="Hero"
          variants={imageVariant}
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
