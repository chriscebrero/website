export default function About() {
	return (
		<div className="bg-[var(--color-pistachio)] min-h-screen py-20 px-4 sm:px-8 font-sans text-[#4F463B]">
			{/* Heading */}
			<h1 className="text-4xl lg:text-6xl font-extrabold text-center tracking-wide mb-14 drop-shadow-sm">
				About Me
			</h1>

			{/* Content Card */}
			<div className="bg-[var(--color-eggshell)] rounded-3xl shadow-xl max-w-4xl mx-auto px-10 py-12 border border-[var(--color-caramel)]">
				<p className="text-center text-lg sm:text-xl leading-relaxed tracking-wide">
					I'm a purpose-driven Software Engineer with a love for building
					elegant solutions to complex problems. With a solid foundation in
					Mathematics and Computer Science, I combine logic and creativity to
					craft meaningful experiences.
				</p>

				<p className="text-center text-lg sm:text-xl leading-relaxed tracking-wide mt-6">
					Whether it's refining system architecture or styling pixel-perfect
					interfaces, I thrive on challenge and growth. Outside of tech, I play
					piano, spike volleyballs, and dive into snow-covered slopes or cozy
					Nintendo Switch sessions 🎮.
				</p>
			</div>

			{/* Soft Outro Line */}
			<p className="text-center text-lg sm:text-xl mt-16 tracking-wide text-[var(--color-caramel)] font-medium">
				Explore my{" "}
				<span className="underline underline-offset-4">experience</span> and{" "}
				<span className="underline underline-offset-4">projects</span> below.
			</p>
		</div>
	);
}
