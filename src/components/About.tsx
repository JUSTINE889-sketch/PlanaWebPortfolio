import { motion } from 'motion/react';
import { Cpu, Globe, Lock, Code } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Clean Architecture",
      desc: "Designing systems that are scaleable, maintainable, and elegant from the core out."
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Full-Stack Vision",
      desc: "Bridging the gap between front-end aesthetics and back-end robustness."
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Embedded Systems",
      desc: "Experience with hardware-level programming and system integration."
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Security First",
      desc: "Building with a mindset that prioritizes data integrity and system safety."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bento-card p-10 flex flex-col justify-center"
          >
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500 mb-6">
              01 — Who I Am
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              What I Bring <br /> to the Table
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              I am a passionate technologist specialized in building comprehensive solutions. 
              My approach combines the precision of engineering with the creativity of 
              modern design.
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bento-card hover:bg-[#202020] group"
              >
                <div className="w-12 h-12 bg-indigo-500/10 text-indigo-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <h4 className="text-lg font-bold mb-3 uppercase tracking-wider">{v.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
