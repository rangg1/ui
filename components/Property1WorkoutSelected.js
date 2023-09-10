import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1WorkoutSelected = ({
  dimensionCode,
  dimensionCodeImageUrl,
  property1WorkoutSelectedPosition,
  property1WorkoutSelectedTop,
  property1WorkoutSelectedLeft,
  rectangleViewRight,
  rectangleViewLeft,
  homeColor,
  workoutColor,
}) => {
  const property1WorkoutSelectedStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1WorkoutSelectedPosition),
      ...getStyleValue("top", property1WorkoutSelectedTop),
      ...getStyleValue("left", property1WorkoutSelectedLeft),
    };
  }, [
    property1WorkoutSelectedPosition,
    property1WorkoutSelectedTop,
    property1WorkoutSelectedLeft,
  ]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("right", rectangleViewRight),
      ...getStyleValue("left", rectangleViewLeft),
    };
  }, [rectangleViewRight, rectangleViewLeft]);

  const homeStyle = useMemo(() => {
    return {
      ...getStyleValue("color", homeColor),
    };
  }, [homeColor]);

  const workoutStyle = useMemo(() => {
    return {
      ...getStyleValue("color", workoutColor),
    };
  }, [workoutColor]);

  return (
    <View
      style={[styles.property1workoutSelected, property1WorkoutSelectedStyle]}
    >
      <View
        style={[styles.property1workoutSelectedChild, rectangleViewStyle]}
      />
      <View style={styles.downBar}>
        <View style={styles.homeBar}>
          <Image
            style={[styles.lineMdhomeIcon, styles.iconPosition]}
            resizeMode="cover"
            source={dimensionCode}
          />
          <Text style={[styles.home, homeStyle]}>Home</Text>
        </View>
        <View style={[styles.profileBar, styles.barLayout]}>
          <Text style={[styles.profile, styles.profilePosition]}>Profile</Text>
          <Image
            style={[styles.iconamoonprofileLight, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/iconamoonprofilelight.png")}
          />
        </View>
        <View style={styles.calenderBar}>
          <Text style={styles.home}>Calender</Text>
          <Image
            style={[styles.uilcalenderIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/uilcalender.png")}
          />
        </View>
        <View style={[styles.workoutBar, styles.barLayout]}>
          <Image
            style={[
              styles.materialSymbolsexerciseOutlIcon,
              styles.iconPosition,
            ]}
            resizeMode="cover"
            source={dimensionCodeImageUrl}
          />
          <Text style={[styles.workout, styles.profilePosition, workoutStyle]}>
            Workout
          </Text>
        </View>
        <View style={[styles.searchBar, styles.barLayout]}>
          <Image
            style={[styles.mdisearchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/mdisearch.png")}
          />
          <Text style={[styles.profile, styles.profilePosition]}>Search</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  barLayout: {
    height: 47,
    marginLeft: 40,
  },
  profilePosition: {
    top: 29,
    textAlign: "left",
    fontFamily: FontFamily.heeboRegular,
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  property1workoutSelectedChild: {
    height: "8.77%",
    width: "21.63%",
    top: "-3.51%",
    right: "14.5%",
    bottom: "94.74%",
    left: "63.87%",
    backgroundColor: Color.colorDarkmagenta_100,
    position: "absolute",
  },
  lineMdhomeIcon: {
    height: 30,
    width: 30,
    top: 0,
    overflow: "hidden",
    left: 0,
  },
  home: {
    top: 30,
    textAlign: "left",
    fontFamily: FontFamily.heeboRegular,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  homeBar: {
    width: 33,
    height: 48,
  },
  profile: {
    color: Color.colorBlack,
    top: 29,
  },
  iconamoonprofileLight: {
    left: 3,
    height: 30,
    width: 30,
    top: 0,
    overflow: "hidden",
  },
  profileBar: {
    width: 35,
    marginLeft: 40,
  },
  uilcalenderIcon: {
    height: "62.5%",
    width: "62.5%",
    top: "0%",
    right: "18.75%",
    bottom: "37.5%",
    left: "18.75%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  calenderBar: {
    width: 48,
    marginLeft: 40,
    height: 48,
  },
  materialSymbolsexerciseOutlIcon: {
    left: 8,
    height: 30,
    width: 30,
    top: 0,
    overflow: "hidden",
  },
  workout: {
    color: Color.colorDarkmagenta_200,
  },
  workoutBar: {
    width: 45,
    marginLeft: 40,
  },
  mdisearchIcon: {
    left: 4,
    height: 30,
    width: 30,
    top: 0,
    overflow: "hidden",
  },
  searchBar: {
    width: 37,
    marginLeft: 40,
  },
  downBar: {
    height: "84.21%",
    width: "91.09%",
    top: "15.79%",
    right: "0%",
    bottom: "0%",
    left: "8.91%",
    flexDirection: "row",
    alignItems: "flex-end",
    position: "absolute",
  },
  property1workoutSelected: {
    width: 393,
    height: 57,
  },
});

export default Property1WorkoutSelected;
