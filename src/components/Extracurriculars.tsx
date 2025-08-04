"use client";

import { motion } from "framer-motion";
import { extracurriculars } from "@/data/portfolio";
import { Heart, Award } from "lucide-react";

export default function Extracurriculars() {
  return (
    <section id="extracurriculars" className="relative py-20 overflow-hidden">
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
            <Heart className="h-12 w-12 text-royal-blue" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl font-bold text-white mb-6 text-shadow-elegant"
          >
            Hobbies & Interests
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl text-pale-blue max-w-5xl mx-auto leading-relaxed font-medium text-shadow-elegant"
          >
            I&apos;m committed to creating opportunities for underrepresented youth in{" "}
            <span className="text-white font-bold">tech</span> and{" "}
            <span className="text-white font-bold">finance</span>.
          </motion.p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {extracurriculars.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-blue/50 via-sky-blue/50 to-pale-blue/50 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-3xl hover-elegant border border-slate-blue/40 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Activity Header */}
              <div className="flex items-start mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-royal-blue via-slate-blue to-steel-blue rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <span className="text-3xl">{activity.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 text-shadow-elegant">
                    {activity.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-pale-blue font-semibold text-lg">{activity.role}</span>
                    <span className="text-pale-blue">•</span>
                    <span className="text-pale-blue font-semibold text-lg">{activity.organization}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-pale-blue leading-relaxed mb-8 font-medium text-lg text-shadow-elegant">
                {activity.description}
              </p>

              {/* Impact Metrics */}
              {activity.impact && (
                <div className="p-6 bg-gradient-to-r from-royal-blue/40 via-slate-blue/40 to-steel-blue/40 rounded-2xl border border-royal-blue/60 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Award className="h-6 w-6 text-royal-blue mr-3" />
                    <span className="text-lg font-bold text-white text-shadow-elegant">
                      Impact Metrics
                    </span>
                  </div>
                  <p className="text-pale-blue text-lg font-semibold text-shadow-elegant">
                    {activity.impact}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 