import { CheckCircle2 } from "lucide-react"; // install lucide-react for icons
import { motion } from "framer-motion";

const features = [
  "Generate REST API boilerplate",
  "Generate GraphQL API boilerplate",
  "Interactive prompts OR direct CLI flags",
  "Ready-to-use folder structures",
  "Express, Apollo, and MongoDB setup",
];

export default function Features() {
  return (
    <section className="py-24 bg-slate-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center tracking-tight text-white">
         Features
        </h2>
        <p className="mt-4 text-lg text-gray-400 text-center max-w-2xl mx-auto">
          Everything you need to scaffold APIs quickly and professionally.
        </p>

        {/* Feature Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-slate-900/60 to-slate-900/40 border border-slate-800 rounded-3xl p-6 flex items-start gap-4 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>
              <p className="text-lg font-semibold text-white">{f}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
