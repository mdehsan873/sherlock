import { View, Text } from 'react-native'
import { POPULAR_CITIES_WE_SERVE } from "@/constants/cities";
import PopularCitiesBox from "@/components/PopularCitiesBox";

function PopularCitiesSection() {
    return (
        <View className="mt-8 px-5">
            <Text className="text-xl font-bold text-secondary mb-6 font-lexend text-center">
                Popular cities we serve
            </Text>
            <View className="flex-row flex-wrap items-center justify-center gap-y-2">
                {POPULAR_CITIES_WE_SERVE.map((city) => (
                    <View key={city} className="pr-2 w-full xs:w-1/2 sm:w-[45%] md:w-[30%] lg:w-[20%]">
                        <PopularCitiesBox name={city} />
                    </View>
                ))}
            </View>
        </View>
    )
}

export default PopularCitiesSection;