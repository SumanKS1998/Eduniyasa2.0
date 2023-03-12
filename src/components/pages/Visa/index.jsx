import { useState } from "react";
import { Box, Container, Grid, Stack } from "@mui/material";
import {
  ausContact,
  caContact,
  rightHighlight,
  ukContact,
  usContact,
} from "../../../assets/images";
import { StyledGraphy } from "../../../styles/muiStyledComponents";
import "./index.css";
import {
  ausVisaProcess,
  caVisaProcess,
  ukVisaProcess,
  usVisaProcess,
} from "./visaDataObject";
import RoadmapItem from "../../common/Roadmap";

const Visa = () => {
  const [selectedCountry, setSelectedCountry] = useState("usa");
  const visaProcesses = [
    {
      country: "usa",
      process: usVisaProcess,
    },
    {
      country: "uk",
      process: ukVisaProcess,
    },
    {
      country: "ca",
      process: caVisaProcess,
    },
    {
      country: "aus",
      process: ausVisaProcess,
    },
  ];
  const contactPageImages = [
    { image: ausContact, country: "aus" },
    { image: usContact, country: "usa" },
    { image: ukContact, country: "uk" },
    { image: caContact, country: "ca" },
  ];

  const imageContainerStyle = (selectedCountry, currentCountry) =>
    selectedCountry === currentCountry
      ? "contact-image-container-active"
      : "contact-image-container";

  const imageStyle = (selectedCountry, currentCountry) =>
    selectedCountry === currentCountry
      ? "contact-country-image-active"
      : "contact-country-image";

  const handleCountryClick = (country) => setSelectedCountry(country);
  const selectedProcess =
    visaProcesses.find((process) => process.country === selectedCountry)
      ?.process || [];

  return (
    <Stack minHeight="100vh" component={Container}>
      <Grid
        container
        spacing={2}
        my={4}
        mt={10}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        {contactPageImages.map((item, index) => (
          <Grid
            key={index}
            item
            xs={12}
            md={3}
            onClick={() => handleCountryClick(item.country)}
          >
            <Stack
              className={imageContainerStyle(selectedCountry, item.country)}
            >
              <Box
                component="img"
                src={item.image}
                className={imageStyle(selectedCountry, item.country)}
                alt={`${item.country.toUpperCase()} contact`}
              />
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Stack
        direction="row"
        gap={2}
        mb={2}
        sx={{ display: { xs: "flex", md: "none" }, overflow: "auto" }}
      >
        {contactPageImages.map((item, index) => (
          <Stack
            onClick={() => handleCountryClick(item.country)}
            className={imageContainerStyle(selectedCountry, item.country)}
          >
            <Box
              component="img"
              src={item.image}
              className={imageStyle(selectedCountry, item.country)}
              alt={`${item.country.toUpperCase()} contact`}
            />
          </Stack>
        ))}
      </Stack>{" "}
      <Stack my={4} gap={3} alignItems="center">
        <StyledGraphy variant="h2" align="center">
          <StyledGraphy
            variant="h2"
            component="span"
            sx={{ color: "#3f5efb", fontWeight: 700 }}
          >
            Visa
          </StyledGraphy>{" "}
          Process for{" "}
          <StyledGraphy
            variant="h2"
            component="span"
            sx={{ color: "#3f5efb", fontWeight: 700 }}
          >
            Studying Abroad{" "}
            <Box
              component="img"
              src={rightHighlight}
              sx={{ width: { xs: "15px", md: "25px" } }}
            />
          </StyledGraphy>
        </StyledGraphy>
        <Stack width={{ xs: "100%", md: "70%" }}>
          <StyledGraphy textAlign="center" variant="h6" fontWeight="normal">
            Welcome to our Visa page! Here you can find valuable information
            about the visa process for studying abroad. Let us help you navigate
            through the process and make your study abroad dream a reality!
          </StyledGraphy>
        </Stack>
      </Stack>
      <Grid container spacing={2}>
        {selectedProcess.map((item, index) => (
          <RoadmapItem
            key={index}
            xs={12}
            sm={6}
            md={6}
            title={item.title}
            description={item.description}
            index={index + 1}
            height={350}
          />
        ))}
      </Grid>
    </Stack>
  );
};

export default Visa;
