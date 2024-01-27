import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Welcome = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>This is Welcome Page</Text>
      <Link href="/screens/sign-up" asChild>
        <Pressable>
          <Text className="bg-yellow-200 border-2  text-black font-bold px-2 py-2 rounded-lg">
            Get Started
          </Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default Welcome;
