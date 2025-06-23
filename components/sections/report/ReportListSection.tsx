import {View} from "react-native";
import ReportCard, {ReportCardProps} from "@/components/ReportCard";


interface ReportListSectionProps {
    reports: ReportCardProps[]
}


function ReportListSection({reports}: ReportListSectionProps) {
    return (
        <View className="flex-row flex-wrap justify-left">
            {reports.map((report, index) => (
                <View key={index} className="pr-2 w-full md:w-[45%]">
                    <ReportCard {...report} />
                </View>
            ))}
        </View>
    )
}

export default ReportListSection;