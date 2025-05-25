import React from 'react';
import {View, Text, Image} from 'react-native';
import {icons} from "@/constants/icons";

interface PopularCitiesBoxProps {
    name: string;
}

const PopularCitiesBox = ({ name }: PopularCitiesBoxProps) => {
    return (
        <View className="px-4 py-3 border border-solid border-light rounded-lg">
            <View className="flex-row items-center space-x-2">
                <Image
                    source={icons.location}
                    style={{ maxWidth: 20, maxHeight: 20 }}
                />
                <Text className="text-lg font-bold text-secondary">{name}</Text>
            </View>
        </View>
    );
};


export default PopularCitiesBox;
