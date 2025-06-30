import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone } from 'lucide-react';
export default function Contact() {
  return <section className="py-16 md:py-24" id="contact">
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
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Ready to Start?
Let’s build your competitive advantage.
          </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Transform your business by our AI Solutions? Contact us to learn more or schedule a demo.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
              
              <form>
                <div className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                    <input type="text" id="name" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Smith" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                    <input type="email" id="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Syndaferah@aibotautomations" />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Aibotautomation x Tvinacard</label>
                    <input type="text" id="company" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Company" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea id="message" rows={4} className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your needs..."></textarea>
                  </div>
                </div>
                
                <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-blue-500/20">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700/50 shadow-lg">
              <div className="flex items-start">
                <div className="bg-blue-500/20 rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone Support</h4>
                  <p className="text-gray-400 mb-2">Monday-Friday, 9am-5pm EST</p>
                  <a href="tel:+18005551234" className="text-blue-400 hover:underline">+216 53 762 044</a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700/50 shadow-lg">
              <div className="flex items-start">
                <div className="bg-purple-500/20 rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <p className="text-gray-400 mb-2">We'll respond within 24 hours</p>
                  <a href="mailto:sales@autobotai.com" className="text-purple-400 hover:underline">syndaferah@aibotautomations.com</a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700/50 shadow-lg">
              <div className="flex items-start">
                <div className="bg-pink-500/20 rounded-full p-3 mr-4">
                  <MessageSquare className="h-6 w-6 text-pink-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Live Chat</h4>
                  <p className="text-gray-400 mb-2">Chat with our support team</p>
                  <button className="text-pink-400 hover:underline">Start Chat</button>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-600/10 rounded-2xl p-6 border border-blue-500/20 shadow-lg">
              <h4 className="text-xl font-medium mb-3">Ready for a demo?</h4>
              <p className="text-gray-300 mb-4">Discover Aibotautomations in action with a personalized demo for your business.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-all">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}