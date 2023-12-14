import React from 'react';
import RegisterPage from './index';
import { ScrollView } from 'react-native';
import Footer from '../../components/footer';

export default function RegisterIndex() {
    return (
        <><ScrollView className="flex-1">
            <RegisterPage />
        </ScrollView><Footer /></>
    );
}