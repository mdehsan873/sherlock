import ProfileRowItem, {ProfileRowItemProps} from "@/components/ProfileRowItem";
import {View} from "react-native";
import HeadingSection from "@/components/sections/common/HeadingSection";
import React from "react";

interface ProfileSubSectionProps {
    title: string;
    rows: ProfileRowItemProps[];
}

function ProfileSubSection({title, rows}: ProfileSubSectionProps) {
    return (
        <View className="my-2">
            <HeadingSection heading={title}/>
            {rows.map((row, index) => (
                <ProfileRowItem key={index} {...row} />
            ))}
        </View>
    );
}

export default ProfileSubSection;