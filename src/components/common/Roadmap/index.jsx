import { Grid, Stack } from "@mui/material";
import { StyledGraphy } from "../../../styles/muiStyledComponents";

const RoadmapItem = ({ index, title, description, xs, sm, md, height }) => {
  return (
    <Grid item xs={xs} sm={sm} md={md}>
      <Stack
        height={height}
        gap={2}
        sx={{ border: "1px solid #3f5efb" }}
        p={2}
        borderRadius={3}
        className="container"
      >
        <StyledGraphy sx={stepSx} variant="h2" className="number-container">
          {index}
        </StyledGraphy>
        <StyledGraphy fontWeight={500} variant="h5" sx={{ color: "#fff" }}>
          {title}
        </StyledGraphy>
        <StyledGraphy
          variant="body1"
          sx={{ color: "#e5e5e5", fontWeight: "light" }}
        >
          {description}
        </StyledGraphy>
      </Stack>
    </Grid>
  );
};
export default RoadmapItem;
const stepSx = {
  border: "1px solid #3f5efb",
  p: 3,
  width: "50px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  color: "#3f5efb",
  bgcolor: "#20b46a0d",
  borderRadius: 2,
};
