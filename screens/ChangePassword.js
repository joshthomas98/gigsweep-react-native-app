import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LoginContext from "../contexts/LoginContext";
import { useNavigation } from "@react-navigation/native";

const ChangePassword = () => {
  const { userId } = useContext(LoginContext);

  const navigation = useNavigation();

  const SERVER_BASE_URL = "http://localhost:8000/";

  const goBack = () => {
    navigation.goBack();
  };

  const [artist, setArtist] = useState([]);

  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await fetch(`${SERVER_BASE_URL}artists/${userId}/`);
        const data = await response.json();
        // console.log(data);
        setArtist(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArtist();
  }, [userId]);

  const handleChangePassword = async () => {
    const formData = new FormData();

    if (artist.password !== newPassword)
      formData.append("password", newPassword);
    else if (artist.password === newPassword) {
      console.log(
        "New password is the same as the old one, please enter a different password"
      );
    }

    if (newPassword === confirmNewPassword) {
      formData.append("password", confirmNewPassword);
    }

    try {
      const response = await fetch(`${SERVER_BASE_URL}artists/${userId}/`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        navigation.navigate("ProfileSuccessfullyUpdated");
      } else {
        const errorMessage = await response.text(); // Get the error message from the response body
        console.error("Error editing profile:", response.status, errorMessage);
      }
    } catch (error) {
      console.error("Error editing profile:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Change Password</Text>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm New Password"
        value={confirmNewPassword}
        onChangeText={setConfirmNewPassword}
        secureTextEntry
      />
      <Button title="Change Password" onPress={handleChangePassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    left: 10,
    top: 65,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default ChangePassword;
