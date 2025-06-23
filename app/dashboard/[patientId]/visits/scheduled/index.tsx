import React from "react";
import {SafeAreaView, ScrollView, View} from "react-native";
import HeadingSection from "@/components/sections/common/HeadingSection";
import ReportListSection from "@/components/sections/report/ReportListSection";
import {APP_NAME} from "@/constants/app";
import PageHeader from "@/components/sections/common/PageHeader";
import {useLocalSearchParams} from "expo-router";
import {ReportCardProps} from "@/components/ReportCard";
import {icons} from "@/constants/icons";

export default function ScheduledVisits() {
    const { patientId } = useLocalSearchParams();
    // TODO Make this dynamic
    const scheduledVisits :ReportCardProps[] = [
        {
            reportId:"110",
            title:"Asad Rizvi",
            description:"Bhelupur Road, Varanasi",
            metadata:"Tue, 10:00AM 2025-06-12",
            icon:icons.home,
            reportType:"scheduled"
        },
        {
            reportId:"111",
            title:"Asad Rizvi",
            description:"Bhelupur Road, Varanasi",
            metadata:"Tue, 10:00AM 2025-06-12",
            icon:icons.home,
            reportType:"scheduled"
        },
        {
            reportId:"112",
            title:"Asad Rizvi",
            description:"Bhelupur Road, Varanasi",
            metadata:"Tue, 10:00AM 2025-06-12",
            icon:icons.home,
            reportType:"scheduled"
        },
    ]
    return (
        <SafeAreaView className="flex-1 mx-[5%] md:mx-[10%]">
            <PageHeader title={APP_NAME}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40 }}
                className="flex-1"
            >
                <HeadingSection heading={"Upcoming Visits"}/>
                <ReportListSection reports={scheduledVisits}/>

            </ScrollView>

        </SafeAreaView>
    );
}
