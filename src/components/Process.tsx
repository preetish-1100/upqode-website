import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Compass, Target, PenTool, Rocket, ShieldCheck, Clock, Users, Zap } from "lucide-react";
import Section from "./Section";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We start by understanding your business, goals, audience, and challenges through in-depth research and conversations.",
    icon: <Compass className="w-5 h-5 text-[#161616]" />,
    image: "./images/work_1.png"
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We craft a tailored strategy and solution roadmap that aligns with your goals and sets the foundation for success.",
    icon: <Target className="w-5 h-5 text-[#161616]" />,
    image: "./images/work_2.png"
  },
  {
    num: "03",
    title: "Design & Develop",
    desc: "We bring ideas to life with thoughtful design and clean, modern development focused on performance and usability.",
    icon: <PenTool className="w-5 h-5 text-[#161616]" />,
    image: "./images/work_3.png"
  },
  {
    num: "04",
    title: "Launch & Grow",
    desc: "We launch with precision and provide ongoing support to optimize, scale, and help your business grow.",
    icon: <Rocket className="w-5 h-5 text-[#161616]" />,
    image: "./images/work_4.png"
  }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const trustStripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Rotating badge
      gsap.to(badgeRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });

      // Line draw animation
      if (lineRef.current) {
        const length = lineRef.current.getTotalLength();
        gsap.set(lineRef.current, { strokeDasharray: length, strokeDashoffset: length });
        
        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: true
          }
        });
      }

      // Step cards stagger reveal
      if (stepsRef.current) {
        gsap.from(stepsRef.current.children, {
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 75%",
          },
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out"
        });
      }

      // Trust strip reveal
      if (trustStripRef.current) {
        gsap.from(trustStripRef.current, {
          scrollTrigger: {
            trigger: trustStripRef.current,
            start: "top 90%",
          },
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="process" className="bg-[#FAF7F2]">
      <div ref={containerRef} className="flex flex-col gap-16 md:gap-24">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 relative">
          <div className="flex flex-col gap-6 max-w-xl">
            <div className="flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#C9A574]"></span>
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#C9A574] uppercase">
                OUR PROCESS
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading leading-none text-[#161616]">
              A Clear Process. <br />
              <span className="text-[#C9A574] italic">Exceptional Results.</span>
              <span className="inline-block ml-4 mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L13.8833 10.1167L24 12L13.8833 13.8833L12 24L10.1167 13.8833L0 12L10.1167 10.1167L12 0Z" fill="#C9A574"/>
                </svg>
              </span>
            </h2>
          </div>

          <div className="relative flex flex-col gap-8 max-w-sm pb-4 md:mr-32">
            <p className="text-lg md:text-xl text-[#555555] leading-relaxed">
              We follow a proven process to deliver digital experiences that are strategic, meaningful, and built for long-term growth.
            </p>
          </div>
          
          {/* Spinning Circular Text */}
          <div className="absolute right-0 top-[58%] -translate-y-1/2 hidden lg:flex items-center justify-center pointer-events-none">
            <div
              ref={badgeRef}
              className="w-32 h-32 relative flex items-center justify-center origin-center"
            >
               <svg viewBox="0 0 100 100" className="w-full h-full text-[#161616] fill-current origin-center">
                 <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                 <text className="text-[11px] font-bold tracking-[0.25em] uppercase">
                   <textPath href="#circlePath" startOffset="0%">
                      STRATEGY • DESIGN • TECHNOLOGY • GROWTH •
                   </textPath>
                 </text>
               </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.8833 10.1167L22 12L13.8833 13.8833L12 22L10.1167 13.8833L2 12L10.1167 10.1167L12 2Z" fill="#C9A574"/>
                </svg>
            </div>
          </div>
        </div>

        {/* Timeline Area */}
        <div className="relative pt-4">
          {/* Horizontal Line SVG */}
          <div className="hidden lg:block absolute top-[44px] left-0 w-full h-[2px] z-0 overflow-hidden">
             <svg width="100%" height="2" preserveAspectRatio="none">
               <path 
                 ref={lineRef}
                 d="M0,1 L2000,1" 
                 stroke="#C9A574" 
                 strokeWidth="2" 
                 fill="none" 
               />
             </svg>
          </div>
          
          {/* Background default line */}
          <div className="hidden lg:block absolute top-[44px] left-0 w-full h-[2px] bg-[#E9E3DA] -z-10"></div>

          <div ref={stepsRef} className="grid lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col gap-6 relative group">
                {/* Node & Title Row */}
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-heading text-[#C9A574] bg-[#FAF7F2] py-1 pr-2 z-10">{step.num}</span>
                  <div className="w-12 h-12 shrink-0 rounded-2xl border border-[#E9E3DA] bg-white flex items-center justify-center shadow-sm relative z-10 transition-transform duration-500 group-hover:scale-110">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-heading text-[#161616] bg-[#FAF7F2] py-1 pl-2 pr-4 z-10">{step.title}</h3>
                </div>
                
                {/* Dots on the line (desktop only) */}
                <div className="hidden lg:block absolute top-[-6px] left-[76px] w-3 h-3 rounded-full bg-[#C9A574] z-20"></div>

                <p className="text-sm text-[#555555] leading-relaxed">
                  {step.desc}
                </p>
                
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mt-2">
                   <img src={step.image} alt={step.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                
                <a href="#start" className="group/link flex items-center gap-2 text-xs font-bold text-[#C9A574] hover:text-[#161616] transition-colors mt-2">
                  Learn More <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Strip */}
        <div ref={trustStripRef} className="w-full bg-[#F4EFE6] rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full border border-[#C9A574]/30 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#161616]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-bold text-[#161616]">Transparent Communication</span>
                <span className="text-[10px] md:text-xs text-[#555555]">You&apos;re involved and informed at every step.</span>
              </div>
           </div>
           
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full border border-[#C9A574]/30 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#161616]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-bold text-[#161616]">On-Time Delivery</span>
                <span className="text-[10px] md:text-xs text-[#555555]">We respect deadlines and deliver on our promises.</span>
              </div>
           </div>

           <div className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full border border-[#C9A574]/30 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#161616]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-bold text-[#161616]">Collaborative Approach</span>
                <span className="text-[10px] md:text-xs text-[#555555]">We work with you, not just for you.</span>
              </div>
           </div>

           <div className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full border border-[#C9A574]/30 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#161616]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-bold text-[#161616]">Results Driven</span>
                <span className="text-[10px] md:text-xs text-[#555555]">We focus on outcomes that create real impact.</span>
              </div>
           </div>
        </div>

      </div>
    </Section>
  );
}
