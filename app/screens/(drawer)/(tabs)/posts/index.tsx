import { View, Text, Pressable, Button } from "react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";

const Posts = () => {
  return (
    <View>
      <Text>This is Posts Page</Text>
      <Button onPress={() => router.push("screens/posts/1")} title="Posts 1" />
      <Button onPress={() => router.push("screens/posts/2")} title="Posts 2" />
      <Button onPress={() => router.push("screens/posts/3")} title="Posts 3" />
      <Button onPress={() => router.push("screens/posts/4")} title="Posts 4" />
    </View>
  );
};

export default Posts;
