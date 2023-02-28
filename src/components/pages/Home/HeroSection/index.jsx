import { Box, Button, Stack, TextField, CircularProgress } from "@mui/material";
import { StyledGraphy } from "../../../../styles/muiStyledComponents";
import {
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
const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const renderTitle = () => (
    <StyledGraphy
      component={Stack}
      direction="row"
      alignItems="center"
      variant="h2"
      gap={2}
      fontWeight="medium"
      position="relative"
    >
      Study <Box component="img" src={landingOne} sx={{ width: "200px" }} />{" "}
      abroad
      <Box component="img" src={roadmapStar} sx={{ width: "30px" }} />
    </StyledGraphy>
  );

  const renderSubTitle = () => (
    <StyledGraphy
      component={Stack}
      direction="row"
      alignItems="center"
      variant="h2"
      gap={2}
      fontWeight="medium"
      position="relative"
    >
      with{" "}
      <Stack direction="row" alignItems="center">
        <StyledGraphy
          component="span"
          variant="h1"
          fontWeight="medium"
          position="relative"
          sx={{ color: "#20b46a" }}
        >
          Edu
        </StyledGraphy>
        <Box component="img" src={title} sx={{ width: "300px", mt: 1 }} />{" "}
      </Stack>
      <Box component="img" src={landingFour} sx={{ width: "300px" }} />{" "}
    </StyledGraphy>
  );

  const renderDescription = () => (
    <StyledGraphy
      variant="h6"
      fontWeight="light"
      width="50%"
      textAlign="center"
    >
      We are building a community with high expectations and high academic
      achievement.
    </StyledGraphy>
  );
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
  const renderForm = () => (
    <Stack direction="row" gap={2} alignItems="center">
      <Box component="img" src={leftHighlight} sx={{ width: "40px" }} />
      <TextField
        label={"Enter your email address to connect"}
        sx={{ width: "400px" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        onClick={() => {
          if (!email) {
            snackResponse("Please enter your email address", "error");
            return;
          }
          sendEmailHandler();
        }}
        variant="contained"
        sx={{
          bgcolor: "#2ee389",
          color: "#fff",
          boxShadow: "none",
          px: 4,
          py: 2,
          textTransform: "none",
          "&:hover": {
            bgcolor: "#000",
            color: "#fff",
          },
        }}
        disabled={loading}
      >
        {loading ? (
          <CircularProgress size={30} />
        ) : (
          <StyledGraphy>Submit</StyledGraphy>
        )}
      </Button>
      <Box component="img" src={rightHighlight} sx={{ width: "40px" }} />
    </Stack>
  );

  return (
    <Stack height="90vh" justifyContent="center" className="hero-section">
      <Stack gap={4} alignItems="center" justifyContent="center">
        {renderTitle()}
        {renderSubTitle()}
        {renderDescription()}
        {renderForm()}
      </Stack>
    </Stack>
  );
};

export default HeroSection;
