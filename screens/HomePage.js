import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Property1WorkoutSelected from "../components/Property1WorkoutSelected";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const HomePage = () => {
  return (
    <View style={styles.homePage}>
      <LinearGradient
        style={[styles.background, styles.backgroundPosition]}
        locations={[0.23, 0.98]}
        colors={["#4656b4", "#7e51ad"]}
        useAngle={true}
        angle={154.56}
      />
      <View style={[styles.homePageChild, styles.backgroundPosition]} />
      <Property1WorkoutSelected
        dimensionCode={require("../assets/linemdhome.png")}
        dimensionCodeImageUrl={require("../assets/materialsymbolsexerciseoutline.png")}
        property1WorkoutSelectedPosition="absolute"
        property1WorkoutSelectedTop={859}
        property1WorkoutSelectedLeft={0}
        rectangleViewRight="78.37%"
        rectangleViewLeft="0%"
        homeColor="#8c39aa"
        workoutColor="#000"
      />
      <Text style={[styles.home, styles.blaTypo]}>Home</Text>
      <Text style={[styles.blaBlaBla, styles.blaTypo]}>Bla bla bla</Text>
      <View style={styles.lasignalParent}>
        <Image
          style={styles.lasignalIcon}
          resizeMode="cover"
          source={require("../assets/lasignal.png")}
        />
        <Image
          style={[styles.mingcutewifiFillIcon, styles.iconSpaceBlock]}
          resizeMode="cover"
          source={require("../assets/mingcutewififill.png")}
        />
        <Image
          style={[styles.psbatteryIcon, styles.iconSpaceBlock]}
          resizeMode="cover"
          source={require("../assets/psbattery.png")}
        />
      </View>
      <Text style={[styles.text, styles.blaTypo]}>12:42</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundPosition: {
    width: 428,
    left: 0,
    position: "absolute",
  },
  blaTypo: {
    textAlign: "left",
    fontFamily: FontFamily.heeboRegular,
    position: "absolute",
  },
  iconSpaceBlock: {
    marginLeft: 7,
    width: 25,
    overflow: "hidden",
  },
  background: {
    top: 0,
    backgroundColor: "transparent",
    height: 926,
    width: 428,
    left: 0,
  },
  homePageChild: {
    top: 857,
    backgroundColor: Color.colorSnow,
    height: 70,
  },
  home: {
    top: 110,
    left: 18,
    fontSize: 60,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.heeboRegular,
  },
  blaBlaBla: {
    top: 179,
    left: 21,
    fontSize: 18,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.heeboRegular,
  },
  lasignalIcon: {
    height: 25,
    width: 25,
    overflow: "hidden",
  },
  mingcutewifiFillIcon: {
    height: 25,
  },
  psbatteryIcon: {
    height: 22,
  },
  lasignalParent: {
    top: 8,
    left: 305,
    flexDirection: "row",
    alignItems: "flex-end",
    position: "absolute",
  },
  text: {
    top: 15,
    left: 28,
    fontSize: FontSize.size_sm,
    color: Color.colorGray,
    width: 35,
    height: 15,
    textAlign: "left",
    fontFamily: FontFamily.heeboRegular,
  },
  homePage: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 926,
  },
});

export default HomePage;
