import React from "react";
import { View, Text, Modal, Button, StyleSheet } from "react-native";

const UnavailabilityModal = ({ unavailability, showModal, setShowModal }) => {
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.modalContainer}>
        {unavailability && (
          <React.Fragment>
            <Text style={styles.text}>Date: {unavailability.date}</Text>
            <Text style={styles.text}>Status: {unavailability.status}</Text>
            <Text style={styles.text}>Reason: {unavailability.reason}</Text>
            <Button title="Close" onPress={() => setShowModal(false)} />
          </React.Fragment>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default UnavailabilityModal;
