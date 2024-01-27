import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import {
  countIncreament,
  countDecrement,
} from "../../../../redux/slices/app-slice";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <TouchableOpacity onPress={() => dispatch(countIncreament())}>
        <Text className="bg-green-400 font-bold p-2 m-2 rounded-lg">
          Add Count
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(countDecrement())}>
        <Text className="bg-green-400 font-bold p-2 m-2 rounded-lg">
          Subtract count
        </Text>
      </TouchableOpacity>
      <Text>This is Profile Page</Text>
      <Link href="/components/message" asChild>
        <Pressable>
          <Text className="bg-violet-700 px-2 py-2 border-2 font-bold text-white">
            Go to Mesage via without header
          </Text>
        </Pressable>
      </Link>
      <Link href="/screens/message" asChild>
        <Pressable>
          <Text className="my-2 bg-blue-300 px-2 py-2 border-2 font-bold ">
            Go to Mesage with header
          </Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default Profile;
