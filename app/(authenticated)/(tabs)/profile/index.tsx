import React from "react";
import {SafeAreaView, ScrollView} from "react-native";
import TopBarSection from "@/components/sections/common/TopBarSection";
import {APP_NAME} from "@/constants/app";
import ProfileHeaderSection from "@/components/sections/profile/ProfileHeaderSection";
import ProfileSubSection from "@/components/sections/profile/ProfileSubSection";
import {ProfileRowItemProps} from "@/components/ProfileRowItem";
import {icons} from "@/constants/icons";
import ActionButton from "@/components/ActionButton";

export default function Index() {

    const accountRows: ProfileRowItemProps[] = [
        {
            label: "Edit Profile",
            icon: icons.profile,
            onPress: () => {
            }
        },
    ];

    const supportRows: ProfileRowItemProps[] = [
        {
            label: "Help & Support",
            icon: icons.support,
            onPress: () => {
            }
        },
        {
            label: "Terms of Service",
            icon: icons.tnc,
            onPress: () => {
            }
        },
        {
            label: "Privacy Policy",
            icon: icons.privacyPolicy,
            onPress: () => {
            }
        },
    ];
    return (
        <SafeAreaView className="flex-1 mx-[5%] md:mx-[10%]">
            <TopBarSection title={APP_NAME}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40 }}
                className="flex-1"
            >
                <ProfileHeaderSection url="https://image.com/image" phoneNumber="9151453233" name="Mohammad Asad"/>
                <ProfileSubSection title={"Account"} rows={accountRows}/>
                <ProfileSubSection title={"Support"} rows={supportRows}/>
                <ActionButton message={"Log Out"}/>

            </ScrollView>

        </SafeAreaView>
    );
}