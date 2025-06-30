import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
const plans = [{
  name: 'Starter',
  price: {
    monthly: 299,
    annually: 249
  },
  description: 'Perfect for small businesses with basic call needs',
  features: ['Up to 500 call minutes per month', 'Business hours availability', 'Basic call routing', 'Email notifications', 'Standard reporting'],
  cta: 'Get Started',
  highlight: false
}, {
  name: 'Professional',
  price: {
    monthly: 599,
    annually: 499
  },
  description: 'Ideal for growing businesses with moderate call volume',
  features: ['Up to 2,000 call minutes per month', '24/7 availability', 'Advanced call routing', 'CRM integration', 'Detailed analytics', 'Custom greetings', 'Priority support'],
  cta: 'Start Free Trial',
  highlight: true
}, {
  name: 'Enterprise',
  price: {
    monthly: 1299,
    annually: 1099
  },
  description: 'For businesses with complex call management needs',
  features: ['Unlimited call minutes', '24/7 availability', 'Advanced AI learning', 'Multi-department setup', 'Full API access', 'Custom integrations', 'Dedicated account manager', 'SLA guarantees'],
  cta: 'Contact Sales',
  highlight: false
}];
export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  return <section className="py-16 md:py-24" id="pricing">
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
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Pricing Plans</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your business needs and scale as you grow.
          </p>
          
          <div className="inline-flex items-center bg-slate-800/50 p-1 rounded-full mb-8">
            <button className={`py-2 px-6 rounded-full ${billingCycle === 'monthly' ? 'bg-blue-600 text-white' : 'text-gray-400'} transition-all`} onClick={() => setBillingCycle('monthly')}>
              Monthly
            </button>
            <button className={`py-2 px-6 rounded-full ${billingCycle === 'annually' ? 'bg-blue-600 text-white' : 'text-gray-400'} transition-all`} onClick={() => setBillingCycle('annually')}>
              Annually <span className="text-xs opacity-75">(Save 20%)</span>
            </button>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => <motion.div key={index} initial={{
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
        }} className={`rounded-2xl overflow-hidden ${plan.highlight ? 'relative ring-2 ring-blue-500 transform md:-translate-y-4' : 'bg-slate-800/40 border border-slate-700/50'}`}>
              {plan.highlight && <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>}
              
              <div className={`p-8 ${plan.highlight ? 'bg-gradient-to-br from-slate-800 to-slate-900' : ''}`}>
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">${plan.price[billingCycle]}</span>
                  <span className="text-gray-400 ml-2">per month</span>
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>)}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-full font-medium ${plan.highlight ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white' : 'bg-slate-700 hover:bg-slate-600 text-white'} transition-all`}>
                  {plan.cta}
                </button>
              </div>
            </motion.div>)}
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
        duration: 0.5
      }} className="mt-16 text-center bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
          <h3 className="text-xl font-semibold mb-4">Need a custom AI-Powered solution?</h3>
          <p className="text-gray-300 mb-6">
            Contact our sales team for a tailored plan that meets your specific requirements.
          </p>
          <button className="bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-semibold py-3 px-8 rounded-full transition-all">
            Contact Sales
          </button>
        </motion.div>
      </div>
    </section>;
}