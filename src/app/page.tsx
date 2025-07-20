import Link from "next/link";

export const metadata = {
  title: "Digitech | Web Solutions for the Digital Age",
  description:
    "Digitech provides cutting-edge web and mobile solutions to elevate your digital presence. Explore our blog, services, and innovations.",
  keywords: ["Digitech", "web development", "digital solutions", "tech company", "Next.js"],
  authors: [{ name: "Digitech" }],
  robots: "index, follow",
};

export default function HomePage() {
  return (
    <main className="space-y-24 bg-white">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[100vh] bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/building.jpg')" }}
      >
        <div className="bg-black/50 absolute inset-0 z-0" />
        <div className="relative z-10 max-w-3xl text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We Power Brands with Innovation and Design
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Creative tech solutions tailored to your business.
          </p>
          <Link
            href="/about"
            className="bg-white text-indigo-700 px-6 py-2 rounded font-semibold hover:bg-gray-200 inline-block"
          >
            More About Us
          </Link>
        </div>
      </section>

      {/* Company Overview */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our team is a collective of passionate creatives and developers with a
          mission to make digital experiences beautiful, functional, and
          impactful. With years of experience, we empower businesses with
          tailored digital products.
        </p>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              icon: "💡",
              title: "Creative Design",
              desc: "Beautiful and user-friendly interface design.",
            },
            {
              icon: "🛠️",
              title: "Web Development",
              desc: "Robust, scalable websites with modern frameworks.",
            },
            {
              icon: "📱",
              title: "App Development",
              desc: "Seamless cross-platform mobile applications.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white shadow-md p-6 rounded-lg text-center border"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="bg-indigo-700 text-white px-6 py-2 rounded hover:bg-indigo-800"
          >
            Explore All Services
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 text-center py-20">
        <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              quote:
                "They delivered way beyond expectations. The website is beautiful and fast.",
              name: "Sarah A.",
              role: "Startup Founder",
            },
            {
              quote:
                "Working with them was seamless and professional. Highly recommended.",
              name: "David R.",
              role: "CEO, TechCorp",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white shadow p-6 rounded-lg border text-left"
            >
              <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
              <p className="font-semibold">
                {t.name},{" "}
                <span className="text-sm text-gray-500">{t.role}</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
