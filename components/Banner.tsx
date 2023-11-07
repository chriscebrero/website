import Image from "next/image";

export default function Banner() {
	return (
		<>
			<div className="flex flex-row mb-16 justify-evenly">
				<Image
					className="rounded-full shadow-lg shadow-black-500/40"
					src="/profilePhoto.jpeg"
					width={250}
					height={250}
					alt="profilepicture"
				/>
				<div className="flex-column self-center">
					<h1 className="text-7xl my-8 text-[#776B5D] drop-shadow-xl">
						Christian Cebrero
					</h1>
					<h1 className="text-7xl my-8 text-[#776B5D] drop-shadow-xl">
						Software Engineer
					</h1>
				</div>
			</div>
		</>
	);
}
