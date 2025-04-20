const Navigator = () => {
	return (
		<nav className="flex justify-center items-center flex-wrap gap-6 lg:gap-16 py-10 px-6 max-w-6xl mx-auto">
			{[
				{ label: "Skills", href: "#skills", color: "--color-cream" },
				{ label: "Experience", href: "#experience", color: "--color-cream" },
				{ label: "Projects", href: "#projects", color: "--color-cream" },
			].map(({ label, href, color }) => (
				<a
					key={label}
					href={href}
					className="text-xl lg:text-3xl font-semibold text-[#4F463B] px-8 py-4 rounded-full border border-[#d9cfb8] shadow-sm hover:shadow-xl hover:scale-105 hover:ring-2 hover:ring-[var(--color-caramel)] transition-all duration-300 ease-in-out"
					style={{
						backgroundColor: `var(${color})`,
					}}
				>
					{label}
				</a>
			))}
		</nav>
	);
};

export default Navigator;
