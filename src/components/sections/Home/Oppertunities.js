import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Oppertunities = () => {
  return (
    <>
      {/* first */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          m: 2,
          bgcolor: "background.paper",
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
            flexDirection: { xs: "column", md: "row" },
            gap: 5,
          }}
        >
          <Box
            component={"img"}
            src={"./oppertunity1.webp"}
            width={{ xs: "100%", md: "50%" }}
            height={{ xs: "200px", md: "100%" }}
            sx={{
              objectFit: "cover",
              alignSelf: "flex-start",
              borderRadius: 5,
            }}
          />
          <Stack sx={{ flex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                color: "black",
                fontSize: { xs: "32px", sm: "40px", md: "60px" },
              }}
            >
              Experience Seamless Integration with Trusted UK Databases
            </Typography>
            <Typography sx={{ color: "gray" }}>
              Our platform synchronises directly with DfE, Ofqual, and national
              funding registers—ensuring that every qualification, learning aim,
              and provider record is up-to-date and compliant.
            </Typography>
          </Stack>
        </Box>
      </Box>
      {/* second */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          m: 2,
          bgcolor: "background.paper",
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
            flexDirection: { xs: "column", md: "row" },
            gap: 5,
          }}
        >
          <Stack sx={{ flex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                color: "black",
                fontSize: { xs: "32px", sm: "40px", md: "60px" },
              }}
            >
              Discover a World of Funded Learning Opportunities
            </Typography>
            <Typography sx={{ color: "gray" }}>
              From entry-level training to advanced technical qualifications,
              explore every learning aim approved for public funding. Compare
              qualification levels, duration, awarding bodies, and available
              funding streams in one unified portal.
            </Typography>
          </Stack>
          <Box
            component={"img"}
            src={"./oppertunity2.webp"}
            width={{ xs: "100%", md: "50%" }}
            height={{ xs: "200px", md: "100%" }}
            sx={{
              objectFit: "cover",
              alignSelf: "flex-start",
              borderRadius: 5,
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Oppertunities;
