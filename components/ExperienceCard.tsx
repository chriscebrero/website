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

const earthToneTags = [
	"bg-[var(--color-sage)]",
	"bg-[var(--color-pistachio)]",
	"bg-[var(--color-cream)]",
];

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
		<article className="flex flex-col lg:flex-row overflow-hidden rounded-2xl shadow-lg border border-[var(--color-caramel)] bg-[var(--color-eggshell)] transition-transform duration-300 hover:shadow-2xl hover:scale-[1.01] hover:brightness-[1.02] cursor-pointer">
			{/* Left: Text Content */}
			<div className="w-full lg:w-3/5 px-8 py-10 lg:px-12 lg:py-14 flex flex-col justify-center text-[#4F463B]">
				<h1 className="text-3xl lg:text-5xl font-bold mb-2">{company}</h1>
				<h2 className="text-xl lg:text-2xl font-semibold mb-1">{title}</h2>
				<h3 className="text-md lg:text-lg font-medium text-[#4F463B]/80 mb-2">
					{team}
				</h3>
				<p className="text-sm lg:text-base italic mb-6 text-[#4F463B]/70">
					{startDate} – {endDate}
				</p>

				<ul className="list-disc list-inside space-y-2 text-sm lg:text-base leading-relaxed mb-6">
					{description.map((d, index) => (
						<li key={index}>{d}</li>
					))}
				</ul>

				{/* Tech stack tags */}
				<div className="flex flex-wrap gap-2">
					{techStack.map((item, index) => (
						<span
							key={index}
							className={`${
								earthToneTags[index % earthToneTags.length]
							} text-[#4F463B] text-xs lg:text-sm px-3 py-1 rounded-md shadow-sm`}
						>
							{item}
						</span>
					))}
				</div>
			</div>

			{/* Right: Full Logo Section */}
			<div
				className="relative w-full lg:w-2/5 aspect-square lg:aspect-auto h-64 lg:h-auto"
				style={{ backgroundColor: hexcode ? `#${hexcode}` : "#ffffff" }}
			>
				<Image
					src={logo}
					alt={`${company} logo`}
					fill
					className="object-contain p-12"
					sizes="(max-width: 768px) 100vw, 40vw"
				/>
			</div>
		</article>
	);
};

export default ExperienceCard;
