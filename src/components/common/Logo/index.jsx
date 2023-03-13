import { Box, Stack } from "@mui/material";
import React from "react";
import { LogoIcon } from "../../../assets/images";
import { StyledGraphy } from "../../../styles/muiStyledComponents";

const Logo = ({ color, width, variant }) => {
  return (
    <Stack direction="row" gap={2}>
      <Box
        component="img"
        src={LogoIcon}
        alt="logo"
        width={`${width}px` ?? "80px"}
      />
      <StyledGraphy
        sx={{ color: "#3F5EFB" }}
        variant={variant ?? "h2"}
        fontWeight={700}
      >
        Niyasa
      </StyledGraphy>
      <StyledGraphy
        variant={variant ?? "h2"}
        fontWeight={700}
        sx={{ color: color }}
      >
        Global
      </StyledGraphy>
    </Stack>
  );
};

export default Logo;
