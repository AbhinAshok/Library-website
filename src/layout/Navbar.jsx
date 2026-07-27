import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Collections", path: "/collections" },
    { name: "Visit", path: "/visit" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-24 lg:h-24 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight">

          <span className="font-serif font-bold text-3xl text-[#0F2747]">
            Dr. Sujathakumari
          </span>

          <span className="text-base text-gray-600">
            Memorial Library
          </span>

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">

          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition duration-300 ${isActive
                  ? "text-[#0F2747]"
                  : "text-gray-600 hover:text-[#0F2747]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* <Link
            to="/login"
            className="rounded-lg bg-[#0F2747] px-6 py-3 text-white hover:bg-[#183C6B] transition"
          >
            Member Login
          </Link> */}

        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex items-center justify-center w-12 h-12 rounded-lg hover:bg-gray-100 transition"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <HiX className="w-8 h-8 text-[#0F2747]" />
          ) : (
            <HiMenuAlt3 className="w-8 h-8 text-[#0F2747]" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-screen" : "max-h-0"
          }`}
      >
        <nav className="border-t bg-white px-6 py-6">

          <div className="flex flex-col gap-5">

            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium ${isActive
                    ? "text-[#0F2747]"
                    : "text-gray-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-lg bg-[#0F2747] py-3 text-center font-medium text-white"
            >
              Member Login
            </Link>

          </div>

        </nav>
      </div>
    </header>
  );
}