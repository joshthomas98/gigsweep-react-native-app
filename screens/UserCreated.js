import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

const UserCreated = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textWhite}>User Created</Text>
    </View>
  );
};

export default UserCreated;
