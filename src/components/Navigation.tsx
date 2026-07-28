import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Our Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "Services", href: "#services" },
  { name: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-24 h-24 transition-all duration-500 ${
        isScrolled ? "bg-bg-primary/80 backdrop-blur-lg border-b border-border/50 shadow-sm" : "bg-transparent"
      }`}
    >
      <a href="#top" className="text-2xl font-heading font-semibold tracking-widest text-text-primary uppercase">
        UPQODE
      </a>

      <nav className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-text-primary hover:text-accent transition-colors relative group"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      <a
        href="#start"
        className="hidden md:flex group items-center gap-2 bg-text-primary text-bg-primary px-6 py-3 rounded-full text-sm font-medium transition-all hover:bg-bg-primary hover:text-text-primary hover:shadow-[0_0_20px_rgba(201,165,116,0.2)] border border-transparent hover:border-text-primary"
      >
        Start Your Project
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </header>
  );
}
