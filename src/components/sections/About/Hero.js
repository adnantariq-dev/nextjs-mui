import { Box, Button, Chip, Typography } from "@mui/material";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
import { RiFundsBoxLine } from "react-icons/ri";
const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/hero_background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",

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
          mt: {xs:12, md:20},
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "40px", md: "63px", lg: "72px" },
            fontWeight: 500,
            color: "secondary.main",
          }}
        >
          Your Data-Driven Partner In UK Education Management
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: "50%" },
              flex: 1,
              height: "fit-content",
            }}
          >
            <Box
              component={"img"}
              src="/about-hero.svg"
              sx={{ width: "100%" }}
              alt="Hero"
            />
            <Chip
              icon={<LuGraduationCap size={24} fontWeight={400} />}
              label="Learning"
              variant="outlined"
              sx={{
                position: "absolute",
                bottom: 50,
                right: { xs: 20, md: -30 },
                bgcolor: "white",
                fontSize: "14px",
                fontWeight: 400,
                color: "text.gray",
                px: 1,
                py: 0.5,
                borderColor: "#dedee7ff",
              }}
            />
            <Chip
              icon={<RiFundsBoxLine size={24} fontWeight={400} />}
              label="Learning"
              variant="outlined"
              sx={{
                position: "absolute",
                top: 50,
                left: { xs: 20, md: -60 },
                bgcolor: "white",
                fontSize: "14px",
                fontWeight: 400,
                color: "text.gray",
                px: 1,
                py: 0.5,
                borderColor: "#dedee7ff",
              }}
            />
          </Box>
          <Box flex={1}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 400,
                color: "#001d21",
                opacity: 0.7,
                lineHeight: "32px",
              }}
            >
              We were founded to cut through the complexity of the UK education
              landscape. Our mission is to transform sprawling course, funding,
              and LARS data into a single, intuitive source of truth. We provide
              training institutes with the live intelligence and analytical
              tools needed to ensure unwavering compliance, maximise funding
              eligibility, and drive the strategic growth of your provision—
              saving your team countless hours on manual administration.
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "secondary.main",
                color: "white",
                textTransform: "capitalize",
                fontWeight: 600,
                borderRadius: 10,
                py: 1.5,
                px: 3,
                fontSize: "16px",
                mt: 4,
                "&:hover": {
                  bgcolor: "#111",
                },
              }}
              endIcon={<FaCircleArrowRight />}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
