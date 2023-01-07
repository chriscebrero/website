import SkillsContainer from "./SkillsContainer";

const FRONT_END_SKILLS = [
	"HTML5/CSS3",
	"JavaScript",
	"TypeScript",
	"React.js/React Native",
	"Next.js",
	"SwiftUI",
];

const BACK_END_SKILLS = [
	"Python",
	"Java",
	"Swift",
	"C/C++",
	"Node/Express",
	"MongoDB",
];

const TOOLS = [
	"Apollo/GraphQL",
	"Agile",
	"Git",
	"Jest",
	"React Testing Library",
	"Enzyme",
	"DynamoDB",
];

export default function Skills() {
	return (
		<>
			<div style={{ display: "flex", flexDirection: "row" }}>
				<SkillsContainer
					img={"/linkedin.svg"}
					skillSet={FRONT_END_SKILLS}
					title="Front End"
				/>

				<SkillsContainer
					img={"/linkedin.svg"}
					skillSet={BACK_END_SKILLS}
					title="Back End"
				/>

				<SkillsContainer img={"/linkedin.svg"} skillSet={TOOLS} title="Tools" />
			</div>
		</>
	);
}
