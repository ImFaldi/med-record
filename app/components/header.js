import React from 'react'
import { Text, View, Image} from 'react-native'

export default function Header() {
    return (
        <View className="flex items-center mt-3 ml-1">
          <Image
            style={{ width: 360, height: 162 }}
            source={require("../../assets/info.png")}
          />
        </View>
    );
}