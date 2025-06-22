import {Text, View} from "react-native";
import {CARE_PLAN} from "@/constants/careplan";
import CheckupPlanBox from "@/components/CheckupPlanBox";

function CheckupPlanSection() {
    return (
        <View className="mt-8 px-5">
            <Text className="text-xl font-bold text-secondary mb-6 font-lexend text-center">
                Care Plans For Every Condition
            </Text>
            <View className="flex-row gap-y-2 flex-wrap justify-center">
                {
                    CARE_PLAN.map((carePlan) => {
                        return (
                            <View key={carePlan.planName} className="pr-2 w-full sm:w-[45%] md:w-[30%] lg:w-[20%]">
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