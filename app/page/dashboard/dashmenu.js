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
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome5 } from "@expo/vector-icons";

const DashMenu = () => {
  return (
    <View>
      <ScrollView>
        <View className="flex flex-row items-center mt-10">
          <View>
            <Text className="flex-1 items-center bg-white ml-10 text-blue-500 font-bold text-lg">
              Hello,
            </Text>
            <Text className="flex-1 items-center bg-white ml-10 text-grey-500 font-bold text-lg">
              Ryan Wilson
            </Text>
          </View>
          <View className="flex mx-auto">
            <Image className="w-12 h-12" />
          </View>
          <View className="flex mx-auto">
            <Image
              className="w-12 h-12"
              source={require("../../../assets/test.png")}
            />
          </View>
        </View>
        <View className="flex items-center mt-3">
          <Image
            style={{ width: 360, height: 162 }}
            source={require("../../../assets/info.png")}
          />
        </View>
        <Text className="flex-1 items-center bg-white mt-2 ml-10 text-grey-500 font-semibold text-lg">
          Daily Activities
        </Text>
        <View style={styles.container}>
          <Text style={[styles.input, styles.textPosition]}>
            Body Temprature
          </Text>
          <Text style={[styles.text, styles.textPosition]}>36.1</Text>
          <Text style={[styles.minitext, styles.textPosition]}>Celcius</Text>
        </View>
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
    marginLeft: 40,
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

  input: {
    top: 12,
    fontWeight: "500",
    textAlign: "left",
    left: 20,
  },

  text: {
    top: 28,
    fontSize: 36,
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
});

export default DashMenu;
