import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeBand from "./components/Marquee";
import StoriesGrid from "./components/StoriesGrid";
import AboutSection from "./components/AboutSection";
import PodcastSection from "./components/PodcastSection";
import ResourcesSection from "./components/ResourcesSection";
import CommunitySection from "./components/CommunitySection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeBand />
        <StoriesGrid />
        <AboutSection />
        <PodcastSection />
        <ResourcesSection />
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
}
