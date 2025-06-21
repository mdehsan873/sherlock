import {Image, Text, View} from "react-native";
import React from "react";
import {images} from "@/constants/images";

interface TopBarSectionProps {
    title: string;
}

// TODO Update app logo
function TopBarSection({ title }: TopBarSectionProps) {
    return (
        <View className="my-5 flex flex-row items-center justify-center relative">
            <Image
                source={images.message}
                style={{ maxWidth: 45, maxHeight: 45 }}
                resizeMode="contain"
                className="absolute left-0"
            />
            <Text className="text-xl font-bold">
                {title}
            </Text>
        </View>
    )
}

export default TopBarSection;
