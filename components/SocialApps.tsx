import Image from "next/image";

export default function SocialApps() {
	return (
		<>
			<div className="flex flex-row justify-center">
				<button>
					<a
						href="https://www.linkedin.com/in/ccebrero/"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							className="mx-4 w-12 h-12 lg:w-20 lg:h-20 lg:mx-20 hover:opacity-50"
							src="/linkedin.svg"
							width="0"
							height="0"
							alt="LinkedIn"
						/>
					</a>
				</button>
				<button>
					<a
						href="https://github.com/chriscebrero"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							className="mx-4 w-12 h-12 lg:w-20 lg:h-20 lg:mx-20 hover:opacity-50"
							src="/github.svg"
							width="0"
							height="0"
							alt="LinkedIn"
						/>
					</a>
				</button>
				<button>
					<Image
						className="mx-4 w-12 h-12 lg:w-20 lg:h-20 lg:mx-20 hover:opacity-50"
						src="/resume.svg"
						width="0"
						height="0"
						alt="LinkedIn"
					/>
				</button>
			</div>
		</>
	);
}
