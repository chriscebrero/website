import Image from "next/image";
import experience from '../json/projects.json';
import ProjectCard from "./ProjectCard";

const ProjectApp = () => {
	return (
		<>
			<div id="projects">
				<h1 className="text-5xl text-black py-4 text-center">Projects</h1>
				<div className="content-center text-center flex flex-col flex-wrap">
					{experience.projects.map((e: any) => 
					
					<ProjectCard key={e.id}
					name={e.name} 
					description={e.description}
					techStack={e.techStack}
					logo={e.logo}
					hexcode={e.hexcode}
					/>
					
					)}
				</div>
			</div>
		</>
	);
};

export default ProjectApp;
