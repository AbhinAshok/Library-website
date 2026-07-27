export default function ContactCard({
  icon,
  title,
  value,
}) {
  return (
    <div className="rounded-xl bg-white p-8 shadow">

      <div className="text-4xl text-[#C8A35D]">
        {icon}
      </div>

      <h3 className="mt-5 text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-gray-600">
        {value}
      </p>

    </div>
  );
}