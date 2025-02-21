import styles from "./index.module.css";


const BreadCrumb = () => {
    return (
        <div className={styles.breadCrumbWrapper}>
            <span className={styles.brdCrumbFirstTxt}>Home</span>
            <span className={styles.brdCrumbDot}>.</span>
            <span className={styles.brdCrumbSecondTxt}>Blogs And Articles</span>
        </div>
    )
}

export default BreadCrumb