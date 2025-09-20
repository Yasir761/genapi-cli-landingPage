export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 px-6 py-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          GenAPI
        </h1>

        {/* Links */}
        <ul className="flex flex-wrap items-center gap-6 text-sm font-medium">
          <li>
            <a
              href="https://www.github.com/Yasir761/genapi-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              GitHub
            </a>
          </li>
          {/* Add more links when ready, e.g. Docs, Guide */}
        </ul>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} GenAPI. All rights reserved.
      </div>
    </footer>
  );
}
