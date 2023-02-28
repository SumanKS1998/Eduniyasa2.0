import { Modal, Paper, Box, Stack, Chip, Avatar, Button } from "@mui/material";
import React from "react";
import { StyledGraphy } from "../../../styles/muiStyledComponents";
import { caFlag, ukFlag, usaFlag } from "../../../assets/images";
import { useNavigate } from "react-router";

const ScholarshipModal = ({ doc, setOpen, open }) => {
  const getImage = (country) => {
    switch (country) {
      case "usa":
        return usaFlag;
      case "uk":
        return ukFlag;
      case "ca":
        return caFlag;
      case "aus":
        return ukFlag;
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ backdropFilter: "blur(8px)" }}
      >
        <Box component={Paper} sx={style} overflow="hidden">
          <Box sx={{ position: "relative" }}>
            <Stack
              gap={1}
              elevation={4}
              height="100%"
              p={3}
              borderRadius={3}
              position="relative"
              zIndex={10}
            >
              <StyledGraphy variant="h6" fonetWeight="medium">
                {doc?.name}
              </StyledGraphy>
              <Chip
                avatar={<Avatar src={getImage(doc?.country)} />}
                label={
                  doc?.country === "uk"
                    ? "United-Kingdom"
                    : doc?.country === "usa"
                    ? "USA"
                    : "Canada"
                }
                sx={{ width: "max-content" }}
                color="info"
              />

              <StyledGraphy mt={1} variant="body2" fontWeight="light">
                {doc?.description}
              </StyledGraphy>
              <Stack mt={2} direction="row" gap={1}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#0e0e10",
                    borderRadius: "100vmax",
                    width: "50%",
                  }}
                  onClick={() => navigate("/contact")}
                >
                  Contact us
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "100vmax",
                    width: "50%",
                  }}
                  onClick={() => setOpen(false)}
                >
                  Close
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ScholarshipModal;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", md: "600px" },
  borderRadius: 5,
};
