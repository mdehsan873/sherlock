import {Text, View} from "react-native";

interface HeadingSectionProps {
    heading: string;
}


function HeadingSection({ heading }: HeadingSectionProps){
    return (
        <View className="my-3 flex flex-row items-center">
            <Text className="text-2xl font-bold">
                {heading}
            </Text>
        </View>
    )
}

export default HeadingSection