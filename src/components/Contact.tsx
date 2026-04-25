import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Phone, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const contactItems = [
    { icon: <Mail />, label: "Email", value: "planajustinejames@gmail.com", href: "mailto:planajustinejames@gmail.com", highlight: false },
    { icon: <Phone />, label: "Phone", value: "09150137935", href: "tel:09150137935", highlight: false },
    { icon: <Github />, label: "GitHub", value: "JUSTINE889-sketch", href: "https://github.com/JUSTINE889-sketch", highlight: false },
    { icon: <Linkedin />, label: "LinkedIn", value: "linkedin.com/in/pjjames", href: "#", highlight: false },
    { icon: <ArrowUpRight />, label: "Let's Chat", value: "Hire Me →", href: "#", highlight: true }
  ];

  return (
    <section id="contact" className="py-32 bg-[#0A0A0A] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <h2 className="text-[11px] uppercase tracking-[0.5em] font-bold text-gray-500 mb-12">
               05 — Collaboration
             </h2>
             <h3 className="text-5xl md:text-8xl font-bold mb-16 tracking-tighter leading-none">
               Let's create <br /> <span className="text-indigo-500">together.</span>
             </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {contactItems.map((contact, i) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group p-10 bento-card flex flex-col justify-between text-left ${contact.highlight ? 'bg-indigo-600 border-indigo-600 hover:bg-indigo-500 text-white lg:col-span-2' : 'hover:bg-[#111111]'}`}
              >
                <div className="flex justify-between items-start mb-12">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${contact.highlight ? 'bg-white/20' : 'bg-white/5'}`}>
                    {contact.icon}
                  </div>
                  {!contact.highlight && <ArrowUpRight className="text-gray-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </div>
                <div>
                  <p className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-2 truncate ${contact.highlight ? 'text-white/70' : 'text-gray-500'}`}>
                    {contact.label}
                  </p>
                  <p className="text-lg font-bold truncate">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
