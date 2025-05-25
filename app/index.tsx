import React from "react";
import {SafeAreaView, ScrollView} from "react-native";
import PopularCitiesSection from "@/components/sections/PopularCitiesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import FaqSection from "@/components/sections/FaqSection";

export default function Index() {
  return (
      <SafeAreaView className="flex-1 bg-white">
          <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 40 }}
          >
              <PopularCitiesSection/>
              <BenefitsSection/>
              <FaqSection/>

          </ScrollView>

      </SafeAreaView>
  );
}
