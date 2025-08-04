"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Mail, MapPin, Send, FileText, Mail as MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ResumeDownload from "./ResumeDownload";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(data.message || 'Message sent successfully! I\'ll get back to you soon.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-elegant"></div>
      
      {/* Sophisticated animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-royal-blue/20 to-slate-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-steel-blue/20 to-sky-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pale-blue/10 to-sky-blue/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-royal-blue via-slate-blue to-steel-blue rounded-full mb-8 shadow-2xl"
          >
            <Mail className="h-12 w-12 text-white" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl font-bold text-slate-blue mb-6 text-shadow-elegant"
          >
            Let&apos;s Connect
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl text-steel-blue max-w-5xl mx-auto leading-relaxed font-medium text-shadow-elegant"
          >
            I&apos;m always excited to discuss new opportunities, collaborations, or just chat about tech and innovation.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Info & Resume */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Resume Download */}
            <ResumeDownload />

            {/* Contact Details */}
            <div className="card-professional p-6 sm:p-8 md:p-10 rounded-3xl">
              <h3 className="text-3xl font-bold text-slate-blue mb-8 text-shadow-elegant">
                Contact Details
              </h3>
              <div className="space-y-6">
                <div className="flex items-center p-5 glass-effect rounded-2xl hover-elegant">
                  <div className="w-12 h-12 bg-gradient-to-br from-royal-blue to-slate-blue rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <MailIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-blue text-lg">Email</p>
                    <p className="text-steel-blue text-base font-medium">{personalInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center p-5 glass-effect rounded-2xl hover-elegant">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-blue to-steel-blue rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-blue text-lg">Location</p>
                    <p className="text-steel-blue text-base font-medium">{personalInfo.location}</p>
                  </div>
                </div>
                <div className="flex items-center p-5 glass-effect rounded-2xl hover-elegant">
                  <div className="w-12 h-12 bg-gradient-to-br from-steel-blue to-royal-blue rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-blue text-lg">Education</p>
                    <p className="text-steel-blue text-base font-medium">{personalInfo.university} • {personalInfo.graduation}</p>
                  </div>
                </div>
              </div>
            </div>


          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-professional p-6 sm:p-8 md:p-10 rounded-3xl"
          >
            <h3 className="text-3xl font-bold text-slate-blue mb-6 text-shadow-elegant">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-800 rounded-xl shadow-sm">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="font-medium">{submitMessage}</span>
                  </div>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 text-red-800 rounded-xl shadow-sm">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="font-medium">{submitMessage}</span>
                  </div>
                </div>
              )}
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-slate-blue font-semibold mb-2 text-base sm:text-lg">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/80 backdrop-blur-sm border-2 border-sky-blue/50 rounded-xl text-slate-blue placeholder-steel-blue focus:outline-none focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 transition-all duration-300 font-medium text-base sm:text-lg"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-slate-blue font-semibold mb-2 text-lg">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-sky-blue/50 rounded-xl text-slate-blue placeholder-steel-blue focus:outline-none focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 transition-all duration-300 font-medium text-lg"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-slate-blue font-semibold mb-2 text-lg">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-sky-blue/50 rounded-xl text-slate-blue placeholder-steel-blue focus:outline-none focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 transition-all duration-300 font-medium text-lg"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-slate-blue font-semibold mb-2 text-lg">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-sky-blue/50 rounded-xl text-slate-blue placeholder-steel-blue focus:outline-none focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 transition-all duration-300 font-medium text-lg"
                  placeholder="What would you like to discuss?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-slate-blue font-semibold mb-2 text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-sky-blue/50 rounded-xl text-slate-blue placeholder-steel-blue focus:outline-none focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 transition-all duration-300 font-medium text-lg resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                ></textarea>
              </div>
                            <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  variant="sophisticated"
                  size="xl"
                  className="w-full font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-6 w-6 mr-3" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>


      </div>
    </section>
  );
} 