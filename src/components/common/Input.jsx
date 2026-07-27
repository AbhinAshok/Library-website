export default function Input({
  className = "",
  ...props
}) {
  return (
    <input
      className={`
        w-full
        rounded-lg
        border
        border-gray-300
        px-4
        py-3
        outline-none
        focus:ring-2
        focus:ring-[#0F2747]
        ${className}
      `}
      {...props}
    />
  );
}