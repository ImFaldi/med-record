import { Link } from 'expo-router';
import React from 'react';
import { Text, View, Image, TouchableHighlight, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function LoginPage() {
    return (
        <View className="flex-1 items-center bg-white mt-10">
            <Image
                className="w-80 h-48 mt-10"
                source={require('../../assets/img/login-page.png')}
            />
            <View className="flex flex-row items-center border mt-5 rounded-lg w-3/4 px-5 py-2">
                <Icon name="envelope" size={20} color="gray" className="mr-2" />
                <TextInput className="w-full"
                    placeholder="Username"
                />
            </View>
            <View className="flex flex-row items-center border mt-5 rounded-lg w-3/4 px-5 py-2">
                <Icon name="lock" size={20} color="gray" className="mr-2" />
                <TextInput
                    className="w-full"
                    placeholder="Password"
                />
            </View>
            <TouchableHighlight
                className="bg-blue-500 px-5 py-3 rounded-full mt-5 w-3/4"
                onPress={() => console.log('Hello, Tailwind!')}
            >
                <Text className="text-white font-semibold text-center text-lg">Login</Text>
            </TouchableHighlight>

            <View className="flex flex-row items-center mt-5 w-3/4">
                <View className="flex-1 border-t border-gray-300"></View>
                <Text className="text-gray-500 mx-2 text-lg">Or</Text>
                <View className="flex-1 border-t border-gray-300"></View>
            </View>

            <TouchableHighlight
                className="px-5 py-3 rounded-full mt-5 w-3/4 bg-blue-500 flex flex-row items-center justify-center"
                onPress={() => console.log('Hello, Tailwind!')}
            >
                <Text className="font-semibold text-center text-lg text-white">Login with Facebook</Text>
            </TouchableHighlight>

            <TouchableHighlight
                className="px-5 py-3 rounded-full mt-5 w-3/4 bg-red-500 flex flex-row items-center justify-center"
                onPress={() => console.log('Hello, Tailwind!')}
            >
                <Text className="font-semibold text-center text-lg text-white">Login with Google</Text>
            </TouchableHighlight>
            <TouchableHighlight
                className="px-5 py-3 rounded-full mt-5 w-3/4 bg-black flex flex-row items-center justify-center"
                onPress={() => console.log('Hello, Tailwind!')}
            >
                <Text className="font-semibold text-center text-lg text-white">Login with Apple</Text>
            </TouchableHighlight>

            <View className="flex flex-row mt-5">
                <Text className="text-gray-500">Don't have an account?</Text>
                <Link href={'/page'} className="text-blue-500 ml-2">Sign Up</Link>
            </View>
        </View>
    );
}