import Image from "next/image";
import React from "react";

type Props = {
	img: string;
	title: string;
	skillSet: string[];
};

const SkillsContainer: React.FC<Props> = ({ img, skillSet, title }) => {
	return (
		<>
			<div className="bg-white mx-16 my-12 rounded-2xl shadow-lg shadow-black-500/50" style={{ flexDirection: "column" }}>
				<Image
					className="py-5"
					style={{ margin: "0 60px" }}
					src={img}
					width={100}
					height={100}
					alt={title}
				/>
				<h1 className="text-black mb-4 font-semibold text-2xl">{title}</h1>
				{skillSet.map((item) => (
					<h3 className="text-black py-1" key={item}>
						{item}
					</h3>
				))}
			</div>
		</>
	);
};

export default SkillsContainer;
