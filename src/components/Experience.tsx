"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { Briefcase, Calendar, TrendingUp, Users, Zap, Building2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Sophisticated gradient background */}
      <div className="absolute inset-0 bg-gradient-sophisticated"></div>
      
      {/* Elegant animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-white/20 to-pale-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-pale-blue/30 to-sky-blue/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-steel-blue/15 to-royal-blue/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-8 shadow-2xl"
          >
            <Briefcase className="h-12 w-12 text-royal-blue" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl font-bold text-white mb-6 text-shadow-elegant"
          >
            Professional Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl text-pale-blue max-w-5xl mx-auto leading-relaxed font-medium text-shadow-elegant"
          >
            Building{" "}
            <span className="text-white font-bold">production-grade automation systems</span>,{" "}
            <span className="text-white font-bold">data pipelines</span>, and{" "}
            <span className="text-white font-bold">quant tools</span> across enterprise and startup environments.
          </motion.p>
        </motion.div>

                {/* Timeline Container */}
        <div className="relative">
                          {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-full hidden md:block">
                  {/* Continuous Timeline */}
                  <div className="h-full bg-gradient-to-b from-royal-blue via-slate-blue via-steel-blue to-royal-blue rounded-full shadow-lg"></div>
                </div>
          
          {/* Timeline Items */}
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.title}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: index === 1 ? 40 : index === 2 ? 80 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${index === 0 ? '-mt-8' : index === 1 ? '-mt-24' : '-mt-40'}`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br ${index === 0 ? 'from-royal-blue to-slate-blue' : index === 1 ? 'from-slate-blue to-steel-blue' : 'from-steel-blue to-royal-blue'} rounded-full border-4 border-white shadow-xl z-10 hidden md:block ${index === 1 ? 'md:transform md:-translate-y-24' : index === 2 ? 'md:transform md:-translate-y-40' : ''}`}></div>
                
                {/* Timeline Glow */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br ${index === 0 ? 'from-royal-blue/30 to-slate-blue/30' : index === 1 ? 'from-slate-blue/30 to-steel-blue/30' : 'from-steel-blue/30 to-royal-blue/30'} rounded-full blur-sm z-5 hidden md:block ${index === 1 ? 'md:transform md:-translate-y-24' : index === 2 ? 'md:transform md:-translate-y-40' : ''}`}></div>
                
                {/* Content Box */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ${index === 1 ? 'md:transform md:-translate-y-24' : index === 2 ? 'md:transform md:-translate-y-40' : ''}`}>
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.02, y: -8, rotateY: 2 }}
                    transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                    viewport={{ once: true }}
                    className="card-professional p-5 sm:p-6 md:p-8 rounded-3xl hover-elegant transform transition-all duration-300 hover:shadow-2xl relative backdrop-blur-sm border border-white/20 hover:border-white/40"
                  >
                    {/* Connection Line */}
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                      className={`absolute top-1/2 transform -translate-y-1/2 w-16 h-1 bg-gradient-to-r ${index % 2 === 0 ? `${index === 0 ? 'from-royal-blue to-slate-blue' : 'from-slate-blue to-steel-blue'} -right-16` : `${index === 1 ? 'from-slate-blue to-steel-blue' : 'from-steel-blue to-royal-blue'} -left-16`} hidden md:block rounded-full origin-center shadow-sm`}
                    ></motion.div>
                    
                    {/* Connection Glow */}
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                      viewport={{ once: true }}
                      className={`absolute top-1/2 transform -translate-y-1/2 w-16 h-2 bg-gradient-to-r ${index % 2 === 0 ? `${index === 0 ? 'from-royal-blue/20 to-slate-blue/20' : 'from-slate-blue/20 to-steel-blue/20'} -right-16` : `${index === 1 ? 'from-slate-blue/20 to-steel-blue/20' : 'from-steel-blue/20 to-royal-blue/20'} -left-16`} hidden md:block rounded-full origin-center blur-sm`}
                    ></motion.div>
                    {/* Duration Badge */}
                    <div className="inline-flex items-center px-2.5 py-1 bg-gradient-to-r from-royal-blue/20 to-slate-blue/20 text-royal-blue rounded-full text-xs sm:text-sm font-semibold mb-2">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-1.5" />
                      {exp.duration}
                    </div>
                    
                    {/* Experience Icon */}
                    <div className={`w-10 h-10 bg-gradient-to-br ${index === 0 ? 'from-royal-blue to-slate-blue' : index === 1 ? 'from-slate-blue to-steel-blue' : 'from-steel-blue to-royal-blue'} rounded-xl flex items-center justify-center mr-3 mb-3 shadow-lg`}>
                                              {index === 0 ? (
                          <Building2 className="h-5 w-5 text-white" />
                        ) : index === 1 ? (
                          <TrendingUp className="h-5 w-5 text-white" />
                        ) : (
                          <Users className="h-5 w-5 text-white" />
                        )}
                    </div>
                    
                    {/* Job Title & Company */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-blue mb-1.5">
                      {exp.title}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-steel-blue font-semibold mb-3">
                      {exp.company}
                    </p>
                    
                    {/* Achievements */}
                    <div className="space-y-2.5">
                      {exp.description.map((desc, descIndex) => (
                        <div key={descIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-br from-royal-blue to-slate-blue rounded-full mt-2.5 sm:mt-3 mr-2 sm:mr-3 flex-shrink-0"></span>
                          <p className="text-steel-blue text-sm sm:text-base leading-relaxed font-medium">
                            {desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                {/* Empty space for alignment */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Currently Seeking Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8"
        >
                      <div className="card-professional p-6 sm:p-8 md:p-10 rounded-3xl">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-royal-blue via-slate-blue to-steel-blue rounded-full mb-6 shadow-lg"
              >
                <Zap className="h-10 w-10 text-white" />
              </motion.div>
              <h3 className="text-3xl font-bold text-slate-blue mb-6">
                Seeking Jan & May 2026 Co-op/Internship
              </h3>
              <p className="text-steel-blue max-w-4xl mx-auto font-medium text-lg leading-relaxed">
                Looking for opportunities to continue building production-grade systems and expand my expertise in backend engineering, automation, and quantitative tools.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-royal-blue to-slate-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Calendar className="h-10 w-10 text-white" />
                </div>
                <h4 className="font-bold text-slate-blue mb-3 text-lg">
                  Jan & May 2026 Co-op/Internship
                </h4>
                <p className="text-steel-blue text-base font-medium">
                  Backend engineering and automation opportunities
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-slate-blue to-steel-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <h4 className="font-bold text-slate-blue mb-3 text-lg">
                  Production Systems
                </h4>
                <p className="text-steel-blue text-base font-medium">
                  Enterprise automation and data pipeline development
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-steel-blue to-royal-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h4 className="font-bold text-slate-blue mb-3 text-lg">
                  Quantitative Tools
                </h4>
                <p className="text-steel-blue text-base font-medium">
                  Backtesting strategies and hedge-fund style metrics
                </p>
              </motion.div>
            </div>

            <div className="text-center mt-10">
              <Button
                variant="sophisticated"
                size="xl"
                asChild
                className="font-semibold"
              >
                <a href="#contact">
                  <Mail className="h-6 w-6 mr-3" />
                  Let&apos;s Connect
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 