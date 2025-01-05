import ExperienceCard from "../_components/experience-card";

export default function Experience() {
  return (
    <div className="w-full flex flex-col gap-2 md:flex-row">
      <div className="md:w-[45%] w-full flex flex-col gap-3 items-center justify-center p-4">
        <span className="text-[#EE403E] text-8xl font-black">02</span>
        <h4 className="text-white text-2xl text-center font-bold">
          Years of Experience
        </h4>
      </div>
      <div className="flex gap-3 items-center justify-center">
        <div className="flex flex-col gap-3">
          <ExperienceCard number={4} label="Clients" />
          <ExperienceCard number={2} label="Years Experience" />
        </div>
        <div className="flex flex-col gap-3">
          <ExperienceCard number={10} label="Completed Projects" />
          <ExperienceCard number={5} label="Achievements" />
        </div>
      </div>
    </div>
  );
}
