import ExperienceCard from "./ExperienceCard";
import experience from "../json/data.json";

const ExperienceApp = () => {
	return (
		<section id="experience" className="py-16 px-4 sm:px-8 max-w-6xl mx-auto">
			<h1 className="text-4xl lg:text-6xl font-bold text-[#4F463B] text-center mb-12">
				Experience
			</h1>

			<div className="flex flex-col gap-12">
				{experience.resume.map((exp: any) => (
					<ExperienceCard
						key={exp.id}
						company={exp.company}
						title={exp.title}
						startDate={exp.startDate}
						endDate={exp.endDate}
						team={exp.team}
						description={exp.description}
						techStack={exp.techStack}
						logo={exp.logo}
						hexcode={exp.hexcode}
					/>
				))}
			</div>
		</section>
	);
};

export default ExperienceApp;
