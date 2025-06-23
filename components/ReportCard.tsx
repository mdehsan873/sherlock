import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {router} from "expo-router";

type ReportType = "completed" | "scheduled" | "cancelled";

export interface ReportCardProps {
    reportId: string;
    title: String;
    description: String;
    icon?: any;
    metadata?: String;
    reportType: ReportType;
}

const ReportCard = ({reportId, title, description, icon, metadata, reportType}: ReportCardProps) => {
    const handlePress = () => {
        if(reportType === "completed"){
            router.push(`/report/${reportId}/`)
        } else if (reportType === "scheduled"){
            Alert.alert("Upcoming Visit", "This report is not yet generated");
        } else if (reportType === "cancelled"){
            Alert.alert("Cancelled Visit", "This visit was cancelled, No report available");
        }

    }

    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.8}
        >
            <View className="flex-row items-center p-2 my-2 border border-solid rounded-lg border-grayish_blue">
                <View className="flex-col items-center">
                    {icon && <Image source={icon} style={{ maxWidth: 50, maxHeight: 50 }} className="mr-2 rounded-lg bg-icon_background" resizeMode="contain"/>}
                </View>
                <View className="flex-col mx-2 flex-1 justify-center">
                    <View>
                        <Text className="text-base font-semibold text-secondary font-lexend">{title}</Text>
                        <Text className="text-sm text-accent">{description}</Text>
                        <Text className="text-xs text-accent text-wrap">{metadata}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    );
};

export default ReportCard;