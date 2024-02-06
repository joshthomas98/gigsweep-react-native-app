import React from "react";
import { View, StyleSheet, Animated, Easing, Text } from "react-native";

const SuccessAnimation = () => {
  const scaleValue = new Animated.Value(0);

  Animated.loop(
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ])
  ).start();

  const scale = scaleValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1.2], // Adjust these values as needed for the scale effect
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.spinnerContainer, { transform: [{ scale }] }]}
      >
        <Text style={styles.spinnerIcon}>🤟</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 46, // Adjust the width as needed to fit the spinner icon
  },
  spinnerIcon: {
    fontSize: 46,
  },
});

export default SuccessAnimation;
