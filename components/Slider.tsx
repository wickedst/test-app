import React from "react";
import VerticalSlider from "rn-vertical-slider";
import { StyleSheet, Text, View } from "react-native";
import { SliderType } from "../App"; 

export const Slider = (props: SliderType) => {
  const [sliderChanging, setSliderChanging] = React.useState(false);
  const [sliderValue, setSliderValue] = React.useState(props.appVolume);

  return (
    <View style={styles.slider}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#efefef",
          alignItems: "center",
          justifyContent: "center",
          //   alignSelf: "flex-start",
        }}
      >
        {
          props.appName &&
          <Text>{props.appName}</Text>
        }
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#efefef",
          alignItems: "center",
          justifyContent: "center",
          //   alignSelf: "flex-start",
        }}
      >
        <Text>...</Text>
      </View>
      <View
        style={{
          flex: 4,
          justifyContent: "center",
          //   width: 100,
        }}
      >
        <VerticalSlider
          value={sliderValue}
          disabled={false}
          min={0}
          max={100}
          onChange={(value: number) => {
            setSliderValue(value);
          }}
          onComplete={(value: number) => {}}
          width={50}
          height={200}
          step={1}
          minimumTrackTintColor={"blue"}
          maximumTrackTintColor={"tomato"}
          showBallIndicator={false}
          ballIndicatorPosition={50}
          // ballIndicatorColor={"gray"}
          // ballIndicatorTextColor={"white"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    marginLeft: 10,
    marginRight: 10,
  },
});
