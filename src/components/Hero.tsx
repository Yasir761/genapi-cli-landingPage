import { useState } from "react";
import { Copy } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("npx genapi-cli");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Smooth scroll to a section
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-28 overflow-hidden">
      {/* Background floating blobs */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-red-500/20 rounded-full -top-40 -left-40 blur-3xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-full -bottom-36 -right-36 blur-3xl"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      {/* Headline */}
      <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(249,115,22,0.5)]">
        GenAPI CLI
      </h1>

      {/* Subheadline */}
      <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
        Scaffold <span className="text-orange-400 font-semibold">REST</span> &{" "}
        <span className="text-pink-400 font-semibold">GraphQL</span> APIs with
        Express — <span className="text-gray-100 font-semibold">in seconds</span>.
      </p>

      {/* CLI Command Box */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: copied ? 1.03 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="mt-10 flex items-center bg-slate-900/80 backdrop-blur-sm rounded-lg px-5 py-3 font-mono text-base text-gray-200 border border-slate-700 shadow-lg"
      >
        <code className="whitespace-nowrap">npx genapi-cli</code>
        <button
          onClick={copyCommand}
          className={`ml-4 text-sm px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-md flex items-center gap-1 transition ${
            copied ? "shadow-md shadow-orange-500/50" : ""
          }`}
        >
          <Copy className="w-4 h-4" />
          {copied ? "Copied!" : "Copy"}
        </button>
      </motion.div>

      {/* CTA Buttons */}
      <div className="mt-10 flex gap-4 flex-wrap justify-center">
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          onClick={() => scrollToSection("usage")}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 font-medium text-white shadow-lg shadow-orange-500/30 transition"
        >
          Get Started →
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          onClick={() => scrollToSection("example-output")}
          className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 font-medium border border-slate-700 text-gray-200 transition"
        >
          Live Demo →
        </motion.button>
      </div>
    </section>
  );
}
