'use client';
import { useState, useEffect } from 'react';
import { faqData } from '@/data/FAQData';
import { Send, ChevronDown, HelpCircle, Mail, CheckCircle, XCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Reveal from '@/components/Reveal';

export default function ContactSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{left: number, top: number, duration: number, delay: number}>>([]);
  const [activeTab, setActiveTab] = useState<'faq' | 'contact'>('contact');
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<null | 'idle' | 'sending' | 'sent' | 'error'>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: e.clientX / window.innerWidth, 
        y: e.clientY / window.innerHeight 
      });
    };

    // Generate particles
    const generatedParticles = Array.from({ length: 12 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 4
    }));
    setParticles(generatedParticles);

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    // Basic form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields.');
      setTimeout(() => {
        setStatus(null);
        setErrorMsg('');
      }, 4000);
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setErrorMsg('Configuration error. Please try again later.');
      console.error({ serviceId, templateId, publicKey });
      return;
    }

    try {
      // Create a temporary form element for emailjs
      const tempForm = document.createElement('form');
      tempForm.innerHTML = `
        <input name="name" value="${formData.name}" />
        <input name="email" value="${formData.email}" />
        <input name="subject" value="${formData.subject}" />
        <textarea name="message">${formData.message}</textarea>
      `;
      
      const res = await emailjs.sendForm(serviceId, templateId, tempForm, publicKey);
      console.log('EmailJS success', res);
      setStatus('sent');

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    } catch (err: unknown) {
      console.error('EmailJS error', err);
      setStatus('error');
      if (err instanceof Error) {
        setErrorMsg('Failed to send message. Please try again.');
      } else {
        setErrorMsg('Something went wrong. Please try again.');
      }

      // Auto-hide error message after 8 seconds
      setTimeout(() => {
        setStatus(null);
        setErrorMsg('');
      }, 8000);
    }
  };

  return (
    <section id="contact" className="min-h-[739px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden py-16 lg:py-24">
      
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251, 146, 60, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 25s linear infinite reverse'
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/20 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `float ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`
              }}
            />
          ))}
        </div>
        
        {/* Interactive gradient orb */}
        <div 
          className="absolute w-[400px] h-[400px] opacity-15 rounded-full blur-3xl transition-all duration-700 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.4) 0%, rgba(249, 115, 22, 0.2) 30%, rgba(234, 88, 12, 0.06) 60%, transparent 100%)',
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        
        {/* Layered gradient elements */}
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-radial from-orange-500/12 via-orange-400/6 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-radial from-orange-600/10 via-orange-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Geometric shapes */}
        <div className="absolute top-1/3 right-1/5 w-24 h-24 border border-orange-400/8 transform rotate-12 animate-spin-slow" />
        <div className="absolute bottom-1/2 left-1/4 w-32 h-32 border border-orange-500/10 transform -rotate-12 animate-pulse" />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-15px) rotate(180deg); opacity: 0.8; }
        }
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        
        @keyframes accordionSlide {
          0% { opacity: 0; transform: translateY(-8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes tabSlide {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInUp {
          0% { 
            opacity: 0; 
            transform: translateY(20px) scale(0.95); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        
        .animate-spin-slow {
          animation: spin 25s linear infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        .accordion-content {
          animation: accordionSlide 0.25s ease-out forwards;
        }
        
        .tab-content {
          animation: tabSlide 0.3s ease-out forwards;
        }
        
        .status-message {
          animation: slideInUp 0.4s ease-out forwards;
        }
        
        .success-ring {
          animation: pulse-ring 2s ease-out infinite;
        }
      `}</style>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
        <div className="text-center mb-12 lg:mb-16">
          <div className="text-orange-400/90 text-xs sm:text-sm font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-4 relative">
            <span className="relative z-10">Let`s Work Together</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent blur-sm" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1] tracking-tight mb-6 relative">
            <span className="relative inline-block">
              Get In{' '}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                Touch
              </span>
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-light">
            Ready to bring your vision to life? I`d love to hear about your project and discuss how we can create something amazing together.
          </p>
        </div>
        </Reveal>

        {/* Tabbed Interface */}
        <div className="relative">
          {/* Background accent */}
          <div className="absolute -inset-8 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent blur-xl -z-10" />
          
          {/* Tab Navigation */}
          <Reveal>
          <div className="flex justify-center mb-8">
            <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 p-2 flex gap-2">
              <button
                onClick={() => setActiveTab('faq')}
                className={`group flex items-center gap-3 px-6 lg:px-8 py-3 lg:py-4 font-medium text-sm lg:text-base transition-all duration-300 relative overflow-hidden ${
                  activeTab === 'faq'
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {activeTab === 'faq' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-white/10 to-orange-400/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                )}
                <HelpCircle className="w-5 h-5 relative z-10" />
                <span className="relative z-10">FAQs</span>
              </button>
              
              <button
                onClick={() => setActiveTab('contact')}
                className={`group flex items-center gap-3 px-6 lg:px-8 py-3 lg:py-4 font-medium text-sm lg:text-base transition-all duration-300 relative overflow-hidden ${
                  activeTab === 'contact'
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {activeTab === 'contact' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-white/10 to-orange-400/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                )}
                <Mail className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Contact</span>
              </button>
            </div>
          </div>
          </Reveal>

          {/* Tab Content */}
          <Reveal>
          <div className="min-h-[600px]">
            
            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <div className="tab-content max-w-4xl mx-auto">
                <div className="text-center mb-8 lg:mb-12">
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-light text-white mb-4">
                    Frequently Asked{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                      Questions
                    </span>
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-base lg:text-lg max-w-2xl mx-auto">
                    Here are some common questions about working together. Don`t see what you`re looking for? Switch to the contact tab to reach out directly!
                  </p>
                </div>

                <div className="grid gap-4 lg:gap-6 max-w-3xl mx-auto">
                  {faqData.map((faq, index) => (
                    <div 
                      key={index} 
                      className="group bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 hover:border-orange-400/30 transition-all duration-300 overflow-hidden"
                    >
                      <button
                        className="w-full px-6 lg:px-8 py-5 lg:py-6 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors duration-300"
                        onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                      >
                        <div className="flex items-center gap-4 lg:gap-6">
                          <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-400/30 flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-colors duration-300">
                            <faq.icon className="w-5 h-5 lg:w-6 lg:h-6 text-orange-400" />
                          </div>
                          <span className="text-white font-medium text-base lg:text-lg group-hover:text-orange-100 transition-colors duration-300 text-left">
                            {faq.question}
                          </span>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 lg:w-6 lg:h-6 text-orange-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                            activeAccordion === index ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {activeAccordion === index && (
                        <div className="px-6 lg:px-8 pb-5 lg:pb-6 text-slate-300 leading-relaxed text-sm lg:text-base accordion-content">
                          <div className="border-l-2 border-orange-400/30 pl-4 lg:pl-6 ml-9 lg:ml-12">
                            {faq.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8 lg:mt-12">
                  <button
                    onClick={() => setActiveTab('contact')}
                    className="group inline-flex items-center gap-3 px-6 lg:px-8 py-3 lg:py-4 border border-orange-400/50 hover:border-orange-400/70 text-orange-400 hover:text-white font-medium transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm bg-slate-900/20 hover:bg-orange-500/10"
                  >
                    <Mail className="w-4 h-4 lg:w-5 lg:h-5" />
                    Still have questions? Get in touch
                  </button>
                </div>
              </div>
            )}

            {/* Contact Tab */}
            {activeTab === 'contact' && (
              <div className="tab-content max-w-2xl mx-auto">
                <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 p-6 lg:p-10 relative overflow-hidden">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-400/60" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-400/60" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-400/60" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-400/60" />
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl lg:text-3xl font-light text-white mb-4">
                      Send Me A{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                        Message
                      </span>
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      Tell me about your project and let`s discuss how we can work together.
                    </p>
                  </div>
                  
                  {/* Contact Form */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-medium text-slate-300 mb-2 group-focus-within:text-orange-400 transition-colors duration-300">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          disabled={status === 'sending'}
                          className="w-full px-4 py-3 lg:py-4 bg-slate-800/50 border border-slate-600/50 rounded-none text-white placeholder-slate-500 focus:border-orange-400/70 focus:outline-none focus:bg-slate-800/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div className="group">
                        <label className="block text-sm font-medium text-slate-300 mb-2 group-focus-within:text-orange-400 transition-colors duration-300">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          disabled={status === 'sending'}
                          className="w-full px-4 py-3 lg:py-4 bg-slate-800/50 border border-slate-600/50 rounded-none text-white placeholder-slate-500 focus:border-orange-400/70 focus:outline-none focus:bg-slate-800/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-slate-300 mb-2 group-focus-within:text-orange-400 transition-colors duration-300">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        disabled={status === 'sending'}
                        className="w-full px-4 py-3 lg:py-4 bg-slate-800/50 border border-slate-600/50 rounded-none text-white placeholder-slate-500 focus:border-orange-400/70 focus:outline-none focus:bg-slate-800/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="What's your project about?"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-slate-300 mb-2 group-focus-within:text-orange-400 transition-colors duration-300">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={status === 'sending'}
                        className="w-full px-4 py-3 lg:py-4 bg-slate-800/50 border border-slate-600/50 rounded-none text-white placeholder-slate-500 focus:border-orange-400/70 focus:outline-none focus:bg-slate-800/70 resize-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Tell me about your vision, goals, and how I can help bring your ideas to life..."
                      />
                    </div>

                    <button 
                      onClick={handleSubmit}
                      disabled={status === 'sending'}
                      className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 lg:py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/30 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-white/20 to-orange-400/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      
                      {status === 'sending' ? (
                        <>
                          <Loader className="w-5 h-5 animate-spin relative z-10" />
                          <span className="relative z-10">Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 relative z-10" />
                          <span className="relative z-10">Send Message</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Status Messages */}
                  {(status === 'sent' || status === 'error') && (
                    <div className={`mt-6 pt-6 border-t border-slate-700/50 status-message ${
                      status === 'sent' ? 'border-green-500/20' : 'border-red-500/20'
                    }`}>
                      {status === 'sent' && (
                        <div className="flex items-center justify-center gap-3 p-4 bg-green-500/10 border border-green-500/30 text-green-400 relative overflow-hidden">
                          <div className="absolute inset-0 bg-green-400/5 success-ring"></div>
                          <CheckCircle className="w-6 h-6 flex-shrink-0" />
                          <div className="text-center">
                            <p className="font-medium text-lg">Message sent successfully!</p>
                            <p className="text-green-300/80 text-sm mt-1">I`ll get back to you within 24 hours.</p>
                          </div>
                        </div>
                      )}

                      {status === 'error' && (
                        <div className="flex items-center justify-center gap-3 p-4 bg-red-500/10 border border-red-500/30 text-red-400">
                          <XCircle className="w-6 h-6 flex-shrink-0" />
                          <div className="text-center">
                            <p className="font-medium text-lg">Oops! Something went wrong</p>
                            <p className="text-red-300/80 text-sm mt-1">{errorMsg}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Footer Info */}
                  <div className={`${status === 'sent' || status === 'error' ? 'mt-4' : 'mt-6 pt-6 border-t border-slate-700/50'} text-center`}>
                    <p className="text-sm text-slate-400">
                      I typically respond within 24 hours. Looking forward to hearing from you!
                    </p>
                    <button
                      onClick={() => setActiveTab('faq')}
                      className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm mt-3 transition-colors duration-300"
                    >
                      <HelpCircle className="w-4 h-4" />
                      Have questions? Check the FAQ
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}