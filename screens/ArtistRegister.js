import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

const ArtistRegister = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <TouchableOpacity>
        <Text>Artist Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ArtistRegister;
