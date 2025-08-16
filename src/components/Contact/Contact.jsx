import ReactDOM from 'react-dom';
import { useState } from "react";
import styles from './Contact.module.css';

export default function Contact({ onClose }) {
    const [stepIndex, setStepIndex] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const nextStep = () => setStepIndex((prev) => prev + 1);
    const prevStep = () => setStepIndex((prev) => prev - 1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleNext = (requiredFields) => {

        const isValid = requiredFields.every(
            (field) => formData[field] && formData[field].trim() !== ""
        );

        if (!isValid) {
            alert("Please fill in all required fields.");
            return;
        }

        // Email format check
        if (requiredFields.includes("email")) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
            alert("Please enter a valid email address.");
            return;
            }
        }

        setStepIndex((prev) => prev + 1);
    };




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
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder="Your Name" 
                                    required 
                                    onChange={handleChange}
                                />
                                <input 
                                    type="text" 
                                    name="email"
                                    placeholder="Email" 
                                    required 
                                    onChange={handleChange}
                                />
                                <button
                                    type="next-btn"
                                    className={styles['next-btn']}
                                    onClick={() => handleNext(["name", "email"])}
                                >
                                    Next
                                </button>
                            </>
                        )}
                        {stepIndex === 2 && (
                            <>
                                <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                />
                                <textarea
                                name="message"
                                placeholder="Your message*"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                />
                                <div className={styles["nav-btns"]}>
                                <button type="button" onClick={prevStep}>
                                    Back
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleNext(["subject", "message"])}
                                >
                                    Submit
                                </button>
                                </div>
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
