
const Navigator = () => {
	return (
		<>
			<div className="flex flex-row-reverse mb-16">
					<button className="hover:opacity-50">
                        <a href="#projects" className="px-12 text-4xl">
                            Projects
                        </a>
					</button>
					<button className="hover:opacity-50">
                        <a href="#experience" className="px-12 text-4xl">
                            Experience
                        </a>
					</button>
					<button className="hover:opacity-50">
                        <a href="#skills" className="px-12 text-4xl">
                            Skills
                        </a>
					</button>
				</div>
		</>
	);
};

export default Navigator;
