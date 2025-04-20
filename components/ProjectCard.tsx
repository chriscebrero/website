import Image from "next/image";

type Props = {
	name: string;
	description: string[];
	techStack: string[];
	logo: string;
	hexcode?: string;
};

// Earthy tones for tag variation
const earthToneTags = [
	"bg-[var(--color-sage)]",
	"bg-[var(--color-pistachio)]",
	"bg-[var(--color-cream)]",
];

const ProjectCard: React.FC<Props> = ({
	name,
	description,
	techStack,
	logo,
	hexcode,
}) => {
	return (
		<article className="lg:max-w-screen-xl flex flex-col-reverse lg:flex-row-reverse rounded-2xl border border-[var(--color-caramel)] overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 bg-[var(--color-eggshell)]">
			{/* LEFT: Text Content */}
			<div className="px-6 py-8 lg:px-14 lg:py-12 flex flex-col justify-center lg:w-4/6 text-[#4F463B]">
				<h1 className="text-2xl lg:text-4xl font-bold mb-4">{name}</h1>

				{/* Tech Stack Tags */}
				<div className="flex flex-wrap gap-2 mb-6">
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

				{/* Description */}
				<ul className="list-disc list-inside text-sm lg:text-base leading-relaxed space-y-2">
					{description.map((d, index) => (
						<li key={index}>{d}</li>
					))}
				</ul>
			</div>

			{/* RIGHT: Logo Block */}
			<div className="relative lg:w-2/6 w-full h-full bg-white">
				<div className="relative w-full h-full">
					<Image
						src={logo}
						alt={`${name} logo`}
						fill
						className="object-contain p-12"
						sizes="(max-width: 768px) 100vw, 33vw"
					/>
				</div>
			</div>
		</article>
	);
};

export default ProjectCard;
