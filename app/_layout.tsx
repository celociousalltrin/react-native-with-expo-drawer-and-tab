import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const RootLayout = () => {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </PersistGate>
    </Provider>
  );
};

export default RootLayout;
