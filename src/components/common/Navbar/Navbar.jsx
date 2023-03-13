import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  Toolbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Logo, LogoDark } from "../../../assets/images";
import { StyledGraphy } from "../../../styles/muiStyledComponents";
import { useNavigate } from "react-router";
import {
  AirplaneTicket,
  ArrowDownward,
  Home,
  KeyboardArrowDown,
  Menu,
  School,
} from "@mui/icons-material";
const Navbar = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrollPos(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const routes = [
    { routeName: "Home", path: "/", icon: <Home /> },
    { routeName: "Visa", path: "/visa", icon: <AirplaneTicket /> },
    {
      routeName: "Scholarship",
      path: "/scholarship",
      subRoutes: ["usa", "ca", "aus", "uk"],
      icon: <School />,
    },
  ];
  const navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      className={scrollPos > 50 ? "navbar-scrolled" : "navbar"}
    >
      <Toolbar>
        <Stack
          component={Container}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          display={{ xs: "none", md: "flex" }}
        >
          <Box
            sx={{
              //   height: "auto",
              width: "200px",
              objectFit: "contain",
            }}
            component="img"
            src={LogoDark}
          />
          <Stack
            component={List}
            direction="row"
            width="500px"
            justifyContent="space-between"
          >
            <ListItem>
              {routes?.map((item) => {
                return (
                  <ListItemButton
                    onClick={() => navigate(item.path)}
                    sx={{
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                      "&:hover": {
                        bgcolor: scrollPos > 50 ? "" : "#3F5EFB",
                      },
                    }}
                    key={item.routeName}
                  >
                    <StyledGraphy
                      sx={{
                        fontSize: "18px",
                        fontWeight:
                          window.location.pathname === item.path
                            ? "bold"
                            : "light",
                       
                      }}
                    >
                      {item.routeName}
                    </StyledGraphy>
                  </ListItemButton>
                );
              })}
            </ListItem>
          </Stack>
          <Button
            sx={{
              textTransform: "inherit",
              border: "1px solid #3f5efb",
              color: "#3f5efb",
              borderRadius: 100,
              px: 2,
              py: 1.5,
              "&:hover": {
                bgcolor: "#3f5efb",
                color: "#fff",
              },
            }}
            onClick={() => navigate("/contact")}
          >
            <StyledGraphy fontWeight="bold">Get in Touch</StyledGraphy>
          </Button>
        </Stack>
        <Stack
          component={Container}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          display={{ xs: "flex", md: "none" }}
        >
          <Box
            sx={{
              //   height: "auto",
              width: "140px",
              objectFit: "contain",
            }}
            component="img"
            src={Logo}
          />
          <IconButton onClick={() => setOpen(true)}>
            <Menu sx={{ color: "#3f5efb" }} />
          </IconButton>

          <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
            <List>
              {routes?.map((item) => {
                return (
                  <ListItem key={item.routeName}>
                    <ListItemButton
                      onClick={() => navigate(item.path)}
                      sx={{
                        color: "#000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        borderRadius: 2,
                      }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <StyledGraphy>{item.routeName}</StyledGraphy>
                      {item.hasOwnProperty("subRoutes") && (
                        <KeyboardArrowDown />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Drawer>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
