import {router, useLocalSearchParams} from "expo-router";
import {SafeAreaView, ScrollView, View} from "react-native";
import PageHeader from "@/components/sections/common/PageHeader";
import React from "react";

// TODO make this dynamic
export default function ReportDashboard() {
    const { reportId } =  useLocalSearchParams();

    return (
        <SafeAreaView className="flex-1 mx-[5%] md:mx-[10%]">
                <PageHeader title={"Checkup Report"}/>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 10 }}
                    className="flex-1"
                >
                    This is a report {reportId}
                </ScrollView>
        </SafeAreaView>
    )

}