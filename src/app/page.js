import {
  BeginLearning,
  Featured,
  HelpSection,
  Hero,
  ManageLearning,
  Oppertunities,
  WhyChoose,
} from "@/components/sections";
import React from "react";

export default function page() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <ManageLearning />
      <Oppertunities />
      <Featured />
      <HelpSection />
      <BeginLearning />
    </>
  );
}
