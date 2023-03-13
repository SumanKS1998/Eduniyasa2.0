import React from "react";
import { Grid, Box, Stack, Container } from "@mui/material";
import { StyledGraphy } from "../../../../styles/muiStyledComponents";
import { LogoText, roadmapStar } from "../../../../assets/images";
import "./index.css";
import RoadmapItem from "../../../common/Roadmap";
import Logo from "../../../common/Logo";

const Roadmap = () => {
  return (
    <Stack justifyContent="center" minHeight="100vh" bgcolor="#222222">
      <Stack height="100%" component={Container} py={5}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <StyledGraphy variant="h2" sx={{ color: "#ffff" }} fontWeight={700}>
              The
            </StyledGraphy>
            <Stack direction="row" alignItems="center">
              <Logo color="#ffff" />
            </Stack>
            <StyledGraphy variant="h2" sx={{ color: "#ffff" }} fontWeight={700}>
              Way of Success
            </StyledGraphy>
            <StyledGraphy variant="h6" sx={{ color: "#ffff", mt: 4 }}>
              From planning to departure: your study abroad roadmap 🗺️
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
