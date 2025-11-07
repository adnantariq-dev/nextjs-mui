import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { MdStar } from "react-icons/md";
import { motion } from "framer-motion";
const Cources = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
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
            width: "100%",
            flexDirection: "column",
          }}
        >
          <Typography variant="h3" fontWeight={"500"} mb={3}>
            Top Cources
          </Typography>
          <Grid container spacing={2}>
            {Array.from(Array(12)).map((_, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <Paper
                  variant="outlined"
                  sx={{
                    bgcolor: "white",
                    p: 1,
                    borderRadius: 3,
                    transition: "all 0.3s ease", // smooth animation
                    "&:hover": {
                      boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
                      transform: "scale(1.03)", // add smooth scale effect
                    },
                  }}
                >
                  <Box
                    component={"img"}
                    src={"./oppertunity1.webp"}
                    sx={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: 3,
                    }}
                  />
                  <Typography sx={{ fontWeight: 600, mt: 1, fontSize: "18px" }}>
                    React Fundamentals: Build UIs
                  </Typography>
                  <Typography sx={{ fontWeight: 600, mt: 1 }}>
                    Skill you'll gain:{" "}
                    <Typography
                      component={"span"}
                      sx={{ fontWeight: 300, color: "gray" }}
                    >
                      Learn React basics — components, props, state, hooks, and
                      routing — by building real UI projects.
                    </Typography>
                  </Typography>

                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mt: 3,
                    }}
                  >
                    <MdStar /> 4.1
                  </Typography>

                  <Typography sx={{ fontWeight: 300, color: "gray" }}>
                    Beinner . Course . 10 hrs
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Cources;
