import React from "react";
// import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, SafeAreaView } from "react-native";
import { Slider } from "./components/Slider";
import { DragSortableView } from "react-native-drag-sort";
import { SliderType } from "./types";
import { sliderData } from "./data";
import { View } from "react-native";
import { colors } from "./styles/colors";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Karla_400Regular,
  Karla_600SemiBold,
} from "@expo-google-fonts/karla";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const childrenWidth = deviceWidth / 12;

export default function App() {
  let [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <DragSortableView
        dataSource={sliderData}
        parentWidth={deviceWidth - 50}
        childrenWidth={childrenWidth}
        childrenHeight={deviceHeight - 20}
        // fixedItems={fixedItems}
        marginChildrenBottom={10}
        marginChildrenRight={10}
        marginChildrenLeft={10}
        marginChildrenTop={10}
        onDataChange={(data) => {
          console.log("change ", data);
        }}
        keyExtractor={(item: SliderType, index) => item.appName}
        renderItem={(item: SliderType, index) => {
          return renderItem(item, index);
        }}
      />
    </SafeAreaView>
  );
}

const renderItem = (item: SliderType, index: any) => {
  return (
    <View
      style={{
        height: deviceHeight - 20,
        justifyContent: "center",
      }}
    >
      <Slider
        appName={item.appName}
        appVolume={item.appVolume}
        appIcon={item.appIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 50,
    // flexDirection: "row",
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
});
