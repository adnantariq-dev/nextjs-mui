"use client";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const data = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Course Explorer", href: "/course" },
    { title: "Careers", href: "/careers" },
    { title: "Glossary", href: "/glossary" },
    { title: "Contact Us", href: "/contact" },
  ];
  const legal = [
    { title: "Terms and Conditions", href: "/terms_conditions" },
    { title: "Privacy Policy", href: "/privacy_policy" },
    { title: "Cookie Policy", href: "/cookie_policy" },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          m: 2,
          pt: "80px",
          py: { xs: "16px", md: "40px" },
          pb: "16px",
        }}
      >
        <Box
          sx={{
            maxWidth: "1300px",
            display: "flex",
          }}
        >
          <Stack direction={"row"} gap={3} flexWrap={"wrap"}>
            <Box component={"dev"}>
              <Box
                component="img"
                src="/footer_logo.svg"
                alt="Logo"
                sx={{ height: 40 }}
              />
              <Typography sx={{ maxWidth: "500px", mt: 1 }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
                explicabo consequuntur. Est perferendis perspiciatis architecto,
                accusantium maxime at. Nobis, at!
              </Typography>
            </Box>
            <Stack direction={"row"} gap={4} flexWrap={"wrap"}>
              <Stack gap={2}>
                <Typography fontWeight={600}>Quicks Link</Typography>
                {data.map((val) => (
                  <Typography
                    sx={{ fontSize: "14px" }}
                    component={Link}
                    href={val.href}
                  >
                    {val.title}
                  </Typography>
                ))}
              </Stack>
              <Stack gap={2}>
                <Typography fontWeight={600}>Legal</Typography>
                {legal.map((val) => (
                  <Typography
                    sx={{ fontSize: "14px" }}
                    component={Link}
                    href={val.href}
                  >
                    {val.title}
                  </Typography>
                ))}
              </Stack>
            </Stack>
            <Stack gap={2}>
              <Typography fontWeight={600}>Social Media</Typography>
              <Stack direction={"row"} gap={2}>
                <Box sx={{ fontSize: "14px" }} component={Link} href={"/"}>
                  <FaLinkedin size={24} />
                </Box>
                <Box sx={{ fontSize: "14px" }} component={Link} href={"/"}>
                  <FaInstagram size={24} />
                </Box>
                <Box sx={{ fontSize: "14px" }} component={Link} href={"/"}>
                  <FaXTwitter size={24} />
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Box>
        {/* ----- Copyright Footer Bottom ----- */}
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="caption">
            © 2025 Learning Creed. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
