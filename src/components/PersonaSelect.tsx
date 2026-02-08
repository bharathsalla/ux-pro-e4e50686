import { motion } from "framer-motion";
import { type PersonaId, personas } from "@/types/audit";
import heroIllustration from "@/assets/hero-illustration.png";

interface PersonaSelectProps {
  onSelect: (id: PersonaId) => void;
}

const PersonaSelect = ({ onSelect }: PersonaSelectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col lg:flex-row"
    >
      {/* Left Column – Hero */}
      <div className="lg:w-1/2 flex items-center justify-center bg-card p-8 lg:p-16 lg:sticky lg:top-0 lg:h-screen">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-md w-full"
        >
          <img
            src={heroIllustration}
            alt="UX Audit Pro hero illustration"
            className="w-full h-auto"
          />
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
              Design with confidence.
            </h2>
            <p className="text-muted-foreground text-base mt-3 leading-relaxed">
              AI-powered design audits built on 60+ UX/UI
              <br className="hidden sm:block" /> principles, laws & standards.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Column – Persona Cards */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center px-6 py-12 lg:px-12 lg:py-16 lg:overflow-y-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10 w-full max-w-lg"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            UX Audit Pro
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4 leading-[1.1]">
            Who are you
            <br />
            auditing for?
          </h1>
          <p className="text-muted-foreground text-lg max-w-sm mx-auto leading-relaxed">
            Select your role to get a personalized audit experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 max-w-lg w-full">
          {personas.map((persona, index) => (
            <motion.button
              key={persona.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.06 }}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(persona.id)}
              className="group relative flex items-center gap-4 p-5 rounded-xl border border-border bg-card text-left transition-all duration-200 hover:border-primary/40 hover:bg-primary/[0.03] focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <span className="text-2xl shrink-0">{persona.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-bold text-base text-foreground">
                    {persona.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    · {persona.subtitle}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed truncate">
                  {persona.description}
                </p>
              </div>
              <svg
                className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          Each persona adapts the audit depth, language & scoring.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PersonaSelect;
