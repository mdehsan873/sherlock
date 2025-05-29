import { View, Text } from 'react-native'
import BenefitBox from "@/components/BenefitBox";
import {BENEFITS} from "@/constants/benefits";
import {APP_NAME} from "@/constants/app";


function BenefitsSection() {
    return (
        <View className="mt-8 px-5">
            <Text className="text-xl font-bold text-secondary mb-6 font-lexend text-center">
                Benefits of {APP_NAME}
            </Text>
            <View className="flex-row flex-wrap gap-y-2 justify-center">
                {BENEFITS.map((benefit) => (
                    <View key={benefit.title} className="pr-2 w-full xs:w-1/2 sm:w-[45%] md:w-[30%] lg:w-[20%]">
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