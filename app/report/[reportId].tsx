import {router, useLocalSearchParams} from "expo-router";
import {SafeAreaView, ScrollView, View} from "react-native";
import PageHeader from "@/components/common/PageHeader";
import React from "react";

// TODO make this dynamic
export default function ReportDashboard() {
    const { reportId } =  useLocalSearchParams();

    return (
        <SafeAreaView className="flex-1 bg-background">
            <PageHeader title={"Checkup Report"}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}
                className="flex-1"
            >
                <View className="mx-[5%]">
                    This is a report {reportId}
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}