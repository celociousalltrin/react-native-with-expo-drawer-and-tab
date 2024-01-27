import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SignupSuccess = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>This is SignupSuccess Screen</Text>
      <Link href="/screens/login" asChild>
        <Text className="bg-orange-400 text-black font-bold px-2 py-2 border-2 rounded-lg">
          Go to Login Page
        </Text>
      </Link>
    </View>
  );
};

export default SignupSuccess;
