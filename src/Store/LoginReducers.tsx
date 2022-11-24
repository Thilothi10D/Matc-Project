import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Loggin {
  name: string;
  login:boolean;
}

const initialState: Loggin = {
  name: '',
  login: false
};

export const loggin = createSlice({
  name: "loggin",
  initialState,
  reducers: {
    logedin: (state, action: PayloadAction<boolean>) => {
      state.login = action.payload;
    },
    admin: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    hr: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    employee: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { admin, hr, employee, logedin } = loggin.actions;

export default loggin.reducer;

