import { createSlice } from "@reduxjs/toolkit";

const selectedLanguageSlice = createSlice({
  name: "selectedLanguage",
  initialState:"en",
  reducers:{
    changeLeng(state,{payload}) {
        return payload
    }
  }
});

export const sselectedLanguage = (store) => store.selectedLanguage;
export const {changeLeng} = selectedLanguageSlice.actions;
export const selectedLanguageReducer = selectedLanguageSlice.reducer;