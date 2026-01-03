import TeamMemberCard from "./TeamMemberCard";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    bio: "Former growth leader at top tech companies. Passionate about helping businesses unlock their potential.",
    image: "/team-placeholder-1.jpg", // Replace with actual images
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Strategy",
    bio: "Data scientist with 10+ years of experience in performance marketing and growth analytics.",
    image: "/team-placeholder-2.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Head of Marketing",
    bio: "Marketing expert specializing in AI-powered automation and conversion optimization.",
    image: "/team-placeholder-3.jpg",
  },
];

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl md:gap-2xl">
      {teamMembers.map((member) => (
        <TeamMemberCard
          key={member.name}
          name={member.name}
          role={member.role}
          bio={member.bio}
          image={member.image}
        />
      ))}
    </div>
  );
}

