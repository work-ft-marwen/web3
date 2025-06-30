import { ArrowRight, BarChart3, Bot, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
export default function Hero() {
  return <section className="pt-28 pb-16 md:pt-32 md:pb-24" id="hero">
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{
            fontFamily: 'Orbitron, sans-serif'
          }}>Our AI-Powered
Calls & Custom Automated Solutions </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">Transform your business communications with intelligent bots that handle calls and all tasks  imaginable with human-like precision, 24/7 availability, and zero wait times.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-blue-500/20 flex items-center justify-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-transparent border border-gray-600 hover:border-gray-400 text-white font-semibold py-3 px-8 rounded-full transition-all">
                Watch Demo
              </button>
            </div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-6 backdrop-blur-xl border border-white/10 shadow-xl">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-5 rounded-xl backdrop-blur-sm">
                  <Phone className="h-8 w-8 text-blue-400 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">Call Handling</h3>
                  <p className="text-gray-400 text-sm">Intelligent AI inbound and outbound call management</p>
                </div>
                <div className="bg-white/5 p-5 rounded-xl backdrop-blur-sm">
                  <Bot className="h-8 w-8 text-purple-400 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">Reception Bot</h3>
                  <p className="text-gray-400 text-sm">24/7 virtual receptionist  & automation workflows for your business with zero wait time</p>
                </div>
                <div className="bg-white/5 p-5 rounded-xl backdrop-blur-sm">
                  <BarChart3 className="h-8 w-8 text-pink-400 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">Analytics</h3>
                  <p className="text-gray-400 text-sm">Comprehensive AI insights and data analysis performed  metrics</p>
                </div>
                <div className="p-5 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">73%</div>
                    <div className="text-gray-400 text-sm mt-1">Cost Reduction</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 bg-white/5 p-3 rounded-lg text-sm text-center backdrop-blur-sm">
                <span className="text-gray-300">Trusted by</span>
                <span className="font-semibold text-white ml-2">100+ businesses</span>
                <span className="text-gray-300 ml-2">worldwide</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}