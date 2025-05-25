import { View, Text } from 'react-native'
import BenefitBox from "@/components/BenefitBox";
import {BENEFITS} from "@/constants/benefits";
import {APP_NAME} from "@/constants/app";


function BenefitsSection() {
    return (
        <View className="mt-8 px-5">
            <Text className="text-xl font-bold text-secondary mb-6 font-lexend">
                Benefits of {APP_NAME}
            </Text>
            <View className="flex-row flex-wrap gap-y-2">
                {BENEFITS.map((benefit) => (
                    <View key={benefit.title} className="w-1/2 pr-2">
                        <BenefitBox
                            key = {benefit.title}
                            icon= {benefit.icon}
                            title = {benefit.title}
                            description = {benefit.description}
                        />
                    </View>
                ))}
            </View>
        </View>
    )
}

export default BenefitsSection;