import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "AutoBot AI has revolutionized how we handle customer service calls. Our response times have improved by 80% and customer satisfaction is at an all-time high.",
    author: "Sarah Johnson",
    position: "Customer Service Director",
    company: "TechCorp Solutions",
    rating: 5
  },
  {
    quote: "The ROI with AutoBot AI was evident within the first month. We've reduced staffing costs while improving our ability to handle call volume spikes.",
    author: "Michael Chen",
    position: "Operations Manager",
    company: "Global Logistics Inc.",
    rating: 5
  },
  {
    quote: "As a healthcare provider, we needed a solution that was both HIPAA compliant and felt personal to our patients. AutoBot AI delivered on both fronts.",
    author: "Dr. Rebecca Martinez",
    position: "Chief Medical Officer",
    company: "MediCare Health Group",
    rating: 4
  },
  {
    quote: "The implementation was smooth and their team provided excellent support throughout the process. The AI's ability to learn our business specifics is impressive.",
    author: "Thomas Wright",
    position: "IT Director",
    company: "Financial Services Ltd",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-900/50" id="testimonials">
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">What Our Clients Say</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from businesses that have transformed their operations with our AI automation solutions.
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 z-10 hidden md:block">
            <button 
              onClick={prevTestimonial}
              className="bg-slate-800 hover:bg-slate-700 rounded-full p-3 text-white shadow-lg transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>
          
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                ))}
                {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-gray-600" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl italic mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div>
                <div className="font-semibold text-lg">{testimonials[currentIndex].author}</div>
                <div className="text-gray-400">{testimonials[currentIndex].position}</div>
                <div className="text-blue-400">{testimonials[currentIndex].company}</div>
              </div>
            </div>
          </motion.div>
          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 z-10 hidden md:block">
            <button 
              onClick={nextTestimonial}
              className="bg-slate-800 hover:bg-slate-700 rounded-full p-3 text-white shadow-lg transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2 md:hidden">
          <button 
            onClick={prevTestimonial}
            className="bg-slate-800 hover:bg-slate-700 rounded-full p-2 text-white shadow-lg transition-all"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="bg-slate-800 hover:bg-slate-700 rounded-full p-2 text-white shadow-lg transition-all"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentIndex ? 'bg-blue-500' : 'bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
