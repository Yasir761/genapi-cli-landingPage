import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Contributor {
  name: string;
  avatar: string;
  url: string;
}

export default function Contributors() {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContributors() {
      try {
        const res = await fetch(
          "https://api.github.com/repos/Yasi761/genapi-cli/contributors"
        );
        const data = await res.json();

        const formatted: Contributor[] = data.map((c: any) => ({
          name: c.login,
          avatar: c.avatar_url,
          url: c.html_url,
        }));

        setContributors(formatted);
      } catch (error) {
        console.error("Failed to fetch contributors:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchContributors();
  }, []);

  return (
    <section className="py-20 bg-slate-950 text-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Contributors</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-20 h-20 rounded-full bg-gray-800 animate-pulse"
              />
            ))
          : contributors.map((c: Contributor, i: number) => (
              <motion.a
                key={i}
                href={c.url}
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center hover:scale-105 transition-transform"
              >
                <img
                  src={c.avatar}
                  alt={c.name}
                  className="w-20 h-20 rounded-full border-2 border-gradient-to-tr from-indigo-400 via-pink-400 to-orange-400 ring-2 ring-slate-900"
                />
                <p className="mt-2 text-sm text-center">{c.name}</p>
              </motion.a>
            ))}
      </div>
    </section>
  );
}
