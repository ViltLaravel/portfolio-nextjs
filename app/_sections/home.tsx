"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row w-full bg-[#191918] h-full lg:h-[calc(100vh-100px)] rounded-xl">
      <div className="h-full flex justify-center items-center w-full lg:basis-5/12 relative">
        <div className="h-96 w-96 relative">
          <Image src={"/images/img-hero.png"} fill alt="rocket-img" />
        </div>
      </div>
      <div className="h-full w-full lg:basis-7/12 flex justify-center items-center">
        <div className="flex flex-col gap-4 p-4 lg:pr-10">
          <div className="flex flex-col gap-2">
            <span className="text-[#C41A27] text-base lg:text-2xl font-semibold">
              Hello I'm Nicole
            </span>
            <h1 className="lg:text-6xl text-3xl font-extrabold text-white">
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer",
                    "Web Developer",
                    "Mobile Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <p className="text-sm lg:text-xl text-slate-200">
            As a software engineer with a strong background in Computer Science,
            I specialize in mobile and web development, creating scalable
            applications and optimizing systems. Skilled in React, Tailwind,
            PHP, JavaScript, and modern frameworks, I thrive in collaborative
            environments and continuously seek opportunities to learn and
            innovate.
          </p>
          <Button
            variant="faded"
            radius="none"
            className="border-0 w-32 uppercase bg-[#C41A27] text-white text-sm lg:text-lg"
          >
            About Me
          </Button>
        </div>
      </div>
    </div>
  );
}
