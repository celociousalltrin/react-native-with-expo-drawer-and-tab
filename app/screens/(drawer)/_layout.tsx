import { View, Text, Image } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { router, usePathname } from "expo-router";

const DrawerLayout = () => {
  const pathname = usePathname();

  type customDrawerItemsType = {
    IconType?: any;
    iconName:
      | keyof typeof MaterialIcons.glyphMap
      | keyof typeof MaterialCommunityIcons.glyphMap
      | keyof typeof Feather.glyphMap
      | keyof typeof Ionicons.glyphMap;
    iconSize?: number;
    itemName: string;
    routePath: string;
  };

  const customDrawerItems = ({
    IconType,
    iconName,
    iconSize = 18,
    itemName,
    routePath,
  }: customDrawerItemsType) => {
    return (
      <DrawerItem
        icon={() => (
          <IconType
            name={iconName}
            size={iconSize}
            color={
              routePath.split("/")[1] === pathname.split("/")[2]
                ? "white"
                : "black"
            }
          />
        )}
        label={itemName}
        labelStyle={{
          marginLeft: -20,
          fontSize: 16,
          color:
            routePath.split("/")[1] === pathname.split("/")[2]
              ? "white"
              : "black",
        }}
        style={{
          backgroundColor:
            routePath.split("/")[1] === pathname.split("/")[2] ? "#696be6" : "",
        }}
        onPress={() => {
          router.push(routePath);
        }}
        pressColor="#7a7aff"
      />
    );
  };

  const UserImageComponent = () => {
    return (
      <>
        <View className="mx-auto mt-4">
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }}
            width={80}
            height={80}
            className="rounded-full flex-1 justify-center"
          />
          <View>
            <Text>John Doe</Text>
            <Text>John@gmail.com</Text>
          </View>
        </View>
        <View className="border-b-2 border-gray-400 pb-3 mb-2"></View>
      </>
    );
  };

  const CustomDrawerContent = (props: any) => {
    return (
      <DrawerContentScrollView {...props}>
        <UserImageComponent />
        {customDrawerItems({
          iconName: "post",
          itemName: "Posts",
          routePath: "screens/posts",
          IconType: MaterialCommunityIcons,
        })}
        {customDrawerItems({
          iconName: "albums-outline",
          itemName: "Albums",
          routePath: "screens/albums",
          IconType: Ionicons,
        })}
        {customDrawerItems({
          iconName: "user",
          itemName: "Profile",
          routePath: "screens/profile",
          IconType: Feather,
        })}
        {customDrawerItems({
          iconName: "list",
          itemName: "todos",
          routePath: "screens/todos",
          IconType: Feather,
        })}
        {customDrawerItems({
          iconName: "settings",
          itemName: "Settings",
          routePath: "screens/settings",
          IconType: Feather,
        })}
        {customDrawerItems({
          iconName: "message",
          itemName: "Message",
          routePath: "screens/message",
          IconType: MaterialIcons,
        })}
      </DrawerContentScrollView>
    );
  };
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default DrawerLayout;
