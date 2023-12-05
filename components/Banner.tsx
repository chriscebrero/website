import Image from "next/image";

export default function Banner() {
	return (
		<>
			<div className="flex flex-col items-center lg:flex-row lg:mb-16 lg:justify-evenly pt-8 lg:pt-0">
				<Image
					className="rounded-full shadow-lg shadow-black-500/40"
					src="/profilePhoto.jpeg"
					width={250}
					height={250}
					alt="profilepicture"
				/>
				<div className="flex-column self-center lg:py-0 py-8">
					<h1 className="text-3xl lg:text-7xl lg:my-8 text-[#776B5D] drop-shadow-xl">
						Christian Cebrero
					</h1>
					<h1 className="text-3xl lg:text-7xl lg:my-8 text-[#776B5D] drop-shadow-xl">
						Software Engineer
					</h1>
				</div>
			</div>
		</>
	);
}
