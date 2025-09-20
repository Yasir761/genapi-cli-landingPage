import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Usage from "./components/Usage";
import ExampleOutput from "./components/ExampleOutput";
// import Contributing from "./components/contributing";
import Contributors from "./components/contributors";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-gray-100">
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <Hero />

        <section className="pt-16">
          <Features />
        </section>

        <section className="pt-16">
          <Usage />
        </section>

        <section className="pt-16">
          <ExampleOutput />
        </section>

        {/* <section className="pt-16">
          <Contributing />
        </section> */}

        <section className="pt-16">
          <Contributors />
        </section>
      </motion.main>

      <Footer />
    </div>
  );
}
