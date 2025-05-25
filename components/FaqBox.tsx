import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {icons} from "@/constants/icons";

interface FaqBoxProps {
    question: string;
    answer: string;
}

// TODO Add animation
const FaqBox = ({ question, answer }: FaqBoxProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <Pressable
        onPress={() => setIsOpen(!isOpen) }
        >
            <View className="p-4 border border-solid border-light rounded-lg h-full w-full">
                <View className="flex-row justify-between items-center px-2">
                    <Text className="text-base font-semibold text-secondary mb-2">{question}</Text>
                    <Image
                        source={icons.accordion}
                        style={{
                            maxWidth: 20,
                            maxHeight: 20,
                            transform: [{rotate : isOpen ? '180deg' : '0deg' }]
                        }}
                    />
                </View>

                { isOpen &&
                    <View>
                        <Text className="text-sm text-accent leading-normal px-2">{answer}</Text>
                    </View>
                }
            </View>
        </Pressable>
    );
};

export default FaqBox;