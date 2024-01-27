import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { Tabs, router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomModal from "../../../components/custom-modal";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Tabs
        screenOptions={{
          headerLeft: () => <DrawerToggleButton />,
          headerRight: () => (
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color="black"
              style={{ marginRight: 20 }}
              onPress={() => setIsOpen(true)}
            />
          ),
        }}
      >
        <Tabs.Screen
          name="posts/index"
          options={{
            title: "posts",
          }}
        />
        <Tabs.Screen
          name="albums/index"
          options={{
            title: "Albums",
          }}
        />
        <Tabs.Screen
          name="profile/index"
          options={{
            title: "profile",
          }}
        />
        <Tabs.Screen
          name="todos/index"
          options={{
            title: "todos",
          }}
        />
        <Tabs.Screen
          name="message/index"
          options={{
            title: "Message",
            href: null,
          }}
        />
        <Tabs.Screen
          name="settings/index"
          options={{
            title: "Settings",
            href: null,
          }}
        />
        <Tabs.Screen
          name="notification/index"
          options={{
            title: "Notification",
            href: null,
          }}
        />
      </Tabs>
      <View>
        <CustomModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </View>
    </>
  );
};

export default Layout;
