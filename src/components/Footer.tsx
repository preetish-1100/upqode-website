import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax effect on the huge logo text
      gsap.to(logoTextRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={containerRef} className="relative bg-[#FAF7F2] pt-24 overflow-hidden border-t border-[#E9E3DA]">
      
      {/* Huge Faded Logo */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center overflow-hidden pointer-events-none select-none">
        <span ref={logoTextRef} className="font-heading text-[15vw] leading-none tracking-tight text-[#E9E3DA]/60 uppercase translate-y-1/4">
          UPQODE
        </span>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-12 border-b border-[#E9E3DA]">
          <a href="#top" className="text-3xl font-heading font-semibold tracking-widest text-[#161616] uppercase mb-6 md:mb-0">
            UPQODE
          </a>
          
          <div className="flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-[#161616]">
            <a href="#" className="hover:text-[#C9A574] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#C9A574] transition-colors">X</a>
            <a href="#" className="hover:text-[#C9A574] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#C9A574] transition-colors">YouTube</a>
          </div>
        </div>

        {/* Main Links Area */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6 lg:pr-12">
            <h3 className="font-heading text-3xl text-[#161616]">
              Design that connects.<br/>
              Technology that <span className="text-[#C9A574] italic">empowers.</span>
            </h3>
            <p className="text-sm text-[#555555] leading-relaxed">
              We help ambitious brands stand out with thoughtful design, modern technology, and intelligent solutions.
            </p>
            <div className="pt-6 mt-6 border-t border-[#E9E3DA] flex items-center gap-4 text-sm text-[#555555]">
               <MapPin className="w-4 h-4" />
               <div>
                 <p className="font-medium text-[#161616]">Hyderabad, India</p>
                 <p className="text-xs">Working with clients worldwide.</p>
               </div>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-6 lg:pl-8">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#161616]">Company</h4>
            <div className="flex flex-col gap-4 text-sm">
              <a href="#about" className="text-[#555555] hover:text-[#161616] transition-colors">About Us</a>
              <a href="#work" className="text-[#555555] hover:text-[#161616] transition-colors">Our Work</a>
              <a href="#services" className="text-[#555555] hover:text-[#161616] transition-colors">Services</a>
              <a href="#process" className="text-[#555555] hover:text-[#161616] transition-colors">Process</a>
              <a href="#testimonials" className="text-[#555555] hover:text-[#161616] transition-colors">Testimonials</a>
              <a href="#" className="text-[#555555] hover:text-[#161616] transition-colors">Blog</a>
              <a href="#" className="text-[#555555] hover:text-[#161616] transition-colors">Careers</a>
              <a href="#start" className="text-[#555555] hover:text-[#161616] transition-colors">Contact</a>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-6 lg:pl-8 border-t md:border-t-0 md:border-l border-[#E9E3DA] pt-12 md:pt-0">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#161616]">Services</h4>
            <div className="flex flex-col gap-4 text-sm">
              <a href="#" className="text-[#555555] hover:text-[#161616] transition-colors">Premium Websites</a>
              <a href="#" className="text-[#555555] hover:text-[#161616] transition-colors">AI Automation</a>
              <a href="#" className="text-[#555555] hover:text-[#161616] transition-colors">Brand Identity</a>
              <a href="#" className="text-[#555555] hover:text-[#161616] transition-colors">Growth & SEO</a>
              <a href="#" className="text-[#555555] hover:text-[#161616] transition-colors">Product Design</a>
              <a href="#" className="text-[#555555] hover:text-[#161616] transition-colors">Support & Scale</a>
            </div>
          </div>

          {/* Quick Links & Contact */}
          <div className="flex flex-col gap-12 lg:pl-8 border-t lg:border-t-0 lg:border-l border-[#E9E3DA] pt-12 lg:pt-0">
            
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#161616]">Quick Links</h4>
              <div className="flex flex-col gap-4 text-sm">
                <a href="#start" className="text-[#555555] hover:text-[#161616] transition-colors">Start Your Project</a>
                <a href="#start" className="text-[#555555] hover:text-[#161616] transition-colors">Book a Call</a>
                <a href="#faq" className="text-[#555555] hover:text-[#161616] transition-colors">FAQ</a>
                <a href="#" className="text-[#555555] hover:text-[#161616] transition-colors">Privacy Policy</a>
                <a href="#" className="text-[#555555] hover:text-[#161616] transition-colors">Terms & Conditions</a>
              </div>
            </div>
            
          </div>

        </div>

        {/* Space for the large text */}
        <div className="h-40 md:h-64 lg:h-80 w-full"></div>

      </div>

      {/* Bottom Bar */}
      <div className="relative z-20 bg-[#161616] text-[#A3A3A3] py-6 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2024 UPQODE. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <span className="text-[#C9A574] text-sm">♥</span> for ambitious brands.
        </p>
      </div>

    </footer>
  );
}
