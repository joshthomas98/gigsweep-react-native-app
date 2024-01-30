import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

const VenueRegister = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <TouchableOpacity>
        <Text>Venue Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VenueRegister;
