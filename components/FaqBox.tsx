import React from 'react';
import {Text, View} from 'react-native';

interface FaqBoxProps {
    question: string;
    answer: string;
}

// TODO Make this Accordian
const FaqBox = ({ question, answer }: FaqBoxProps) => {
    return (
        <View className="p-4 border border-solid border-light rounded-lg h-full w-full">
            <Text className="text-base font-semibold text-secondary mb-3">{question}</Text>
            <Text className="text-sm text-accent leading-normal">{answer}</Text>
        </View>
    );
};

export default FaqBox;