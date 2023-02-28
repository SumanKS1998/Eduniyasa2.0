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
import { caFlag } from "../../../assets/images";
import { useNavigate } from "react-router";

const CA = ({ modalHandler }) => {
  const navigate = useNavigate();
  const CASCHOLARSHIPS = [
    {
      name: "Shastri Indo-Canadian Institute",
      description: `Offers various fellowships at different levels from graduate to post-doctorate and from research to training fellowships.`,
    },
    {
      name: "Canadian Commonwealth Scholarship and Fellowship",
      description: `This program identifies high-achieving students from Commonwealth countries applying to master's and doctoral programs.`,
    },
    {
      name: "Ontario Graduate Scholarship Program",
      description: `his scholarship is for graduate students in a wide variety of disciplines.
      `,
    },
    {
      name: "National Research Council of Canada (NRCC)",
      description: `Research associateship is offered to master’s degree holders in engineering and Ph.D. holders in natural science or engineering disciplines
      .`,
    },
    {
      name: "Quebec Provincial Government Scholarship",
      description: `This scholarship is for students studying in Quebec.
      `,
    },
    {
      name: "Ontario Trillium Scholarship",
      description: `First announced in November 2010 for doctoral students from around the world to study in Ontario
      `,
    },
    {
      name: "Partnership Grants",
      description: `Partnership Grants by the Social Sciences and Humanities Research Council of Canada-This scholarship is for Ph.D. candidates.
      `,
    },
    {
      name: "Banting Postdoctoral Fellowships",
      description: `This is offered by the Canadian government to international students to pursue postgraduate programs within natural science, social sciences, or healthcare research.
      `,
    },
    {
      name: "Vanier Canada Graduate Scholarships",
      description: `This scholarship is awarded by the Government of Canada to meritorious students who aspire to pursue a doctoral degree at a Canadian institution
      `,
    },
  ];
  return (
    <Grid container spacing={3}>
      {CASCHOLARSHIPS.map((item) => {
        return (
          <Grid item xs={12} md={6}>
            <Stack
              component={Paper}
              elevation={2}
              height="100%"
              borderRadius={3}
            >
              <Stack p={2} gap={1.5}>
                <StyledGraphy variant="body1" fonetWeight="medium">
                  {item.name}
                </StyledGraphy>
                <Chip
                  avatar={<Avatar src={caFlag} />}
                  label="Canada"
                  sx={{ width: "max-content" }}
                />
              </Stack>
              <Divider />
              <Stack p={2} gap={1}>
                <StyledGraphy variant="body2" fontWeight="light">
                  {item.description.substring(0, 80)}
                  {item.description.length > 80 && "..."}
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
                        country: "ca",
                        description: item.description,
                        name: item.name,
                      })
                    }
                  >
                    <StyledGraphy> Read more</StyledGraphy>
                  </Button>
                  <Button
                    sx={{ ...containedBtn, color: "#fff" }}
                    onClick={() => navigate("/contact")}
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

export default CA;
