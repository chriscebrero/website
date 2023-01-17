import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import SocialApps from "../components/SocialApps";
import About from "../components/About";
import Skills from "../components/Skills";
import ExperienceApp from "../components/ExperienceApp";
import Navigator from "../components/Navigator";
import ProjectApp from "../components/ProjectApp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Navigator />
				<Banner />
				<SocialApps />
				<About />
				<Skills />
				<ExperienceApp />
				<ProjectApp />
			</main>
		</>
	);
}