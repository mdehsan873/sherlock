import {Image, Text, View} from 'react-native';

interface VisitCardProps {
    title: String;
    description: String;
    icon?: any;
    metadata?: String;
}

const VisitCard = ({title, description, icon, metadata}: VisitCardProps) => {
    return (
        <View className="flex-row items-center p-2 my-2">
            <View className="flex-col items-center rounded-lg mx-2">
                {icon && <Image source={icon} style={{ width: 25, height: 25 }} resizeMode="contain"/>}
            </View>
            <View className="flex-col mx-2 flex-1 justify-center">
                <View>
                    <Text className="text-base font-semibold text-secondary font-lexend">{title}</Text>
                    <Text className="text-sm text-accent">{description}</Text>
                    <Text className="text-xs text-accent text-wrap">{metadata}</Text>
                </View>
            </View>
        </View>
    );
};

export default VisitCard;