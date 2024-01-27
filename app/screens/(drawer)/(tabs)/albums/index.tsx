import { View, Text, Pressable, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { getPosts, getUsers } from "../../../../services/method";
import { useSelector } from "react-redux";

const Albums = () => {
  const [usersList, setUsersList] = useState([]);
  const { is_loading, is_initial_loading } = useSelector(
    (state: any) => state.app
  );

  const handlegetUsers = async () => {
    try {
      const response = await getUsers();
      setUsersList(response.data);
    } catch (err) {
      console.log("🚀 ~ handlegetUsers ~ err:", err);
    }
  };

  return (
    <View>
      {is_loading ? (
        <Text>Api is Calling</Text>
      ) : (
        <Text>APi call completed</Text>
      )}
      {is_initial_loading ? (
        <Text>GET API IS calling</Text>
      ) : (
        <Text>GET API call completed</Text>
      )}
      <Text>This is Album Page</Text>
      <Button onPress={() => router.push("screens/albums/1")} title="album 1" />
      <Button onPress={() => router.push("screens/albums/2")} title="album 2" />
      <Button onPress={() => router.push("screens/albums/3")} title="album 3" />
      <Button onPress={() => router.push("screens/albums/4")} title="album 4" />

      <Link href="/screens/settings" asChild>
        <Pressable>
          <Text className="bg-violet-700 px-2 py-2 border-2 font-bold ">
            Go to Settings
          </Text>
        </Pressable>
      </Link>
      <TouchableOpacity onPress={handlegetUsers}>
        <Text className="bg-pink-300 font-bold p-2 rounded-md">Get Users</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Albums;
