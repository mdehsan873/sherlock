import React from "react";
import {SafeAreaView, ScrollView, View} from "react-native";
import PopularCitiesSection from "@/components/sections/PopularCitiesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import FaqSection from "@/components/sections/FaqSection";
import CheckupPlanSection from "@/components/sections/CheckupPlanSection";
import GlanceSection from "@/components/sections/GlanceSection";
import ContactUsSection from "@/components/sections/ContactUsSection";
import TopBarSection from "@/components/sections/TopBarSection";
import HeroSection from "@/components/sections/HeroSection";
import {APP_NAME} from "@/constants/app";
import ActionButton from "@/components/ActionButton";
import {router} from "expo-router";

export default function Index() {
  return (
      <SafeAreaView className="flex-1 bg-background">
          <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 40 }}
              className="flex-1"
          >
              <View className="mx-[5%] md:mx-[10%]">
                  <TopBarSection title={APP_NAME} actionButton={<ActionButton message={"Login"} onPress={() => router.push("/login")}/> } />
                  <HeroSection/>
                  <GlanceSection/>
                  <PopularCitiesSection/>
                  <BenefitsSection/>
                  <CheckupPlanSection/>
                  <FaqSection/>
                  <ContactUsSection/>
              </View>
          </ScrollView>

      </SafeAreaView>
  );
}
