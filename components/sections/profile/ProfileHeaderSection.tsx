import {Image, Text, View} from "react-native";
import {images} from "@/constants/images";


interface ProfileHeaderSectionProps {
    url: string;
    name?: string;
    phoneNumber: string;
}

// TODO make this dynamic
function ProfileHeaderSection({ url, name, phoneNumber }: ProfileHeaderSectionProps) {
    return (
        <View className="items-center mt-4">
         <Image
             className="rounded-full overflow-hidden"
            source={images.heroBackground}
            resizeMode="cover"
            style={{ width: 150, height: 150 }}
         />
            { name &&
                (<Text className="text-lg font-bold text-secondary">{name}</Text>)
            }
            <Text className="text-sm text-accent">{phoneNumber}</Text>
        </View>
    );
}
export default ProfileHeaderSection;