"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { GraduationCap, Building2, Target, Users, BookOpen, Zap, Code, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Sophisticated gradient background */}
      <div className="absolute inset-0 bg-gradient-professional"></div>
      
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
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-8 shadow-2xl"
          >
            <GraduationCap className="h-12 w-12 text-royal-blue" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl font-bold text-white mb-6 text-shadow-elegant"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl text-pale-blue max-w-5xl mx-auto leading-relaxed font-medium text-shadow-elegant"
          >
            Software engineer with 1+ years experience building{" "}
            <span className="text-white font-bold">production-grade automation systems</span>,{" "}
            <span className="text-white font-bold">software solutions</span>, and{" "}
            <span className="text-white font-bold">enterprise applications</span> across financial services and startup environments.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Education & Roles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="card-professional p-6 sm:p-8 md:p-10 rounded-3xl hover-elegant"
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-royal-blue via-slate-blue to-steel-blue rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-blue">Education</h3>
                  <p className="text-steel-blue font-semibold text-lg">{personalInfo.university}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 glass-effect rounded-xl hover-elegant">
                  <span className="text-steel-blue font-semibold text-lg mb-2 sm:mb-0">Program</span>
                  <span className="font-bold text-slate-blue text-lg text-center sm:text-right">Automation Systems Engineering Technology</span>
                </div>
                <div className="flex items-center justify-between p-4 glass-effect rounded-xl hover-elegant">
                  <span className="text-steel-blue font-semibold text-lg">Graduation</span>
                  <span className="font-bold text-slate-blue text-lg">{personalInfo.graduation}</span>
                </div>
                <div className="flex items-center justify-between p-4 glass-effect rounded-xl hover-elegant">
                  <span className="text-steel-blue font-semibold text-lg">Location</span>
                  <span className="font-bold text-slate-blue text-lg">{personalInfo.location}</span>
                </div>
              </div>
            </motion.div>

            {/* Current Roles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-professional p-6 sm:p-8 md:p-10 rounded-3xl hover-elegant"
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-royal-blue via-slate-blue to-steel-blue rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-blue">Recent Experience</h3>
                  <p className="text-steel-blue font-semibold text-lg">Dual Internships (2025)</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center p-5 bg-gradient-to-r from-royal-blue/30 to-slate-blue/30 rounded-xl border border-royal-blue/50 hover-elegant">
                  <div className="w-4 h-4 bg-gradient-to-br from-royal-blue to-slate-blue rounded-full mr-4"></div>
                  <div>
                    <p className="font-bold text-slate-blue text-lg">RBC - Automation Analyst</p>
                    <p className="text-steel-blue text-base font-medium">Production-grade automation systems</p>
                  </div>
                </div>
                <div className="flex items-center p-5 bg-gradient-to-r from-slate-blue/30 to-steel-blue/30 rounded-xl border border-slate-blue/50 hover-elegant">
                  <div className="w-4 h-4 bg-gradient-to-br from-slate-blue to-steel-blue rounded-full mr-4"></div>
                  <div>
                    <p className="font-bold text-slate-blue text-lg">LB Connect - Software Engineer</p>
                    <p className="text-steel-blue text-base font-medium">Codebase gatekeeper & backend systems</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-8 text-shadow-elegant"
            >
              Focus Areas
            </motion.h3>

            <div className="space-y-6">
              {[
                {
                  icon: Target,
                  title: "Automation Systems",
                  description: "Building production-grade automation and data processing pipelines",
                  color: "from-royal-blue to-slate-blue"
                },
                {
                  icon: Users,
                  title: "Software Development",
                  description: "Backend systems, APIs, and enterprise application development",
                  color: "from-slate-blue to-steel-blue"
                },
                {
                  icon: BookOpen,
                  title: "Financial Services",
                  description: "Banking automation, fintech solutions, and data processing",
                  color: "from-steel-blue to-royal-blue"
                },
                {
                  icon: Zap,
                  title: "Data Engineering",
                  description: "ETL pipelines, data cleaning, and analytics infrastructure",
                  color: "from-royal-blue via-slate-blue to-steel-blue"
                }
              ].map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect-strong p-8 rounded-2xl hover-elegant"
                >
                  <div className="flex items-start">
                    <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg`}>
                      <area.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-3 text-shadow-elegant">
                        {area.title}
                      </h4>
                      <p className="text-pale-blue leading-relaxed font-semibold text-lg text-shadow-elegant">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills & Certificates Section - Optimized View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-bold text-white mb-6 text-shadow-elegant">
              Technical Skills & Certificates
            </h3>
            <p className="text-pale-blue text-xl font-medium text-shadow-elegant">
              Essential toolkit for automation systems and software development
            </p>
          </motion.div>

          {/* Detailed Skills - Organized by Category */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technical Skills - Compact Layout */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="card-professional p-8 rounded-3xl hover-elegant"
            >
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-royal-blue to-slate-blue rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Code className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-blue">Technical Skills</h4>
              </div>
              
              <div className="space-y-4">
                {Object.entries(personalInfo.skills).map(([category, skills], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <h5 className="text-base font-semibold text-steel-blue border-b border-steel-blue/30 pb-1">
                      {category}
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.9 + skillIndex * 0.02 }}
                          viewport={{ once: true }}
                          className="px-2.5 py-1.5 bg-gradient-to-r from-royal-blue/15 to-slate-blue/15 text-slate-blue text-xs font-medium rounded-lg border border-royal-blue/30 hover:from-royal-blue/25 hover:to-slate-blue/25 transition-all duration-300 hover:scale-105"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certificates - Streamlined */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="card-professional p-8 rounded-3xl hover-elegant"
            >
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-blue to-steel-blue rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-blue">Certificates</h4>
              </div>
              
              <div className="space-y-3">
                {personalInfo.certificates?.map((certificate, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group flex items-center p-3 bg-gradient-to-r from-slate-blue/15 to-steel-blue/15 rounded-lg border border-slate-blue/30 hover:from-slate-blue/25 hover:to-steel-blue/25 transition-all duration-300 hover:scale-102 hover:shadow-md"
                  >
                    <div className="w-2.5 h-2.5 bg-gradient-to-br from-slate-blue to-steel-blue rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-steel-blue font-medium text-base group-hover:text-slate-blue transition-colors duration-300">{certificate}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 