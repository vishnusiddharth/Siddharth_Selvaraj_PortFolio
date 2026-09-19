import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Achievements } from "@/components/Achievements";
import { Writing } from "@/components/Writing";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <ProjectGrid />
        <Achievements />
        <Writing />
        <ExperienceTimeline />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
