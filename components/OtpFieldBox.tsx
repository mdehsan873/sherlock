import {TextInput, View} from "react-native";

interface OtpFieldBoxProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    maxLength: number;
    keyboardType?: "default" | "numeric" | "phone-pad" ;
    editable: boolean;
}

export default function OtpFieldBox({placeholder, value, onChangeText, maxLength, keyboardType= "default", editable }: OtpFieldBoxProps) {
    return (
       <View className="bg-light rounded-lg mb-4 p-3">
           <TextInput
               className="text-lg text-secondary outline-none"
               placeholder={placeholder}
               value={value}
               onChangeText={onChangeText}
               keyboardType={keyboardType}
               maxLength={maxLength}
               editable={editable}
           />
       </View>
    );
}
