import Link from "next/link";
import styles from "./index.module.css";

const Introduction = () => {
    return (
        <div className={styles.introductionWrapper}>
            <h1 className={styles.introductionText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <div className={styles.writeStoryContainer}>
                <div className={styles.rotatingText}>
                    <svg viewBox="0 0 100 100" width="100%" height="100%">
                        <defs>
                            <path
                                id="circle"
                                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                            />
                        </defs>
                        <text fontSize="7.5">
                            <textPath href="#circle" className={styles.rotatingTextPath}>
                                Write Your Story • Share Your Idea • Write Your Story •
                            </textPath>
                        </text>
                    </svg>
                </div>
                <Link href="/write" className={styles.writeStory}>
                    <svg
                        className={styles.arrow}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                            fill="currentColor"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default Introduction