import React from "react";
import {SafeAreaView, ScrollView} from "react-native";
import HeadingSection from "@/components/sections/common/HeadingSection";
import {APP_NAME} from "@/constants/app";
import Markdown from 'react-native-markdown-display'
import PageHeader from "@/components/sections/common/PageHeader";

interface PolicyPageProps {
    title: string;
    content: string;
}

function PolicyPage({ title, content }: PolicyPageProps) {
    return (
        <SafeAreaView className="flex-1 mx-[5%] md:mx-[10%]">
            <PageHeader title={APP_NAME}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}
                className="flex-1"
            >
                <HeadingSection heading={title}/>
                <Markdown>{content}</Markdown>
            </ScrollView>
        </SafeAreaView>
    );
}

export default PolicyPage;