import {FlatList, Image, Text, View} from 'react-native'
import {APP_NAME} from "@/constants/app";
import {GLANCE} from "@/constants/glance";


function GlanceSection() {
    return (
        <View className="mt-8 px-5">
            <Text className="text-xl font-bold text-secondary mb-6 font-lexend">
                How {APP_NAME} Helps You
            </Text>
            <FlatList
                horizontal
                data={GLANCE}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View className="m-1"/>}
                renderItem={({item}) => (
                    <View className="flex flex-col items-center"
                          style={{ width: 200 }}>
                        <Image
                            source={item.icon}
                            className="mb-4"
                            resizeMode="contain"
                            style={{ width: 200, height: 200}}
                        />
                        <Text
                            className="text-sm font-semibold font-lexend text-secondary px-2 pb-2"
                        >{item.title}</Text>
                        <Text
                            className="text-sm color-accent text-secondary px-2 pb-2"
                        >{item.description}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default GlanceSection;
