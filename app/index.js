import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link, router } from 'expo-router';

export default function App() {
  return (
    <View>
        <Text>Hello World</Text>
        <Link href="/user/1">User 1</Link>
        <Pressable onPress={() => router.push('/user/2')}>
            <Text>User 2</Text>
        </Pressable>
    </View>
  );
}