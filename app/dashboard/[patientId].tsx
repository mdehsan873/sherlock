import {useLocalSearchParams} from "expo-router";
import {SafeAreaView, ScrollView, View} from "react-native";
import React from "react";
import VisitOverview from "@/components/dashboard/VisitOverview";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSummary from "@/components/dashboard/DashboardSummary";

export default function PatientDashboard() {
    const { patientId } =  useLocalSearchParams();

    // Mock Data
    const username = "Ehsan Ansari"
    const patientName = "John Doe";
    const patientRelation = "Father";
    const visitOverview = {
        nextVisit: "2021-09-01, 11:00AM",
        lastVisit: "2021-08-01, 12:30PM",
    };

    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="mx-[10%] mt-10">
                <ScrollView>
                    <DashboardHeader user={username} patientName={patientName} patientRelation={patientRelation} />
                    <VisitOverview {...visitOverview} />
                    <DashboardSummary/>
                </ScrollView>
            </View>
        </SafeAreaView>
    )

}