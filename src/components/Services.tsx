import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Section from "./Section";

const services = [
  {
    num: "01",
    title: "Premium Websites",
    desc: "Beautiful, high-performance websites designed to elevate your brand and convert visitors into customers.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    image: "/images/work_1.png"
  },
  {
    num: "02",
    title: "AI Automation",
    desc: "Intelligent workflows, AI assistants, chatbots, and business automations that save time and increase efficiency.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L15 9H22L16.5 13.5L18.5 21L12 17L5.5 21L7.5 13.5L2 9H9L12 2Z" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    image: "/images/about_tech.png"
  },
  {
    num: "03",
    title: "Brand Identity",
    desc: "Crafting memorable visual identities that build trust and leave lasting impressions.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    image: "/images/work_2.png"
  },
  {
    num: "04",
    title: "Growth & SEO",
    desc: "Optimizing your digital presence to improve visibility, attract qualified traffic, and generate more opportunities.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    image: "/images/work_4.png"
  },
  {
    num: "05",
    title: "Product Design",
    desc: "User-focused interfaces and seamless digital experiences designed with strategy and purpose.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    image: "/images/work_3.png"
  },
  {
    num: "06",
    title: "Support & Scale",
    desc: "Continuous improvements, maintenance, performance optimization, and long-term digital partnership.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    image: "/images/work_6.png"
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.from(gridRef.current.children, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out"
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <Section className="bg-[#FAF7F2]" id="services">
      <div ref={containerRef}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#C9A574]"></span>
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#C9A574] uppercase">
                OUR SERVICES
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading leading-[1.05] text-[#161616]">
              Everything Your Business Needs to <span className="text-[#C9A574] italic">Grow Digitally.</span>
              <span className="inline-block ml-2 mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L13.8833 10.1167L24 12L13.8833 13.8833L12 24L10.1167 13.8833L0 12L10.1167 10.1167L12 0Z" fill="#C9A574"/>
                </svg>
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-6 max-w-sm pt-4">
            <p className="text-base md:text-lg text-[#555555] leading-relaxed">
              We combine strategy, design, development, and AI to build digital experiences that don&apos;t just look exceptional—they perform.
            </p>
            <a href="#start" className="group flex items-center gap-3 text-base font-bold text-[#161616] hover:text-[#C9A574] transition-colors">
              Let&apos;s Build Something Great
              <span className="w-8 h-8 rounded-full border border-[#161616] flex items-center justify-center transition-colors group-hover:border-[#C9A574]">
                 <ArrowRight className="w-3 h-3" />
              </span>
            </a>
          </div>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-[#E9E3DA] flex flex-col h-full relative overflow-hidden group"
            >
              <span className="text-[#C9A574] font-medium text-base mb-6">{service.num}</span>
              <div className="w-10 h-10 rounded-full border border-[#E9E3DA] flex items-center justify-center text-[#161616] mb-6">
                {service.icon}
              </div>
              
              <div className="flex-grow w-3/5">
                <h3 className="text-2xl font-heading text-[#161616] mb-3">{service.title}</h3>
                <p className="text-xs md:text-sm text-[#555555] leading-relaxed pr-4 mb-8">
                  {service.desc}
                </p>
              </div>
              
              <a href="#start" className="group/link flex items-center gap-2 text-xs md:text-sm font-bold text-[#161616] hover:text-[#C9A574] transition-colors mt-auto w-fit">
                Learn More
                <span className="w-6 h-6 rounded-full border border-[#161616] flex items-center justify-center transition-colors group-hover/link:border-[#C9A574]">
                   <ArrowRight className="w-2.5 h-2.5" />
                </span>
              </a>

              {/* Right side graphic/image placeholder */}
              <div className="absolute right-[-10%] top-[20%] w-1/2 h-[70%] rounded-xl overflow-hidden opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-x-2">
                 <img src={service.image} alt={service.title} className="w-full h-full object-cover object-left-top shadow-xl rounded-xl border-4 border-white/50" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="w-full bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-8 shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-[#E9E3DA]">
           <div className="flex items-center gap-4 w-full md:w-1/4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#161616] text-white flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L15 9H22L16.5 13.5L18.5 21L12 17L5.5 21L7.5 13.5L2 9H9L12 2Z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-bold text-[#161616]">Strategic Approach</span>
                <span className="text-[10px] md:text-xs text-[#555555]">We start with strategy and build with purpose.</span>
              </div>
           </div>
           
           <div className="flex items-center gap-4 w-full md:w-1/4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#161616] text-white flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-bold text-[#161616]">Results That Matter</span>
                <span className="text-[10px] md:text-xs text-[#555555]">Every solution is designed to drive measurable impact.</span>
              </div>
           </div>

           <div className="flex items-center gap-4 w-full md:w-1/4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#161616] text-white flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8zm14 14v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-bold text-[#161616]">Long-Term Partnership</span>
                <span className="text-[10px] md:text-xs text-[#555555]">We grow with you and support your journey at every stage.</span>
              </div>
           </div>

           <div className="flex items-center gap-4 w-full md:w-1/4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#161616] text-white flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-bold text-[#161616]">Quality & Reliability</span>
                <span className="text-[10px] md:text-xs text-[#555555]">We deliver quality work you can count on, always.</span>
              </div>
           </div>
        </div>
      </div>
    </Section>
  );
}
