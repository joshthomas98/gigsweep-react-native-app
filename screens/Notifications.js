import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

const NotificationsScreen = () => {
  return (
    <View style={[globalStyles.container]}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={globalStyles.textWhite}>Notifications Screen</Text>
        {/* Add your notifications content here */}
      </View>
    </View>
  );
};

export default NotificationsScreen;
