import React from "react";
import { Text, View, Image, ScrollView } from "react-native";

export default function SlideCards() {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {/* Body Temperature */}
        <View className="px-5 py-2 border rounded-2xl w-44 ml-8 mt-2">
          <Text className="font-medium text-left">Body Temprature</Text>
          <View className="flex flex-row top-1">
            <Text className="font-bold text-4xl text-left">36.1</Text>
            <Image
              className="w-10 h-10 left-3"
              source={require("../../assets/temp.png")}
            />
          </View>
          <Text className="text-sm text-left text-gray-500">Celcius</Text>
        </View>

        {/* Heart Rate */}
        <View className="px-5 py-2 border border-gray-500 rounded-2xl w-44 ml-2 mt-2">
          <Text className="font-medium text-left">Heart Rate</Text>
          <View className="flex flex-row top-1">
            <Text className="font-bold text-4xl text-left">120</Text>
            <Image 
            className="w-10 h-10 left-3"
            source={require("../../assets/heart.png")} 
            />
          </View>
          <Text className="text-sm text-left text-gray-500">BPM</Text>
        </View>

        {/* Water Intake */}
        <View className="px-5 py-2 border border-gray-500 rounded-2xl w-44 ml-2 mt-2">
          <Text className="font-medium text-left">Water Intake</Text>
          <View className="flex flex-row top-1">
          <Text className="font-bold text-4xl text-left">2000</Text>
            <Image 
            className="w-10 h-10 left-2"
            source={require("../../assets/water.png")} 
            />
          </View>
          <Text className="text-sm text-left text-gray-500">Mililiters</Text>
        </View>

        {/* Steps Count */}
        <View className="px-5 py-2 border border-gray-500 rounded-2xl w-44 ml-2 mt-2">
          <Text className="font-medium text-left">Steps Count</Text>
          <View className="flex flex-row top-1">
          <Text className="font-bold text-4xl text-left">5000</Text>
            <Image 
            className="w-10 h-10 left-2"
            source={require("../../assets/steps.png")} 
            />
          </View>
          <Text className="text-sm text-left text-gray-500">Steps</Text>
        </View>

        {/* Sleep Overview */}
        <View className="px-5 py-2 border border-gray-500 rounded-2xl w-44 ml-2 mt-2">
          <Text className="font-medium text-left">Sleep Overview</Text>
          <View className="flex flex-row top-1">
          <Text className="font-bold text-4xl text-left">08.30</Text>
            <Image 
            className="w-10 h-10 left-2"
            source={require("../../assets/sleep.png")} 
            />
          </View>
          <Text className="text-sm text-left text-gray-500">Hours</Text>
        </View>
      </ScrollView>
    </View>
  );
}
