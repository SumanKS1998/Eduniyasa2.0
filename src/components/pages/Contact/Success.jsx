import React from "react";
import Lottie from "lottie-react";
import { successAnimation } from "../../../assets/images";
import { Stack, Paper, Box } from "@mui/material";
import { StyledGraphy } from "../../../styles/muiStyledComponents";
const Success = () => {
  return (
    <>
      <Stack component={Paper} p={5} alignItems="center">
        <StyledGraphy textAlign="center">
          Thank you for contacting us about studying abroad! We will get back to
          you soon.
          <Box sx={{ width: { xs: "300px", md: "500px" },mx:'auto' }}>
            <Lottie
              animationData={successAnimation}
              loop={false}
              style={{ width: "100%" }}
            />
          </Box>
        </StyledGraphy>
      </Stack>
    </>
  );
};

export default Success;
