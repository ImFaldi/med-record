import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-black">
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}