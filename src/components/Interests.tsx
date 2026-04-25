import { motion } from 'motion/react';

export default function Interests() {
  const interests = [
    { title: "Cybersecurity", category: "Security", level: "Expert" },
    { title: "Ethical Hacking", category: "Security", level: "Advanced" },
    { title: "Network Monitoring", category: "Infrastructure", level: "Expert" },
    { title: "Cloud Security", category: "Cloud", level: "Advanced" },
    { title: "Secure Infrastructure", category: "Architecture", level: "Expert" },
    { title: "Network Architecture", category: "Infrastructure", level: "Expert" },
    { title: "Embedded Systems", category: "Hardware", level: "Expert" },
    { title: "Cloud Computing", category: "Cloud", level: "Advanced" }
  ];

  return (
    <section id="interests" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500 mb-6">
            02 — Passions
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">What Excites Me</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exploring the frontiers of technology where hardware meets software and data meets security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {interests.map((interest, i) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 bento-card hover:bg-[#111111] hover:border-indigo-500/50 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-xs text-gray-600">0{i + 1}</span>
                <span className="text-[10px] uppercase tracking-widest px-3 py-1 bg-indigo-500/10 text-indigo-500 rounded-full font-bold">
                  {interest.level}
                </span>
              </div>
              <h4 className="text-2xl font-bold mb-4 leading-tight">{interest.title}</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{interest.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
