import Image from "next/image";
import styles from "../styles/Banner.module.css";

const Experience = () => {
	return (
		<>
			<div>
				<h1 style={{ fontSize: "45px", color: "black" }}>Experience</h1>
				<div
					style={{
						maxWidth: '80%',
						height: "22rem",
						backgroundColor: "white",
						textAlign: "center",
						alignContent: 'center',
						padding: "1.5rem 3.5rem",
						display: 'flex',
						flexDirection: 'row',
						borderRadius: '4px',
						boxShadow: '0 15px 35px rgba(0, 0, 0, 0.25)'
					}}
				>
					<div style={{flexDirection: 'column', width: '75%', textAlign: 'left'}}>
					<h1 style={{ color: "black", fontSize: "1.5rem", fontWeight: 'bold' }}>Coursera</h1>
					<h2 style={{ color: "black", fontSize: "1.2rem", fontWeight: 'bold' }}>
						Software Engineer
					</h2>
					<h2 style={{ color: "black", fontSize: "1.2rem", fontWeight: 'bold' }}>Educator Admin Platform</h2>
					<h3 style={{ color: "black", fontWeight: 'bold', fontStyle: 'italic' }}>February 2022 - November 2022</h3>
					<ul style={{listStyleType: 'circle'}}>
						<li>Implemented Educator Home 2.0, a more UI-friendly dashboard, for university staff members to track courses between institutions</li>
						<li>Executed the implementation of Session Assistant Roles, including assisting in the scoping of the project, implementing key functionalities of the feature, and writing verbose unit tests. </li>
						<li>Improved productivity of course staff involvement by creating Session Permissions and Session Assistants.</li>
						<li>Enhanced efficiency and cohesiveness of test coverage while reducing errors by migrating Enzyme test suites to React Testing Library.</li>
						<li>Mentored and onboarded interns and contractors, advised them on best practices, scoped their projects, and wrote their tickets and ticket requirements. </li>
					</ul>
					</div>
					<div style={{ margin: 'auto', backgroundColor: 'blue'}}>
					<Image
					src={'/CourseraLogo.png'}
					width={300}
					height={300}
					alt={'Coursera'}
				/>
				</div>
				</div>
			</div>
		</>
	);
};

export default Experience;
