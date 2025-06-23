import {View, Text} from "react-native";

export interface ReportNotesBoxProps {
    note: string;
}

function ReportNotesBox({ note }: ReportNotesBoxProps) {
    return (
        <View className="flex-col items-start border-t-2 border-grayish_blue m-1 p-4">
            <Text className="text-base text-accent my-1">
                Notes
            </Text>
            <Text className="my-1">
                {note}
            </Text>
        </View>
    );
}

export default ReportNotesBox;
