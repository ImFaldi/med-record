import { Link } from 'expo-router';
import React from 'react';
import { Text, View, Image, TouchableHighlight, TextInput, Button, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const signIn = async () => {
        setIsSubmitting(true);
        try {
            alert('Check your email and password');
        } catch (e) {
            console.error(e);
            alert('Sign in failed: ' + e.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <View className="flex-1 items-center bg-white mt-10">
            <Image
                className="w-80 h-48 mt-10"
                source={require('../../../assets/img/login-page.png')}
            />
            <View className="flex flex-row items-center border mt-5 rounded-lg w-3/4 px-5 py-2">
                <Icon name="envelope" size={20} color="gray" />
                <TextInput
                    className="w-full mx-2"
                    placeholder="Username"
                    onChangeText={setEmail}
                />
            </View>
            <View className="flex flex-row items-center border mt-5 rounded-lg w-3/4 px-5 py-2">
                <Icon name="lock" size={20} color="gray" />
                <TextInput
                    className="w-full mx-2"
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
            </View>
            {isSubmitting ? (
                <ActivityIndicator size="large" color="#00ff00" />
            ) : (
                <>
                    <TouchableHighlight
                        className="px-5 py-3 rounded-full mt-5 w-3/4 bg-blue-500 flex flex-row items-center justify-center"
                        onPress={signIn}
                    >
                        <Text className="font-semibold text-center text-lg text-white">Sign In</Text>
                    </TouchableHighlight>
                </>
            )}

            <View className="flex flex-row items-center mt-5 w-3/4">
                <View className="flex-1 border-t border-gray-300"></View>
                <Text className="text-gray-500 mx-2 text-lg">Or</Text>
                <View className="flex-1 border-t border-gray-300"></View>
            </View>

            <TouchableHighlight
                className="px-5 py-2 rounded-full mt-5 w-3/4 border border-gray-500 flex flex-row items-center justify-center"
                onPress={() => console.log('Hello, Tailwind!')}
            >
                <View className="flex flex-row items-center justify-center">
                    <FontAwesome5 name="google" size={28} color="red" className="mx-3" />
                    <Text className="font-semibold text-center text-lg">    Login with Google</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight
                className="px-5 py-2 rounded-full mt-5 w-3/4 border border-gray-500 flex flex-row items-center justify-center"
                onPress={() => console.log('Hello, Tailwind!')}
            >
                <View className="flex flex-row items-center justify-center">
                    <FontAwesome5 name="facebook" size={30} color="blue" className="mx-3" />
                    <Text className="font-semibold text-center text-lg ">    Login with Facebook</Text>
                </View>
            </TouchableHighlight>

            <View className="flex flex-row mt-5">
                <Text className="text-gray-500">Don't have an account?</Text>
                <Link href={'page/register/[register]'} className="text-blue-500 ml-2">Sign Up</Link>
            </View>
        </View>
    );
}