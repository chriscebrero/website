import Image from "next/image";

type Props = {
	name: string;
	description: string[];
	techStack: string[];
	logo: string;
	hexcode?: string;
};

const ProjectCard: React.FC<Props> = ({
	name,
	description,
	techStack,
	logo,
	hexcode,
}) => {
	return (
		<>
			<div
				className={`lg:max-w-screen-xl lg:h-auto flex flex-row-reverse rounded-xl shadow-lg shadow-black-500/50 my-4 lg:my-12`}
			>
				<div className="px-6 flex-column text-left lg:w-4/6 lg:px-16 py-6 bg-gray-50 rounded-r-xl">
					<h1 className="text-[#776B5D] text-2xl lg:text-4xl font-bold">
						{name}
					</h1>
					{techStack.map((item, index) => (
						<div
							key={index}
							className="inline-grid bg-green-500 px-2 py-1 mr-1 my-1 lg:px-4 lg:py-2 lg:mr-2 lg:my-2 rounded-md shadow-xl shadow-black-500/50"
						>
							<p className="lg:text-base text-xs text-white">{item}</p>
						</div>
					))}

					<ul style={{ listStyleType: "circle" }}>
						{description.map((d, index) => (
							<li className="text-sm lg:text-base text-[#776B5D]" key={index}>
								{d}
							</li>
						))}
					</ul>
				</div>
				<div className="hidden lg:mx-auto lg:flex lg:items-center">
					<Image
						className="lg:mx-auto lg:rounded-full lg:h-auto lg:object-cover"
						src={logo}
						width={300}
						height={300}
						alt={name}
					/>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
