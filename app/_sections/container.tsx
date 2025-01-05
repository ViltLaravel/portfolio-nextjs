import { ReactNode } from "react";

export default function SkillsContainer({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[url('/images/img-skills-bg.png')] bg-cover bg-center p-10 flex flex-col gap-8">
      {children}
    </div>
  );
}
