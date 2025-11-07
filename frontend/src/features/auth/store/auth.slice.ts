import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User 
{ id: number; fullName: string; email: string; role: string }

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null,
  isAuthenticated: localStorage.getItem("user") ? true : false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<{ user: User; token: string }>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      if (typeof window !== "undefined") {
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      }
    },
    clearCredentials(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
