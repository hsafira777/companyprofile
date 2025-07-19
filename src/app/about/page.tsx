"use client";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 space-y-20">
      <section>
        <h1 className="text-4xl font-bold mb-4 text-indigo-700">About Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Founded in 2015, our company was born from a shared passion for design
          and technology. We began as a small team building websites for local
          businesses and have grown into a full-scale digital agency working
          with clients around the world.
        </p>
        <p className="text-gray-600 mt-4">
          Milestones include reaching 100+ successful project launches, opening
          two new branches, and being awarded “Top Tech Innovator” in 2022.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">Our Culture</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          At the heart of our company is a culture of creativity, collaboration,
          and continuous learning. We believe in empowering each team member to
          contribute ideas and take ownership of projects.
        </p>
        <p className="text-gray-600 mt-4">
          We value open communication, celebrate small wins, and foster a
          supportive environment where innovation thrives.
        </p>
      </section>
    </main>
  );
}
