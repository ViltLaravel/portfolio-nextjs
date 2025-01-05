import ExperienceCard from "../_components/experience-card";

export default function Experience() {
  return (
    <div className="w-full flex flex-col gap-5 md:flex-row justify-center items-center">
      <div className="md:w-64 w-full flex flex-col gap-3 items-center h-64 justify-center p-4">
        <span className="text-[#EE403E] text-8xl font-black">02</span>
        <h4 className="text-white text-2xl text-center font-bold">
          Years of Experience
        </h4>
      </div>
      <div className="flex flex-col gap-7 md:gap-5 md:w-64 w-full h-64">
        <ExperienceCard number={4} label="Clients" />
        <ExperienceCard number={2} label="Years Experience" />
      </div>
      <div className="flex flex-col gap-7 md:gap-5 md:w-64 w-full h-64">
        <ExperienceCard number={10} label="Completed Projects" />
        <ExperienceCard number={5} label="Achievements" />
      </div>
    </div>
  );
}
