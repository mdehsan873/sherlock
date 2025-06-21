import {Text, View, Image, TouchableOpacity} from "react-native";
import {router} from "expo-router";

interface PatientInfoBoxProps {
    patientId: string;
    image?: any;
    recentVisitDateTime: string;
    name: string;
    summary: string;
}


const PatientInfoBox = ({patientId, image, recentVisitDateTime, name, summary}: PatientInfoBoxProps) => {
    const handlePress = () => {
        router.push(`/dashboard/${patientId}/`)
    }
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={handlePress}
        >
            <View className="flex-row border border-solid items-center border-grayish_blue rounded-lg p-4 my-2">
                <View className="flex-1">
                    <Text className="text-base text-accent mb-1">{name}: Current Health Status</Text>
                    <Text className="text-lg font-bold">{summary}</Text>
                    <Text className="text-sm text-accent">Last Visit: {recentVisitDateTime}</Text>
                </View>
                {image &&
                    (
                        <Image
                            source={image}
                            className="ml-4 rounded-lg"
                            style={{
                                maxWidth: 80,
                                maxHeight: 80
                            }}
                            resizeMode="cover"
                        />
                    )
                }
            </View>
        </TouchableOpacity>
    );
};

export default PatientInfoBox;