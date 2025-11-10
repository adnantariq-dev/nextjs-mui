"use client";
import { useGetCoursesQuery } from "@/redux/apis/coursApi";
import {
  Box,
  CircularProgress,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { MdStar } from "react-icons/md";

const Cources = () => {
  const { data, error, isLoading } = useGetCoursesQuery();
  console.log(data);

  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <CircularProgress size={40} />
      </Box>
    );
  if (error) return <p>Error fetching courses</p>;
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
            {data.map((val, index) => (
              <Grid
                key={index}
                height={"100%"}
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                alignContent={"stretch"}
              >
                <Link
                  href={`/course/${val.id - 1}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    width: "100%",
                  }}
                >
                  <Paper
                    variant="outlined"
                    sx={{
                      bgcolor: "white",
                      p: 1,
                      borderRadius: 3,
                      transition: "all 0.3s ease",

                      "&:hover": {
                        boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
                        transform: "scale(1.03)",
                      },
                    }}
                  >
                    <Box
                      component={"img"}
                      src={val.image}
                      sx={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: 3,
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 600,
                        mt: 1,
                        fontSize: "18px",
                        color: "primary.main",
                      }}
                    >
                      {val.title}
                    </Typography>
                    <Typography
                      sx={{ fontWeight: 600, mt: 1, color: "primary.light" }}
                    >
                      Skill you'll gain:{" "}
                      <Typography
                        component={"span"}
                        sx={{ fontWeight: 400, color: "text.secondary" }}
                      >
                        {val.description}
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
                      <MdStar color="#fbc02d" /> {val.rating}
                    </Typography>

                    <Typography sx={{ fontWeight: 300, color: "text.secondary" }}>
                      {val.level} . Course . {val.durationHours} hrs
                    </Typography>
                  </Paper>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Cources;
