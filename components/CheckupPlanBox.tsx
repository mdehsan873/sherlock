import React from 'react';
import {Image, Text, View} from 'react-native';
import {icons} from "@/constants/icons";

interface CheckupPlanBoxProps {
    planName: string;
    tests: string[]
}

const CheckupPlanBox = ({ planName, tests }: CheckupPlanBoxProps) => {
    return (
            <View className="p-4 border border-solid border-light rounded-lg h-full md:flex md:items-center">
                <View className="flex-col px-2 h-full">
                    <Text className="text-base font-semibold text-secondary mb-2">{planName}</Text>
                    {tests.map((test, index) => (
                        <View key={index} className="flex-row items-center mb-2">
                            <Image
                                source={icons.tick}
                                style={{ maxWidth: 20, maxHeight: 20 }}
                            />
                            <Text key={index} className="text-sm text-accent leading-normal px-2 text-wrap">{test}</Text>
                        </View>
                    ))}
                </View>
            </View>
    );
};

export default CheckupPlanBox;