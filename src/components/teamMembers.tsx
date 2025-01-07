import React from "react";
import TeamMemberCard from "./teamMemberCard";

const teamMembers = [
  {
    name: "Idris Shaaba",
    roleAbbreviation: "CEO",
    role: "Chief Executive Officer",
    imageUrl: "",
  },
  {
    name: "Shafaatu Aminu Danmusa",
    roleAbbreviation: "COO",
    role: "Chief Operating Officer",
    imageUrl: "/team-members-img/Shafaatu Aminu Danmusa.png",
  },
  {
    name: "Zeenat Harith Sulayman",
    roleAbbreviation: "Exec. Sec.",
    role: "Executive Secretary",
    imageUrl: "/team-members-img/Zeenat Harith Sulayman.png",
  },
  {
    name: "Muzzamil Raji",
    roleAbbreviation: "CTO",
    role: "Chief Technical Officer",
    imageUrl: "/team-members-img/Muzzamil Raji.png",
  },
  {
    name: "Zainab Sadeeq Sule-Iko",
    roleAbbreviation: "CMO",
    role: "Chief Marketing Officer",
    imageUrl: "/team-members-img/Zainab Sadeeq Sule-Iko.png",
  },
  {
    name: "Kelechi Theresa Chukwu",
    roleAbbreviation: "CFO",
    role: "Chief Financial Officer",
    imageUrl: "/team-members-img/Kelechi Theresa Chukwu.png",
  },
  {
    name: "Nabilah Abdulrahim",
    roleAbbreviation: "PM",
    role: "Program Manager",
    imageUrl: "/team-members-img/Nabilah Abdulrahim.png",
  },
  {
    name: "Ransom Philemon",
    roleAbbreviation: "Asst. PM",
    role: "Assistant Program Manager",
    imageUrl: "/team-members-img/Ransom Philemon.png",
  },
  {
    name: "Khadija Sani Musa",
    roleAbbreviation: "-",
    role: "Content Creator",
    imageUrl: "/team-members-img/Khadija Sani Musa.png",
  },
  {
    name: "Claire Erhaunga",
    roleAbbreviation: "PM",
    role: "Project Manager",
    imageUrl: "",
  },
  {
    name: "Faridah Okeniyi",
    roleAbbreviation: "-",
    role: "Content Creator",
    imageUrl: "/team-members-img/Faridah Okeniyi.png",
  },
  {
    name: "Dr. Umar Adam I. Ph.D.",
    roleAbbreviation: "Lecturer",
    role: "Club Advisor",
    imageUrl: "/team-members-img/Dr. Umar Adam I. Ph.D..png",
  },
];

export const TeamMembers: React.FC = () => {
  return (
    <section className="bg-cyan-950 py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <p
          className="text-center text-white mb-2"
          style={{
            fontSize: "21px",
            fontWeight: 250,
            lineHeight: "22px",
            letterSpacing: "0.15px",
          }}
        >
          Who are there to support you?
        </p>
        <h2
          className="text-center text-white mb-2"
          style={{
            fontSize: "32px",
            fontWeight: 500,
            lineHeight: "40px",
            letterSpacing: "0.5px",
          }}
        >
          Team Members
        </h2>

        <p
          className="text-center text-white mb-10"
          style={{
            fontSize: "28px",
            fontWeight: 250,
            lineHeight: "32px",
          }}
        >
          We are the people who make up Nile Startup Campus
        </p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              roleAbbreviation={member.roleAbbreviation}
              role={member.role}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
