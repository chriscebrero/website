import Image from "next/image";

export default function SocialApps() {
	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
				}}
			>
				<Image
					style={{ margin: "0 60px" }}
					src="/linkedin.svg"
					width={100}
					height={100}
					alt="LinkedIn"
				/>
				<Image
					style={{ margin: "0 60px" }}
					src="/github.svg"
					width={100}
					height={100}
					alt="LinkedIn"
				/>
				<Image
					style={{ margin: "0 60px" }}
					src="/linkedin.svg"
					width={100}
					height={100}
					alt="LinkedIn"
				/>
			</div>
		</>
	);
}
