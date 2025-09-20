import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Copy } from "lucide-react";
import { motion } from "framer-motion";

export default function InstallCommand() {
  const [copied, setCopied] = useState(false);
  const code = "npm i genapi-cli";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="relative w-full max-w-xl mx-auto mt-12 rounded-2xl shadow-xl overflow-hidden border border-slate-800"
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 border-b border-slate-700">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <span className="ml-auto text-xs text-gray-200 font-mono">bash</span>
      </div>

      {/* Code block */}
      <Highlight code={code} language="bash" theme={themes.dracula}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} p-6 font-mono text-sm text-gray-100`}
            style={{
              ...style,
              backgroundColor: "#0f172a",
              borderRadius: "0 0 1rem 1rem",
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>

      {/* Copy button */}
      <motion.button
        onClick={copyToClipboard}
        whileTap={{ scale: 0.95 }}
        className={`absolute top-3 right-3 px-3 py-1.5 text-xs rounded-md flex items-center gap-1 transition
          ${copied ? "bg-indigo-600 shadow-md shadow-indigo-500/50 text-white" : "bg-slate-800 hover:bg-slate-700 border border-slate-600 text-gray-300"}`}
      >
        <Copy className="w-4 h-4" />
        {copied ? "Copied!" : "Copy"}
      </motion.button>
    </motion.div>
  );
}
