import styles from "./Nav.module.css";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function Nav({ onTalkClick }) {
    const listRef = useRef(null);
    const logoRef = useRef(null);
    const talkRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.4 } });

        const links = gsap.utils.toArray(`.${styles["list-item"]}`);

        tl.fromTo(
            links,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, stagger: 0.1 }
        )
            .fromTo(
                talkRef.current,
                { opacity: 0, y: 20},
                { opacity: 1, y: 0, duration: 0.4 },
                "<0.5"
            )
            .fromTo(
                logoRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0 },
            )

        return () => tl.kill();
    }, []);

    return (
        <nav className={styles['nav-container']}>
            <div className={styles['left']}>
                <ul className={styles['list-container']} ref={listRef}>
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

            <div className={styles['center']} ref={logoRef}>
                <h5 className={styles['logo']}>Andre.</h5>
            </div>

            <div className={styles['right']}>
                <button className={styles['cta-button']} onClick={onTalkClick} ref={talkRef}>
                    Let's Talk
                </button>
            </div>
        </nav>
    )
}