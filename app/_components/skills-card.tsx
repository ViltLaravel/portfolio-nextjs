"use client";

import { Button, Card } from "@nextui-org/react";
import { ReactNode } from "react";
import { LuChevronRight } from "react-icons/lu";

export default function SkillsCard({
  icon,
  skillLabel,
  skillDescription,
  link,
  linkLabel,
  hasClassName,
}: {
  icon?: ReactNode;
  skillLabel?: string;
  skillDescription?: string;
  link?: string;
  linkLabel?: string;
  hasClassName?: string;
}) {
  return (
    <Card
      radius="none"
      className={`p-8 w-full md:w-64 h-64 md:h-72 flex flex-col gap-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer ${
        hasClassName ? "bg-[#CA1A29] text-white" : "bg-[#1E1E1E]"
      }`}
    >
      <div
        className={`flex justify-center items-center ${
          hasClassName ? "text-white" : "text-[#CA1A29]"
        }`}
      >
        {icon}
      </div>
      <span className="text-white text-center text-xl font-medium">
        {skillLabel}
      </span>
      <p className="text-xs text-center font-light text-white">
        {skillDescription}
      </p>
      <Button
        radius="sm"
        endContent={<LuChevronRight size={15} />}
        className={`bg-transparent uppercase w-full text-left text-sm font-semibold ${
          !hasClassName ? "text-[#CA1A29]" : "text-white"
        }`}
      >
        Know More
      </Button>
    </Card>
  );
}
