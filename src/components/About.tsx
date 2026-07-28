import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight, Play } from "lucide-react";
import Section from "./Section";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const collageRef = useRef<HTMLDivElement>(null);
  const featureListRef = useRef<HTMLDivElement>(null);
  const statsQuoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Left text reveal
      gsap.from(leftContentRef.current, {
        scrollTrigger: {
          trigger: leftContentRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      // Collage reveal
      gsap.from(collageRef.current, {
        scrollTrigger: {
          trigger: collageRef.current,
          start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Features stagger
      if (featureListRef.current) {
        gsap.from(featureListRef.current.children, {
          scrollTrigger: {
            trigger: featureListRef.current,
            start: "top 85%",
          },
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out"
        });
      }

      // Stats and quote reveal
      gsap.from(statsQuoteRef.current, {
        scrollTrigger: {
          trigger: statsQuoteRef.current,
          start: "top 85%",
        },
        x: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <Section className="bg-[#FAF7F2]" id="about">
      <div ref={containerRef}>
        {/* Top Half */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-start mb-24">
          {/* Left: Text Content */}
          <div ref={leftContentRef} className="flex flex-col gap-8 max-w-xl pt-4">
            <div className="flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#C9A574]"></span>
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#C9A574] uppercase">
                ABOUT US
              </span>
            </div>

            <h2 className="text-6xl md:text-7xl font-heading leading-[1.05] text-[#161616]">
              Built for brands<br />
              that refuse to<br />
              <span className="text-[#C9A574] italic">blend in.</span>
              <span className="inline-block ml-4 mb-8">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L13.8833 10.1167L24 12L13.8833 13.8833L12 24L10.1167 13.8833L0 12L10.1167 10.1167L12 0Z" fill="#C9A574"/>
                </svg>
              </span>
            </h2>

            <p className="text-lg md:text-xl text-[#555555] leading-relaxed">
              We believe every business deserves more than a template website. That&apos;s why we combine thoughtful design, modern technology, and AI to create digital experiences that inspire confidence, build trust, and drive meaningful growth.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a
                href="#start"
                className="group flex items-center justify-center gap-3 bg-[#161616] text-white px-10 py-5 rounded-full text-base font-medium transition-all hover:bg-[#C9A574]"
              >
                Let&apos;s Work Together
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="#story"
                className="group flex items-center gap-3 text-[#161616] px-2 py-5 text-base font-medium transition-all hover:text-[#C9A574]"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#C9A574] text-white transition-colors">
                  <Play className="w-4 h-4 ml-1 fill-current" />
                </span>
                <span className="border-b border-dashed border-[#161616] group-hover:border-[#C9A574]">Our Story</span>
              </a>
            </div>
          </div>

          {/* Right: Collage */}
          <div ref={collageRef} className="relative h-[450px] md:h-[550px] w-full">
             {/* Main Image */}
             <div className="absolute top-0 right-0 w-[80%] h-[75%] rounded-2xl overflow-hidden shadow-xl">
               <img src="./images/about_lifestyle.png" alt="Office meeting" className="w-full h-full object-cover" />
             </div>

             {/* Decorative dots pattern */}
             <div className="absolute top-8 right-[-2rem] w-32 h-32 opacity-20 -z-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#161616 1.5px, transparent 1.5px)", backgroundSize: "12px 12px" }}></div>

             {/* Overlapping small image */}
             <div className="absolute bottom-12 right-12 md:right-24 w-[45%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2] z-10">
               <img src="./images/work_5.png" alt="Desktop monitor" className="w-full h-full object-cover" />
             </div>

             {/* Handwriting Note */}
             <div className="absolute bottom-0 left-[20%] z-20 rotate-[-5deg]">
                <span className="font-script text-4xl text-[#555555]">
                  Design meets<br/>technology
                </span>
                <svg className="absolute -bottom-4 left-0 w-32 h-4 text-[#555555]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 0" stroke="currentColor" fill="transparent" strokeWidth="1"/>
                </svg>
             </div>
          </div>
        </div>

        {/* Bottom Half - Features & Stats */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24 pt-16 border-t border-[#E9E3DA]">
          {/* Features 4 cols */}
          <div ref={featureListRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9E3DA] flex items-center justify-center text-[#C9A574]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 21l18-18" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h4 className="font-bold text-base md:text-lg text-[#161616]">Thoughtful Design</h4>
              <p className="text-sm text-[#555555] leading-relaxed pr-2">Beautiful, intuitive designs that reflect your brand and connect with your audience.</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9E3DA] flex items-center justify-center text-[#C9A574]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h4 className="font-bold text-base md:text-lg text-[#161616]">Modern Technology</h4>
              <p className="text-sm text-[#555555] leading-relaxed pr-2">Clean, scalable, and high-performing websites built with the latest technologies.</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9E3DA] flex items-center justify-center text-[#C9A574]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zM9 12h6M12 9v6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h4 className="font-bold text-base md:text-lg text-[#161616]">AI-Powered Solutions</h4>
              <p className="text-sm text-[#555555] leading-relaxed pr-2">Smart automation and AI integrations that streamline processes and unlock new opportunities.</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9E3DA] flex items-center justify-center text-[#C9A574]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 20h16M4 16V4h4v12M10 16v-8h4v8M16 16v-4h4v4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h4 className="font-bold text-base md:text-lg text-[#161616]">Growth Focused</h4>
              <p className="text-sm text-[#555555] leading-relaxed pr-2">Every decision we make is centered around driving results and long-term growth for your business.</p>
            </div>
          </div>

          {/* Stats & Quote */}
          <div ref={statsQuoteRef} className="flex flex-col gap-12 lg:pl-12 lg:border-l border-[#E9E3DA]">
             <div className="flex items-center gap-8 justify-between">
                <div className="flex flex-col">
                  <span className="text-4xl font-heading text-[#161616]">50<span className="text-[#C9A574]">+</span></span>
                  <span className="text-[10px] text-[#555555]">Projects Delivered</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-heading text-[#161616]">98<span className="text-[#C9A574]">%</span></span>
                  <span className="text-[10px] text-[#555555]">Client Satisfaction</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-heading text-[#161616]">5<span className="text-[#C9A574]">+</span></span>
                  <span className="text-[10px] text-[#555555]">Years of Experience</span>
                </div>
             </div>

             <div className="flex items-start gap-4">
                <span className="font-heading text-5xl text-[#C9A574] leading-none h-8 mt-1">&ldquo;</span>
                <p className="text-lg md:text-xl font-medium text-[#161616] leading-relaxed max-w-sm">
                  We don&apos;t just build websites,<br/>we build digital experiences that make an <span className="italic text-[#C9A574]">impact.</span>
                </p>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
