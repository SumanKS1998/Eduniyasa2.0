import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSnackBar } from "../../../redux/appSlice";

export default function AppSnackBar() {
  const { snackBar } = useSelector((state) => state.app);
  const { vertical, horizontal, open, message, severity } = snackBar;
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(
      setSnackBar({ open: false, severity: severity, message: message })
    );
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          sx={{ width: "100%", fontWeight: "bold" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
