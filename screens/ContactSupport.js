import React from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import CustomHeader from "../components/CustomHeader";

const ContactSupport = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Contact Support" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.heading}>Contact Information:</Text>
          <Text style={styles.info}>Email: support@gigsweep.com</Text>
          <Text style={styles.heading}>Support Services:</Text>
          <Text style={styles.info}>
            Our support team is available to assist you with any inquiries,
            technical issues, or feedback you may have regarding GigSweep.
            Please feel free to reach out to us via email, and we'll be happy to
            help.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Adjust background colour as needed
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 57,
  },
  content: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 22,
  },
});

export default ContactSupport;
