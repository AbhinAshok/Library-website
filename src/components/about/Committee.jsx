import committee from "../../data/committee.json";

export default function Committee() {
  return (
    <section className="py-24 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="font-serif text-3xl text-[#0F2747]">
          Library Committee
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          {committee.map((member, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow bg-white"
            >
              
              <div className="p-6">
                <h3 className="font-serif text-2xl text-[#0F2747]">
                  {member.name}
                </h3>
                <p className="text-[#C8A35D]">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}