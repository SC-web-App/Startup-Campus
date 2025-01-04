import React from "react";

type TeamMemberProps = {
  name: string;
  roleAbbreviation: string;
  role: string;
  imageUrl?: string;
};

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  name,
  roleAbbreviation,
  role,
  imageUrl,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full aspect-[380/391] relative">
      <img
        src={imageUrl || "/team-members-img/default-profile.png"}
        alt={`${name}'s profile`}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-4 left-4 right-4 bg-white shadow-md rounded-md p-4 text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">{roleAbbreviation}</p>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
