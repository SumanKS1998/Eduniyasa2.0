import React from "react";
import { Grid, Box, Stack } from "@mui/material";
import { StyledGraphy } from "../../../../styles/muiStyledComponents";
import { roadmapStar, title } from "../../../../assets/images";
import "./index.css";
import RoadmapItem from "../../../common/Roadmap";

const Roadmap = () => {
  return (
    <Stack height="100vh">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <StyledGraphy variant="h2" fontWeight={500}>
            The
          </StyledGraphy>
          <Stack direction="row" alignItems="center">
            <StyledGraphy
              component="span"
              variant="h1"
              fontWeight="medium"
              position="relative"
              sx={{ color: "#20b46a" }}
            >
              Edu
            </StyledGraphy>
            <Box component="img" src={title} sx={{ width: "300px", mt: 1 }} />
          </Stack>
          <StyledGraphy variant="h2" fontWeight={500}>
            Way of Success
            <Box
              component="img"
              src={roadmapStar}
              sx={{ width: "50px", ml: 1 }}
            />
          </StyledGraphy>
        </Grid>
        {roadmap.map((item, index) => (
          <RoadmapItem
            index={index + 1}
            title={item.title}
            description={item.description}
            xs={12}
            sm={6}
            md={3}
            height={300}
          />
        ))}
      </Grid>
    </Stack>
  );
};

export default Roadmap;

const roadmap = [
  {
    title: "Profile Evaluation✔✔",
    description:
      "Get Your Profile Evaluated for Study Abroad - Free with Eduniyasa's Counselor.",
  },
  {
    title: "Shortlisting Universities🏫",
    description:
      "At Eduniyasa, we go beyond selecting universities - we help you choose quality education.",
  },
  {
    title: "Scholarship🎓",
    description:
      "Access financial aid and scholarships easily with Eduniyasa's student-centric approach.",
  },
  {
    title: "Offer Letter📃🎉",
    description:
      "Fast-track your study abroad journey with Eduniyasa - receive an offer letter within just 14 days of applying.",
  },
  {
    title: "VISA filing 🛫",
    description:
      "Expert guidance for your visa approval with Eduniyasa's specialists.",
  },
  {
    title: "Congratulations🎉",
    description: "We wish you a happy new beginning from the team at EduNiyasa",
  },
];
