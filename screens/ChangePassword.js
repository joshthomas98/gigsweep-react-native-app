import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
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
  const [passwordStrength, setPasswordStrength] = useState("");

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await fetch(`${SERVER_BASE_URL}artists/${userId}/`);
        const data = await response.json();
        setArtist(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArtist();
  }, [userId]);

  const handleChangePassword = async () => {
    if (!newPassword || !confirmNewPassword) {
      Alert.alert(
        "Error",
        "Please enter both new password and confirm password"
      );
      return;
    }

    if (newPassword !== confirmNewPassword) {
      Alert.alert("Error", "New password and confirm password do not match");
      return;
    }

    const formData = new FormData();
    formData.append("password", newPassword);

    try {
      const response = await fetch(`${SERVER_BASE_URL}artists/${userId}/`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        navigation.navigate("ProfileSuccessfullyUpdated");
      } else {
        const errorMessage = await response.text();
        console.error(
          "Error changing password:",
          response.status,
          errorMessage
        );
        Alert.alert(
          "Error",
          "Failed to change password. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error changing password:", error);
      Alert.alert(
        "Error",
        "Failed to change password. Please try again later."
      );
    }
  };

  // Function to evaluate password strength
  const evaluatePasswordStrength = (password) => {
    // Regular expressions for various password criteria
    const regex = {
      length: /.{8,}/,
      uppercase: /[A-Z]/,
      lowercase: /[a-z]/,
      digit: /\d/,
      specialChar: /[!@#$%^&*(),.?":{}|<>]/,
    };

    // Check each criterion and update password strength
    const strength =
      (regex.length.test(password) ? 1 : 0) +
      (regex.uppercase.test(password) ? 1 : 0) +
      (regex.lowercase.test(password) ? 1 : 0) +
      (regex.digit.test(password) ? 1 : 0) +
      (regex.specialChar.test(password) ? 1 : 0);

    switch (strength) {
      case 0:
        return "Very Weak";
      case 1:
        return "Weak";
      case 2:
        return "Moderate";
      case 3:
        return "Strong";
      case 4:
        return "Very Strong";
      default:
        return "";
    }
  };

  useEffect(() => {
    // Evaluate password strength whenever newPassword changes
    setPasswordStrength(evaluatePasswordStrength(newPassword));
  }, [newPassword]);

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
        onChangeText={(text) => {
          setNewPassword(text);
          setPasswordStrength(evaluatePasswordStrength(text)); // Update password strength as the user types
        }}
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
      <View style={styles.passwordStrengthContainer}>
        <Text style={styles.passwordStrengthLabel}>Password strength:</Text>
        <View style={styles.passwordStrengthBar}>
          <View
            style={[
              styles.strengthIndicator,
              {
                backgroundColor:
                  passwordStrength === "Very Weak"
                    ? "red"
                    : passwordStrength === "Weak"
                    ? "orange"
                    : passwordStrength === "Moderate"
                    ? "yellow"
                    : passwordStrength === "Strong"
                    ? "green"
                    : passwordStrength === "Very Strong"
                    ? "darkgreen"
                    : "black",
              },
            ]}
          />
        </View>
        <Text style={styles.passwordStrengthText}>{passwordStrength}</Text>
      </View>
      <Text style={styles.infoText}>
        Password must be at least 8 characters long and contain at least one
        uppercase letter, one lowercase letter, one number, and one special
        character.
      </Text>
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
  passwordStrengthContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  passwordStrengthLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  passwordStrengthBar: {
    flexDirection: "row",
    width: "80%",
    height: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 5,
    overflow: "hidden",
  },
  strengthIndicator: {
    height: "100%",
    width: "33.33%",
  },
  passwordStrengthText: {
    marginTop: 5,
    fontSize: 14,
    color: "gray",
  },
  infoText: {
    fontSize: 14,
    marginTop: 25,
    textAlign: "center",
  },
});

export default ChangePassword;
