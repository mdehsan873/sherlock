import {SafeAreaView, View} from "react-native";
import TopBarSection from "@/components/sections/TopBarSection";
import {APP_NAME} from "@/constants/app";
import HeadingSection from "@/components/sections/HeadingSection";
import React from "react";
import LoginSection from "@/components/sections/login/LoginSection";

export default function LoginPage(){
    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="mx-[5%] md:mx-[10%]">
                <TopBarSection title={APP_NAME}/>
                <HeadingSection heading={"Enter Your Mobile Number"}/>
                <LoginSection/>
            </View>

        </SafeAreaView>
    )
}