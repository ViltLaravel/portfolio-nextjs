"use client";

import { Button, Card } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export default function ProjectCard({
  projectName,
  src,
}: {
  projectName: string;
  src?: string;
}) {
  return (
    <Card
      className="p-4 rounded-md space-y-2 shadow-lg w-full md:max-w-72 bg-[#191918] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
      radius="none"
    >
      <div className="relative h-36 w-full">
        <Image
          alt="project-img"
          src={src ?? "/projects/pro-1.jpg"}
          fill={true}
          className="rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-white text-xl font-bold">{projectName}</span>
        <Link
          href={"#"}
          className="bg-transparent gap-1 text-[#BE1925] flex items-start justify-start text-left text-sm uppercase font-semibold"
        >
          Know More
          <LuArrowRight size={20} />
        </Link>
      </div>
    </Card>
  );
}
