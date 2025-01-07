import { Footer } from "@/components/footer";
import { GlobalAboutUs } from "@/components/globalAboutUs";
import { GlobalCoreSections } from "@/components/globalCoreSections";
import { GlobalFounders } from "@/components/globalFounders";
import { GlobalGallery } from "@/components/globalGallery";
import { GlobalGetInTouch } from "@/components/globalGetInTouch";
import { GlobalJoinALaunchPad } from "@/components/globalJoinALaunchPad";
import { GlobalStartUpExposure } from "@/components/globalStartUpExposure";
import { GlobalTeamMembers } from "@/components/globalTeamMembers";
import { GlobalUpcomingEvents } from "@/components/globalUpcomingEvents";
import { Navbar } from "@/components/navbar";

const GlobalStartUpCampus = () => {
  return (
    <div>
      <Navbar />
      <GlobalJoinALaunchPad />
      <GlobalAboutUs />
      <GlobalCoreSections />
      <GlobalStartUpExposure />
      <GlobalUpcomingEvents />
      <GlobalGallery />
      <GlobalFounders />
      <GlobalTeamMembers />
      <GlobalGetInTouch />
      <Footer />
    </div>
  );
};

export default GlobalStartUpCampus; // Make sure this is a default export
