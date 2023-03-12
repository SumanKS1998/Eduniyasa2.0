import {
  Box,
  Button,
  Stack,
  TextField,
  CircularProgress,
  Typography,
} from "@mui/material";
import { StyledGraphy } from "../../../../styles/muiStyledComponents";
import {
  Logo,
  LogoDark,
  bgHome,
  landingFour,
  landingOne,
  leftHighlight,
  rightHighlight,
  roadmapStar,
  title,
} from "../../../../assets/images";
import { sendEmail } from "../../../../utils/contactMail";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setSnackBar } from "../../../../redux/appSlice";
import { useNavigate } from "react-router";
const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const snackResponse = (message, severity) => {
    dispatch(
      setSnackBar({
        open: true,
        message,
        severity,
      })
    );
  };
  const sendEmailHandler = async () => {
    const result = await sendEmail(email);
    setLoading(true);
    if (result.status) {
      snackResponse(result.message, "success");
      setEmail("");
    } else {
      snackResponse(result.message, "error");
    }
    setLoading(false);
  };
  
  return (
    <Stack
      height="100vh"
      justifyContent="center"
      className="hero-section"
      bgcolor="#222222"
      mt={-8}
      overflow="hidden"
    >
      <Stack
        gap={4}
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Stack
          alignItems="center"
          gap={2}
          sx={{ zIndex: 2, position: "relative" }}
        >
          <StyledGraphy fontWeight={700} variant="h2" sx={{ color: "#fff" }}>
            Study Abroad with
          </StyledGraphy>

          <Box component="img" src={LogoDark} width="550px" />
          <Stack alignItems="center" sx={{ width: "60%" }} my={3}>
            <StyledGraphy
              fontWeight={500}
              textAlign="center"
              variant="h6"
              sx={{ color: "#fff" }}
            >
              We are building a community with high expectations and high
              academic achievement.
            </StyledGraphy>
          </Stack>
          <Button className="home-btn" onClick={() => navigation("/contact")}>
            Get Started
          </Button>
        </Stack>
        <Box
          component="img"
          src={bgHome}
          width="100%"
          position="absolute"
          top={"%"}
          className="bg-home"
        />
      </Stack>
    </Stack>
  );
};

export default HeroSection;
