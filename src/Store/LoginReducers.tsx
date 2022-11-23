import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Loggin {
  name: string;
}

const initialState: Loggin = {
  name: ''
};

export const loggin = createSlice({
  name: "loggin",
  initialState,
  reducers: {
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
export const { admin, hr, employee } = loggin.actions;

export default loggin.reducer;

