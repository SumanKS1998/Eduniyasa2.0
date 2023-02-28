import React from "react";
import { Box, Stack, Button, TextField } from "@mui/material";
import { contact } from "../../../../assets/images";
import "./index.css";
import { StyledGraphy } from "../../../../styles/muiStyledComponents";
const Contact = () => {
  return (
    <Stack mt={40} mb={10}>
      <Stack p={4} borderRadius={4} className="contact-container">
        <Box
          component="img"
          src={contact}
          width="50%"
          className="contact-image"
        />
        <Stack gap={2} width="50%">
          <StyledGraphy
            component="span"
            ml={1}
            sx={{ color: "#fff" }}
            fontWeight="bold"
            variant="h3"
          >
            Get in touch!
          </StyledGraphy>
          <StyledGraphy variant="h6" fontWeight={300} sx={{ color: "#f3f3f3" }}>
            Contact us for studying abroad info. Fill out form, we'll reply
            soon. Thanks for choosing Eduniyasa!
          </StyledGraphy>{" "}
          <Button
            variant="contained"
            sx={{
              borderRadius: 100,
              color: "#fff",
              mt: 4,
              bgcolor: "#000",
              px: 10,
              py: 2,
              width: "max-content",
              textTransform: "none",
              "&:hover": {
                bgcolor: "#000",
                color: "#fff",
              },
            }}
          >
            <StyledGraphy>Contact Us</StyledGraphy>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Contact;
