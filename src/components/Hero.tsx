"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { Mail, Github, MapPin, Calendar, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-elegant"></div>
      
      {/* Sophisticated animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-royal-blue/20 to-slate-blue/20 rounded-full blur-3xl animate-pulse"
        ></motion.div>
        <motion.div 
          animate={{ 
            y: [0, 15, 0],
            x: [0, -10, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-steel-blue/20 to-sky-blue/20 rounded-full blur-3xl animate-pulse delay-1000"
        ></motion.div>
        <motion.div 
          animate={{ 
            y: [0, -10, 0],
            x: [0, 5, 0]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pale-blue/10 to-sky-blue/10 rounded-full blur-3xl animate-pulse delay-2000"
        ></motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-royal-blue via-slate-blue to-steel-blue text-white rounded-full text-base font-semibold mb-8 mt-4 shadow-xl text-shadow-elegant hover-elegant relative z-10 cursor-pointer"
            >
              <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></span>
              Seeking Jan & May 2026 Co-op/Internships
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-blue leading-tight mb-6 text-shadow-elegant"
            >
              Hi, I&apos;m{" "}
              <motion.span 
                className="bg-gradient-to-r from-royal-blue to-slate-blue bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {personalInfo.name}
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-steel-blue leading-relaxed mb-8 font-semibold"
            >
              <span className="text-royal-blue font-bold">{personalInfo.title}</span> with <span className="text-slate-blue font-bold">1+ years</span> building{" "}
              <span className="text-slate-blue font-bold">quantitative trading platforms</span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-slate-blue mb-8 max-w-3xl mx-auto font-medium leading-relaxed"
            >
              Currently working at{" "}
              <span className="text-royal-blue font-semibold">RBC</span> and{" "}
              <span className="text-royal-blue font-semibold">LB Connect</span> while building{" "}
              <span className="text-royal-blue font-semibold">quantitative tools</span> and{" "}
              <span className="text-royal-blue font-semibold">financial models</span>.
            </motion.p>

            {/* Location & Graduation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 text-sm sm:text-base mb-8 justify-center lg:justify-start"
            >
              <div className="flex items-center glass-effect px-4 py-3 rounded-lg shadow-sm hover-elegant">
                <MapPin className="h-5 w-5 mr-3 text-royal-blue" />
                <span className="text-slate-blue font-semibold">{personalInfo.location}</span>
              </div>
              <div className="flex items-center glass-effect px-4 py-3 rounded-lg shadow-sm hover-elegant">
                <Calendar className="h-5 w-5 mr-3 text-steel-blue" />
                <span className="text-slate-blue font-semibold">Graduation Date: Dec 2028</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6 mb-8 justify-center lg:justify-start"
            >
              <Button
                variant="sophisticated"
                size="xl"
                asChild
                className="font-bold"
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
                className="font-bold"
              >
                <a href="#projects">
                  <Github className="h-6 w-6 mr-3" />
                  View Projects
                </a>
              </Button>
            </motion.div>


          </motion.div>

          {/* Right Column - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-royal-blue to-slate-blue rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-steel-blue to-sky-blue rounded-full opacity-30 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-sky-blue to-pale-blue rounded-full opacity-40 animate-pulse delay-2000"></div>
              
              {/* Main Profile Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gradient-to-br from-royal-blue via-slate-blue to-steel-blue hover-professional">
                <div className="w-full h-full bg-gradient-to-br from-royal-blue via-slate-blue to-steel-blue flex items-center justify-center">
                  {/* Profile Picture */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/profile-photo.jpg"
                      alt="Dinusanth Surendran"
                      fill
                      className="object-cover"
                      priority
                      onError={(e) => {
                        // Hide the image if it fails to load
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-slate-blue"
          >
            <span className="text-lg mb-3 font-semibold text-shadow-elegant">Scroll to explore</span>
            <ArrowDown className="h-8 w-8 text-royal-blue" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 