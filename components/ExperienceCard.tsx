import Image from "next/image";

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
}

const ExperienceCard: React.FC<Props> = ({company, title, startDate, endDate, description, team, techStack, logo, hexcode}) => {
	return (
		<>
			<div className={`max-w-screen-xl h-auto flex flex-row bg-[#${hexcode}] rounded-xl shadow-lg shadow-black-500/50 my-12`}>
					<div className="flex-column text-left w-4/6 px-16 py-6 bg-gray-50 rounded-l-xl">
                        <h1 className="text-black text-4xl font-bold">{company}</h1>
                        <h2 className="text-black text-2xl font-bold">
                            {title}
                        </h2>
                        <h2 className="text-black text-xl font-bold">{team}</h2>
                        <h3 style={{ color: "black", fontWeight: 'bold', fontStyle: 'italic' }}>{startDate} - {endDate}</h3>
                        <ul style={{listStyleType: 'circle'}}>
                            {description.map((d, index) => <li key={index}>{d}</li>)}
                        </ul>
                    {techStack.map((item, index) => (
                        <div key={index} className="inline-grid bg-red-500 px-4 py-2 mr-2 my-2 rounded-md shadow-xl shadow-black-500/50">
                            <p className="text-white">{item}</p>
                        </div>
                    ))}
                        
                        
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
