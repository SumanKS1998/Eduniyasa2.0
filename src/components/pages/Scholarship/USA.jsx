import { Avatar, Button, Chip, Divider, Grid, Paper } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import PaidIcon from "@mui/icons-material/Paid";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import {
  StyledGraphy,
  containedBtn,
  outlinedBtn,
} from "../../../styles/muiStyledComponents";
import { usaFlag } from "../../../assets/images";
import { useNavigate } from "react-router";
const USA = ({ modalHandler }) => {
  const navigate = useNavigate();
  const USSCHOLARSHIPS = [
    {
      name: "Fulbright- Nehru Fellowships",
      type: "Government-funded",
      description: `Available to international students who are applying to master's or Ph.D. programs; this scholarship covers tuition fees, accident and sickness insurance, airfare, and living expenses.`,
    },
    {
      name: "Hubert Humphrey Fellowship Program",
      type: "Government-funded",
      description: `The Fullbright program aims to provide talented young and mid-career professionals from developing countries with ten months of non-degree graduate study in the US and related practical experience, which is part of the Fullbright program.`,
    },
    {
      name: "#YouAreWelcomeHere Scholarship",
      type: "Non-Govt. scholarship",
      description: `It’s a scholarship and social media campaign designed to welcome international students into the US higher education system irrespective of the subject area
      `,
    },
    {
      name: "UEFA",
      type: "Non-Govt. scholarship",
      description: `This is a summer program sponsored by Abbey Road Inc. which grants scholarships to 14-18 aged high school student that shows exemplary performance in their academics and extracurricular activities.`,
    },
    {
      name: "AAUW International Fellowships",
      type: "Non-Govt. scholarship",
      description: `These fellowships are awarded to international women students for full-time study and research in the US. It supports both graduate and post-graduate students accredited in US institutions.`,
    },
  ];
  return (
    <Grid container spacing={2}>
      {USSCHOLARSHIPS.map((item) => {
        return (
          <Grid item xs={12} md={6}>
            <Stack
              gap={1}
              elevation={4}
              height="100%"
              component={Paper}
              borderRadius={3}
            >
              <Stack p={2} gap={1}>
                <StyledGraphy variant="body1" fonetWeight="medium">
                  {item.name}
                </StyledGraphy>
                <Stack direction="row" gap={1}>
                  <Chip
                    label={item.type}
                    sx={{ width: "max-content" }}
                    avatar={
                      <Avatar>
                        <PaidIcon sx={{ color: "green" }} />
                      </Avatar>
                    }
                  />
                  <Chip
                    avatar={<Avatar src={usaFlag} />}
                    label="USA"
                    sx={{ width: "max-content" }}
                  />
                </Stack>
              </Stack>
              <Divider />
              <Stack p={2} gap={1}>
                <StyledGraphy variant="body2" fontWeight="light">
                  {item.description.substring(0, 60)}...
                </StyledGraphy>
                <Stack
                  mt={1}
                  justifyContent="flex-end"
                  width="100%"
                  direction="row"
                  gap={1}
                >
                  <Button
                    color="info"
                    sx={outlinedBtn}
                    onClick={() =>
                      modalHandler({
                        country: "usa",
                        description: item.description,
                        name: item.name,
                      })
                    }
                  >
                    <StyledGraphy> Read more</StyledGraphy>
                  </Button>
                  <Button
                    onClick={() => navigate("/contact")}
                    sx={{ ...containedBtn, color: "#fff" }}
                  >
                    <StyledGraphy> Enquire</StyledGraphy>
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default USA;
