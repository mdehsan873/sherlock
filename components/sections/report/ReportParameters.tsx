import ReportParameterBox, {ReportParameterBoxProps} from "@/components/ReportParameterBox";
import {View} from "react-native";

interface ReportParametersProps {
    reportParameters: ReportParameterBoxProps[]
}

function ReportParameters({reportParameters}: ReportParametersProps) {
    return (
        <View className="flex-row flex-wrap justify-between">
            {reportParameters.map((parameters, index) => (
                <View key={index} className="w-full md:w-[45%]">
                    <ReportParameterBox label={parameters.label} value={parameters.value}/>
                </View>
            ))}
        </View>
    )
}

export default ReportParameters;