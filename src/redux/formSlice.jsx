import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    country: "",
    basicDetails: {
      name: "",
      phone: "",
      email: "",
    },

    stepValue: 0,
  },
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
      state.stepValue = 1;
    },
    setBasicDetails: (state, action) => {
      state.basicDetails = action.payload;
      state.stepValue = 2;
    },

    setStepperValue: (state, action) => {
      state.stepValue = action.payload;
    },
    resetForm: (state, action) => {
      state.stepValue = 0;
      state.basicDetails = {
        name: "",
        phone: "",
        email: "",
      };
    },
  },
});
export const { setCountry, setBasicDetails, setStepperValue, resetForm } =
  formSlice.actions;
export default formSlice.reducer;
