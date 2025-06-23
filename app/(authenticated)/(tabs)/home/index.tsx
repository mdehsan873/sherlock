import React from "react";
import {SafeAreaView, ScrollView, View} from "react-native";
import TopBarSection from "@/components/sections/common/TopBarSection";
import PatientsInfoSection from "@/components/sections/home/PatientsInfoSection";
import HeadingSection from "@/components/sections/common/HeadingSection";
import {APP_NAME} from "@/constants/app";
import QuickActionSection from "@/components/sections/home/QuickActionSection";

// TODO Use username
export default function Index() {
    return (
        <SafeAreaView className="flex-1 mx-[5%] md:mx-[10%]">
            <TopBarSection title={APP_NAME}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40 }}
                className="flex-1"
            >
                <HeadingSection heading={"Welcome, Asad"}/>
                <PatientsInfoSection/>
                <QuickActionSection/>

            </ScrollView>

        </SafeAreaView>
    );
}
