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
import Logo from "../../../common/Logo";
const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [btnClass, setBtnClass] = useState("home-btn");
  const dispatch = useDispatch();
  const navigation = useNavigate();
 
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

          <Logo color="#fff" />
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
          <Button
            sx={{ mt: 3 }}
            className={btnClass}
            onMouseOver={() => setBtnClass("home-btn-hover")}
            onMouseLeave={() => setBtnClass("home-btn")}
            onClick={() => navigation("/contact")}
          >
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
