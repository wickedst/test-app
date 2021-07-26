import React from "react";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { Slider } from "./components/Slider";

export default function App() {
  return (
    <View style={styles.container}>
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
