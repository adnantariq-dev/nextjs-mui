import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

const Featured = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        m: 2,
        bgcolor: "secondary.main",
        borderRadius: 9,
        px: { xs: "16px", md: "32px" },
        py: { xs: "48px", md: "52px" },
        flex: 1,
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
        <Typography variant="h3" textAlign={"center"} mb={5}>
          Featured Insight and Highlighted Qualification
        </Typography>
        <Stack
          direction={"row"}
          sx={{
            width: "100%",
            gap: 1,
            alignItems: "center",
            justifyContent: "center",

            display: { xs: "none", md: "flex" },
          }}
        >
          <Box
            component="img"
            src="./feature1.webp"
            alt="Feature 1"
            sx={{
              width: "50%",
              height: "auto",
              objectFit: "cover",
              borderRadius: 3,
            }}
          />
          <Box
            component="img"
            src="./feature2.webp"
            alt="Feature 2"
            sx={{
              width: { xs: "100%", md: "50%" },
              height: "auto",
              objectFit: "cover",
              borderRadius: 3,
            }}
          />
        </Stack>
      </Box>
      <Box
        sx={{
          maxWidth: "1300px",
          display: "flex",
          color: "white",
          gap: 5,
          bgcolor: "secondary.light",
          mt: 2,
          borderRadius: 5,
          px: 2,
          py: { xs: 8, md: 4 },
          alignItems: "center",
        }}
      >
        <Stack sx={{ flex: 1 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "32px", sm: "40px", md: "60px" },
            }}
          >
            Awarding Body Insights
          </Typography>
          <Typography variant="body1" sx={{ color: "text.gray", mt: 4 }}>
            Access detailed profiles of awarding organisations, including
            qualification scope and active centres.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "white",
              color: "black",
              textTransform: "capitalize",
              fontWeight: 600,
              borderRadius: 10,
              width: "fit-content",
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
        </Stack>
        <Box
          component={"img"}
          src={"./feature3.webp"}
          width={{ xs: "100%", md: "50%" }}
          height={{ xs: "200px", md: "100%" }}
          sx={{
            objectFit: "cover",
            display: { xs: "none", md: "block" },
            borderRadius: 5,
          }}
        />
      </Box>
    </Box>
  );
};

export default Featured;
