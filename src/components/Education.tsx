import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  const steps = [
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "Technological University of the Philippines",
      period: "2020 — 2024",
      desc: "Specialized in Embedded Systems and Computer Networks. Graduated with honors.",
      highlights: ["Dean's List", "Best Thesis Award", "IEEE Student Member"]
    },
    {
      degree: "Senior High School — STEM",
      institution: "National High School",
      period: "2018 — 2020",
      desc: "Focused on advanced mathematics and science fundamentals.",
      highlights: ["Honor Student", "Math Quiz Bee Champion"]
    }
  ];

  return (
    <section id="education" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bento-card p-10"
          >
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500 mb-6">
              04 — Foundation
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Education <br /> Journey
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              The academic path that shaped my analytical thinking and technical expertise.
            </p>
          </motion.div>

          <div className="lg:col-span-8 bento-card p-10 flex flex-col gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 pb-12 border-l border-[#262626] last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-500 shadow-md shadow-emerald-500/50"></div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3 text-emerald-500 font-mono">
                    <Calendar size={14} />
                    <span className="text-xs uppercase tracking-widest font-bold">{step.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider bg-white/5 px-4 py-2 rounded-full text-gray-300">
                    <GraduationCap size={14} />
                    <span>{step.institution}</span>
                  </div>
                </div>

                <h4 className="text-2xl font-bold mb-4">{step.degree}</h4>
                <p className="text-gray-400 mb-8 max-w-2xl leading-relaxed text-sm">
                  {step.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {step.highlights.map(h => (
                    <span key={h} className="text-[10px] uppercase tracking-widest font-bold py-1 px-3 bento-inner text-gray-500">
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
