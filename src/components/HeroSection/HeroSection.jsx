import { useEffect, useRef, useState } from "react";
import { createScope, eases, createTimeline } from "animejs";
import styles from "./HeroSection.module.css";
import { gsap } from "gsap";

const alternatives = ["Seamless", "Intuitive", "Dynamic", "Immersive"];

export default function HeroSection() {
    const [status, setStatus] = useState("");
    const root = useRef(null);
    const scope = useRef(null);
    const wordRef = useRef(null);
    const indexRef = useRef(0);
    const introRef = useRef(null);
    const tagRef = useRef(null);

    useEffect(() => {
        let interval;
        let delay = 1;

        if (window.innerWidth <= 768) {
            delay = 0;
        }

        const tl = gsap.timeline();

        tl.fromTo(
            introRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: delay},
        )
            .fromTo(
                tagRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                "<0.2"
            )

        scope.current = createScope({ root }).add(() => {
            interval = setInterval(() => {
                const tl = createTimeline();

                tl.label("start")
                    .add(wordRef.current, {
                        y: -30,
                        opacity: 0,
                        duration: 1000,
                        easing: eases.outQuad,
                        onComplete: () => {
                            indexRef.current = (indexRef.current + 1) % alternatives.length;

                            if (wordRef.current) {
                                wordRef.current.textContent = alternatives[indexRef.current];
                            }
                        }
                    })
                    .add(wordRef.current, {
                        y: 0,
                        opacity: 1,
                        duration: 1000,
                        easing: eases.inQuad,
                    })

            }, 4000);
        });

        return () => {
            clearInterval(interval);
            scope.current.revert();
        };
    }, []);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/status`)
            .then((res) => res.json())
            .then((data) => setStatus(data.message))
            .catch((err) => console.error("Error fetching status:", err));
    }, []);


    return (
        <section ref={root} className={styles['hero-section-container']}>
            <p className={styles["status-text"]}>{status}</p>

            <p className={styles['intro-text']} ref={introRef}>
                Hey! I’m Jay Andre, a full-stack developer who loves bringing ideas to
                life through code. I enjoy creating digital experiences that are functional,
                intuitive, and user-centered.
            </p>

            <h1 className={styles['hero-hook']} ref={tagRef}>
                Craft {' '}
                <span className={styles['animated-word']} ref={wordRef}> {alternatives[0]}</span>
                <br/>
                Digital Experiences
            </h1>
        </section>
    )
}