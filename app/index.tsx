import React from "react";
import {SafeAreaView, ScrollView} from "react-native";
import PopularCitiesSection from "@/components/sections/PopularCitiesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import FaqSection from "@/components/sections/FaqSection";
import CheckupPlanSection from "@/components/sections/CheckupPlanSection";
import GlanceSection from "@/components/sections/GlanceSection";
import ContactUsSection from "@/components/sections/ContactUsSection";
import {APP_NAME} from "@/constants/app";
import TopBarSection from "@/components/sections/TopBarSection";

export default function Index() {
  return (
      <SafeAreaView className="flex-1 bg-white">
          <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 40 }}
          >
              <TopBarSection/>
              <GlanceSection/>
              <PopularCitiesSection/>
              <BenefitsSection/>
              <CheckupPlanSection/>
              <FaqSection/>
              <ContactUsSection/>

          </ScrollView>

      </SafeAreaView>
  );
}
