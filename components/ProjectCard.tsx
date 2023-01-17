import Image from "next/image";

type Props = {
    name: string;
    description: string[];
    techStack: string[];
    logo: string;
    hexcode?: string;
}

const ProjectCard: React.FC<Props> = ({name, description, techStack, logo, hexcode}) => {
	return (
		<>
			<div className={`max-w-screen-xl h-auto flex flex-row-reverse rounded-xl shadow-lg shadow-black-500/50 my-12`}>
					<div className="flex-column text-left w-4/6 px-16 py-6 bg-gray-50 rounded-r-xl">
                        <h1 className="text-black text-4xl font-bold">{name}</h1>
                        {techStack.map((item, index) => (
                        <div key={index} className="inline-grid bg-green-500 px-4 py-2 mr-2 my-2 rounded-md shadow-xl shadow-black-500/50">
                            <p className="text-white">{item}</p>
                        </div>
                    ))}
                    
                    <ul style={{listStyleType: 'circle'}}>
                         {description.map((d, index) => <li key={index}>{d}</li>)}
                    </ul>

					</div>
					<div className="mx-auto flex items-center" >
                        <Image
                        className="mx-auto rounded-full md:h-auto object-cover"
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
