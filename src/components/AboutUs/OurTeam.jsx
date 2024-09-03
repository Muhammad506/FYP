import { useInView } from "react-intersection-observer";

const OurTeam = () => {
  const { ref: sectionRefs, inView: sectionInViews } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const teamData = [
    {
      name: "M. Umer Saleem",
      role: "Founder and CEO of Solar Intelli Solutions.",
      description:
        "Leading the development of innovative solar technologies, Umer ensures top-notch service and drives our mission for sustainable energy solutions.",
      image:
        "https://solar-intelli-solutions.odoo.com/web/image/934-d39bd088/WhatsApp%20Image%202024-08-19%20at%205.12.08%20PM.webp",
      animation: "animate-slideInLeft",
    },
    {
      name: "Ammad-Ud-Din",
      role: "Designer of the Solar Intelli Solutions website.",
      description:
        "Ammad-Ud-Din ensures our website embodies Solar Intelli Solutions' commitment to exceptional solar solutions and a user-friendly experience.",
      image:
        "Ammad.jpg",
      animation: "animate-slideInRight",
    },
  ];

  return (
    <main className="flex flex-col items-center pt-24 pb-12 bg-gray-100">
      <div className="text-center px-6 md:px-12 lg:px-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl animate-fadeIn font-bold text-gray-800 mb-24">
          Meet Our Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamData.map((member, index) => (
            <div
              key={index}
              ref={(el) => sectionRefs(el)}
              className={`flex flex-col md:flex-row items-start text-left transition-transform transform ${
                sectionInViews ? member.animation : "opacity-0"
              } ${
                index < teamData.length - 1
                  ? "border-b-2 md:border-b-0 md:border-r-2 border-gray-300"
                  : ""
              } pb-8 md:pb-0 md:pr-8`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full mb-4 md:mb-0 md:mr-6 w-32 h-32 object-cover"
              />
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h2>
                <p className="text-gray-500 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default OurTeam;
