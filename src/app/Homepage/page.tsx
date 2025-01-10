import { AboutUs } from "@/components/aboutUs";
import { ChapterImage } from "@/components/chapterImages";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/herosection";
import { Navbar } from "@/components/navbar";
import { TeamMembers } from "@/components/teamMembers";
import { UpcomingEvents } from "@/components/upcomingEvents";
import React from "react";

// Default export
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <UpcomingEvents />
      <TeamMembers />
      <ChapterImage />
      <Footer />
    </div>
  );
};

export default Homepage; // Ensure this is a default export
