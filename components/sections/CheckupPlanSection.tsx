import {Text, View} from "react-native";
import {CARE_PLAN} from "@/constants/careplan";
import CheckupPlanBox from "@/components/CheckupPlanBox";

function CheckupPlanSection() {
    return (
        <View className="mt-8 px-5">
            <Text className="text-xl font-bold text-secondary mb-6 font-lexend">
                Care Plans For Every Condition
            </Text>
            <View>
                {
                    CARE_PLAN.map((carePlan) => {
                        return (
                            <View key={carePlan.planName} className="mb-2">
                                <CheckupPlanBox planName={carePlan.planName} tests={carePlan.tests}/>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default CheckupPlanSection;