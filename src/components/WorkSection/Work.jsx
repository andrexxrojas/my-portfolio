import styles from "./Work.module.css";
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
    const containerRef = useRef(null);

    useEffect(() => {
        const boxes = gsap.utils.toArray(`.${styles["work-box"]}`)

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
                once: true
            }
        })

        tl.fromTo(
            boxes,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 1.1,
                ease: "power2.out",
            }
        )

        return () => {
            tl.scrollTrigger?.kill()
        }
    },[]);

    return (
        <div className={styles["wrapper"]}>
            <div className={styles["work-container"]} ref={containerRef}>
                <div className={styles["work-box"]}></div>
                <div className={styles["work-box"]}></div>
                <div className={styles["work-box"]}></div>
                <div className={styles["work-box"]}></div>
            </div>
        </div>
    )
}