import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import EarlyAccessInterrupt from "@/components/EarlyAccessInterrupt";
import BrandSignature from "@/components/BrandSignature";
import ChristmasPopup from "@/components/ChristmasPopup";

export default function Home() {
    return (
        <main className="relative">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <EarlyAccessInterrupt />
            <BrandSignature />
            <ChristmasPopup />
        </main>
    );
}
