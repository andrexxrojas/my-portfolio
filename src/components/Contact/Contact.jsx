import ReactDOM from 'react-dom';
import { useState } from "react";
import styles from './Contact.module.css';

export default function Contact({ onClose }) {
    const [stepIndex, setStepIndex] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const nextStep = () => setStepIndex((prev) => prev + 1);
    const prevStep = () => setStepIndex((prev) => prev - 1);



    return ReactDOM.createPortal(
        <div className={styles['contact-wrapper']} onClick={onClose}>
            <div
                className={styles['contact-container']}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles["contact-content"]}>
                    <div className={styles["form-container"]}>
                        {stepIndex === 1 && (
                            <>
                                <input type="text" placeholder="Your name*" required />
                                <input type="text" placeholder="Email*" required />
                                <input type="text" placeholder="Phone Number*" required />
                                <button
                                    type="next-btn"
                                    className={styles['next-btn']}
                                >
                                    Next
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <button className={styles["close-btn"]} onClick={onClose}>Close</button>
            </div>
        </div>,
        document.getElementById('portal-root')
    );
}
