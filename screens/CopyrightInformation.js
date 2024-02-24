import React from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import CustomHeader from "../components/CustomHeader";

const CopyrightInformation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Copyright Information" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.paragraph}>
            All content included on GigSweep, such as text, graphics, logos,
            button icons, images, audio clips, digital downloads, data
            compilations, and software, is the property of GigSweep or its
            content suppliers and protected by international copyright laws.
          </Text>
          <Text style={styles.paragraph}>
            The compilation of all content on GigSweep is the exclusive property
            of GigSweep and protected by international copyright laws.
          </Text>
          <Text style={styles.paragraph}>
            You may not reproduce, modify, distribute, transmit, display,
            perform, or prepare derivative works based upon, distribute, sell,
            transfer, publicly display, publicly perform, transmit, stream,
            broadcast, or otherwise exploit GigSweep, except as expressly
            permitted by GigSweep.
          </Text>
          <Text style={styles.paragraph}>
            If you believe that any content on GigSweep infringes upon your
            copyright, please contact us at copyright@gigsweep.com.
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
    paddingTop: 55,
  },
  content: {
    flex: 1,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 22,
  },
});

export default CopyrightInformation;
