import {View, Text} from "react-native";

export interface ReportParameterBoxProps {
    label: string;
    value: string;
}

export default function ReportParameterBox({ label, value }: ReportParameterBoxProps) {
    return (
      <View className="flex-row justify-between items-center border-t-2 border-grayish_blue m-1 p-4">
          <Text className="text-base text-accent">
              {label}
          </Text>
          <Text>
              {value}
          </Text>
      </View>
    );
}
