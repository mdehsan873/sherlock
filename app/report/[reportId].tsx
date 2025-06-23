import {router, useLocalSearchParams} from "expo-router";
import {SafeAreaView, ScrollView, View} from "react-native";
import PageHeader from "@/components/sections/common/PageHeader";
import React from "react";
import HeadingSection from "@/components/sections/common/HeadingSection";
import {icons} from "@/constants/icons";
import VisitCard from "@/components/VisitCard";
import {ReportParameterBoxProps} from "@/components/ReportParameterBox";
import ReportParameters from "@/components/sections/report/ReportParameters";
import ReportNotesBox from "@/components/ReportNotesBox";
import ActionButton from "@/components/ActionButton";
import ReportImage from "@/components/ReportImage";
import Divider from "@/components/sections/common/Divider";

// TODO make this dynamic
export default function ReportDashboard() {
    const { reportId } =  useLocalSearchParams();

    const reportParameters: ReportParameterBoxProps[] = [
        {
            label:"Blood Pressue",
            value:"120/80 mmHg",
        },
        {
            label: "Sugar Level",
            value: "110 mg/dL"
        },
        {
            label:"Blood Pressue",
            value:"120/80 mmHg",
        },
        {
            label: "Sugar Level",
            value: "110 mg/dL"
        }
    ]

    return (
        <SafeAreaView className="flex-1 mx-[5%] md:mx-[10%]">
                <PageHeader title={"Report"}/>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 10 }}
                    className="flex-1"
                >
                    <HeadingSection heading={"Checkup Report"}/>
                    <VisitCard icon={icons.calendar} title={"Checkup Visit"} description={"October 26, 2025, 2:30 PM"}/>
                    <ReportParameters reportParameters={reportParameters}/>
                    <ReportNotesBox note={"Mom is doing well. She took her medicine and had a light lunch"}/>
                    <ActionButton message={"Download Test Report"}/>
                    <ReportImage url={"https://image.com/image"}/>
                    <Divider/>
                </ScrollView>
        </SafeAreaView>
    )

}