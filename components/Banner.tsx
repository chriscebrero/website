import Image from "next/image";

export default function Banner() {
	return (
		<>
			<div className="max-w-screen-xl flex flex-row mb-16 justify-between content-between">
				<Image
					className="rounded-full mr-20 shadow-lg shadow-black-500/40"
					src="/profilePhoto.jpeg"
					width={250}
					height={250}
					alt="profilepicture"
				/>
				<div className="flex-column self-center">
					<h1 className="text-7xl my-8">Christian Cebrero</h1>
					<h1 className="text-7xl my-8">Software Engineer</h1>
				</div>
			</div>
		</>
	);
}
