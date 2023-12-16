import { Link } from 'expo-router';
import React from 'react';
import { Text, View, Image, TouchableHighlight, TextInput, Button, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const signUp = async () => {
        setIsSubmitting(true);
        try {
            alert('Check your email and password');
        } catch (e) {
            console.error(e);
            alert('Sign up failed: ' + e.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <View className="flex-1 items-center bg-white mt-10">
            <Image
                className="w-80 h-48 mt-10"
                source={require('../../../assets/img/register-page.png')}
            />
            <View className="flex flex-row items-center">

                <View className="flex flex-row items-center border mt-5 rounded-lg px-5 py-2 mx-2"
                    style={{ width: 150, height: 50 }}>
                    <TextInput className="w-full mx-1"
                        placeholder="First Name"
                    />
                </View>
                <View className="flex flex-row items-center border mt-5 rounded-lg px-5 py-2 mx-2"
                    style={{ width: 150, height: 50 }}>
                    <TextInput className="w-full mx-1"
                        placeholder="Last Name"
                    />
                </View>

            </View>
            <View className="flex flex-row items-center border mt-5 rounded-lg px-5 py-2 mx-2 w-3/4">
                <TextInput className="w-full mx-1"
                    placeholder="Username"
                />
            </View>
            <View className="flex flex-row items-center border mt-5 rounded-lg px-5 py-2 mx-2 w-3/4">
                <TextInput className="w-full mx-1"
                    placeholder="Email"
                    onChangeText={setEmail}
                />
            </View>
            <View className="flex flex-row items-center border mt-5 rounded-lg px-5 py-2 mx-2 w-3/4">
                <TextInput className="w-full mx-1"
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
                        onPress={signUp}
                    >
                        <Text className="font-semibold text-center text-lg text-white">Sign Up</Text>
                    </TouchableHighlight>
                </>
            )}

            <View className="flex flex-row mt-5">
                <Text className="text-gray-500">Already have an account?</Text>
                <Link href={'page/login/[login]'} className="text-blue-500 ml-2">Sign In</Link>
            </View>

        </View>
    );
}