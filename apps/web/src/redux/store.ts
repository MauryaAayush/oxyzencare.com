import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import authSlice from "./auth/auth.slice";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { AuthState } from "./auth/auth.types";

export interface RootState {
	auth: AuthState;
}
const rootReducer = combineReducers({
	auth: authSlice
});

const persistConfig = {
	key: "auth",
	storage,
	version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
