import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, UserData } from "./auth.types";

const initialState: AuthState = {
	loading: false,
	error: null,
	user: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		registerStart: (state) => {
			state.loading = true;
		},
		registerSuccess: (state, action: PayloadAction<UserData>) => {
			state.loading = false;
			state.user = action.payload;
		},
		registerError: (state, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
		loginStart: (state) => {
			state.loading = true;
		},
		loginSuccess: (state, action: PayloadAction<UserData>) => {
			state.loading = false;
			state.user = action.payload;
		},
		loginError: (state, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
		logoutStart: (state) => {
			state.loading = true;
		},
		logoutSuccess: (state) => {
			state.loading = false;
			state.user = null;
		},
		logoutError: (state, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	registerStart,
	registerSuccess,
	registerError,
	loginStart,
	loginSuccess,
	loginError,
	logoutStart,
	logoutSuccess,
	logoutError,
} = authSlice.actions;

export default authSlice.reducer;
