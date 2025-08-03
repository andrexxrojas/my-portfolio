import styles from "./Nav.module.css";

export default function Nav() {
    return (
        <nav className={styles['nav-container']}>
            <div className={styles['left']}>
                <ul className={styles['list-container']}>
                    <li className={styles['list-item']}>Home</li>
                    <li className={styles['list-item']}>Work</li>
                    <li className={styles['list-item']}>About</li>
                    <li className={styles['list-item']}>
                        <a 
                            href="https://drive.google.com/file/d/1f8LXeMN2PUr3Gy-cF5iReD72rKCwD0YT/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styles['center']}>
                <h5 className={styles['logo']}>Andre.</h5>
            </div>

            <div className={styles['right']}>
                <button className={styles['cta-button']}>Let's Talk</button>
            </div>
        </nav>

    )
}