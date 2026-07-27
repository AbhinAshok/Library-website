import { Link } from "react-router-dom";

export default function SectionHeader({
  title,
  subtitle,
  actionLabel,
  actionLink,
}) {
  return (
    <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="font-serif text-4xl font-bold text-[#0F2747]">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-3 max-w-2xl text-gray-600">
            {subtitle}
          </p>
        )}
      </div>

      {actionLabel && actionLink && (
        <Link
          to={actionLink}
          className="font-semibold text-[#C8A35D] transition hover:text-[#0F2747]"
        >
          {actionLabel} →
        </Link>
      )}
    </div>
  );
}