import { View, Text } from "react-native";
import React from "react";

const Single = ({ ids }: any) => {
  const [parent, child] = ids;

  return (
    <View>
      <Text>{`This is Single ${parent} ${child} `}</Text>
    </View>
  );
};

export default Single;
