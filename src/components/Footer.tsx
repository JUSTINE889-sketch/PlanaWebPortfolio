import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-[#0A0A0A] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
             <span className="font-bold text-2xl tracking-tighter bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">PJJ.</span>
             <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">
               Building the future, one line at a time.
             </p>
          </div>
          
          <div className="flex gap-12 text-gray-400">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-widest font-bold text-gray-600">Legal</span>
              <a href="#" className="text-xs hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs hover:text-white transition-colors">Terms of Service</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-widest font-bold text-gray-600">Social</span>
              <a href="#" className="text-xs hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com/JUSTINE889-sketch" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-[#262626] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-gray-600">
          <p>© {currentYear} Plana Justine James. All rights reserved.</p>
          <p>Designed and Developed with Focus & Precision.</p>
        </div>
      </div>
    </footer>
  );
}
