import React from 'react';
import LoginPage from './page/login/index';
import { ScrollView } from 'react-native';
import Footer from './components/footer';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    return (
        <>
            <ScrollView className="flex-1">
                <LoginPage />
            </ScrollView>
            <Footer />
            <StatusBar style="auto" />
        </>
    );
}