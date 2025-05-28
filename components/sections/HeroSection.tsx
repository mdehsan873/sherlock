import {Text, View} from "react-native";
import ActionButton from "@/components/ActionButton";

// TODO Add image
function HeroSection() {
    return (
        <View className="flex flex-col items-center">
            <Text className="text-4xl font-extrabold text-center mb-3 px-2">
                Peace of mind for your love one, even when you're far away.
            </Text>
            <Text className="text-sm text-center px-5">
                Care4U provides trusted, flexible care for your loved ones, with real-time updates via WhatsApp.
            </Text>
            <ActionButton message={"Register Now!"}/>
        </View>
    )

}
export default HeroSection