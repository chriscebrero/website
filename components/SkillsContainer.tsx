import Image from "next/image";
import React from "react";

type Props = {
	img: string;
	title: string;
	skillSet: string[];
};

// Updated earth-tone palette
const earthTones = ["bg-[var(--color-cream)]"];

const SkillsContainer: React.FC<Props> = ({ img, skillSet, title }) => {
	// Rotate background color based on title length
	const bgClass = earthTones[title.length % earthTones.length];

	return (
		<div
			className={`${bgClass} border border-[var(--color-caramel)] rounded-2xl px-8 py-10 w-full max-w-xs text-center shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300`}
		>
			{/* Icon */}
			<div className="flex justify-center mb-6">
				<Image
					src={img}
					alt={title}
					width={80}
					height={80}
					className="object-contain drop-shadow-sm"
				/>
			</div>

			{/* Title */}
			<h2 className="text-2xl font-bold mb-1 text-[#4F463B]">{title}</h2>

			{/* Divider */}
			<div className="w-10 h-[2px] bg-[#4F463B]/30 mx-auto mb-6 rounded-full" />

			{/* Skills List */}
			<ul className="space-y-2 text-[15px] font-medium text-[#4F463B] leading-relaxed">
				{skillSet.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default SkillsContainer;
