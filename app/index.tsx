import React from "react";
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import PopularCitiesSection from "@/components/sections/PopularCitiesSection";

export default function Index() {
  return (
      <SafeAreaView className="flex-1 bg-white">
          <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 40 }}
          >
              <PopularCitiesSection/>

          </ScrollView>

      </SafeAreaView>
  );
}
