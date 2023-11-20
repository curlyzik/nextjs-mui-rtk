import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  accessToken: string;
}

const initialState: AuthState = {
  accessToken: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<{ accessToken: string }>) => {
      state.accessToken = action.payload.accessToken;
    },
    unsetAuth: (state) => {
      state.accessToken = '';
    },
  },
});

export const { setAuth, unsetAuth } = authSlice.actions;

export default authSlice.reducer;
