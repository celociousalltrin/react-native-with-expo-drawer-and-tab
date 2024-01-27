import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SignUp = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>This is SignUP Page</Text>
      <View className="flex flex-row gap-x-5">
        <Link href="/screens/signup-success" asChild>
          <Text className="bg-green-400 text-black font-bold px-2 py-2 border-2 rounded-lg my-2 cursor-pointer">
            Register Here
          </Text>
        </Link>
        <Link href="/screens/login" asChild>
          <Text className="bg-blue-600 font-bold px-2 py-2 border-2 rounded-lg my-2 text-white">
            Go to Login Page
          </Text>
        </Link>
      </View>
    </View>
  );
};

export default SignUp;
