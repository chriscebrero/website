const Navigator = () => {
	return (
		<>
			<div className="flex lg:flex-row-reverse justify-center lg:mb-16">
				<button className="hover:opacity-50 ">
					<a
						href="#projects"
						className="text-xl px-2 lg:px-12 lg:text-4xl text-[#776B5D]"
					>
						Projects
					</a>
				</button>
				<button className="hover:opacity-50">
					<a
						href="#experience"
						className="text-xl px-2 lg:px-12 lg:text-4xl text-[#776B5D]"
					>
						Experience
					</a>
				</button>
				<button className="hover:opacity-50">
					<a
						href="#skills"
						className="text-xl px-2 lg:px-12 lg:text-4xl text-[#776B5D]"
					>
						Skills
					</a>
				</button>
			</div>
		</>
	);
};

export default Navigator;
