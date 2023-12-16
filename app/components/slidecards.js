import React from "react";
import { Text, View, Image, ScrollView } from "react-native";

export default function SlideCards() {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {/* Body Temperature */}
        <View className="px-5 py-2 border rounded">
          <Text>
            Body Temprature
          </Text>
          <Text>36.1</Text>
          <Text style>Celcius</Text>
          <Image
            
            source={require("../../assets/temp.png")}
          />
        </View>

        {/* Heart Rate */}
        {/* <View>
          <Text>Heart Rate</Text>
          <Text>120</Text>
          <Text>BPM</Text>
          <Image
            source={require("../../assets/heart.png")}
          />
        </View> */}

        {/* Water Intake */}
        {/* <View>
          <Text>Water Intake</Text>
          <Text>2000</Text>
          <Text>Mililiters</Text>
          <Image
            source={require("../../assets/water.png")}
          />
        </View> */}

        {/* Steps Count */}
        {/* <View>
          <Text>Steps Count</Text>
          <Text>5000</Text>
          <Text>Steps</Text>
          <Image
            source={require("../../assets/steps.png")}
          />
        </View> */}

        {/* Sleep Overview */}
        {/* <View>
          <Text>Sleep Overview</Text>
          <Text>08.30</Text>
          <Text>Hours</Text>
          <Image
            source={require("../../assets/sleep.png")}
          />
        </View> */}
      </ScrollView>
    </View>
  );
}
