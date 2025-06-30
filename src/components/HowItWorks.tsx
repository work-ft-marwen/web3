import { motion } from 'framer-motion';
import { Bot, CircleCheck, MessageCircle, Settings } from 'lucide-react';
const steps = [{
  icon: <Bot className="h-8 w-8 text-blue-400" />,
  title: 'AI Setup',
  description: 'We configure your virtual receptionist with your business knowledge and call handling preferences.'
}, {
  icon: <Settings className="h-8 w-8 text-purple-400" />,
  title: 'Integration',
  description: 'Connect with your existing phone systems and CRM platforms for seamless operation.'
}, {
  icon: <MessageCircle className="h-8 w-8 text-pink-400" />,
  title: 'Call Management',
  description: 'AI handles calls, routes appropriately, answers questions, and schedules appointments.'
}, {
  icon: <CircleCheck className="h-8 w-8 text-green-400" />,
  title: 'Continuous Improvement',
  description: 'The system learns from each interaction to constantly improve performance.'
}];
export default function HowItWorks() {
  return <section className="py-16 md:py-24 bg-slate-900/50" id="how-it-works">
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{
          fontFamily: 'Orbitron, sans-serif'
        }}>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">How It Works</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Getting started with AibotAutomations  is simple. With our AI workflows implementations process is designed to get you up and running quickly.</p>
        </motion.div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 z-0"></div>
          
          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: index % 2 === 0 ? -20 : 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                
                <div className="flex-shrink-0 bg-slate-800/80 rounded-full p-4 border border-slate-700 shadow-lg">
                  {step.icon}
                </div>
                
                <div className="md:w-1/2 hidden md:block"></div>
              </motion.div>)}
          </div>
        </div>
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }} className="mt-16 text-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-blue-500/20">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>;
}