import Image from "next/image";
import styles from "../styles/Banner.module.css";

export default function About() {
	return (
		<>
			<div>
				<h1 style={{ fontSize: "45px", color: "black" }}>About Me</h1>
				<p
					style={{
						margin: "0px 40px 0px 40px",
						color: "black",
						fontSize: "20px",
					}}
				>
					I am a junior software engineer with a great affinity for problem
					solving. I am highly motivated to learn and take on new challenges. I
					am known by my teams for innovative thinking and as a keen
					investigator of root causes of problems. My background in Mathematics
					as well as Computer Science, helps make programming exceptionally
					rewarding and logical for me.
				</p>
			</div>
		</>
	);
}
