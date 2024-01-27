import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";

const ScreenLayout = () => {
  const data = useLocalSearchParams();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="[...ids]"
        options={{
          headerTitle: `Single ${data.ids && data.ids[0]}`,
          headerShown: true,
        }}
      />
    </Stack>
  );
};

export default ScreenLayout;
