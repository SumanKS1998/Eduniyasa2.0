import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    snackBar: {
      open: false,
      message: "",
      severity: "",
      vertical: "top",
      horizontal: "center",
    },
  },
  reducers: {
    setSnackBar: (state, action) => {
      state.snackBar = {
        ...state.snackBar,
        open: action.payload.open,
        message: action.payload.message,
        severity: action.payload.severity,
      };
    },
  },
});
export const { setSnackBar } = appSlice.actions;
export default appSlice.reducer;
