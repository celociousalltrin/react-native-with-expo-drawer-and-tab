import { View, Text } from "react-native";
import React from "react";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import Single from "../components/single";
import TodoSingle from "../components/todo-single";

const IDDDD = () => {
  const { ids } = useLocalSearchParams();

  return (
    <View>
      {(() => {
        switch (ids && ids[0]) {
          case "todos":
            return <TodoSingle />;
          default:
            return <Single ids={ids} />;
        }
      })()}
    </View>
  );
};

export default IDDDD;
