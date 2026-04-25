import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "UniBorrow",
      category: "Full-Stack Web App",
      desc: "A peer-to-peer item sharing platform for university students to borrow and lend equipment efficiently.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      featured: true,
      githubUrl: "https://github.com/JUSTINE889-sketch/UniBorrow",
      liveUrl: "#"
    },
    {
      title: "EduWatch",
      category: "Analytics & Monitoring",
      desc: "An educational monitoring system designed to track student engagement and academic performance in real-time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tags: ["TypeScript", "Next.js", "D3.js", "Firebase"],
      featured: true,
      githubUrl: "https://github.com/JUSTINE889-sketch/EduWatch",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500 mb-6">
              03 — Creation
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold leading-none">
              Things <br /> I've Built
            </h3>
          </div>
          <p className="text-lg text-gray-400 max-w-sm mb-4">
            A selection of projects that demonstrate my technical breadth and problem-solving capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bento-card overflow-hidden flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden bg-[#111111]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                {project.featured && (
                  <div className="absolute top-4 left-6 bg-indigo-600/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    Featured Project
                  </div>
                )}
                <div className="absolute inset-0 bg-[#000000]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1A1A1A] hover:scale-110 transition-transform"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1A1A1A] hover:scale-110 transition-transform"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold mb-4">
                  {project.title}
                </h4>
                <p className="text-gray-400 mb-8 max-w-md text-sm leading-relaxed">
                  {project.desc}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#111111] border border-[#262626] rounded-xl text-[10px] font-bold uppercase tracking-widest text-indigo-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
