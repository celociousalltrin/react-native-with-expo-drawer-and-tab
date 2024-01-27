import { View, Text, Pressable } from "react-native";
import React, { useEffect } from "react";
import { Link } from "expo-router";

const Login = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>This is Login Page</Text>
      <Link href="/screens/(tabs)/posts" asChild>
        <Text className="bg-violet-500 text-black font-bold px-2 py-2 border-2 rounded-lg">
          Login
        </Text>
      </Link>
    </View>
  );
};

export default Login;
