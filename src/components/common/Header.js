"use client";
import { Box, Button, IconButton } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
function Header() {
  const [showMenu, setShowMenu] = React.useState(false);
  const pathname = usePathname();
  const data = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Course Explorer", href: "/course" },
    { title: "Careers", href: "/careers" },
    { title: "Glossary", href: "/glossary" },
    { title: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <Box sx={{ position: "fixed", width: "100%", zIndex: 100 }}>
        <Box
          component="nav"
          sx={{
            bgcolor: "black",
            mx: "auto",
            width: { xs: "95%", lg: "850px" },
            borderRadius: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: "4px 8px",
            position: "relative",
            zIndex: 10,
            left: 0,
            right: 0,
            my: 3,
          }}
        >
          <Box
            component="img"
            src="/logo.svg"
            alt="Logo"
            sx={{ width: 40, height: 40 }}
          />
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              gap: { md: "2px", xl: 3 },
            }}
          >
            {data.map((val) => {
              const isActive = pathname === val.href;
              return (
                <Button
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                  component={Link}
                  href={val.href}
                  sx={{
                    color: isActive ? "primary.main" : "white",
                    textTransform: "capitalize",
                    letterSpacing: "1px",

                    font: "12px",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "primary.main",
                    },
                  }}
                >
                  {val.title}
                </Button>
              );
            })}
          </Box>
          <Button
            disableElevation
            disableFocusRipple
            disableRipple
            disableTouchRipple
            component={Link}
            href={"/login"}
            sx={{
              display: { xs: "none", lg: "block" },
              textTransform: "capitalize",
              letterSpacing: "1px",
              bgcolor: "white",
              borderRadius: 6,
              fontWeight: 550,
              fontSize: "12px",
              p: "10px 20px",
              color: "black",
            }}
          >
            Login
          </Button>
          <IconButton
            disableTouchRipple
            onClick={() => setShowMenu(!showMenu)}
            sx={{
              display: { xs: "flex", lg: "none" },
              alignItems: "center",
              justifyContent: "center",
              lineHeight: 0, // removes baseline gap
              color: "primary.main",
              p: 0,
              transition: "all 1s ease",
            }}
          >
            {showMenu ? <RxCross1 size={35} /> : <IoMenu size={40} />}
          </IconButton>
        </Box>
        {/* Mobile Menu */}
        <Box
          component={"nav"}
          sx={{
            position: "absolute",
            top: showMenu ? 74 : -300,
            left: 0,
            right: 0,
            mx: 2,
            transition: "top 0.3s ease",
          }}
        >
          <Box
            sx={{
              display: { xs: "flex", lg: "none" },
              flexDirection: "column",
              bgcolor: "black",
              borderRadius: 10,
              alignItems: "flex-start",
              px: 2,
              py: 4,
              gap: "18px",
            }}
          >
            {data.map((val) => {
              const isActive = pathname === val.href;
              return (
                <Button
                  onClick={() => setShowMenu(!showMenu)}
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                  component={Link}
                  href={val.href}
                  sx={{
                    color: isActive ? "primary.main" : "white",
                    textTransform: "capitalize",
                    letterSpacing: "1px",
                    fontSize: 15,
                    lineHeight: 0,
                  }}
                >
                  {val.title}
                </Button>
              );
            })}
            <Button
              disableElevation
              disableFocusRipple
              disableRipple
              disableTouchRipple
              component={Link}
              href={"/login"}
              sx={{
                textTransform: "capitalize",
                letterSpacing: "1px",
                bgcolor: "white",
                borderRadius: 6,
                fontWeight: 550,
                fontSize: "12px",
                p: "10px 20px",
                alignSelf: "center",
                color: "black",
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Header;
