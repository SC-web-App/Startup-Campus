import { AboutUs } from "@/components/aboutUs"
import { ChapterImage } from "@/components/chapterImages"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/herosection"
import { Navbar } from "@/components/navbar"
import { TeamMembers } from "@/components/teamMembers"
import { UpcomingEvents } from "@/components/upcomingEvents"
import React from "react"


export const Homepage = () => {
  return(
    <div>
        <Navbar />
        <HeroSection />
        <AboutUs />
        <UpcomingEvents />
        <TeamMembers />
        <ChapterImage />
        <Footer />
    </div>
  )
}