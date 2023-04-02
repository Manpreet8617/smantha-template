import Header from "../components/Header";
import FeaturedOne from "../components/FeaturedOne";
import AboutSection from "../components/AboutSection";
import BenifitsSection from "../components/BenifitsSection";
import MyProgram from "../components/MyProgram";
import CalculatorSection from "../components/CalulatorSection";
import BlogSection from "../components/BlogSection";
import TestimonialSection from "../components/TestimonialSection";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";
import ReadyTo from "../components/ReadyTo";

function Homepage() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <>
            <Header />
            <FeaturedOne />
            <AboutSection />
            <BenifitsSection />
            <MyProgram />
            <CalculatorSection />
            <BlogSection/>
            <TestimonialSection/>
            <ReadyTo/>
        </>
    );
}

export default Homepage;