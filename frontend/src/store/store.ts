import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import adminReducer from "./adminSlice";
import promptReducer from "./promptSlice";
import categoryReducer from "./categorySlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        admin: adminReducer,
        prompt: promptReducer,
        category: categoryReducer 
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;