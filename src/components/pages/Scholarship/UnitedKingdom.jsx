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
import { ukFlag } from "../../../assets/images";
import { useNavigate } from "react-router";
const UnitedKingdom = ({ modalHandler }) => {
  const UKSCHOLARSHIPS = [
    {
      name: "Chevening Scholarship",
      country: "uk",
      description: `Supports talented professionals who have shown prior leadership skills and exceptional performance in their respective fields. With Chevening, you can apply for a scholarship or fellowship, the selection of which is done by the high commission and British embassies.
      `,
    },
    {
      name: "Commonwealth Scholarship and Fellowship",
      country: "uk",
      description: `The commonwealth scholarship aims to give international students from commonwealth countries a chance to pursue postgraduate degrees in the UK. Basically, the scholarship scheme caters to students from commonwealth nations to study in the UK.
      `,
    },
    {
      name: "GREAT Scholarship",
      country: "uk",
      description: `This scholarship is jointly funded by the UK Government’s GREAT Britain Campaign and the British Council under the Study UK campaign. This program includes 99 postgraduate scholarships from 36 UK universities in a variety of subjects. However, for Indian students, 12 of the UK higher education institutions are offering 13 postgraduate scholarships.

      `,
    },
    {
      name: "Charles Wallace India Trust Scholarships (CWIT)",
      country: "uk",
      description: `Charles Wallace India trust scholarships (CWIT) is the scholarship fund of Charles Wallace India Trust that provides grants to Indian students currently living in India in the early or middle stages of their career and either working or studying in the heritage conservation, arts, or humanities.`,
    },
  ];
  const navigate = useNavigate();
  return (
    <Grid container spacing={3}>
      {UKSCHOLARSHIPS.map((item) => {
        return (
          <Grid item xs={12} md={6}>
            <Stack
              component={Paper}
              gap={1}
              elevation={4}
              height="100%"
              borderRadius={3}
            >
              <Stack p={2} gap={1.5}>
                <StyledGraphy variant="body1" fonetWeight="medium">
                  {item.name}
                </StyledGraphy>
                <Chip
                  avatar={<Avatar src={ukFlag} />}
                  label="United Kingdom"
                  sx={{ width: "max-content" }}
                />
              </Stack>
              <Divider />
              <Stack p={2} gap={1}>
                <StyledGraphy variant="body2" fontWeight="light">
                  {item.description.substring(0, 50)}...
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
                  <Button onClick={()=>navigate('/contact')} sx={{ ...containedBtn, color: "#fff" }}>
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

export default UnitedKingdom;
