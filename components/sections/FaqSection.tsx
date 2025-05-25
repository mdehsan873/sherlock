import {Text, View} from "react-native";
import {FAQ} from "@/constants/faq";
import FaqBox from "@/components/FaqBox";

function FaqSection() {
    return (
        <View className="mt-8 px-5">
            <Text className="text-xl font-bold text-secondary mb-6 font-lexend">
                Frequently Asked Questions
            </Text>
            <View>
                {FAQ.map((faq) => (
                    <View key={faq.question} className="mb-2">
                       <FaqBox question={faq.question} answer={faq.answer}/>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default FaqSection;