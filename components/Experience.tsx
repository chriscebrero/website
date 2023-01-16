import ExperienceCard from "./ExperienceCard";
import experience from '../json/data.json';



const Experience = () => {
	return (
		<>
			<div>
				<h1 className="text-5xl text-black p-8">Experience</h1>
				{experience.resume.map((e: any) => <ExperienceCard key={e.id}
				company={e.company} 
				title={e.title}
				startDate={e.startDate}
				endDate={e.endDate}
				description={e.description}
				techStack={e.techStack}
				logo={e.logo}
				/>)}
			</div>
		</>
	);
};

export default Experience;