import React, { useState } from "react";
import { Box, Stack, Button, TextField, Container } from "@mui/material";
import {
  contact,
  leftHighlight,
  rightHighlight,
} from "../../../../assets/images";
import "./index.css";
import {
  PrimaryButtonStyles,
  StyledGraphy,
} from "../../../../styles/muiStyledComponents";
import { useNavigate } from "react-router";
const Contact = () => {
  const [userHere, setUserHere] = useState(false);
  const navigate = useNavigate();
  return (
    <Stack mt={20} onMouseOver={() => setUserHere(true)}>
      <Stack className="contact-container">
        <Stack component={Container} justifyContent="center" height="100%">
          <Box
            component="img"
            src={contact}
            width="70%"
            className={userHere ? "contact-image" : "contact-image-inactive"}
          />
          <Stack gap={2} width="50%">
            <StyledGraphy
              component="span"
              ml={1}
              sx={{ color: "#222222" }}
              fontWeight="bold"
              variant="h3"
            >
              Get in touch!{" "}
              <Box
                component="img"
                src={rightHighlight}
                width="20px"
                objectFit="contain"
              />
            </StyledGraphy>
            <StyledGraphy
              variant="h6"
              fontWeight={300}
              sx={{ color: "#222222" }}
            >
              Contact us for studying abroad info. Fill out form, we'll reply
              soon. Thanks for choosing Eduniyasa!
            </StyledGraphy>{" "}
            <Button
              variant="contained"
              sx={{
                ...PrimaryButtonStyles,
                py: 2,
                boxShadow: "none !important",
              }}
              onClick={() => navigate("/contact")}
            >
              <StyledGraphy>Contact Us</StyledGraphy>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Contact;
