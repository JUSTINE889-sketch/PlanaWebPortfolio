import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-12 auto-rows-min gap-4 w-full">
          {/* Main Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-8 row-span-2 bento-card p-10 flex flex-col justify-between min-h-[450px]"
          >
            <div className="flex items-start justify-between">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg shadow-indigo-500/20">
                PJ
              </div>
              <span className="px-4 py-1 border border-[#262626] rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Available for Work</span>
            </div>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
                Plana Justine James
              </h1>
            </div>
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              Crafting digital experiences through minimalist design and robust frontend architecture.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl text-xs uppercase tracking-widest font-bold transition-all shadow-lg shadow-indigo-600/20"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-[#262626] hover:bg-white/5 text-white px-8 py-4 rounded-2xl text-xs uppercase tracking-widest font-bold transition-all"
              >
                Let's talk
              </motion.a>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.1 }}
             className="col-span-12 lg:col-span-4 row-span-2 bento-card p-8 flex flex-col justify-center items-center text-center group"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Based in</p>
            <p className="text-2xl font-bold text-white italic">Philippines</p>
          </motion.div>

          {/* Bottom Tech Label row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="col-span-12 bento-card p-6 flex flex-wrap justify-center gap-8 md:gap-16 items-center"
          >
            {['React', 'Next.js', 'PostgreSQL', 'Node.js', 'Cybersecurity', 'Networks'].map((tech) => (
              <span key={tech} className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-700 hover:text-indigo-500 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
