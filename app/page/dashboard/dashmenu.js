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
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome5 } from "@expo/vector-icons";

export default function DashMenu() {
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
          <Image
            className="w-12 h-12"
          />
        </View>
        <View className="flex mx-auto">
          <Image
            className="w-12 h-12"
            source={require("../../../assets/test.png")}
          />
        </View>
        
      </View>
      <View className="flex items-center mt-10">
        <Image
            style={{width: 360, height: 162}}
            source={require("../../../assets/info.png")}
          />
        </View>
        </ScrollView>
    </View>
  );
}
