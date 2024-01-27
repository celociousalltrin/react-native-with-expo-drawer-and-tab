import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import appReducer from "./slices/app-slice";
import purgeStoredState from "redux-persist/es/purgeStoredState";

const persistConfig = {
  key: "roots",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: {
    app: persistedReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const purgeStore = () => {
  purgeStoredState(persistConfig);
};
