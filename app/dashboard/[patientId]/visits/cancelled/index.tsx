import React from "react";
import {SafeAreaView, ScrollView, View} from "react-native";
import HeadingSection from "@/components/sections/common/HeadingSection";
import {APP_NAME} from "@/constants/app";
import PageHeader from "@/components/sections/common/PageHeader";
import {useLocalSearchParams} from "expo-router";
import ReportListSection from "@/components/sections/report/ReportListSection";
import {icons} from "@/constants/icons";
import {ReportCardProps} from "@/components/ReportCard";

export default function CancelledVisits() {
    // TODO Make this dynamic
    const cancelledVisits:ReportCardProps[] = [
        {
            reportId:"110",
            title:"Asad Rizvi",
            description:"Bhelupur Road, Varanasi",
            metadata:"Tue, 10:00AM 2025-06-12",
            icon:icons.home,
            reportType:"cancelled"
        },
        {
            reportId:"111",
            title:"Asad Rizvi",
            description:"Bhelupur Road, Varanasi",
            metadata:"Tue, 10:00AM 2025-06-12",
            icon:icons.home,
            reportType:"cancelled"
        },
        {
            reportId:"112",
            title:"Asad Rizvi",
            description:"Bhelupur Road, Varanasi",
            metadata:"Tue, 10:00AM 2025-06-12",
            icon:icons.home,
            reportType:"cancelled"
        },
    ]
    const { patientId } = useLocalSearchParams();

    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40 }}
                className="flex-1"
            >
                <View className="mx-[5%] md:mx-[10%]">
                    <PageHeader title={APP_NAME}/>
                    <HeadingSection heading={"Cancelled Visits"}/>
                    <ReportListSection reports={ cancelledVisits } />
                </View>

            </ScrollView>

        </SafeAreaView>
    );
}
