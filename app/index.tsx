import React from "react";
import {SafeAreaView, ScrollView, View} from "react-native";
import PopularCitiesSection from "@/components/sections/publicPage/PopularCitiesSection";
import BenefitsSection from "@/components/sections/publicPage/BenefitsSection";
import FaqSection from "@/components/sections/publicPage/FaqSection";
import CheckupPlanSection from "@/components/sections/publicPage/CheckupPlanSection";
import GlanceSection from "@/components/sections/publicPage/GlanceSection";
import ContactUsSection from "@/components/sections/publicPage/ContactUsSection";
import TopBarSection from "@/components/sections/common/TopBarSection";
import HeroSection from "@/components/sections/publicPage/HeroSection";
import {APP_NAME} from "@/constants/app";
import ActionButton from "@/components/ActionButton";
import {router} from "expo-router";

export default function Index() {
  return (
      <SafeAreaView className="flex-1 mx-[5%] md:mx-[10%]">
          <TopBarSection title={APP_NAME} actionButton={<ActionButton message={"Login"} onPress={() => router.push("/login")}/> } />
          <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 40 }}
              className="flex-1"
          >
              <HeroSection/>
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
