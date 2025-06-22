import {TextInput, View, Text} from "react-native";

interface PhoneNumberFieldBoxProps {
    value: string;
    onChangeText: (text: string) => void;
    maxLength: number;
    keyboardType?: "default" | "numeric" | "phone-pad" ;
}

export default function PhoneNumberFieldBox({value, onChangeText, maxLength, keyboardType= "default" }: PhoneNumberFieldBoxProps) {
    return (
       <View className="flex-row items-center bg-light rounded-lg mb-4 p-3">
           <Text className="text-lg mr-2">+91</Text>
           <TextInput
               className="flex-1 text-lg text-secondary outline-none"
               value={value}
               onChangeText={onChangeText}
               keyboardType={keyboardType}
               maxLength={maxLength}
           />
       </View>
    );
}
