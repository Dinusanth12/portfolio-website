"use client";

import { motion } from "framer-motion";
import { goals, timeline } from "@/data/portfolio";
import { Target, Calendar, TrendingUp, Zap, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Goals() {
  return (
    <section id="goals" className="relative py-20 overflow-hidden">
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
            <Target className="h-12 w-12 text-white" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl font-bold text-slate-blue mb-6 text-shadow-elegant"
          >
            Goals & Timeline
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl text-steel-blue max-w-5xl mx-auto leading-relaxed font-medium text-shadow-elegant"
          >
            My career roadmap and aspirations for the future.
          </motion.p>
        </motion.div>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
              viewport={{ once: true }}
              className="card-professional p-8 rounded-3xl hover-elegant"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-royal-blue via-slate-blue to-steel-blue rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-blue mb-4 leading-relaxed">
                {goal}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Timeline - Fixed vertical format */}
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
              viewport={{ once: true }}
              className="card-professional p-8 rounded-3xl hover-elegant"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-royal-blue via-slate-blue to-steel-blue rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-blue">
                    {item.year}
                  </h3>
                  <p className="text-steel-blue font-semibold text-lg">
                    Timeline Period
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {item.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-br from-royal-blue to-slate-blue rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <p className="text-steel-blue text-lg leading-relaxed font-medium">
                      {event}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
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
              Ready to Connect?
            </h3>
            <p className="text-steel-blue mb-8 max-w-3xl mx-auto font-medium text-lg leading-relaxed">
              I&apos;m actively seeking new opportunities and collaborations. 
              I&apos;d love to hear about potential roles or projects that align with my goals.
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
                  Get In Touch
                </a>
              </Button>
              <Button
                variant="outline"
                size="xl"
                asChild
                className="font-semibold"
              >
                <a href="#experience">
                  <TrendingUp className="h-6 w-6 mr-3" />
                  View Experience
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 