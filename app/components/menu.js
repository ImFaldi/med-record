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
  TouchableWithoutFeedback
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Menu() {
    return(
    <View className="flex flex-row mx-auto mt-5 mb-5">
        <Link href="/medrecord"
            className="mx-4">
            <View className="border-none mt-5 rounded-lg mx-2 w-3/4 bg-blue-400 flex flex-row items-center justify-center w-16 h-16">
                {/* <Text className="font-semibold text-center text-lg text-white">
                Medical Record
              </Text> */}
                <Image
                    style={{
                        width: 37,
                        height: 35,

                    }}
                    source={require("../../assets/h.png")}
                />
            </View>
        </Link>

        <Link href="/medrecord"
            className="mx-4">
            <View className="border-none mt-5 rounded-lg mx-2 w-3/4 bg-blue-400 flex flex-row items-center justify-center w-16 h-16">
                {/* <Text className="font-semibold text-center text-lg text-white">
                Medical Record
              </Text> */}
                <Image
                    style={{
                        width: 28,
                        height: 35,

                    }}
                    source={require("../../assets/s.png")}
                />
            </View>
        </Link>
        <Link href="/medrecord"
            className="mx-4">
            <View className="border-none mt-5 rounded-lg mx-2 w-3/4 bg-blue-400 flex flex-row items-center justify-center w-16 h-16">
                {/* <Text className="font-semibold text-center text-lg text-white">
                Medical Record
              </Text> */}
                <Image
                    style={{
                        width: 37,
                        height: 31,

                    }}
                    source={require("../../assets/f.png")}
                />
            </View>
        </Link>
        <TouchableWithoutFeedback>
            <View className="border-none rounded-lg mx-2 w-3/4 bg-blue-400 flex flex-row items-center justify-center w-16 h-16">
                {/* <Text className="font-semibold text-center text-lg text-white">
                Medical Record
              </Text> */}
                <FontAwesome5 name="ellipsis-h" size={24} color="white" />
            </View>
        </TouchableWithoutFeedback>
    </View>
    );

}