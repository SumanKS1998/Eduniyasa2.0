import { Box, Button, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import {
  PrimaryButtonStyles,
  StyledGraphy,
} from "../../../../styles/muiStyledComponents";
import { aus, landingStar, uk, usa } from "../../../../assets/images";
import "./index.css";
import { useNavigate } from "react-router";

const Scholarships = () => {
  const [isVisible, setIsVisible] = useState(false);
const navigate=useNavigate()
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems="center"
      gap={5}
      minHeight="100vh"
      justifyContent="space-between"
      p={3}
      onMouseOver={() => setIsVisible(true)}
      component={Container}
    >
      <Stack width={{ xs: "100%", md: "50%" }}>
        <StyledGraphy variant="h4" sx={{ color: "#000", fontWeight: 500 }}>
          Scholarships by
          <StyledGraphy
            variant="h1"
            component="span"
            sx={{ color: "#3f5efb", fontWeight: 500, display: "block" }}
          >
            Country
          </StyledGraphy>
        </StyledGraphy>
        <Stack mt={2} gap={3}>
          <StyledGraphy variant="h6" color="gray">
            Discover a World of Opportunities: Find Scholarships and Funding
            Options in Top Destinations Around the Globe to Help You Achieve
            Your Academic Dreams and Career Goals.
          </StyledGraphy>
          <Stack direction="row" gap={2}>
            <Button sx={{ ...PrimaryButtonStyles, py: 2 }} onClick={()=>navigate('/scholarship')}>
              <StyledGraphy variant="h6">Enquire Now</StyledGraphy>
            </Button>
            <Box component="img" src={landingStar} sx={{ width: "30px" }} />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        alignItems="center"
        height="400px"
        width={{ xs: "100%", md: "50%" }}
        position="relative"
      >
        <Box
          component="img"
          src={usa}
          sx={{ width: "250PX" }}
          className={isVisible ? "scholarship-usa" : "scholarship-usa-normal"}
        />
        <Box
          component="img"
          src={uk}
          sx={{ width: "250PX" }}
          className={isVisible ? "scholarship-uk" : "scholarship-uk-normal"}
        />
        <Box
          component="img"
          src={aus}
          sx={{ width: "250PX" }}
          className={isVisible ? "scholarship-aus" : "scholarship-aus-normal"}
        />
      </Stack>
    </Stack>
  );
};

export default Scholarships;
