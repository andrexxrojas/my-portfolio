import styles from "./App.module.css";
import { useState } from "react";
import Nav from "./components/Nav/Nav.jsx";
import PageLayout from "./components/PageLayout/PageLayout.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import WorkSection from "./components/WorkSection/Work.jsx";
import Contact from "./components/Contact/Contact.jsx";

export default function App() {
    const [showContact, setShowContact] = useState(false);

    return (
        <div className={styles['app-container']}>
            <Nav onTalkClick={() => setShowContact(true)}/>
            <PageLayout>
                <HeroSection/>
                <WorkSection/>
            </PageLayout>
            {showContact && <Contact onClose={() => setShowContact(false)} />}
        </div>
    )
}