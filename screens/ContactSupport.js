import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import CustomHeader from "../components/CustomHeader";

const ContactSupport = () => {
  // Function to handle the submission of the contact form
  const handleContactFormSubmit = () => {
    // Implement the logic to submit the contact form
  };

  const handleFeedbackPress = () => {
    console.log("Pressed");
  };

  // Function to start a live chat session
  const startLiveChat = () => {
    // Implement the logic to start a live chat session
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Contact Support" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.heading}>Contact Information:</Text>
          <Text style={styles.info}>Email: support@gigsweep.com</Text>
          <Text style={[styles.heading, { marginTop: 15 }]}>
            Support Services:
          </Text>
          <Text style={styles.info}>
            Our support team is available to assist you with any inquiries,
            technical issues, or feedback you may have regarding GigSweep.
            Please feel free to reach out to us via email, and we'll be happy to
            help.
          </Text>
          {/* Add Support Hours */}
          <Text style={[styles.heading, { marginTop: 15 }]}>
            Support Hours:
          </Text>
          <Text style={styles.info}>Monday to Friday: 9:00 AM - 5:00 PM</Text>
          {/* Add Feedback Section */}
          <TouchableOpacity style={styles.button} onPress={handleFeedbackPress}>
            <Text style={styles.buttonText}>Provide Feedback</Text>
          </TouchableOpacity>
          {/* Add Additional Contact Channels */}
          <Text style={[styles.heading, { marginTop: 25 }]}>
            Additional Contact Channels:
          </Text>
          <Text style={styles.info}>Phone: +1234567890</Text>
          <Text style={styles.info}>Twitter: @GigSweepSupport</Text>
          {/* Add Live Chat Support */}
          <TouchableOpacity style={styles.button} onPress={startLiveChat}>
            <Text style={styles.buttonText}>Start Live Chat</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ContactSupport;
