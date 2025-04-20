import Image from "next/image";

export default function SocialApps() {
	return (
		<div className="flex justify-center gap-6 lg:gap-20 py-12 rounded-none bg-[var(--color-pistachio)]">
			{/* LinkedIn */}
			<a
				href="https://www.linkedin.com/in/ccebrero/"
				target="_blank"
				rel="noreferrer"
				className="transition-transform hover:scale-105 hover:opacity-70"
			>
				<Image
					src="/linkedin.svg"
					alt="LinkedIn"
					width={80}
					height={80}
					className="w-12 h-12 lg:w-20 lg:h-20"
				/>
			</a>

			{/* GitHub */}
			<a
				href="https://github.com/chriscebrero"
				target="_blank"
				rel="noreferrer"
				className="transition-transform hover:scale-105 hover:opacity-70"
			>
				<Image
					src="/github.svg"
					alt="GitHub"
					width={80}
					height={80}
					className="w-12 h-12 lg:w-20 lg:h-20"
				/>
			</a>

			{/* Resume Icon */}
			<div className="transition-transform hover:scale-105 hover:opacity-70 cursor-pointer">
				<Image
					src="/resume.svg"
					alt="Resume"
					width={80}
					height={80}
					className="w-12 h-12 lg:w-20 lg:h-20"
				/>
			</div>
		</div>
	);
}
