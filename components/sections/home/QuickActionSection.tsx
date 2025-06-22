import {View} from "react-native";
import HeadingSection from "@/components/sections/common/HeadingSection";
import React from "react";
import ActionButton from "@/components/ActionButton";

function QuickActionSection(){
    return (
        <View>
            <HeadingSection heading={"Quick Actions"}/>
            <View className="flex flex-row flex-wrap gap-y-2 gap-x-2">
                <ActionButton message={"Add Dependent"}/>
            </View>
        </View>
    )
}

export default QuickActionSection;