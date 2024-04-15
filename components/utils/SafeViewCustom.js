import React from "react";
import { View, Platform, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

const ConditionalSafeAreaView = ({ children }) => {
  // Check the platform
  if (Platform.OS === "ios") {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#111214" }}
        edges={["right", "top", "left"]}
      >
        <StatusBar hidden />
        {children}
      </SafeAreaView>
    );
  } else {
    // For Android, use regular View
    return (
      <View style={{ flex: 1, backgroundColor: "#111214", paddingTop: 20 }}>
        <StatusBar hidden />
        {children}
      </View>
    );
  }
};

export default ConditionalSafeAreaView;
