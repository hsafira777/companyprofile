"use client";

export default function ServicesPage() {
  const services = [
    {
      title: "Creative Design",
      description:
        "We craft visually stunning and intuitive UI/UX that enhance brand experience across web and mobile platforms.",
      price: "Starting at $500",
      testimonial: "“Their design transformed our brand’s image.” – L. Tanaka",
    },
    {
      title: "Web Development",
      description:
        "Modern, responsive websites using the latest technologies including React, Next.js, and Tailwind CSS.",
      price: "Starting at $800",
      testimonial: "“Fast, scalable, and beautiful code.” – R. Hasibuan",
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile apps built with React Native to reach users on both iOS and Android seamlessly.",
      price: "Custom pricing available",
      testimonial: "“Smooth app experience loved by our users.” – M. Cahya",
    },
    {
      title: "Backend & API",
      description:
        "Secure, robust, and scalable backend systems and custom APIs for your business needs.",
      price: "Starts at $700",
      testimonial:
        "“The backend integration was flawless and fast.” – A. Winata",
    },
    {
      title: "SEO & Analytics",
      description:
        "Drive traffic and measure performance with expert SEO setup and analytics integration.",
      price: "From $300/month",
      testimonial: "“We saw a 50% increase in organic traffic.” – C. Marlina",
    },
    {
      title: "Consultation & Strategy",
      description:
        "Guiding your digital strategy from brand discovery to product launch and growth.",
      price: "Hourly or Project-based",
      testimonial: "“They helped us plan for long-term growth.” – N. Fajar",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-20 space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">
          Our Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We offer a full suite of creative and technical services tailored to
          help your brand succeed in the digital world.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border shadow-sm p-6 rounded-lg space-y-3"
          >
            <h2 className="text-xl font-semibold text-indigo-800">
              {service.title}
            </h2>
            <p className="text-gray-700 text-sm">{service.description}</p>
            <p className="text-indigo-600 font-medium">{service.price}</p>
            <blockquote className="italic text-sm text-gray-500">
              {service.testimonial}
            </blockquote>
          </div>
        ))}
      </section>
    </main>
  );
}
