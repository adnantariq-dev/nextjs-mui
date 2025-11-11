import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const Supported = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: "24px", md: "100px", lg: "150px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1400px",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          gap: 4,
          mt: { xs: 12, md: 20 },
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: "32px", md: "40px" }, fontWeight: 500 }}
        >
          Supported
          <br />
          UK - Awarding Organisations
        </Typography>
        <Stack
          spacing={5}
          mt={2}
          gap={5}
          flexWrap={"wrap"}
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <Box key={item} sx={{ p: 2 }}>
              <Box component={"img"} src={`./about-comp${item}.svg`} />
            </Box>
          ))}
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={5}
          mt={8}
          flexWrap={"wrap"}
        >
          <Paper
            elevation={0}
            sx={{
              bgcolor: "background.paper",
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 4,
              flex: 1,
              justifyContent: "space-between",
              minWidth: { xs: "100%", md: "400px" },
            }}
          >
            <Typography variant="h5" fontWeight={500} textAlign={"center"}>
              Courses Offered
            </Typography>
            <Box component={"img"} src={"./about-logo1.svg"} />
            <Typography
              variant="h1"
              sx={{ fontSize: "72px", fontWeight: 500, mt: "auto" }}
            >
              35,000+
            </Typography>
            <Typography variant="body1" fontSize={"14px"} textAlign={"center"}>
              UK's largest live catalogue of funded qualifications
            </Typography>
          </Paper>
          <Paper
            elevation={0}
            sx={{
              bgcolor: "background.paper",
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 4,
              flex: 1,
              justifyContent: "space-between",
              minWidth: { xs: "100%", md: "400px" },
            }}
          >
            <Typography variant="h5" fontWeight={500} textAlign={"center"}>
              Awarding Organisations Covered
            </Typography>
            <Box component={"img"} src={"./about-logo2.svg"} />
            <Typography
              variant="h1"
              sx={{ fontSize: "72px", fontWeight: 500, mt: "auto" }}
            >
              500+
            </Typography>
            <Typography variant="body1" fontSize={"14px"} textAlign={"center"}>
              Data integrated from all regulated awarding bodies
            </Typography>
          </Paper>
          <Paper
            elevation={0}
            sx={{
              bgcolor: "background.paper",
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 4,
              flex: 1,
              justifyContent: "space-between",
              minWidth: { xs: "100%", md: "400px" },
            }}
          >
            <Typography variant="h5" fontWeight={500}>
              Training Providers
            </Typography>
            <Box component={"img"} src={"./about-logo1.svg"} />
            <Typography
              variant="h1"
              sx={{ fontSize: "72px", fontWeight: 500, mt: "auto" }}
            >
              60+
            </Typography>
            <Typography variant="body1" fontSize={"14px"} textAlign={"center"}>
              Strategic data across all key skills sectors
            </Typography>
          </Paper>
        </Stack>
      </Box>
    </Box>
  );
};

export default Supported;
