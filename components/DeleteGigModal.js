import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";

const DeleteGigModal = ({ visible, onClose, onDelete }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Are you sure you want to delete this gig?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.buttonYes]}
              onPress={onDelete} // Invoke onDelete when "Yes" is pressed
            >
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonNo]}
              onPress={onClose} // Simply close the modal when "No" is pressed
            >
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    elevation: 5,
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    flex: 1, // Equal flex to distribute space evenly
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#333",
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center", // Center text within the button
  },
  buttonYes: {
    backgroundColor: "green",
  },
  buttonNo: {
    backgroundColor: "red",
  },
});

export default DeleteGigModal;
