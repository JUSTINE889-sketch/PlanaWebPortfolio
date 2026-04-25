import { motion } from 'motion/react';
import { Shield, Cloud, Terminal, Code2 } from 'lucide-react';

export default function Skills() {
  const skillGroups = [
    {
      title: "Cybersecurity",
      icon: <Shield className="w-5 h-5" />,
      skills: [
        "Introduction to Cybersecurity",
        "Basic Threat Detection",
        "Security Awareness",
        "Log Monitoring Fundamentals"
      ]
    },
    {
      title: "Cloud",
      icon: <Cloud className="w-5 h-5" />,
      skills: [
        "AWS Fundamentals",
        "EC2 Basics",
        "IAM Basics",
        "VPC Concepts"
      ]
    },
    {
      title: "Linux",
      icon: <Terminal className="w-5 h-5" />,
      skills: [
        "Basic Linux Commands",
        "File Management",
        "Terminal Navigation",
        "User Management Basics"
      ]
    },
    {
      title: "Programming / Web",
      icon: <Code2 className="w-5 h-5" />,
      skills: [
        "Python (Beginner)",
        "HTML & CSS",
        "Basic JavaScript",
        "SQL Basics",
        "Logic Building",
        "Problem Solving"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500 mb-6">
            01.5 — Technical Proficiency
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 italic">Technical Skills</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 bento-card hover:border-indigo-500/30 transition-all flex flex-col"
            >
              <div className="w-10 h-10 bg-indigo-500/10 text-indigo-500 rounded-xl flex items-center justify-center mb-6">
                {group.icon}
              </div>
              <h4 className="text-xl font-bold mb-6 text-white">{group.title}</h4>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/40 group-hover/item:bg-indigo-500 transition-colors"></div>
                    <span className="text-sm text-gray-400 group-hover/item:text-gray-200 transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
