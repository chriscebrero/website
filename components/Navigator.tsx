const Navigator = () => {
	return (
		<>
			<div className="flex flex-row-reverse mb-16">
				<button className="hover:opacity-50 ">
					<a href="#projects" className="px-12 text-4xl text-[#776B5D]">
						Projects
					</a>
				</button>
				<button className="hover:opacity-50">
					<a href="#experience" className="px-12 text-4xl text-[#776B5D]">
						Experience
					</a>
				</button>
				<button className="hover:opacity-50">
					<a href="#skills" className="px-12 text-4xl text-[#776B5D]">
						Skills
					</a>
				</button>
			</div>
		</>
	);
};

export default Navigator;
