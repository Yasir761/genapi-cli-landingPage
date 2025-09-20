import { motion } from "framer-motion";
import { Github, PlusCircle, Bug } from "lucide-react";

export default function Contributing() {
  return (
    <section className="py-20 bg-slate-900 text-gray-100">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
      >
        Contributing
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-3xl mx-auto mt-10 space-y-6 bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-700"
      >
        <p className="text-gray-300 text-lg">We welcome contributions! 🚀</p>

        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <Bug className="w-5 h-5 text-red-400 flex-shrink-0" />
            <span>Report bugs via GitHub Issues</span>
          </li>
          <li className="flex items-center gap-3">
            <PlusCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span>Suggest features via Feature Request template</span>
          </li>
          <li className="flex items-center gap-3">
            <Github className="w-5 h-5 text-gray-300 flex-shrink-0" />
            <span>Submit pull requests with clear descriptions</span>
          </li>
        </ul>

        <p className="mt-4 text-gray-300 text-sm md:text-base">
          Please read our{" "}
          <a
            href="#"
            className="text-blue-400 underline hover:text-blue-300 transition"
          >
            Contributing Guide
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-blue-400 underline hover:text-blue-300 transition"
          >
            Code of Conduct
          </a>
          .
        </p>
      </motion.div>
    </section>
  );
}
