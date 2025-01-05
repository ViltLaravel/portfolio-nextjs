"use client";

import { Card } from "@nextui-org/react";
import CountUp from "react-countup";

export default function ExperienceCard({
  number,
  label,
}: {
  number?: number;
  label?: string;
}) {
  return (
    <Card
      radius="none"
      className="bg-[#1F1E1F] rounded-md shadow-lg p-6 w-full h-28"
    >
      <div className="flex flex-col gap-2 items-center justify-center">
        <CountUp
          className="text-[#EE403E] text-2xl font-black"
          start={1}
          end={number ?? 0}
          duration={3}
          suffix="+"
        />
        <h4 className="text-white text-xs md:text-sm font-normal">{label}</h4>
      </div>
    </Card>
  );
}
