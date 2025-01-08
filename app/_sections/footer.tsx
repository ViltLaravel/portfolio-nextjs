"use client";

import { Button } from "@nextui-org/react";
import { AcmeLogo } from "./navbar";
import { LuFacebook, LuGithub, LuLinkedin } from "react-icons/lu";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full space-y-4">
      <div className="text-white w-full p-2 flex justify-center items-center gap-3">
        <Link href={"/home"}>Home</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/home"}>About</Link>
        <Link href={"/home"}>Contact</Link>
      </div>
      <div className="bg-[#1B1A1B] p-4 w-full flex items-center justify-center flex-col gap-3">
        <div className="w-full flex justify-between items-center lg:w-72">
          <div>
            <AcmeLogo />
          </div>
          <div className="flex gap-2 items-center">
            <Button
              isIconOnly
              startContent={<LuLinkedin size={18} />}
              className="text-white bg-transparent"
            />
            <Button
              isIconOnly
              startContent={<LuFacebook size={18} />}
              className="text-white bg-transparent"
            />
            <Button
              isIconOnly
              startContent={<LuGithub size={18} />}
              className="text-white bg-transparent"
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <span className="text-white">Created by Nicole</span>
        </div>
      </div>
    </div>
  );
}
