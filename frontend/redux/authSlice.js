import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  token: null,
  userId: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setAuth: (state, action) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },

    setLogout: (state, action) => {
      state = authInitialState;
    }
  }
})