"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-center">
      <div className="flex items-center justify-center md:justify-end w-full lg:w-[45%]">
        <Image
          src={"/images/img-hero.png"}
          width={300}
          height={300}
          alt="rocket-img"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-col gap-1">
          <span className="text-[#C41A27] text-base font-semibold">
            Hello I'm Nicole
          </span>
          <h1 className="lg:text-5xl text-3xl font-extrabold text-white">
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
        <p className="text-sm text-slate-200">
          As a software engineer with a strong background in Computer Science, I
          specialize in mobile and web development, creating scalable
          applications and optimizing systems. Skilled in React, Tailwind, PHP,
          JavaScript, and modern frameworks, I thrive in collaborative
          environments and continuously seek opportunities to learn and
          innovate.
        </p>
        <Button
          variant="faded"
          radius="none"
          className="border-0 w-32 uppercase bg-[#C41A27] text-white text-sm"
        >
          About Me
        </Button>
      </div>
    </div>
  );
}
