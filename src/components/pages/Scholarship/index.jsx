import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  Paper,
  Skeleton,
  Stack,
  Toolbar,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import CA from "./CA";
import ScholarshipModal from "./ScholarshipModal";
import SkeletonComponent from "./SkeletonComponent";
import UnitedKingdom from "./UnitedKingdom";
import USA from "./USA";
import { StyledGraphy } from "../../../styles/muiStyledComponents";
import { usaFlag, caFlag, ukFlag, ausFlag } from "../../../assets/images";

const Scholarship = () => {
  const [open, setOpen] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState([
    {
      country: "usa",
      selected: false,
    },
    {
      country: "uk",
      selected: false,
    },
    {
      country: "ca",
      selected: true,
    },
  ]);
  const [doc, setSelectedDoc] = useState();
  useEffect(() => {
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
    }, 1000);
    return () => setTimeout;
  }, []);
  const modalHandler = (data) => {
    setSelectedDoc({
      name: data.name,
      country: data.country,
      description: data.description,
    });
    setOpen(true);
  };
  const renderCountrySelector = () => {
    const getLabel = (country) => {
      switch (country) {
        case "usa":
          return "USA";
        case "uk":
          return "United-Kingdom";
        case "ca":
          return "Canada";
      }
    };
    const getImage = (country) => {
      switch (country) {
        case "usa":
          return usaFlag;
        case "uk":
          return ukFlag;
        case "ca":
          return caFlag;
        case "aus":
          return ukFlag;
      }
    };
    const changeSelectedCountry = (item) => {
      const newSelectedCountry = selectedCountry.map((country) => {
        return {
          ...country,
          selected: country.country === item.country,
        };
      });
      setSelectedCountry(newSelectedCountry);
    };
    return (
      <Stack direction="row" gap={1}>
        {selectedCountry.map((item) => {
          return (
            <Chip
              onClick={() => changeSelectedCountry(item)}
              clickable
              color="info"
              label={getLabel(item.country)}
              variant={item.selected ? "contained" : "outlined"}
              avatar={<Avatar src={getImage(item.country)} />}
            />
          );
        })}
      </Stack>
    );
  };
  const getSelectedCountry = () => {
    switch (selectedCountry.find((item) => item.selected).country) {
      case "usa":
        return "USA";
      case "uk":
        return "United-Kingdom";
      case "ca":
        return "Canada";
    }
  };
  const renderSelectedCountryComponent = () => {
    const selectedCountry = getSelectedCountry();

    switch (selectedCountry) {
      case "USA":
        return <USA modalHandler={modalHandler} />;
      case "United-Kingdom":
        return <UnitedKingdom modalHandler={modalHandler} />;
      case "Canada":
        return <CA modalHandler={modalHandler} />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <ScholarshipModal doc={doc} setOpen={setOpen} open={open} />
      <Toolbar sx={{ display: { xs: "none", md: "block" } }} />
      <Container>
        {/* ======Country Selector=========
        <Stack gap={2} mb={4} sx={{ display: { xs: "flex", md: "none" } }}>
          <StyledGraphy variant="h6" fontWeight="medium">
            Select a different country🌍:
          </StyledGraphy>
          {renderCountrySelector()}
        </Stack> */}
        <StyledGraphy mb={2} variant="h6">
          Scholarships in {getSelectedCountry()}🎓
        </StyledGraphy>
        <Stack gap={2} my={2} sx={{ display: { xs: "none", md: "flex" } }}>
          {renderCountrySelector()}
        </Stack>
        {renderSelectedCountryComponent()}
        {/* ============Grid========== */}

        <Box
          sx={{
            height: { xs: "auto", md: "60vh" },
            width: { xs: "100%", md: "30%" },
            position: "sticky",
            top: "100px",
          }}
        ></Box>
      </Container>
    </Container>
  );
};

export default Scholarship;
