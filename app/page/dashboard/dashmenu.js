import { Link } from "expo-router";
import React from "react";
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome5 } from "@expo/vector-icons";
import Header from "../../components/header";
import SlideCards from "../../components/slidecards";
import Menu from "../../components/menu";

const DashMenu = () => {
  return (
    <View>
      <ScrollView>
        <View className="flex flex-row items-center mt-10">
          <View>
            <Text className="flex-1 items-center bg-white ml-8 text-blue-500 font-bold text-lg">
              Hello,
            </Text>
            <Text className="flex-1 items-center bg-white ml-8 text-grey-500 font-bold text-lg">
              Ryan Wilson
            </Text>
          </View>
          <View className="flex mx-auto">
            <Image className="w-12 h-12" />
          </View>
          <View className="flex mx-auto ml-20">
            <Image
              className="w-12 h-12"
              source={require("../../../assets/test.png")}
            />
          </View>
        </View>
        <Header />
        <Text className="flex-1 items-center bg-white mt-2 ml-8 text-grey-500 font-semibold text-lg">
          Daily Activities
        </Text>
        <SlideCards />
        <Text className="flex-1 items-center bg-white mt-2 ml-8 text-grey-500 font-semibold text-lg">
          MedRecord Features
        </Text>

        <Menu />

        <Text className="flex-1 items-center bg-white mt-2 ml-8 text-grey-500 font-semibold text-lg">
          Customer Offers
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View className="flex items-center mt-2 ml-8">
            <Image
              source={require("../../../assets/iklan1.png")}
            />
          </View>

          <View className="flex items-center mt-2 ml-3">
            <Image
              source={require("../../../assets/iklan2.png")}
            />
          </View>

          <View className="flex items-center mt-2 ml-3">
            <Image
              source={require("../../../assets/iklan3.png")}
            />
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 15,
    width: 168,
    height: 105,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },

  textPosition: {
    textAlign: "left",
    left: 20,
    position: "absolute",
  },

  text: {
    top: 12,
    fontWeight: "500",
    textAlign: "left",
    left: 20,
  },

  input: {
    top: 32,
    fontSize: 30,
    fontWeight: "800",
    color: "#5a5a5a",
    textAlign: "left",
    left: 20,
  },

  minitext: {
    top: 75,
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    left: 20,
  },
  groupItem: {
    height: 33,
    width: 33,
    top: 39,
    right: "15.33%",
    bottom: "34.29%",
    left: 120,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },

  groupLayout: {
    height: 61,
    width: 60,
    top: 0,
    position: "absolute",
  },
  Record: {
    top: 60,
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    width: 60,
    position: "absolute",
  },

  RecordFam: {
    top: 60,
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    width: 70,
    right: 57,
    position: "absolute",
  },

  RecordView: {
    top: 60,
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    width: 80,
    right: 55,
    position: "absolute",
  },

  groupChild: {
    borderRadius: 10,
    backgroundColor: "#67bfff",
    left: 0,
  },
  rectangleWrapper: {
    left: 0,
  },
  vectorIcon: {
    width: 36,
    height: 34,
    top: 15,
    left: 12,
    position: "absolute",
  },

  vectorIconBody: {
    width: 37,
    height: 37,
    top: 13,
    left: 15,
    position: "absolute",
  },

  vectorIconFam: {
    width: 38,
    height: 29,
    top: 15,
    left: 11,
    position: "absolute",
  },

  vectorIconSteps: {
    width: 33,
    height: 41,
    top: 10,
    left: 14,
    position: "absolute",
  },

  vectorIconWater: {
    width: 25,
    height: 34,
    top: 13,
    left: 18,
    position: "absolute",
  },

  vectorIconMoon: {
    width: 29,
    height: 29,
    top: 16,
    left: 17,
    position: "absolute",
  },

  groupParent: {
    left: 1,
  },
  familyRecordParent: {
    flex: 1,
    width: "100%",
    height: 75,
  },
});

export default DashMenu;
