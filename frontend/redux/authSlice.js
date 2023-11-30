import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setAuth: (state, action) => {
      state.token = action.payload;
    },
  }
})