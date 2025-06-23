import React from "react";
import {SafeAreaView, ScrollView, View} from "react-native";
import HeadingSection from "@/components/sections/common/HeadingSection";
import ReportListSection from "@/components/sections/report/ReportListSection";
import {APP_NAME} from "@/constants/app";
import PageHeader from "@/components/sections/common/PageHeader";
import {useLocalSearchParams} from "expo-router";
import {ReportCardProps} from "@/components/ReportCard";
import {icons} from "@/constants/icons";

export default function CompletedVisits() {
    const { patientId } = useLocalSearchParams();
    // TODO Make this dynamic
    const completedVisits :ReportCardProps[] = [
        {
            reportId:"110",
            title:"Asad Rizvi",
            description:"Bhelupur Road, Varanasi",
            metadata:"Tue, 10:00AM 2025-06-12",
            icon:icons.home,
            reportType:"completed"
        },
        {
            reportId:"111",
            title:"Asad Rizvi",
            description:"Bhelupur Road, Varanasi",
            metadata:"Tue, 10:00AM 2025-06-12",
            icon:icons.home,
            reportType:"completed"
        },
        {
            reportId:"112",
            title:"Asad Rizvi",
            description:"Bhelupur Road, Varanasi",
            metadata:"Tue, 10:00AM 2025-06-12",
            icon:icons.home,
            reportType:"completed"
        },
    ]
    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40 }}
                className="flex-1"
            >
                <View className="mx-[5%] md:mx-[10%]">
                    <PageHeader title={APP_NAME}/>
                    <HeadingSection heading={"Completed Visits"}/>
                    <ReportListSection reports={completedVisits}/>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
}
