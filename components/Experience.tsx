import Image from "next/image";
import styles from "../styles/Banner.module.css";

const Experience = () => {
	return (
		<>
			<div>
				<h1 style={{ fontSize: "45px", color: "black" }}>Experience</h1>
				<div
					style={{
						width: "70rem",
						height: "20rem",
						backgroundColor: "white",
						textAlign: "left",
						padding: "1rem 2rem",
					}}
				>
					<h1 style={{ color: "black", fontSize: "2rem" }}>Coursera</h1>
					<h1 style={{ color: "black", fontSize: "1.5rem" }}>
						Software Engineer
					</h1>
					<h2 style={{ color: "black", fontSize: "1.2rem" }}>Educator Admin</h2>
					<h3 style={{ color: "black" }}>February 2022 - November 2022</h3>
				</div>
			</div>
		</>
	);
};

export default Experience;
