import ProjectCard from "./ProjectCard";
import experience from "../json/projects.json";

const ProjectApp = () => {
	return (
		<section id="projects" className="px-4 sm:px-8 lg:px-24 py-16">
			<h1 className="text-center text-4xl lg:text-5xl font-bold text-[#4F463B] mb-12">
				Projects
			</h1>

			<div className="flex flex-col gap-10 items-center">
				{experience.projects.map((e: any) => (
					<ProjectCard
						key={e.id}
						name={e.name}
						description={e.description}
						techStack={e.techStack}
						logo={e.logo}
						hexcode={e.hexcode}
					/>
				))}
			</div>
		</section>
	);
};

export default ProjectApp;
