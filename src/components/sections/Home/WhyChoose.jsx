import { Box, Stack, Typography } from "@mui/material";
import React from "react";

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
        px: { xs: "16px", ms: "32px" },
        py: { xs: "48px", md: "52px" },
      }}
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
        <Typography variant="h3" sx={{ flex: 1, textAlign: "center" }}>
          Why Choose Us — Empowering Learning for All
        </Typography>
        <Stack spacing={4} sx={{ flex: 1 }}>
          {whyUsData.map((item, index) => (
            <Box
              key={index}
              sx={{ display: "flex", gap: 1, alignItems: "center" }}
            >
              <Box component={"img"} src={item.src} />
              <Stack>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{}}>
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
