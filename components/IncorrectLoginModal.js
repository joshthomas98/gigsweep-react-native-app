import React from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";

const IncorrectLoginModal = ({ show, handleClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={handleClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Ooops!</Text>
          <Text style={styles.modalBody}>
            You have either entered an invalid email and/or password or selected
            the incorrect user type, please try again.
          </Text>
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent black background
  },
  modalContent: {
    backgroundColor: "#222",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalBody: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#444",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default IncorrectLoginModal;
