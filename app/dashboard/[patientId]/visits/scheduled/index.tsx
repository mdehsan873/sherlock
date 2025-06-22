import React from "react";
import {SafeAreaView, ScrollView, View} from "react-native";
import HeadingSection from "@/components/sections/common/HeadingSection";
import ReportsSection from "@/components/sections/report/ReportsSection";
import {APP_NAME} from "@/constants/app";
import PageHeader from "@/components/sections/common/PageHeader";
import {useLocalSearchParams} from "expo-router";

export default function ScheduledVisits() {
    const { patientId } = useLocalSearchParams();
    console.log(patientId)
    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40 }}
                className="flex-1"
            >
                <View className="mx-[5%] md:mx-[10%]">
                    <PageHeader title={APP_NAME}/>
                    <HeadingSection heading={"Upcoming Visits"}/>
                    {/* TODO Make Report section non click able*/}
                    <ReportsSection/>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
}
