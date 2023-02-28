import { useEffect } from "react";
import {
  MenuItem,
  Paper,
  RadioGroup,
  TextField,
  FormControlLabel,
  Radio,
  Toolbar,
  Box,
  Grid,
  Container,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ContactDetails from "./ContactDetails";
import ContactStepper from "./ContactStepper";
import CountrySelector from "./CountrySelector";
import OtherDetails from "./OtherDetails";
import { StyledGraphy } from "../../../styles/muiStyledComponents";
import Success from "./Success";
import { setStepperValue } from "../../../redux/formSlice";
import { useDispatch } from "react-redux";
const Contact = () => {
  const { stepValue } = useSelector((state) => state.form);

  return (
    <Stack
      component={Container}
      my={{ xs: 1, md: 3 }}
      elevation={4}
      p={{ xs: 2, md: 4 }}
    >
      <Stack gap={1}>
        <StyledGraphy variant="h4" sx={{ color: "#000" }} textAlign="center">
          Talk to an{" "}
          <StyledGraphy
            component="span"
            fontWeight="bold"
            variant="h3"
            // className="contact-title"
            sx={{color:'#2EE389'}}
          >
            expert
          </StyledGraphy>{" "}
          and begin your journey🎓
        </StyledGraphy>
      </Stack>
      <ContactStepper stepValue={stepValue} />
      {stepValue === 0 && <CountrySelector />}
      {stepValue === 1 && <ContactDetails />}
      {stepValue === 2 && <OtherDetails />}
      {stepValue === 3 && <Success />}
    </Stack>
  );
};

export default Contact;
