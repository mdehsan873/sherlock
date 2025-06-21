import React from "react";
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useRouter} from "expo-router";
import {icons} from "@/constants/icons";

interface PageHeaderProps {
    title: string;
}

const PageHeader = ({title}: PageHeaderProps) => {
    const router = useRouter()
        return (
                <View className="flex-row items-center justify-center mt-5 relative mb-2 mx-[5%] md:mx-[10%]">
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="absolute left-0"
                    >
                    <Image
                        source={icons.back}
                        style={{ maxWidth: 20, maxHeight: 20 }}
                        resizeMode="contain"
                    />
                    </TouchableOpacity>
                    <Text className="text-xl font-bold font-lexend">
                        {title}
                    </Text>
                </View>
        )


};

export default PageHeader;