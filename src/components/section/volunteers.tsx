import { SectionTitle } from "@/components/section-title.tsx";
import { SectionHeading } from "@/components/section-heading.tsx";
import React from "react";
import { useTranslations } from "next-intl";
import { BlurIn } from "@/components/magicui/blur-in.tsx";

const volunteers = [
  "Kane",
  "迷你馬",
  "餅乾",
  "Kuro Huang",
  "BR",
  "如如",
  "Kevin",
  "Steven",
  "BR",
  "Alan",
  "Eric Ruan",
  "Homer",
  "Phoebe",
  "HSUAN",
  "Jill",
  "Ella",
  "Jason Hsu",
  "Nola",
  "Amy Lee",
  "Tim",
  "BR",
  "Adam",
  "Rosa",
  "Rich",
  "Peggy",
  "Jeng",
  "UwU",
  "Allen",
  "Dino",
  "Nash",
  "Edward Oo",
  "迷你馬",
];

export const Volunteers = () => {
  const t = useTranslations("volunteers");

  const uniqueVolunteers = volunteers.filter((v, i, a) => a.indexOf(v) === i);

  return (
    <div className="py-14 text-center container mx-auto" id="sponsors">
      <SectionTitle>{t("title")}</SectionTitle>
      <SectionHeading>{t("heading")}</SectionHeading>
      <div className="flex flex-wrap gap-8 container justify-center">
        {uniqueVolunteers.map((volunteer, volunteerIndex) => (
          <BlurIn key={volunteerIndex} delay={0.05 * volunteerIndex}>
            <p key={volunteerIndex}>{volunteer}</p>
          </BlurIn>
        ))}
      </div>
    </div>
  );
};
