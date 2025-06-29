import styles from "./Work.module.css";

export default function Work() {
    return (
        <div className={styles["wrapper"]}>
            <div className={styles["work-container"]}>
                <div className={styles["work-box"]}></div>
                <div className={styles["work-box"]}></div>
                <div className={styles["work-box"]}></div>
                <div className={styles["work-box"]}></div>
            </div>
        </div>
    )
}