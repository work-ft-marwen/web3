import { useState, useEffect } from 'react';
import { Bot, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-lg py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5
        }} className="flex items-center">
            <Bot className="h-8 w-8 text-blue-400 mr-2" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent" style={{
            fontFamily: 'Orbitron, sans-serif'
          }}>Aibotautomations</span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {['Features', 'How It Works', 'Pricing', 'Testimonials', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-300 hover:text-white transition-colors font-medium">
                {item}
              </a>)}
          </div>
          
          <div className="hidden md:flex">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-full transition-all shadow-lg hover:shadow-blue-500/20">Book Your Demo</button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && <motion.div initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} className="md:hidden bg-slate-800/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Features', 'How It Works', 'Pricing', 'Testimonials', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700" onClick={() => setIsOpen(false)}>
                {item}
              </a>)}
            <div className="mt-4 px-3 py-2">
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-full">
                Book Demo
              </button>
            </div>
          </div>
        </motion.div>}
    </nav>;
}