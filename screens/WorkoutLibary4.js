import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Property1WorkoutSelected from "../components/Property1WorkoutSelected";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const WorkoutLibary4 = () => {
  return (
    <View style={styles.workoutLibary4}>
      <LinearGradient
        style={[styles.background, styles.backgroundPosition]}
        locations={[0.23, 0.98]}
        colors={["#4656b4", "#7e51ad"]}
        useAngle={true}
        angle={154.56}
      />
      <View style={[styles.workoutLibary4Child, styles.backgroundPosition]} />
      <View style={styles.phoneBar}>
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
        <Text style={styles.text}>12:42</Text>
      </View>
      <Property1WorkoutSelected
        dimensionCode={require("../assets/linemdhome1.png")}
        dimensionCodeImageUrl={require("../assets/materialsymbolsexerciseoutline1.png")}
        property1WorkoutSelectedPosition="absolute"
        property1WorkoutSelectedTop={859}
        property1WorkoutSelectedLeft={0}
        rectangleViewRight="14.5%"
        rectangleViewLeft="63.87%"
        homeColor="#000"
        workoutColor="#8c39aa"
      />
      <Image
        style={styles.circlesIcon}
        resizeMode="cover"
        source={require("../assets/circles.png")}
      />
      <Text style={styles.chooseByMuscle}>Choose by Muscle</Text>
      <View style={[styles.frameParent, styles.frameLayout]}>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/frame-3.png")}
        />
        <View style={styles.loremIpsumParent}>
          <Text style={[styles.loremIpsum, styles.loremTypo]}>Lorem ipsum</Text>
          <Text style={[styles.loremIpsum1, styles.loremTypo]}>
            Lorem ipsum
          </Text>
          <Text style={[styles.loremIpsum2, styles.loremTypo]}>
            Lorem ipsum
          </Text>
          <Text style={[styles.loremIpsum3, styles.loremTypo]}>
            Lorem ipsum
          </Text>
          <Text style={[styles.loremIpsum4, styles.loremTypo]}>
            Lorem ipsum
          </Text>
          <Text style={[styles.loremIpsum5, styles.loremTypo]}>
            Lorem ipsum
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundPosition: {
    width: 428,
    left: 0,
    position: "absolute",
  },
  iconSpaceBlock: {
    marginLeft: 7,
    width: 25,
    overflow: "hidden",
  },
  frameLayout: {
    height: 485,
    position: "absolute",
  },
  loremTypo: {
    fontSize: FontSize.size_3xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.heeboRegular,
    left: 0,
    position: "absolute",
  },
  background: {
    backgroundColor: "transparent",
    top: 0,
    height: 926,
    width: 428,
  },
  workoutLibary4Child: {
    top: 857,
    backgroundColor: Color.colorSnow,
    height: 70,
  },
  lasignalIcon: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  mingcutewifiFillIcon: {
    height: 25,
  },
  psbatteryIcon: {
    height: 22,
  },
  lasignalParent: {
    left: 277,
    flexDirection: "row",
    alignItems: "flex-end",
    top: 0,
    position: "absolute",
  },
  text: {
    top: 7,
    fontSize: FontSize.size_sm,
    color: Color.colorGray,
    width: 35,
    height: 15,
    textAlign: "left",
    fontFamily: FontFamily.heeboRegular,
    left: 0,
    position: "absolute",
  },
  phoneBar: {
    top: 8,
    left: 28,
    width: 366,
    height: 25,
    position: "absolute",
  },
  circlesIcon: {
    top: 45,
    width: 469,
    height: 188,
    opacity: 0.8,
    left: 0,
    position: "absolute",
  },
  chooseByMuscle: {
    marginLeft: -194,
    top: 97,
    left: "50%",
    fontSize: 32,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.heeboRegular,
    position: "absolute",
  },
  frameChild: {
    width: 60,
    left: 0,
    top: 0,
  },
  loremIpsum: {
    top: 0,
  },
  loremIpsum1: {
    top: 85,
  },
  loremIpsum2: {
    top: 170,
  },
  loremIpsum3: {
    top: 255,
  },
  loremIpsum4: {
    top: 340,
  },
  loremIpsum5: {
    top: 425,
  },
  loremIpsumParent: {
    top: 14,
    left: 80,
    width: 129,
    height: 457,
    position: "absolute",
  },
  frameParent: {
    top: 185,
    left: 64,
    width: 209,
  },
  workoutLibary4: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 926,
  },
});

export default WorkoutLibary4;
