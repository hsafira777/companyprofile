import { Code2, MonitorSmartphone, Layers } from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    description:
      "Beautiful, functional interfaces with user-focused design principles.",
    icon: <Layers className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Web Development",
    description:
      "Modern web apps using Next.js, TypeScript, and scalable architecture.",
    icon: <Code2 className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Responsive Design",
    description: "Mobile-first layouts that look great on any device.",
    icon: <MonitorSmartphone className="w-8 h-8 text-blue-600" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Services</h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          We provide cutting-edge design and development solutions to help your
          business grow.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-lg shadow hover:shadow-md transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
