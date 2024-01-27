import { View, Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";
import { useSelector } from "react-redux";

const Todos = () => {
  const { count } = useSelector((state: any) => state.app);

  return (
    <View>
      <Text className="text-xs font-bold text-red-700">{count}</Text>
      <Text>This is Todos Page</Text>
      <Button onPress={() => router.push("screens/todos/1")} title="todos 1" />
    </View>
  );
};

export default Todos;
