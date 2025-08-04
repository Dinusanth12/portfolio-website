"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#extracurriculars", label: "Hobbies" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-slate-blue">
              Dinusanth Surendran
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-slate-blue hover:text-royal-blue font-semibold text-lg transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA & Social Links */}
          <div className="hidden xl:flex items-center space-x-4">
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-gradient-to-br from-royal-blue to-slate-blue text-white hover:scale-105 transition-transform duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-gradient-to-br from-royal-blue to-slate-blue text-white hover:scale-105 transition-transform duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            <Button
              variant="sophisticated"
              size="lg"
              asChild
              className="font-semibold"
            >
              <a href="#contact" onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}>
                <Mail className="h-5 w-5 mr-2" />
                Get In Touch
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded-xl bg-gradient-to-br from-royal-blue to-slate-blue text-white hover:scale-105 transition-transform duration-200"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="xl:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    handleNavClick(item.href);
                  }}
                  className="block text-slate-blue hover:text-royal-blue font-semibold text-lg py-3 px-4 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <Button
                  variant="sophisticated"
                  size="lg"
                  asChild
                  className="w-full font-semibold"
                >
                  <a href="#contact" onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    handleNavClick("#contact");
                  }}>
                    <Mail className="h-5 w-5 mr-2" />
                    Get In Touch
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
} 