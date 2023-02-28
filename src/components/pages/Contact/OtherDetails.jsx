import {
  Button,
  CircularProgress,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addDoc, collection, setDoc } from "firebase/firestore";
import { StyledGraphy } from "../../../styles/muiStyledComponents";
import { DB } from "../../../libraries/firebase";
import { resetForm, setStepperValue } from "../../../redux/formSlice";
import { setSnackBar } from "../../../redux/appSlice";
const OtherDetails = () => {
  const [passport, setPassport] = useState(false);
  const [IELTS, setIELTS] = useState(false);
  const [loading, setLoading] = useState(false);
  const { country, basicDetails } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const submitForm = () => {
    console.log("yes");
    setLoading(true);
    addDoc(collection(DB, "Leads"), {
      country: country.country,
      name: basicDetails.name,
      email: basicDetails.email,
      phone: basicDetails.phone,
      ieltsTaken: IELTS,
      passport: passport,
    }).then(() => {
      setLoading(false);
      dispatch(setStepperValue(3));
      dispatch(
        setSnackBar({
          open: true,
          severity: "success",
          message: "Message Sent!",
        })
      );
    });
  };
  return (
    <Stack component={Paper} p={3} pb={4} gap={3}>
      <Stack gap={1}>
        <StyledGraphy>Do you have a passport? *</StyledGraphy>
        <RadioGroup
          onChange={(e) => setPassport(e.target.value)}
          row
          value={passport}
          name="radio-buttons-group"
        >
          <FormControlLabel value={true} control={<Radio />} label="Yes" />
          <FormControlLabel value={false} control={<Radio />} label="No" />
        </RadioGroup>
      </Stack>
      <Stack gap={1}>
        <StyledGraphy>IELTS Taken? *</StyledGraphy>
        <RadioGroup
          onChange={(e) => setIELTS(e.target.value)}
          row
          value={IELTS}
          name="radio-buttons-group"
        >
          <FormControlLabel value={true} control={<Radio />} label="Yes" />
          <FormControlLabel value={false} control={<Radio />} label="No" />
        </RadioGroup>
      </Stack>
      <Stack direction="row" gap={1} mt={3}>
        <Button
          onClick={() => dispatch(setStepperValue(1))}
          variant="outlined"
          color="info"
          disabled={loading}
          sx={outlinedBtn}
        >
          <StyledGraphy> Back</StyledGraphy>
        </Button>
        <Button
          variant="contained"
          color="info"
          onClick={() => submitForm()}
          disabled={loading}
          sx={containedBtn}
        >
          <StyledGraphy>
            {" "}
            {loading ? <CircularProgress size={20} /> : "Submit"}
          </StyledGraphy>
        </Button>
      </Stack>
    </Stack>
  );
};

export default OtherDetails;
const outlinedBtn = {
  border: "1px solid #2EE389",
  color: "#2EE389",
  textTransform: "inherit",
  padding: "0.5em 2em",

  "&:hover": {
    bgcolor: "#2EE389",
    border: "1px solid #2EE389",
    color: "#fff",
  },
};
const containedBtn = {
  bgcolor: "#2EE389",
  textTransform: "inherit",

  "&:hover": {
    bgcolor: "#000",
  },
  padding: "0.5em 2em",
};
