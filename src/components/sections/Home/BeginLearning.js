import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

const BeginLearning = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",

          justifyContent: "center",
          m: 2,

          borderRadius: 9,
          px: { xs: "16px", md: "32px" },
          py: { xs: "48px", md: "52px" },
        }}
      >
        <Box
          sx={{
            maxWidth: "1300px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Typography variant="h3" textAlign={{ xs: "center", md: "start" }}>
            Begin Your Learning
            <br />
            Journey — Today
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              gap:4
            }}
          >
            <Box
              component={"img"}
              sx={{ width: { xs: "250px", sm: "300px", md: "500px" } }}
              src={"./beginLearning.webp"}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "secondary.light",
                  mt: 4,
                  maxWidth: "400px",
                  textAlign: { xs: "center", md: "start" },
                }}
              >
                Explore funded UK courses and start your journey toward
                recognised qualifications today.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "secondary.main",
                  color: "white",
                  textTransform: "capitalize",
                  fontWeight: 600,
                  borderRadius: 10,
                  width: "fit-content",
                  py: 1,
                  px: 3,
                  fontSize: "14px",
                  mt: 4,
                }}
                endIcon={<FaCircleArrowRight />}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BeginLearning;
