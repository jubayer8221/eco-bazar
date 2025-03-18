// store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userInfo: {
    fullName: string;
    username: string;
    email: string;
    password: string;
    phoneNumber: string;
    dateOfBirth: string;
    gender: string;
    language: string;
    agreeTerms: boolean;
  } | null;
  status: 'idle' | 'loading' | 'success' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  userInfo: null,
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserState['userInfo']>) => {
      state.userInfo = action.payload;
    },
    setStatus: (state, action: PayloadAction<UserState['status']>) => {
      state.status = action.payload;
    },
    setError: (state, action: PayloadAction<UserState['error']>) => {
      state.error = action.payload;
    },
  },
});

export const { setUserInfo, setStatus, setError } = userSlice.actions;
export default userSlice.reducer;