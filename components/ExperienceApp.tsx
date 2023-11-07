import ExperienceCard from "./ExperienceCard";
import experience from "../json/data.json";

const ExperienceApp = () => {
	return (
		<>
			<div id="experience">
				<h1 className="text-5xl text-[#776B5D] py-4 text-center">Experience</h1>
				<div className="content-center text-center flex flex-col flex-wrap">
					{experience.resume.map((e: any) => (
						<ExperienceCard
							key={e.id}
							company={e.company}
							title={e.title}
							startDate={e.startDate}
							endDate={e.endDate}
							team={e.team}
							description={e.description}
							techStack={e.techStack}
							logo={e.logo}
							hexcode={e.hexcode}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default ExperienceApp;
