"use client";

import { Button } from "@nextui-org/react";

export default function Contact() {
  return (
    <div className="bg-[#1B1A1B] space-y-4 p-5 lg:p-8 text-white flex flex-col lg:flex-row lg:gap-8 lg:justify-center lg:items-center">
      <div className="w-full lg:w-[70%] flex gap-2 flex-col">
        <h1 className="text-4xl font-extrabold xl:text-6xl">
          Let's work together on your next project
        </h1>
        <span className="text-sm font-normal xl:text-base">
          I’m always eager to connect with people, explore new challenges, and
          grow professionally. Whether you’re looking for a skilled developer
          for your next project or want to collaborate on exciting
          opportunities, I’d love to hear from you!
        </span>
      </div>
      <div className="w-full lg:w-[30%] h-fit lg:flex lg:justify-center">
        <Button
          radius="none"
          className="bg-[#C01825] text-white uppercase text-xs md:text-base lg:p-5"
        >
          Contact
        </Button>
      </div>
    </div>
  );
}
