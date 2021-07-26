import React from "react";
// import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import { Slider } from "./components/Slider";
import { DragSortableView } from "react-native-drag-sort";

const deviceWidth = Dimensions.get("window").width;
const childrenWidth = deviceWidth / 12;
const childrenHeight = deviceWidth / 8;
const itemWidth = 72;
const itemHeight = 36;
const sortWidth = deviceWidth;

export interface SliderType {
  appName: string,
  appVolume: number,
  appIcon: Image
}

type Sliders = SliderType[];

const sliderData: Sliders = [
  {
    appName: "spotify",
    appVolume: 60,
    appIcon: require("./assets/splash.png"),
  },
  {
    appName: "skype",
    appVolume: 20,
    appIcon: require("./assets/splash.png"),
  },
  {
    appName: "zoom",
    appVolume: 90,
    appIcon: require("./assets/splash.png"),
  },
  {
    appName: "master",
    appVolume: 90,
    appIcon: require("./assets/splash.png"),
  },
  {
    appName: "system",
    appVolume: 20,
    appIcon: require("./assets/splash.png"),
  },
];

const fixedItems = [null];

const renderItem = (item: SliderType, index: any) => {
  return <Slider appName={item.appName} appVolume={item.appVolume} appIcon={item.appIcon}/>;
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <DragSortableView
        dataSource={sliderData}
        parentWidth={sortWidth / 1.5}
        childrenWidth={childrenWidth}
        childrenHeight={childrenHeight * 2}
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
