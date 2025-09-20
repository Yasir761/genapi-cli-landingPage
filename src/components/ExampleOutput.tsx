import { motion } from "framer-motion";

export default function ExampleOutput() {
  const output = `my-api/
├── server.js
├── schema/
│   ├── resolvers.js
│   └── typeDefs.js
└── package.json`;

  return (
    <section id="example-output" className="py-20 bg-slate-950 text-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Example Output</h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg border border-slate-800"
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="ml-auto text-xs text-gray-400 font-mono">output</span>
        </div>

        {/* Code Block */}
        <pre className="bg-slate-900 p-6 font-mono text-sm text-gray-200 overflow-x-auto">
          {output.split("\n").map((line, i) => {
            // Highlight folders in cyan, files in orange
            // const folderLine = line.includes("├──") || line.includes("└──");
            const isFolder = line.includes("/") && !line.includes(".js");
            return (
              <div key={i}>
                {line.split(" ").map((part, idx) => {
                  let colorClass = "text-gray-200";
                  if (isFolder && part.includes("/")) colorClass = "text-cyan-400";
                  if (!isFolder && part.includes(".js")) colorClass = "text-orange-400";
                  return (
                    <span key={idx} className={colorClass}>
                      {part}{" "}
                    </span>
                  );
                })}
              </div>
            );
          })}
        </pre>
      </motion.div>
    </section>
  );
}
