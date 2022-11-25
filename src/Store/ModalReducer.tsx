import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Modal {
  isopen:boolean;
}

const initialState: Modal = {
  isopen: false,
};

export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalopen: (state, action: PayloadAction<boolean>) => {
      state.isopen = action.payload;

    },
    hrmodalopen: (state, action: PayloadAction<boolean>) => {
      state.isopen = action.payload;
    },
    
  }
});

// Action creators are generated for each case reducer function
export const { modalopen,hrmodalopen } = modal.actions;

export default modal.reducer;

