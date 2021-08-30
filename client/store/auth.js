/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
