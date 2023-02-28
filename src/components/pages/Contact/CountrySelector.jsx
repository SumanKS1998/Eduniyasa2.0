import { Button, Grid, Paper } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PrimaryButtonStyles,
  StyledGraphy,
} from "../../../styles/muiStyledComponents";
import { setCountry } from "../../../redux/formSlice";
import { usaFlag, caFlag, ukFlag, ausFlag } from "../../../assets/images";

const CountrySelector = () => {
  const [countries, setCountries] = useState([
    { country: "usa", selected: false },
    { country: "uk", selected: false },
    { country: "ca", selected: false },
    { country: "aus", selected: false },
  ]);
  const { country: selectedCountry } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(
      setCountry({
        country: countries.filter((item) => item.selected === true)[0].country,
      })
    );
  };

  useEffect(() => {
    if (selectedCountry.country) {
      setCountries(
        countries.map((item) => {
          if (selectedCountry.country === item.country) {
            return {
              ...item,
              selected: true,
            };
          } else {
            return {
              ...item,
              selected: false,
            };
          }
        })
      );
    }
  }, [selectedCountry]);
  return (
    <Box component={Paper} p={2}>
      <Grid container spacing={3}>
        {countries.map((country) => {
          return (
            <Grid key={country.country} item xs={6}>
              <Stack
                className={
                  country.selected ? "country-active" : "country-inactive"
                }
                alignItems="center"
                onClick={() => {
                  setCountries(
                    countries.map((selectedItem) => {
                      if (selectedItem.country === country.country) {
                        return { ...selectedItem, selected: true };
                      } else {
                        return { ...selectedItem, selected: false };
                      }
                    })
                  );
                }}
                gap={1}
              >
                <Box
                  component="img"
                  src={
                    country.country === "usa"
                      ? usaFlag
                      : country.country === "ca"
                      ? caFlag
                      : country.country === "aus"
                      ? ausFlag
                      : ukFlag
                  }
                  width="60px"
                />
                <StyledGraphy variant="body2">
                  {country.country === "usa"
                    ? "USA"
                    : country.country === "ca"
                    ? "Canada"
                    : country.country === "aus"
                    ? "Australia"
                    : "United Kingdom"}
                </StyledGraphy>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
      <Button
        variant="contained"
        sx={{
          bgcolor: "#2EE389",
          textTransform: "inherit",
          padding: "0.5em 3em",
          mt: 5,
          "&:hover": {
            bgcolor: "#000",
          },
        }}
        color="info"
        onClick={handleSubmit}
        disabled={!countries.some((item) => item.selected === true)}
      >
        <StyledGraphy>Next</StyledGraphy>
      </Button>
    </Box>
  );
};

export default CountrySelector;
