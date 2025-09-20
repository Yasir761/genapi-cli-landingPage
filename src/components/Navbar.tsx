import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { name: "Docs", href: "#", disabled: true },
    { name: "GitHub", href: "https://github.com/Yasir761/genapi-cli", disabled: false },
  ];

  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800 shadow-md">
      {/* Logo */}
      <h1 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
        GenAPI
      </h1>

      {/* Navigation */}
      <nav className="flex gap-6 md:gap-10 text-sm md:text-base font-medium">
        {navLinks.map((link, i) =>
          link.disabled ? (
            <span
              key={i}
              className="text-gray-500 cursor-not-allowed opacity-70"
            >
              {link.name}
            </span>
          ) : (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-gray-300 hover:text-orange-400 transition-colors font-medium group"
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          )
        )}
      </nav>
    </header>
  );
}
