import React from "react";
import { Text, View, Image, ScrollView } from "react-native";

export default function Ads(){
    return(
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View className="flex items-center mt-2 ml-8">
            <Image
              source={require("../../assets/iklan1.png")}
            />
          </View>

          <View className="flex items-center mt-2 ml-3">
            <Image
              source={require("../../assets/iklan2.png")}
            />
          </View>

          <View className="flex items-center mt-2 ml-3">
            <Image
              source={require("../../assets/iklan3.png")}
            />
          </View>
        </ScrollView>
        </View>
    );
}