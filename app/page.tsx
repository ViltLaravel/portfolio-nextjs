import Home from "./_sections/home";
import MainNavbar from "./_sections/navbar";
import Skills from "./_sections/skills";

export default function Page() {
  return (
    <div className="bg-[#1F1F1F] h-screen flex flex-col gap-4 md:gap-2">
      <Home />
      <Skills />
    </div>
  );
}
