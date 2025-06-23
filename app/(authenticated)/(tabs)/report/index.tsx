import React from "react";
import {SafeAreaView, ScrollView, View} from "react-native";
import TopBarSection from "@/components/sections/common/TopBarSection";
import HeadingSection from "@/components/sections/common/HeadingSection";
import ReportListSection from "@/components/sections/report/ReportListSection";
import {APP_NAME} from "@/constants/app";
import {ReportCardProps} from "@/components/ReportCard";
import {icons} from "@/constants/icons";

export default function Index() {
    // TODO make this Dynamic
    const visits :ReportCardProps[] = [
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
            reportType:"completed"
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
                    <ReportListSection reports={visits} />
                </View>

            </ScrollView>

        </SafeAreaView>
    );
}
