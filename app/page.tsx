import Contact from "./_sections/contact";
import SkillsContainer from "./_sections/container";
import Experience from "./_sections/experience";
import Footer from "./_sections/footer";
import Home from "./_sections/home";
import Project from "./_sections/projects";
import Skills from "./_sections/skills";

export default function Page() {
  return (
    <div className="bg-[#1F1F1F] space-y-8 px-4 md:px-14">
      <Home />
      <SkillsContainer>
        <Skills />
        <Experience />
      </SkillsContainer>
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
