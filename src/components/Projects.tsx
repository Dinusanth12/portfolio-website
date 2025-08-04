"use client";

import { motion } from "framer-motion";
import { projects, personalInfo } from "@/data/portfolio";
import { Code, ExternalLink, Github, Mail, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 overflow-hidden">
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
            <Code className="h-12 w-12 text-white" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl font-bold text-slate-blue mb-6 text-shadow-elegant"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl text-steel-blue max-w-5xl mx-auto leading-relaxed font-medium text-shadow-elegant"
          >
            A showcase of my technical skills and passion for building impactful solutions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
              viewport={{ once: true }}
              className="group card-professional p-6 sm:p-8 md:p-10 rounded-3xl hover-elegant transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-blue group-hover:text-royal-blue transition-all duration-300 mb-4 transform group-hover:translate-x-1">
                    {project.title}
                  </h3>
                  <div className="text-steel-blue text-lg leading-relaxed font-medium space-y-2">
                    {project.description.split('. ').map((sentence, index) => (
                      sentence.trim() && (
                        <div key={index} className="flex items-start">
                          <span className="text-royal-blue mr-2 mt-2">•</span>
                          <span>{sentence.trim()}</span>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </div>

              {/* Impact Metrics */}
              {project.impact && (
                <div className="mb-8 p-6 bg-gradient-to-r from-royal-blue/40 via-slate-blue/40 to-steel-blue/40 rounded-2xl border border-royal-blue/60 shadow-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-br from-royal-blue to-slate-blue rounded-full mr-4"></div>
                    <span className="text-lg font-semibold text-slate-blue">
                      {project.impact}
                    </span>
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gradient-to-r from-white to-pale-blue text-slate-blue text-base font-semibold rounded-full border border-sky-blue shadow-sm hover-elegant"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Actions */}
              {project.githubUrl && (
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="flex-1 font-semibold"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 mr-3" />
                      View Code
                    </a>
                  </Button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card-sophisticated p-10 rounded-3xl">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-royal-blue via-slate-blue to-steel-blue rounded-full mb-6 shadow-lg"
            >
              <Zap className="h-10 w-10 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-slate-blue mb-6">
              More Projects Coming Soon
            </h3>
            <p className="text-steel-blue mb-8 max-w-3xl mx-auto font-medium text-lg leading-relaxed">
              I&apos;m constantly building new projects and exploring cutting-edge technologies. 
              Have an idea for a collaboration? Let&apos;s create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                variant="sophisticated"
                size="xl"
                asChild
                className="font-semibold"
              >
                <a href="#contact">
                  <Mail className="h-6 w-6 mr-3" />
                  Let&apos;s Collaborate
                </a>
              </Button>
              <Button
                variant="outline"
                size="xl"
                asChild
                className="font-semibold"
              >
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 mr-3" />
                  View All Projects
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 