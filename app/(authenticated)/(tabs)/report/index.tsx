import React from "react";
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import TopBarSection from "@/components/sections/common/TopBarSection";
import HeadingSection from "@/components/sections/common/HeadingSection";
import PatientsInfoSection from "@/components/sections/home/PatientsInfoSection";
import ReportsSection from "@/components/sections/report/ReportsSection";
import {APP_NAME} from "@/constants/app";

export default function Index() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40 }}
                className="flex-1"
            >
                <View className="mx-[5%] md:mx-[10%]">
                    <TopBarSection title={APP_NAME}/>
                    <HeadingSection heading={"Reports"}/>
                    <ReportsSection/>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
}
