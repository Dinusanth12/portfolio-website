"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ResumeDownload() {

  return (
    <div className="card-professional p-6 sm:p-8 md:p-10 rounded-3xl">
      <div className="text-center">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="w-20 h-20 bg-gradient-to-br from-royal-blue via-slate-blue to-steel-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
        >
          <FileText className="h-10 w-10 text-white" />
        </motion.div>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-slate-blue mb-4"
        >
          Download Resume
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-steel-blue mb-6 font-medium text-lg"
        >
          Get my latest resume with detailed experience and skills
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="sophisticated"
              size="lg"
              asChild
              className="font-bold"

            >
              <a 
                href="/resume.pdf" 
                download="Dinusanth_Surendran_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-5 w-5 mr-3" />
                Download Resume
              </a>
            </Button>
            
            <Button
              variant="sophisticated"
              size="lg"
              asChild
              className="font-bold"
            >
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-5 w-5 mr-3" />
                View in Browser
              </a>
            </Button>
          </div>
          
          {/* File Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xs text-steel-blue mt-4 p-3 bg-slate-blue/10 rounded-lg"
          >
            <div className="flex items-center justify-center gap-2">
              <FileText className="h-3 w-3" />
              <span>PDF Format • Updated Regularly</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 