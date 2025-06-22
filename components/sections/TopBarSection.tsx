import {Image, Text, View} from "react-native";
import React, {ReactNode} from "react";
import {images} from "@/constants/images";

interface TopBarSectionProps {
    title: string;
    actionButton?: ReactNode;
}

function TopBarSection({ title, actionButton }: TopBarSectionProps) {
    return (
        <View className="my-5 flex flex-row items-center justify-center relative">
            <Image
                source={images.appLogo}
                style={{ maxWidth: 45, maxHeight: 45 }}
                resizeMode="contain"
                className="absolute left-0"
            />
            <Text className="text-xl font-bold">
                {title}
            </Text>
            {actionButton && (
                <View className="absolute right-0">
                    {actionButton}
                </View>
            )}
        </View>
    )
}

export default TopBarSection;
