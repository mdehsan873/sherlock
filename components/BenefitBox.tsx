import React from "react";
import {View, Text, Image} from 'react-native';

interface BenefitBoxProps {
    icon: any;  //Required() PNG
    title: string;
    description: string;
}

const BenefitBox = ({icon, title, description}: BenefitBoxProps) => {
    return (
        <View className="p-4 border border-solid border-light rounded-lg h-full w-full">
            <Image
                source={icon}
                style={{ maxWidth: 20, maxHeight: 20 }}
                className="mb-2"
                resizeMode="contain"/>
            <Text className="text-lg font-bold text-secondary">{title}</Text>
            <Text className="text-sm text-accent">{description}</Text>
        </View>
    );
};

export default BenefitBox;