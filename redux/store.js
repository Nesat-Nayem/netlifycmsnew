import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./slices/user/userSlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer : {
        user:userSlice,
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck:false}),
});