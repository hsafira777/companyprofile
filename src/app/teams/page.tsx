"use client";

import { useEffect, useState } from "react";

type TeamMember = {
  name: string;
  photo: string;
  role: string;
  bio: string;
};

export default function TeamsPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/?results=6");
        const data = await res.json();

        const roles = [
          "UI/UX Designer",
          "Frontend Developer",
          "Backend Developer",
          "Project Manager",
          "QA Tester",
          "Marketing Strategist",
        ];

        const bios = [
          "Passionate about creating meaningful design experiences.",
          "Loves building accessible and performant interfaces.",
          "Specializes in API architecture and scalability.",
          "Ensures project timelines and team coordination.",
          "Dedicated to bug-free, tested code.",
          "Focuses on growth and brand voice online.",
        ];

        const formatted = data.results.map((person: any, index: number) => ({
          name: `${person.name.first} ${person.name.last}`,
          photo: person.picture.large,
          role: roles[index % roles.length],
          bio: bios[index % bios.length],
        }));

        setTeam(formatted);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch team data", err);
      }
    };

    fetchTeam();
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-12">
        Meet Our Team
      </h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading team members...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-sm border p-6 rounded-lg text-center"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold text-indigo-800">
                {member.name}
              </h2>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
