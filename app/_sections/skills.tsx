"use client";

import {
  LuBaggageClaim,
  LuChartNoAxesCombined,
  LuShield,
} from "react-icons/lu";
import SkillsCard from "../_components/skills-card";

export default function Skills() {
  return (
    <div className="bg-[url('/images/img-skills-bg.png')] bg-cover h-[350px] p-10">
      <div className="flex gap-2 justify-center items-center">
        <SkillsCard
          icon={<LuShield size={50} />}
          skillLabel="Frontend Developer"
          skillDescription="Building responsive and interactive user interfaces."
        />
        <SkillsCard
          icon={<LuBaggageClaim size={50} />}
          hasClassName="text-white"
          skillLabel="UI/UX Designer"
          skillDescription="Crafting intuitive and visually engaging user experiences."
        />
        <SkillsCard
          icon={<LuChartNoAxesCombined size={50} />}
          skillLabel="Web Developer"
          skillDescription="Skilled in building responsive, user-friendly websites."
        />
      </div>
      <div></div>
    </div>
  );
}
