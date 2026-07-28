import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";

const projects = [
  { title: "Luxe Events", category: "Branding, Web Design", image: "/images/work_1.png" },
  { title: "Noir Collective", category: "E-commerce, Web Design", image: "/images/work_2.png" },
  { title: "Apex Studios", category: "Web Design, Development", image: "/images/work_3.png" },
  { title: "Verde", category: "Branding, E-commerce", image: "/images/work_4.png" },
  { title: "Solstice", category: "App Design, UX/UI", image: "/images/work_5.png" },
  { title: "Horizon", category: "Web3, Product Design", image: "/images/work_6.png" },
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Rotate badge continuously
      gsap.to(badgeRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });

      // Reveal projects grid on scroll
      if (projectsRef.current) {
        gsap.from(projectsRef.current.children, {
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 85%",
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out"
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <Section className="bg-[#FAF7F2] pb-0" id="work">
      <div ref={containerRef}>
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20 relative">
          <div className="flex flex-col gap-6 max-w-xl">
            <div className="flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#C9A574]"></span>
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#C9A574] uppercase">
                OUR WORK
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading leading-none text-[#161616]">
              Our Work <br />
              Speaks Before <br />
              <span className="text-[#C9A574] italic">We Do.</span>
              <span className="inline-block ml-4 mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L13.8833 10.1167L24 12L13.8833 13.8833L12 24L10.1167 13.8833L0 12L10.1167 10.1167L12 0Z" fill="#C9A574"/>
                </svg>
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-8 max-w-sm pb-4 md:mr-32">
            <p className="text-lg md:text-xl text-[#555555] leading-relaxed">
              Explore a selection of our recent projects. Each one crafted with strategy, creativity, and precision to deliver real results.
            </p>
            <a href="#work" className="group flex items-center gap-3 text-base font-bold text-[#161616] hover:text-[#C9A574] transition-colors">
              View All Projects
              <span className="w-8 h-8 rounded-full bg-[#161616] text-white flex items-center justify-center transition-colors group-hover:bg-[#C9A574]">
                 <ArrowUpRight className="w-3 h-3" />
              </span>
            </a>
          </div>
          
          {/* Spinning Circular Text */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center pointer-events-none">
            <div
              ref={badgeRef}
              className="w-32 h-32 relative flex items-center justify-center origin-center"
            >
               <svg viewBox="0 0 100 100" className="w-full h-full text-[#161616] fill-current origin-center">
                 <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                 <text className="text-[11px] font-bold tracking-[0.25em] uppercase">
                   <textPath href="#circlePath" startOffset="0%">
                      DESIGNING EXPERIENCES THAT CONNECT •
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

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-t-xl overflow-hidden bg-[#E9E3DA]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              
              {/* Info Container */}
              <div className="flex items-center justify-between p-4 bg-white rounded-b-xl border border-t-0 border-[#E9E3DA]">
                <h3 className="text-base font-bold text-[#161616]">{project.title}</h3>
                <div className="flex items-center gap-2">
                   <span className="text-xs text-[#A3A3A3] uppercase tracking-wider">{project.category}</span>
                   <ArrowUpRight className="w-3 h-3 text-[#A3A3A3] group-hover:text-[#161616] transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
