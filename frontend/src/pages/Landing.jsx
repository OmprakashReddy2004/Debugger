import { motion } from "framer-motion";
import { useState } from "react";
import ArchitectureFlow from "../components/ArchitectureFlow";
import ScrollSection from "../components/ScrollSection";

export default function Landing() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="pt-32 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold"
        >
          AI-Native Debugging Platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Automatically detect authentication bugs, understand risks,
          and generate safe pull requests — all powered by AI.
        </motion.p>
      </section>

      {/* STORY + ARCHITECTURE */}
      <section className="flex mt-40">
        {/* LEFT — STORY */}
        <div className="w-1/2 px-16 space-y-48">
          <ScrollSection
            title="User Interaction"
            text="Developers connect their GitHub repository and initiate analysis through a clean interface."
            onVisible={() => setStep(1)}
          />

          <ScrollSection
            title="Frontend Layer"
            text="The frontend visualizes the system and communicates user intent to backend services."
            onVisible={() => setStep(2)}
          />

          <ScrollSection
            title="Backend Orchestrator"
            text="The backend acts as the control plane, coordinating AI analysis and GitHub operations."
            onVisible={() => setStep(3)}
          />

          <ScrollSection
            title="AI Analysis Engine"
            text="LLMs analyze code, detect authentication vulnerabilities, and generate secure fixes."
            onVisible={() => setStep(4)}
          />

          <ScrollSection
            title="Integrations & Storage"
            text="GitHub manages version control while the database stores execution history and logs."
            onVisible={() => setStep(6)}
          />
        </div>

        {/* RIGHT — STICKY DIAGRAM */}
        <div className="w-1/2 sticky top-32 h-[720px]">
          <ArchitectureFlow step={step} />
        </div>
      </section>

      {/* CTA */}
      <section className="mt-48 text-center pb-32">
        <h3 className="text-3xl font-bold">
          Ship secure authentication with confidence.
        </h3>
        <p className="mt-4 text-gray-400">
          Let AI review, explain, and fix your auth bugs.
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <button className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
            Try Demo
          </button>
          <button className="px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-400 transition">
            View GitHub
          </button>
        </div>
      </section>
    </div>
  );
}
