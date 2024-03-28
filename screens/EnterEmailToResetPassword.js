import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CustomHeader from "../components/CustomHeader";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";

const EnterEmailToResetPassword = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("ChangePassword");
  };

  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <CustomHeader title="Password Reset Link" />
      <View style={globalStyles.container}>
        <Text style={styles.title}>Enter your email address</Text>

        <Text style={styles.subtext}>
          We'll use the email address you enter to send you a password reset
          link. Simply click the link you receive via email to reset your
          password.
        </Text>

        <View style={styles.inputContainer}>
          <Text style={{ color: "white", marginBottom: 10 }}>
            Email address
          </Text>
          <TextInput
            placeholder="Enter your email here"
            style={styles.input}
            secureTextEntry={true}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 70,
    marginBottom: 20,
    textAlign: "center",
  },
  subtext: {
    color: "white",
    marginTop: 5,
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default EnterEmailToResetPassword;
