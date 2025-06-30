import { Building, Clock, LineChart, PhoneCall, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';
const features = [{
  icon: <PhoneCall className="h-8 w-8 text-blue-400" />,
  title: 'Intelligent Call Routing',
  description: 'Advanced AI identifies caller needs and routes to the right department or self-serves as appropriate.'
}, {
  icon: <Clock className="h-8 w-8 text-purple-400" />,
  title: '24/7 Availability',
  description: 'Never miss an opportunity with round-the-clock service that handles calls even outside business hours.'
}, {
  icon: <Users className="h-8 w-8 text-pink-400" />,
  title: 'Natural Conversations',
  description: 'Our AI bots speak naturally with callers, understanding context and providing human-like interactions.'
}, {
  icon: <Shield className="h-8 w-8 text-blue-400" />,
  title: 'Secure & Compliant',
  description: 'Enterprise-grade security with GDPR, HIPAA, and PCI compliance for all customer interactions.'
}, {
  icon: <Building className="h-8 w-8 text-purple-400" />,
  title: 'Multi-department Support',
  description: 'Configure custom workflows for different departments with specialized knowledge bases.'
}, {
  icon: <LineChart className="h-8 w-8 text-pink-400" />,
  title: 'Advanced Analytics',
  description: 'Gain insights into call volumes, common inquiries, resolution rates, and customer satisfaction.'
}];
export default function Features() {
  return <section className="py-16 md:py-24" id="features">
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
        }}>Cut costs. Save time. Sell smarter.
        </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Discover how Aibotautomations  can unlock the unstoppable growth for your business.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all shadow-lg hover:shadow-blue-500/10">
              <div className="bg-slate-800/50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}