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
			<div
				className="bg-[#EBE3D5] px-6 py-6 lg:mx-16 my-12 rounded-2xl shadow-lg shadow-black-500/50"
				style={{ flexDirection: "column" }}
			>
				<div className="flex justify-center">
					<Image
						className="py-5 w-32 h-32"
						src={img}
						width="0"
						height="0"
						alt={title}
					/>
				</div>
				<h1 className="text-[#776B5D] mb-4 font-semibold text-2xl text-center">
					{title}
				</h1>
				{skillSet.map((item) => (
					<h3 className="text-[#776B5D] py-1 text-center" key={item}>
						{item}
					</h3>
				))}
			</div>
		</>
	);
};

export default SkillsContainer;
