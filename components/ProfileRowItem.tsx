import {Image, Text, TouchableOpacity, View} from "react-native";

export interface ProfileRowItemProps {
    icon: any;
    label: string;
    onPress: ()=> void;
}

function ProfileRowItem({ icon, label, onPress }: ProfileRowItemProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}>
            <View className="flex-row items-center py-2">
                <View className="rounded-lg p-1 mr-5">
                    <Image
                        source={icon}
                        style={{ maxWidth: 20, maxHeight: 20}}
                        resizeMode="contain"
                        className="p-4 rounded-lg"
                    />
                </View>
                <Text className="text-base font-medium text-secondary">{label}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProfileRowItem;