import React from "react";
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import TopBarSection from "@/components/sections/TopBarSection";
import HeroSection from "@/components/sections/HeroSection";
import GlanceSection from "@/components/sections/GlanceSection";
import PopularCitiesSection from "@/components/sections/PopularCitiesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import CheckupPlanSection from "@/components/sections/CheckupPlanSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactUsSection from "@/components/sections/ContactUsSection";
import PatientsInfoSection from "@/components/sections/PatientsInfoSection";
import HeadingSection from "@/components/sections/HeadingSection";
import {APP_NAME} from "@/constants/app";

// TODO Use username
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
                    <HeadingSection heading={"Welcome, Asad"}/>
                    <PatientsInfoSection/>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
}
