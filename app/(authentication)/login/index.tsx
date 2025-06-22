import {SafeAreaView, ScrollView, View} from "react-native";
import TopBarSection from "@/components/sections/common/TopBarSection";
import {APP_NAME} from "@/constants/app";
import HeadingSection from "@/components/sections/common/HeadingSection";
import React from "react";
import LoginSection from "@/components/sections/login/LoginSection";

export default function LoginPage(){
    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}
                className="flex-1"
            >
                <View className="mx-[5%] md:mx-[10%]">
                    <TopBarSection title={APP_NAME}/>
                    <HeadingSection heading={"Enter Your Mobile Number"}/>
                    <LoginSection/>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}