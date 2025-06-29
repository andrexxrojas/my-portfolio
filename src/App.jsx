import styles from "./App.module.css";
import Nav from "./components/Nav/Nav.jsx";
import PageLayout from "./components/PageLayout/PageLayout.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import WorkSection from "./components/WorkSection/Work.jsx";

export default function App() {
    return (
        <div className={styles['app-container']}>
            <Nav/>
            <PageLayout>
                <HeroSection/>
                <WorkSection/>
            </PageLayout>
        </div>
    )
}