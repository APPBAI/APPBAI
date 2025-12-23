import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import EarlyAccessInterrupt from "@/components/EarlyAccessInterrupt";
import BrandSignature from "@/components/BrandSignature";

export default function Home() {
    return (
        <main className="relative">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <EarlyAccessInterrupt />
            <BrandSignature />
        </main>
    );
}
