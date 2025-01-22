import { configureStore } from "@reduxjs/toolkit";
import { selectedLanguageReducer } from "./slices/selectedLanguageSlice";

export const store = configureStore({
  reducer: {
    selectedLanguage: selectedLanguageReducer,
  },
});