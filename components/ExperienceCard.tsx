import Image from "next/image";
import React from "react";

type Props = {
	company: string;
	title: string;
	startDate: string;
	endDate: string;
	team: string;
	description: string[];
	techStack: string[];
	logo: string;
	hexcode?: string;
};

const ExperienceCard: React.FC<Props> = ({
	company,
	title,
	startDate,
	endDate,
	description,
	team,
	techStack,
	logo,
	hexcode,
}) => {
	return (
		<>
			<div
				style={{ backgroundColor: `#${hexcode}` }}
				className={`lg:max-w-screen-xl lg:h-auto flex flex-row rounded-xl shadow-lg shadow-black-500/50 my-4 lg:my-12`}
			>
				<div className="px-6 flex-column text-left lg:w-4/6 lg:px-16 py-6 bg-gray-50 rounded-l-xl">
					<h1 className="font-mono text-[#776B5D] text-2xl lg:text-4xl font-bold">
						{company}
					</h1>
					<h2 className="text-[#776B5D] lg:text-2xl font-bold">{title}</h2>
					<h2 className="text-[#776B5D] lg:text-xl font-bold">{team}</h2>
					<h3
						style={{
							color: "#776B5D",
							fontWeight: "bold",
							fontStyle: "italic",
						}}
					>
						{startDate} - {endDate}
					</h3>
					<ul style={{ listStyleType: "circle" }}>
						{description.map((d, index) => (
							<li className="text-sm lg:text-base text-[#776B5D]" key={index}>
								{d}
							</li>
						))}
					</ul>
					{techStack.map((item, index) => (
						<div
							key={index}
							className="inline-grid bg-red-500 px-2 py-1 mr-1 my-1 lg:px-4 lg:py-2 lg:mr-2 lg:my-2 rounded-md shadow-xl shadow-black-500/50"
						>
							<p className="lg:text-base text-xs text-white">{item}</p>
						</div>
					))}
				</div>
				<div className="hidden lg:mx-auto lg:flex lg:items-center">
					<Image
						className="lg:mx-auto lg:rounded-full lg:h-auto lg:object-cover"
						src={logo}
						width={300}
						height={300}
						alt={company}
					/>
				</div>
			</div>
		</>
	);
};

export default ExperienceCard;
