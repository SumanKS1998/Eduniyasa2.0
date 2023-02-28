import { Box, Button, Paper, Stack, TextField } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setBasicDetails, setStepperValue } from "../../../redux/formSlice";
import {
  NumberField,
  PrimaryButtonStyles,
  StyledGraphy,
  containedBtn,
  outlinedBtn,
} from "../../../styles/muiStyledComponents";

const ContactDetails = () => {
  const { basicDetails } = useSelector((state) => state.form);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const nextStep = ({ name, email, phone }) => {
    dispatch(
      setBasicDetails({
        name,
        email,
        phone,
      })
    );
  };
  useEffect(() => {
    if (basicDetails.name) {
      reset({
        name: basicDetails.name,
        email: basicDetails.email,
        phone: basicDetails.phone,
      });
    }
  }, [basicDetails]);
  return (
    <Box component={Paper} p={{ xs: 2, md: 3 }}>
      <Stack gap={2} component="form" onSubmit={handleSubmit(nextStep)}>
        <TextField
          {...register("name", { required: true })}
          helperText={errors.name && "This is a required field."}
          error={errors.name && true}
          label="Name"
        />
        <NumberField
          type="number"
          {...register("phone", {
            required: true,
            minLength: 10,
            maxLength: 10,
          })}
          helperText={errors.phone && "Enter a valid phone number."}
          error={errors.phone && true}
          label="Mobile No."
        />
        <TextField
          label="Email"
          {...register("email", {
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          })}
          helperText={errors.email && "Enter a valid Email ID."}
          error={errors.email && true}
        />
        <Stack direction="row" gap={1} mt={3}>
          <Button
            onClick={() => dispatch(setStepperValue(0))}
            variant="outlined"
            color="info"
            sx={outlinedBtn}
          >
            <StyledGraphy>Back</StyledGraphy>
          </Button>
          <Button
            sx={containedBtn}
            type="submit"
            variant="contained"
            color="info"
          >
            <StyledGraphy> Next</StyledGraphy>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ContactDetails;
