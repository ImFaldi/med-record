import React from 'react';
import LoginPage from './page/loginPage';
import DashMenu from './page/dashboard/[dashboard]';
import { ScrollView } from 'react-native';
import Footer from './components/footer';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    return (
        <>
            <ScrollView className="flex-1">
                <DashMenu />
            </ScrollView>
            <Footer />
            <StatusBar style="auto" />
        </>
    );
}