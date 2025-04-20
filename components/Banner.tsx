import Image from "next/image";

export default function Banner() {
	return (
		<div className="flex flex-col items-center lg:flex-row lg:justify-center pt-16 pb-24 gap-10 lg:gap-20 bg-[var(--color-pistachio)] text-[#4F463B]">
			{/* Profile Picture with Ring */}
			<div className="relative">
				<div className="rounded-full p-[6px] bg-[var(--color-sage)] shadow-md">
					<Image
						src="/profilePhoto.jpeg"
						alt="profile picture"
						width={250}
						height={250}
						className="rounded-full object-cover shadow-lg"
						priority
					/>
				</div>
			</div>

			{/* Name + Title */}
			<div className="text-center lg:text-left">
				<h1 className="text-4xl lg:text-6xl font-extrabold drop-shadow-sm text-[var(--color-caramel)]">
					Christian Cebrero
				</h1>
				<h2 className="text-2xl lg:text-4xl mt-4 font-medium text-[#4F463B]/90">
					Software Engineer
				</h2>
			</div>
		</div>
	);
}
