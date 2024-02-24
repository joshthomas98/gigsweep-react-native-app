import React from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import CustomHeader from "../components/CustomHeader";

const TermsOfService = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="GigSweep Terms of Service" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.paragraph}>
            Welcome to GigSweep! These Terms of Service ("Terms") govern your
            use of GigSweep's platform, including our website and mobile
            applications (collectively, "GigSweep"). By accessing or using
            GigSweep, you agree to be bound by these Terms and our Privacy
            Policy. If you do not agree to these Terms or our Privacy Policy,
            you may not use GigSweep.
          </Text>
          <Text style={styles.sectionTitle}>1. Account Registration</Text>
          <Text style={styles.paragraph}>
            In order to access certain features of GigSweep, you may be required
            to register for an account. When you register for an account, you
            agree to provide accurate, current, and complete information. You
            are solely responsible for maintaining the confidentiality of your
            account and password and for restricting access to your account. You
            agree to accept responsibility for all activities that occur under
            your account.
          </Text>
          <Text style={styles.sectionTitle}>2. User Conduct</Text>
          <Text style={styles.paragraph}>
            You agree to use GigSweep in a manner consistent with all applicable
            laws and regulations and in accordance with these Terms. You agree
            not to: - Use GigSweep in any way that violates any applicable law
            or regulation. - Use GigSweep for any unlawful or unauthorised
            purpose. - Engage in any conduct that restricts or inhibits any
            other user from using or enjoying GigSweep. - Attempt to interfere
            with, disrupt, or disable any features of GigSweep.
          </Text>
          <Text style={styles.sectionTitle}>3. Intellectual Property</Text>
          <Text style={styles.paragraph}>
            The content on GigSweep, including without limitation, the text,
            software, scripts, graphics, photos, sounds, music, videos,
            interactive features, and the like ("Content") and the trademarks,
            service marks, and logos contained therein ("Marks"), are owned by
            or licensed to GigSweep, subject to copyright and other intellectual
            property rights under UK and foreign laws and international
            conventions. Content on GigSweep is provided to you AS IS for your
            information and personal use only and may not be used, copied,
            reproduced, distributed, transmitted, broadcast, displayed, sold,
            licensed, or otherwise exploited for any other purposes whatsoever
            without the prior written consent of the respective owners.
          </Text>
          {/* Add more terms and conditions */}
          <Text style={styles.paragraph}>
            By using GigSweep, you agree to abide by these Terms of Service and
            any additional terms and conditions that may apply to specific areas
            of GigSweep or to products and services offered through GigSweep. If
            you do not agree to these Terms of Service, you are not authorised
            to use GigSweep.
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
    paddingTop: 60,
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

export default TermsOfService;
