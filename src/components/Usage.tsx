import { Highlight, themes } from "prism-react-renderer";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";

interface TerminalProps {
  code: string;
  language?: string;
}

function Terminal({ code, language = "bash" }: TerminalProps) {
  const copyToClipboard = () => navigator.clipboard.writeText(code);

  return (
    <div  className="rounded-xl overflow-hidden shadow-lg border border-gray-700">
      {/* Terminal header */}
      <div id="usage" className="flex items-center gap-2 px-4 py-2 bg-gray-800">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <button
          onClick={copyToClipboard}
          className="ml-auto text-gray-400 hover:text-white transition flex items-center gap-1 text-xs"
        >
          <Copy className="w-3 h-3" /> Copy
        </button>
      </div>

      {/* Code block */}
      <Highlight code={code} language={language} theme={themes.dracula}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} p-4 overflow-x-auto`}
            style={{ ...style, backgroundColor: "#0f172a" }}
          >
            {tokens.map((line, i) => (
              <motion.div
                key={i}
                {...getLineProps({ line })}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.03 }}
              >
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </motion.div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

export default function Usage() {
  return (
    <section className="py-20 bg-slate-900 text-gray-100">
      <div className="max-w-3xl mx-auto px-6 space-y-12">
        <h2 className="text-3xl font-bold text-center tracking-tight">
          Usage
        </h2>

        <div className="space-y-8">
          <div>
            <p className="font-semibold mb-3 text-lg">Interactive mode:</p>
            <Terminal code="genapi-cli" />
          </div>

          <div>
            <p className="font-semibold mb-3 text-lg">Direct mode:</p>
            <Terminal
              code={`genapi-cli my-api --framework express --type rest
genapi-cli my-api --framework express --type graphql`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
