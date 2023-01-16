import Image from "next/image";

type Props = {
        company: string;
        title: string;
        startDate: string;
        endDate: string;
        description: string[];
        techStack: string[];
        logo: string;
}

const ExperienceCard: React.FC<Props> = ({company, title, startDate, endDate, description, techStack, logo}) => {
    console.log(typeof description);
	return (
		<>
			<div className=" max-w-screen-2xl h-auto flex flex-row bg-white rounded-xl shadow-lg shadow-black-500/50 my-20">
					<div className="flex-column text-left w-4/6 px-8 py-6">
					<h1 className="text-black text-4xl font-bold">{company}</h1>
					<h2 className="text-black text-2xl font-bold">
						{title}
					</h2>
					<h2 className="text-black text-xl font-bold">Educator Admin Platform</h2>
					<h3 style={{ color: "black", fontWeight: 'bold', fontStyle: 'italic' }}>{startDate} - {endDate}</h3>
					<ul style={{listStyleType: 'circle'}}>
                        {description.map((d, index) => <li key={index}>{d}</li>)}
					</ul>
					</div>
					<div className="mx-auto flex items-center" 
					>
					<Image
					className="mx-auto rounded-full md:h-auto object-cover"
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
