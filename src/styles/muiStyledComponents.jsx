import styled from "@emotion/styled";
import { Button, TextField, Typography } from "@mui/material";

const StyledGraphy = styled(Typography)({
  fontFamily: `'Poppins', sans-serif`,
});
const PrimaryButtonStyles = {
  borderRadius: 100,
  color: "#fff",
  px: 4,
  width: "max-content",
  textTransform: "none",
  bgcolor: "#000",
  "&:hover": {
    bgcolor: "#3f5efb",
    color: "#fff",
  },
};
const outlinedBtn = {
  border: "1px solid #3f5efb",
  color: "#3f5efb",
  textTransform: "inherit",
  padding: "0.5em 2em",

  "&:hover": {
    bgcolor: "#3f5efb",
    border: "1px solid #3f5efb",
    color: "#fff",
  },
};
const containedBtn = {
  bgcolor: "#3f5efb",
  textTransform: "inherit",

  "&:hover": {
    bgcolor: "#000",
  },
  padding: "0.5em 2em",
};

// ################## COMPONENTS ############# //
export { StyledGraphy };
// ###################### STYLES ################## //
export { PrimaryButtonStyles, outlinedBtn, containedBtn };
export const NumberField = styled(TextField)({
  "& input[type=number]": {
    "-moz-appearance": "textfield",
  },
  "& input[type=number]::-webkit-outer-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
  "& input[type=number]::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
});
