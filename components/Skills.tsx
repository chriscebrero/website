import SkillsContainer from "./SkillsContainer";

const FRONT_END_SKILLS = [
	"HTML5/CSS3",
	"React",
	"TypeScript",
	"React Native",
	"Next.js",
	"Angular",
];

const BACK_END_SKILLS = [
	"Python",
	"GraphQL",
	"REST APIs",
	"Java",
	"Node.js",
	"AWS (Lambda, Cloudwatch, S3)",
	"MySQL",
];

const TOOLS = ["Git", "Webpack", "Storybook"];

const TESTING_SKILLS = ["Jest", "Cypress", "Mocha", "React Testing Library"];

const DEVOPS = ["Docker", "Kubernetes", "CI/CD", "Elastic Stack"];

const SKILLS = [
	{
		name: "Front End",
		skills: FRONT_END_SKILLS,
		image: "/frontend.svg",
	},
	{
		name: "Back End",
		skills: BACK_END_SKILLS,
		image: "/backend.svg",
	},
	{
		name: "Tools",
		skills: TOOLS,
		image: "/tools.svg",
	},
	{
		name: "Testing",
		skills: TESTING_SKILLS,
		image: "/testcase.svg",
	},
	{
		name: "DevOps",
		skills: DEVOPS,
		image: "/devops.svg",
	},
];

export default function Skills() {
	return (
		<>
			<div
				id="skills"
				className="flex flex-col lg:flex-row justify-center items-center gap-8 px-4 py-10"
			>
				{SKILLS.map((skills, index) => (
					<SkillsContainer
						key={index}
						title={skills.name}
						img={skills.image}
						skillSet={skills.skills}
					/>
				))}
			</div>
		</>
	);
}
