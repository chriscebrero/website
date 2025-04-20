"use client";

import { useState } from "react";
import ExperienceCard from "./ExperienceCard";

type Experience = {
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

type Props = {
	experiences: Experience[];
};

export default function ExperienceCarousel({ experiences }: Props) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const length = experiences.length;

	const prevCard = () => {
		setCurrentIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
	};

	const nextCard = () => {
		setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
	};

	return (
		<div className="relative w-full max-w-5xl mx-auto py-10">
			{/* Arrows */}
			<button
				onClick={prevCard}
				className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[var(--color-caramel)]/80 hover:bg-[var(--color-caramel)] text-white p-3 rounded-full shadow-md"
			>
				←
			</button>
			<button
				onClick={nextCard}
				className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[var(--color-caramel)]/80 hover:bg-[var(--color-caramel)] text-white p-3 rounded-full shadow-md"
			>
				→
			</button>

			{/* Current Card */}
			<div className="transition-all duration-500 ease-in-out">
				<ExperienceCard {...experiences[currentIndex]} />
			</div>
		</div>
	);
}
