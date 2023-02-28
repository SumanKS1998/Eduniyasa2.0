import { configureStore } from "@reduxjs/toolkit";

import formSlice from "./formSlice";
import appSlice from "./appSlice";

export const store = configureStore({
  reducer: {
    form: formSlice,
    app: appSlice,
  },
});
