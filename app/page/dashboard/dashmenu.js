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
import Ads from "../../components/ads";

export default function DashMenu(){
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
        <Ads/>
      </ScrollView>
    </View>
  );
}
