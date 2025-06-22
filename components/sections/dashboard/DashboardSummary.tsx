import React from "react";
import {Text, View} from 'react-native';
import BenefitBox from "@/components/BenefitBox";
import {router} from "expo-router";

interface DashboardSummaryProps {
    patientId: string;
}

const DashboardSummary = ({ patientId }: DashboardSummaryProps) => {

    // TODO Get Dynamic data
    const summaryData = [
        {
            title: "Completed Visits",
            description: "22",
            onPress: () => {
                router.push(`/dashboard/${patientId}/visits/completed`)
            }
        },
        {
            title: "Upcoming Visits",
            description: "3",
            onPress: () => {
                console.log("Upcoming visits clicked")
                router.push(`/dashboard/${patientId}/visits/scheduled`)
            }
        },
        {
            title: "Cancelled Visits",
            description: "1",
            onPress: () => {
                console.log("Cancelled visits clicked")
                router.push(`/dashboard/${patientId}/visits/cancelled`)
            }
        },
    ];


    return (
        <View className="my-2.5 flex-col">
            <Text className="text-lg font-bold mb-2">
                Summary
            </Text>
            <View className="flex-row flex-wrap gap-y-2">

                {summaryData.map((summary) => (
                    <View key={summary.title} className="pr-2 w-full xs:w-1/2 sm:w-[45%] md:w-[30%] lg:w-[20%]">
                        <BenefitBox
                            key = {summary.title}
                            title = {summary.title}
                            description = {summary.description}
                            onPress={summary.onPress}
                        />
                    </View>
                ))}
            </View>
        </View>
    );
};

export default DashboardSummary;