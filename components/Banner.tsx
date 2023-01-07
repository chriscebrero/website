import Image from "next/image";
import styles from "../styles/Banner.module.css";

export default function Banner() {
	return (
		<>
			<div className={styles.bannerContainer}>
				<Image
					className={styles.imageSizing}
					src="/profilePhoto.jpeg"
					width={250}
					height={250}
					alt="profilepicture"
				/>
				<div className={styles.titleContainer}>
					<h1 className={styles.titleFont}>Christian Cebrero</h1>
					<h1 className={styles.titleFont}>Software Engineer</h1>
				</div>
			</div>
		</>
	);
}
