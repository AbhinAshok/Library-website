export default function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-[#0F2747] text-white hover:bg-[#183C6B]",
    secondary:
      "bg-[#C8A35D] text-white hover:bg-[#B89246]",
    outline:
      "border border-[#0F2747] text-[#0F2747] hover:bg-[#0F2747] hover:text-white",
    ghost:
      "text-[#0F2747] hover:bg-gray-100",
  };

  return (
    <button
      type={type}
      className={`rounded-lg px-6 py-3 font-medium transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}