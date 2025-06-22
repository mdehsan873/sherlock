import { ImageBackground, Text, View } from "react-native";
import ActionButton from "@/components/ActionButton";
import { images } from "@/constants/images";
import {router} from "expo-router";
import React from "react";

function HeroSection() {
    return (
        <View className="flex items-center w-full">
            <ImageBackground
                source={images.heroBackground}
                resizeMode="cover"
                className="mx-4 my-4 rounded-lg overflow-hidden"
                style={{ width: 'auto', height: 400, maxWidth: 1100 }}
            >
                <View className="flex flex-col items-center justify-end p-4 h-full bg-black/15">
                    <Text className="text-4xl font-extrabold text-center mb-3 px-2 text-white">
                        Peace of mind for your love one, even when you're far away.
                    </Text>
                    <Text className="text-sm text-center px-5 mb-4 text-white">
                        Care4U provides trusted, flexible care for your loved ones, with real-time updates via WhatsApp.
                    </Text>
                    <ActionButton message={"Register Now!"}  onPress={() => router.push("/login")} />
                </View>
            </ImageBackground>
        </View>


    )

}
export default HeroSection