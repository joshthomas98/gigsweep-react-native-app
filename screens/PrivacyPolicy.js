import React from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import CustomHeader from "../components/CustomHeader";

const PrivacyPolicy = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="GigSweep Privacy Policy" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.paragraph}>
            At GigSweep, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you use our platform, including our website and
            mobile applications (collectively, "GigSweep"). Please read this
            Privacy Policy carefully. If you do not agree with the terms of this
            Privacy Policy, please do not access or use GigSweep.
          </Text>
          <Text style={styles.sectionTitle}>1. Information We Collect</Text>
          <Text style={styles.paragraph}>
            We may collect personal information that you provide to us when you
            register for an account, use certain features of GigSweep, or
            communicate with us. This may include your name, email address,
            password, and other information that you choose to provide.
          </Text>
          <Text style={styles.sectionTitle}>
            2. How We Use Your Information
          </Text>
          <Text style={styles.paragraph}>
            We may use the information we collect from you to: - Provide,
            maintain, and improve GigSweep. - Provide customer support. -
            Communicate with you about your account or GigSweep-related updates.
            - Personalise and improve your experience on GigSweep. - Analyse how
            you use GigSweep and perform research and analysis.
          </Text>
          <Text style={styles.sectionTitle}>
            3. Information Sharing and Disclosure
          </Text>
          <Text style={styles.paragraph}>
            We may share your information with third parties as necessary to
            provide, maintain, and improve GigSweep, to comply with applicable
            law, or to protect our rights, property, or safety or the rights,
            property, or safety of others.
          </Text>
          {/* Add more privacy policy details */}
          <Text style={styles.paragraph}>
            By using GigSweep, you agree to the collection and use of your
            information in accordance with this Privacy Policy. If you have any
            questions or concerns about our Privacy Policy, please contact us at
            privacy@gigsweep.com.
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
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default PrivacyPolicy;
