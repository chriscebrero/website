import Image from "next/image";

export default function SocialApps() {
	return (
		<>
			<div
				className="flex flex-row"
			>
				<button>
					<a href="https://www.linkedin.com/in/ccebrero/" target="_blank" rel="noreferrer">
						<Image
							className="hover:opacity-50"
							style={{ margin: "0 60px" }}
							src="/linkedin.svg"
							width={100}
							height={100}
							alt="LinkedIn"
						/>
					</a>
				</button>
				<button>
					<a href="https://github.com/chriscebrero" target="_blank" rel="noreferrer">
						<Image
							className="hover:opacity-50"
							style={{ margin: "0 60px" }}
							src="/github.svg"
							width={100}
							height={100}
							alt="LinkedIn"
						/>
					</a>
				</button>
				<button>
				<Image
					className="hover:opacity-50"
					style={{ margin: "0 60px" }}
					src="/resume.svg"
					width={100}
					height={100}
					alt="LinkedIn"
				/>
				</button>
			</div>
		</>
	);
}
