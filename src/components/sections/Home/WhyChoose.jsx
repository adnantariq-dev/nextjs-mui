"use client";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhyChoose = () => {
  const whyUsData = [
    {
      title: "Comprehensive Coverage",
      src: "/whyus1.svg",
      description: "Access 35,000+ qualifications and apprenticeships.",
    },
    {
      title: "Time Savings",
      src: "/whyus2.svg",
      description: "Reduce research time on funding and eligibility checks.",
    },
    {
      title: "Ease of Use",
      src: "/whyus3.svg",
      description:
        "Simple filters, dynamic dashboards, and intuitive analytics tools.",
    },
    {
      title: "Scalable Access",
      src: "/whyus4.svg",
      description:
        "Designed for providers, employers, and education consultants.",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        m: 2,
        bgcolor: "background.paper",
        borderRadius: "56px",
        px: { xs: "16px", md: "32px" },
        py: { xs: "48px", md: "52px" },
      }}
      component={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariant}
    >
      <Box
        sx={{
          maxWidth: "1300px",
          display: "flex",
          mx: "10px",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 10,
          justifyContent: "center",
        }}
      >
        {/* Title */}
        <Typography
          component={motion.h3}
          variants={itemVariant}
          variant="h3"
          sx={{
            flex: 1,
            textAlign: "center",
            fontWeight: 700,
            fontSize: { xs: "28px", md: "36px" },
          }}
        >
          Why Choose Us — Empowering Learning for All
        </Typography>

        {/* Animated List */}
        <Stack
          spacing={4}
          sx={{ flex: 1 }}
          component={motion.div}
          variants={containerVariant}
        >
          {whyUsData.map((item, index) => (
            <Box
              key={index}
              component={motion.div}
              variants={itemVariant}
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                borderRadius: 3,
                p: 1,
              }}
            >
              <Box
                component="img"
                src={item.src}
                alt={item.title}
                sx={{ width: 56, height: 56 }}
              />
              <Stack>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  {item.description}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default WhyChoose;
