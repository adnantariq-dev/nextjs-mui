import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

const ManageLearning = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          m: 2,
          bgcolor: "secondary.main",
          borderRadius: 9,
          px: { xs: "16px", md: "32px" },
          py: { xs: "48px", md: "52px" },
        }}
      >
        <Box
          sx={{
            maxWidth: "1300px",
            display: "flex",
            color: "white",
            flexDirection: "column",
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent={"space-between"}
            gap={{ xs: 5, md: 10 }}
            width={"100%"}
            mb={5}
          >
            <Typography variant="h2" flex={1}>
              Manage Your Learning Data Anywhere
            </Typography>
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  color: "text.gray",
                }}
              >
                Access the Learning Cloud Portal seamlessly from any device.
                Whether you’re a learner researching career-focused
                qualifications or a provider checking funding eligibility, you
                can manage, monitor, and compare courses with ease.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "white",
                  color: "black",
                  textTransform: "capitalize",
                  fontWeight: 600,
                  borderRadius: 10,
                  py: 1,
                  px: 3,
                  fontSize: "14px",
                  mt: 4,
                  "&:hover": {
                    bgcolor: "white",
                  },
                }}
                endIcon={<FaCircleArrowRight />}
              >
                Contact Us
              </Button>
            </Box>
          </Stack>
          <Grid container spacing={2} sx={{ width: "100%", mt: 2 }}>
            <Grid size={{ md: 5 }}>
              <Stack spacing={2}>
                <Box sx={{ bgcolor: "#328087", borderRadius: 5, p: 3 }}>
                  <Box
                    component={"img"}
                    sx={{ bgcolor: "white", borderRadius: "100%" }}
                    src={"./manage_learning2.webp"}
                  />
                  <Typography mt={2}>
                    “The platform has completely changed how we research funding
                    eligibility. Everything is in one place — fast, accurate,
                    and reliable.”
                  </Typography>
                  <Typography sx={{ mt: 2, color: "#cce7e6", fontWeight: 500 }}>
                    Sarah Rose
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: "white",
                    color: "gray",
                    borderRadius: 5,
                    p: 3,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component={"img"}
                    width={180}
                    src={"./manage_learning.svg"}
                  />
                  <Typography>
                    of providers save hours of manual research weekly using our
                    automated data tools.
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid size={7} sx={{ display: { xs: "none", md: "block" } }}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Box
                  component="img"
                  src="./manage_learning3.svg"
                  alt="Learning Dashboard"
                  sx={{
                    width: "100%",
                    height: "100%",

                    objectFit: "cover",
                    borderRadius: 4,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ManageLearning;
