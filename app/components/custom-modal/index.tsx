import { View, Text, Modal, Button, TouchableOpacity } from "react-native";
import React from "react";

type customModalType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CustomModal = ({ isOpen, setIsOpen }: customModalType) => {
  return (
    <Modal visible={isOpen} animationType="slide" transparent={true}>
      <View className="flex-1 mt-20 bg-transparent ">
        <View className="p-5 bg-white rounded-t-lg h-1/2 mt-96">
          <Text>My First Modal</Text>
          <TouchableOpacity onPress={() => setIsOpen(false)}>
            <Text className="px-2 py-2 my-2 font-bold text-black bg-green-400 border-2 rounded-lg">
              close Button
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
