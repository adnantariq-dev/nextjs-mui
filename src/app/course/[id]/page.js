"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useGetCourseByIdQuery } from "@/redux/apis/coursApi";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Divider,
  Chip,
  Button,
  CircularProgress,
} from "@mui/material";
import { MdStar } from "react-icons/md";
import Link from "next/link";

const CourseDetailPage = () => {
  const { id } = useParams(); // extract route param
  const { data, error, isLoading } = useGetCourseByIdQuery(id);

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

  if (error) return <p>Failed to load course details.</p>;

  const course = data;

  return (
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
          mt: 10,
          gap: 5,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          component="img"
          src={course.image}
          alt={course.title}
          sx={{
            width: { xs: "100%", md: "50%" },
            objectFit: "cover",
            borderRadius: 3,
            mb: 3,
            flex: 1,
          }}
        />
        {/* Course Info */}
        <Box flex={1}>
          <Typography
            variant="h4"
            fontWeight={600}
            color="secondary.main"
            gutterBottom
          >
            {course.title}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={1} mb={2}>
            <MdStar color="#fbc02d" size={22} />
            <Typography fontWeight={500}>{course.rating}</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography color="text.secondary">{course.level}</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography color="text.secondary">
              {course.durationHours} hours
            </Typography>
          </Stack>

          <Typography sx={{ fontSize: 16, color: "text.secondary", mb: 3 }}>
            {course.description}
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap" mb={3}>
            {course.tags?.map((tag, i) => (
              <Chip
                key={i}
                label={tag}
                color="primary"
                variant="outlined"
                sx={{ textTransform: "capitalize" }}
              />
            ))}
          </Stack>

          <Typography variant="body1" mb={1}>
            <strong>Instructor:</strong> {course.instructor}
          </Typography>

          <Typography variant="body1" mb={1}>
            <strong>Category:</strong> {course.category}
          </Typography>

          <Typography variant="body1" mb={1}>
            <strong>Published:</strong>{" "}
            {new Date(course.publishedAt).toLocaleDateString()}
          </Typography>

          <Typography variant="h6" mt={3}>
            {course.isFree ? (
              <Chip label="Free" color="success" />
            ) : (
              <>
                <Typography
                  component="span"
                  color="primary.main"
                  fontWeight={600}
                >
                  ${course.price}
                </Typography>{" "}
                <Typography component="span" color="text.secondary">
                  USD
                </Typography>
              </>
            )}
          </Typography>

          <Button
            disableElevation
            disableFocusRipple
            disableRipple
            variant="contained"
            color="primary"
            sx={{ mt: 3, borderRadius: 2, px: 4, py: 1 }}
            component={Link}
            href={"/"}
          >
            Enroll Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseDetailPage;
