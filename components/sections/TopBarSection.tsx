import {View, Text} from "react-native";
import {APP_NAME} from "@/constants/app";

function TopBarSection() {
    return (
        <View className="mt-5 flex flex-row items-center justify-center">
            <Text className="text-xl font-bold mb-5">
                {APP_NAME}
            </Text>
        </View>
    )
}

export default TopBarSection;
