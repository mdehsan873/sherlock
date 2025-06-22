import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';

interface ActionButtonProps {
    icon?: any;  //Required() PNG
    message: string;
    onPress?: () => void;
}

const ActionButton = ({icon, message, onPress }: ActionButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} className="flex-row items-center justify-center self-center bg-primary px-4 py-2 rounded-xl">
            { icon && <Image
                source={icon}
                className="mr-2"
                style={{
                    width: 20,
                    height: 20
                }}
                resizeMode="contain"/>}
            <Text className="text-lg font-bold text-secondary">{message}</Text>
        </TouchableOpacity>
    );
};

export default ActionButton;