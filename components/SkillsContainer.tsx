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
			<div style={{ flexDirection: "column" }}>
				<Image
					style={{ margin: "0 60px" }}
					src={img}
					width={100}
					height={100}
					alt={title}
				/>
				<h1 style={{ color: "black" }}>{title}</h1>
				{skillSet.map((item) => (
					<h3 style={{ color: "black" }} key={item}>
						{item}
					</h3>
				))}
			</div>
		</>
	);
};

export default SkillsContainer;
