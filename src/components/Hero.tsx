import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight, Play } from "lucide-react";
import Section from "./Section";

const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years of Experience" },
  { value: "24/7", label: "Support & Care" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const desktopMockupRef = useRef<HTMLDivElement>(null);
  const tabletMockupRef = useRef<HTMLDivElement>(null);
  const phoneMockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Intro animations
      gsap.from(leftContentRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out"
      });

      gsap.from(rightContentRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
      });

      gsap.from(statsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out"
      });

      // Continuous float animations for mockups
      gsap.to(desktopMockupRef.current, {
        y: -10,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });

      gsap.to(tabletMockupRef.current, {
        y: -8,
        duration: 3.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 0.5
      });

      gsap.to(phoneMockupRef.current, {
        y: 15,
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section className="py-24 md:py-32 flex flex-col justify-center relative overflow-hidden" id="hero">
      <div ref={containerRef}>
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-8 items-center w-full z-10 relative">
          {/* Left Content */}
          <div ref={leftContentRef} className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="w-10 h-[1px] bg-[#C9A574]"></span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#C9A574] uppercase">
                DIGITAL EXPERIENCES THAT DELIVER
              </span>
            </div>

            <h1 className="text-6xl md:text-[5rem] lg:text-[6.5rem] font-heading leading-[1.05] tracking-tight text-[#161616]">
              <span className="flex items-start gap-4">
                Designed to
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-2 md:mt-4 hidden md:block shrink-0">
                  <path d="M12 0L13.8833 10.1167L24 12L13.8833 13.8833L12 24L10.1167 13.8833L0 12L10.1167 10.1167L12 0Z" fill="#C9A574"/>
                </svg>
              </span>
              Be Seen. <br />
              <span className="text-[#C9A574] italic">Built to Grow.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#555555] max-w-md leading-relaxed">
              We create premium digital experiences that turn attention into trust and visitors into customers.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a
                href="#start"
                className="group flex items-center justify-center gap-3 bg-[#161616] text-white px-8 py-4 rounded-full text-sm font-medium transition-all hover:bg-[#C9A574]"
              >
                Start Your Project
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="#work"
                className="group flex items-center gap-4 text-[#161616] px-2 py-4 text-sm font-medium transition-all hover:text-[#C9A574]"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#C9A574] text-white shadow-md transition-colors hover:bg-[#b08f61]">
                  <Play className="w-4 h-4 ml-1 fill-current" />
                </span>
                View Our Work
              </a>
            </div>
          </div>

          {/* Right Content - Overlapping Mockups */}
          <div ref={rightContentRef} className="relative w-full aspect-[4/3] lg:aspect-[1.2/1] xl:aspect-[1.3/1]">
            {/* Main Desktop Mockup */}
            <div
              ref={desktopMockupRef}
              className="absolute top-0 right-0 w-[85%] h-[75%] rounded-2xl shadow-2xl overflow-hidden bg-[#161616]"
            >
               <img src="./images/work_1.png" alt="Desktop Mockup" className="w-full h-full object-cover object-top opacity-90" />
            </div>

            {/* Tablet Mockup */}
            <div
              ref={tabletMockupRef}
              className="absolute bottom-0 right-[5%] w-[65%] h-[45%] rounded-xl shadow-2xl overflow-hidden bg-white z-10"
            >
               <img src="./images/work_4.png" alt="Tablet Mockup" className="w-full h-full object-cover object-top" />
            </div>
            
            {/* Phone Mockup */}
            <div
              ref={phoneMockupRef}
              className="absolute top-[20%] left-0 w-[22%] h-[60%] rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.3)] overflow-hidden bg-white border-[6px] border-[#161616] z-20"
            >
               <img src="./images/work_3.png" alt="Phone Mockup" className="w-full h-full object-cover object-center" />
            </div>

            {/* Decorative Vase */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 z-30 pointer-events-none mix-blend-multiply opacity-80 hidden lg:block">
               <img src="./images/work_4.png" alt="Vase" className="w-full h-full object-cover rounded-full filter blur-[2px]" style={{ maskImage: 'linear-gradient(to top, black, transparent)' }} />
            </div>
          </div>
        </div>

        {/* Bottom Stats & Trust (Full width row) */}
        <div ref={statsRef} className="w-full mt-16 xl:mt-0 pt-8 xl:pt-0 flex flex-col xl:flex-row justify-between items-center gap-8 border-t border-[#E9E3DA] xl:border-none z-20 relative">
          <div className="flex flex-col gap-6 w-full xl:w-auto">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#A3A3A3] uppercase">
              TRUSTED BY AMBITIOUS BRANDS
            </span>
            <div className="flex items-center flex-wrap gap-8 md:gap-12 opacity-80">
              <div className="flex flex-col">
                <span className="font-heading text-xl tracking-[0.2em] text-[#161616]">LUXE</span>
                <span className="text-[7px] tracking-[0.4em] uppercase text-[#161616] block mt-0.5">Events</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2L15 9H22L16.5 13.5L18.5 21L12 17L5.5 21L7.5 13.5L2 9H9L12 2Z"/></svg>
                <div className="flex flex-col">
                  <span className="font-heading text-lg tracking-[0.15em] leading-none text-[#161616]">BELLA</span>
                  <span className="text-[7px] tracking-[0.2em] uppercase leading-none text-[#161616]">Florals</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-heading text-lg tracking-[0.15em] leading-none text-[#161616]">VIVID</span>
                <span className="text-[7px] tracking-[0.3em] uppercase leading-none text-[#161616]">Studios</span>
              </div>
              <div className="flex flex-col items-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.07 4.93L16.24 7.76M7.76 16.24L4.93 19.07M19.07 19.07L16.24 16.24M7.76 7.76L4.93 4.93"/></svg>
                <span className="font-heading text-lg tracking-[0.15em] leading-none text-[#161616]">ELEVATE</span>
                <span className="text-[7px] tracking-[0.3em] uppercase leading-none text-[#161616]">Planners</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-heading text-lg tracking-[0.15em] leading-none text-[#161616]">SONIC</span>
                <span className="text-[7px] tracking-[0.3em] uppercase leading-none text-[#161616]">Entertainment</span>
              </div>
            </div>
          </div>

          {/* Stats Pill */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-between md:gap-12 bg-white/70 backdrop-blur-md rounded-3xl px-8 md:px-12 py-6 md:py-8 border border-white shadow-[0_10px_40px_rgba(0,0,0,0.03)] w-full xl:w-auto relative">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1 items-start w-1/2 md:w-auto mb-4 md:mb-0">
                <span className="text-3xl md:text-4xl font-heading text-[#161616]">{stat.value}</span>
                <span className="text-[10px] md:text-xs text-[#555555] font-medium tracking-wide">{stat.label}</span>
              </div>
            ))}
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none rounded-r-3xl hidden xl:block"></div>
          </div>
        </div>
      </div>
    </Section>
  );
}
