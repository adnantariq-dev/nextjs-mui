"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";

const HelpSection = () => {
  const [selected, setSelected] = React.useState(0);
  const faqs = [
    {
      question: "How can I find a government-funded course?",
      answer:
        "Explore a range of government-funded courses across the LearningCreed platform. These fully funded opportunities help learners gain valuable qualifications, enhance career prospects, and develop in-demand skills through flexible learning options.",
    },
    {
      question: "What types of qualifications can I study?",
      answer:
        "You can explore a variety of qualifications including diplomas, certificates, apprenticeships, and short professional courses designed to improve career readiness and skill development.",
    },
    {
      question: "Am I eligible for funding?",
      answer:
        "Eligibility depends on factors such as your age, residency, and previous education level. Check the course details or contact LearningCreed support to confirm your funding eligibility.",
    },
    {
      question: "What should I do if I can’t find my course?",
      answer:
        "Try using the search or filter options to refine results. If your course is still not listed, contact our support team for personalized assistance or updates on upcoming programs.",
    },
    {
      question: "Are all courses free?",
      answer:
        "Not all courses are completely free. Many are fully or partially funded by government programs, while others may require co-payments depending on the provider and your eligibility.",
    },
  ];
  const handleAccordian = (i) => {
    if (selected === i) {
      setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          m: 2,

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

            gap: 5,

            mt: 2,
            borderRadius: 5,
            px: 2,
            py: { xs: 8, md: 4 },
            alignItems: "center",
            flex:{}
          }}
        >
          {/* left */}
          <Stack sx={{ flex: 1, alignSelf: "flex-start" }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "32px", sm: "40px", md: "60px" },
              }}
            >
              Do you need — some help?
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "secondary.light", mt: 4 }}
            >
              Didn’t find the answer you were looking for? Our team is here to
              help you explore your options and check your eligibility.
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
          </Stack>
          {/* rifht */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="subtitle2"
              sx={{ color: "secondary.main", mb: 1 }}
            >
              Questions and Answers
            </Typography>
            <Box>
              {faqs.map((val, index) => (
                <Box
                  key={index}
                  sx={{ borderBottom: 1, borderColor: "text.gray" }}
                >
                  <Button
                    disableElevation
                    disableTouchRipple
                    disableRipple
                    onClick={() => handleAccordian(index)}
                    variant="outline"
                    sx={{
                      color: selected === index ? "secondary.main" : "#54686a",
                      fontSize: selected === index ? "18px" : "16px",
                      py: 2,
                      textTransform: "inherit",
                      lineHeight: "20px",
                      textAlign: "inherit",
                      px: 0,
                      fontWeight: 600,
                    }}
                  >
                    <Box
                      sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}
                    >
                      {selected === index && <IoArrowForward size={24} />}
                      {val.question}
                    </Box>
                  </Button>
                  {selected === index && (
                    <Typography sx={{ color: "#626262",mb:2 }}>
                      {val.answer}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HelpSection;
