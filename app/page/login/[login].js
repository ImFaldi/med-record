import React from 'react';
import LoginPage from './index';
import { ScrollView } from 'react-native';
import Footer from '../../components/footer';

export default function LoginIndex() {
    return (
        <><ScrollView className="flex-1">
            <LoginPage />
        </ScrollView><Footer /></>
    );
}