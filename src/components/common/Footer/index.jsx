import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import styled from "@emotion/styled";
import { Divider, List, ListItem, Stack } from "@mui/material";
import { StyledGraphy } from "../../../styles/muiStyledComponents";
import { Logo } from "../../../assets/images";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import moment from "moment/moment";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setSnackBar } from "../../../redux/appSlice";
import { sendEmail } from "../../../utils/contactMail";
export default function Footer() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const snackResponse = (message, severity) => {
    dispatch(
      setSnackBar({
        open: true,
        message,
        severity,
      })
    );
  };
  const sendEmailHandler = async () => {
    const result = await sendEmail(email);

    if (result.status) {
      snackResponse(result.message, "success");
      setEmail("");
    } else {
      snackResponse(result.message, "error");
    }
  };
  return (
    <Stack
      sx={{
        bgcolor: "#fff",
      }}
      mt={4}
    >
      <Stack
        sx={{
          height: 200,
          mt: 5,
        }}
        alignItems="center"
        justifyContent="center"
        pb={{ xs: 10, md: 0 }}
      >
        <Stack
          component={Container}
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Stack sx={{ width: "33%" }} alignItems="center">
            <Box component="img" src={Logo} width="250px" />
          </Stack>

          <Stack
            direction="row"
            gap={4}
            sx={{ width: "33%" }}
            alignItems="center"
            justifyContent="center"
          >
            <Link
              href="https://www.facebook.com/niyasa3103?mibextid=ZbWKwL"
              target="_blank"
            >
              <Facebook sx={{ color: "#4064ac", fontSize: "32px" }} />
            </Link>
            <Link
              href="https://instagram.com/eduniyasa?igshid=ZDdkNTZiNTM="
              target="_blank"
            >
              <Instagram sx={{ color: "#d62976 ", fontSize: "32px" }} />
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=9319673249"
              target="_blank"
            >
              <WhatsApp sx={{ color: "#48c257 ", fontSize: "32px" }} />
            </Link>
          </Stack>
          <Stack gap={2} sx={{ width: "33%" }}>
            <StyledGraphy>
              Contact us to start your study abroad journey today!
            </StyledGraphy>
            <Stack direction="row" gap={2}>
              <TextField
                label={"Enter your email"}
                sx={{ width: "300px" }}
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                onClick={() => {
                  if (!email) {
                    snackResponse("Please enter your email address", "error");
                    return;
                  }
                  sendEmailHandler();
                }}
                variant="contained"
                sx={{
                  bgcolor: "#3f5efb",
                  color: "#fff",
                  boxShadow: "none",
                  px: 4,
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#000",
                    color: "#fff",
                  },
                }}
              >
                <StyledGraphy>Submit</StyledGraphy>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <StyledGraphy
        textAlign="center"
        my={2}
        variant="body2"
        fontWeight="light"
      >
        Copyright © {moment(new Date()).format("YYYY")}, All right reserved.
      </StyledGraphy>
    </Stack>
  );
}
