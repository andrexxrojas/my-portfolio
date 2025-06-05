import { useEffect, useRef } from "react";
import { animate, createScope, eases, createTimeline } from "animejs";
import styles from "./HeroSection.module.css";

const alternatives = ["Seamless", "Intuitive", "Dynamic", "Immersive"];

export default function HeroSection() {
    const root = useRef(null);
    const scope = useRef(null);
    const wordRef = useRef(null);
    const indexRef = useRef(0);

    useEffect(() => {
        let interval;

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

    return (
        <section ref={root} className={styles['hero-section-container']}>
            <p className={styles['intro-text']}>
                Hey! I’m Jay Andre, a full-stack developer who loves bringing ideas to
                life through code. I enjoy creating digital experiences that are functional,
                intuitive, and user-centered.
            </p>

            <h1 className={styles['hero-hook']}>
                Craft {' '}
                <span className={styles['animated-word']} ref={wordRef}> {alternatives[0]}</span>
                <br/>
                Digital Experiences
            </h1>
        </section>
    )
}