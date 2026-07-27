import { FaBookOpen, FaUsers, FaLeaf } from "react-icons/fa";

export default function Values() {
  const values = [
    { title: "Knowledge", icon: <FaBookOpen /> },
    { title: "Community", icon: <FaUsers /> },
    { title: "Sustainability", icon: <FaLeaf /> },
  ];

  return (
    <section className="py-24 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="font-serif text-4xl mb-14 text-[#0F2747]">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-10 text-center"
            >
              <div className="text-5xl text-[#C8A35D] flex justify-center">
                {item.icon}
              </div>
              <h3 className="mt-6 text-2xl font-serif text-[#0F2747]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}