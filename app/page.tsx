import SkillsContainer from "./_sections/container";
import Experience from "./_sections/experience";
import Home from "./_sections/home";
import Skills from "./_sections/skills";

export default function Page() {
  return (
    <div className="bg-[#1F1F1F] space-y-4">
      <Home />
      <SkillsContainer>
        <Skills />
        <Experience />
      </SkillsContainer>
    </div>
  );
}
