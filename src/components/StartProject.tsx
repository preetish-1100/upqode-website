import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Calendar, Target, Shield, Mail, MessageCircle, MapPin, Globe, Lock } from "lucide-react";
import Section from "./Section";

export default function StartProject() {
  const [selectedDate, setSelectedDate] = useState<number | null>(15);
  const [selectedTime, setSelectedTime] = useState<string>("12:00 PM");
  
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      gsap.from(calendarRef.current, {
        scrollTrigger: {
          trigger: calendarRef.current,
          start: "top 80%",
        },
        x: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleDateClick = (day: number) => {
    setSelectedDate(day);
  };

  const handleTimeClick = (time: string, e: React.MouseEvent) => {
    setSelectedTime(time);
    gsap.fromTo(e.currentTarget, { scale: 0.95 }, { scale: 1, duration: 0.3, ease: "back.out(2)" });
  };

  const times = ["10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM"];

  return (
    <Section className="bg-[#FAF7F2] pb-0 relative" id="start">
      <div ref={containerRef} className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start pb-24 border-b border-[#E9E3DA]/50">
        
        {/* Left Content */}
        <div ref={leftRef} className="flex flex-col gap-6 pt-4">
          <div className="flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#C9A574]"></span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#C9A574] uppercase">
              LET&apos;S CONNECT
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading leading-[1.05] tracking-tight text-[#161616]">
            Let&apos;s Build <br />
            Something <br />
            <span className="text-[#C9A574] italic">Exceptional.</span>
            <span className="inline-block ml-4 mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L13.8833 10.1167L24 12L13.8833 13.8833L12 24L10.1167 13.8833L0 12L10.1167 10.1167L12 0Z" fill="#C9A574"/>
              </svg>
            </span>
          </h2>

          <p className="text-lg md:text-xl text-[#555555] leading-relaxed max-w-md">
            Tell us about your vision. We&apos;ll explore your goals, share ideas, and create a roadmap tailored to your business.
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-2">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-[#E9E3DA]/50 flex items-center justify-center">
                 <Calendar className="w-4 h-4 text-[#161616]" />
               </div>
               <span className="text-xs md:text-sm font-bold text-[#161616]">Free Consultation</span>
             </div>
             <div className="w-[1px] h-6 bg-[#E9E3DA] hidden sm:block"></div>
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-[#E9E3DA]/50 flex items-center justify-center">
                 <Target className="w-4 h-4 text-[#161616]" />
               </div>
               <span className="text-xs md:text-sm font-bold text-[#161616]">Personalized Strategy Session</span>
             </div>
             <div className="w-[1px] h-6 bg-[#E9E3DA] hidden lg:block"></div>
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-[#E9E3DA]/50 flex items-center justify-center">
                 <Shield className="w-4 h-4 text-[#161616]" />
               </div>
               <span className="text-xs md:text-sm font-bold text-[#161616]">No Obligation</span>
             </div>
          </div>

          {/* Unified Contact Card Block */}
          <div className="flex flex-col gap-6 mt-8 p-6 md:p-8 bg-[#F4EFE6] rounded-2xl w-full max-w-[400px]">
             <a href="mailto:hello@upqode.com" className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#161616] text-white flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#161616]">Email Us</span>
                    <span className="text-xs text-[#555555]">hello@upqode.com</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#555555] group-hover:text-[#161616] transition-colors" />
             </a>

             <a href="#" className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#161616] text-white flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#161616]">WhatsApp</span>
                    <span className="text-xs text-[#555555]">+91 12345 67890</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#555555] group-hover:text-[#161616] transition-colors" />
             </a>

             <a href="#" className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#161616] text-white flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#161616]">Our Location</span>
                    <span className="text-xs text-[#555555]">Hyderabad, India</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#555555] group-hover:text-[#161616] transition-colors" />
             </a>
          </div>
        </div>

        {/* Right Content: Calendar Widget */}
        <div ref={calendarRef} className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.03)] flex flex-col w-full h-full">
           <div className="flex items-start gap-5 mb-8 pb-8 border-b border-[#E9E3DA]">
             <div className="w-14 h-14 rounded-xl bg-[#F7F4EF] text-[#161616] flex items-center justify-center shrink-0">
               <Calendar className="w-6 h-6" />
             </div>
             <div className="flex flex-col">
               <span className="text-[10px] font-bold tracking-widest text-[#C9A574] uppercase mb-1">BOOK A 30-MINUTE</span>
               <h3 className="text-3xl md:text-4xl font-heading text-[#161616] mb-2">Discovery Call</h3>
               <p className="text-xs md:text-sm text-[#555555]">Select a date and time that works best for you.</p>
             </div>
           </div>

           <div className="flex flex-col md:flex-row gap-10 flex-grow">
              {/* Calendar Left */}
              <div className="flex-1 flex flex-col">
                 <div className="flex justify-between items-center mb-6">
                   <ArrowRight className="w-4 h-4 rotate-180 text-[#161616] cursor-pointer" />
                   <span className="text-sm font-bold text-[#161616]">May 2024</span>
                   <ArrowRight className="w-4 h-4 text-[#161616] cursor-pointer" />
                 </div>
                 <div className="grid grid-cols-7 gap-y-4 text-center">
                    {['MON','TUE','WED','THU','FRI','SAT','SUN'].map(day => (
                      <span key={day} className="text-[9px] font-bold text-[#A3A3A3] mb-2">{day}</span>
                    ))}
                    {/* Empty slots for May 2024 (starts wed) */}
                    <span className="text-[13px] text-[#A3A3A3]">29</span>
                    <span className="text-[13px] text-[#A3A3A3]">30</span>
                    {Array.from({length: 31}).map((_, i) => {
                      const day = i + 1;
                      const isSelected = selectedDate === day;
                      const isToday = day === 16;
                      return (
                        <div 
                          key={day} 
                          onClick={() => handleDateClick(day)}
                          className={`flex items-center justify-center w-10 h-10 mx-auto rounded-full text-[13px] cursor-pointer transition-colors ${
                            isSelected ? 'bg-[#161616] text-white font-bold shadow-md' : 
                            isToday && !isSelected ? 'border border-[#C9A574] text-[#161616] font-medium' : 
                            'text-[#161616] hover:bg-[#F7F4EF]'
                          }`}
                        >
                          {day}
                        </div>
                      );
                    })}
                 </div>
                 
                 <div className="mt-auto pt-8 flex items-center gap-2 text-xs text-[#555555]">
                   <Globe className="w-4 h-4" />
                   <span>India Standard Time (IST)</span>
                   <ArrowRight className="w-3 h-3 ml-auto rotate-90 text-[#A3A3A3]" />
                 </div>
              </div>

              {/* Time Slots Right */}
              <div className="w-full md:w-[240px] flex flex-col md:pl-10 md:border-l border-[#E9E3DA]">
                 <span className="text-sm font-bold text-[#161616] mb-6 block">
                   Wednesday, May {selectedDate || 15}
                 </span>
                 <div className="flex flex-col gap-3">
                   {times.map((time) => {
                     const isSelected = selectedTime === time;
                     return (
                       <button 
                         key={time}
                         onClick={(e) => handleTimeClick(time, e)}
                         className={`w-full py-3 rounded-lg text-xs transition-all ${
                           isSelected 
                             ? 'bg-[#161616] text-white font-bold shadow-lg border border-transparent' 
                             : 'border border-[#E9E3DA] font-medium text-[#161616] hover:border-[#161616]'
                         }`}
                       >
                         {time}
                       </button>
                     );
                   })}
                 </div>
                 
                 <div className="mt-auto pt-8 flex items-center gap-3">
                   <div className="flex -space-x-2 shrink-0">
                     <div className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white overflow-hidden"><img src="/images/work_1.png" className="w-full h-full object-cover" /></div>
                     <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-white overflow-hidden"><img src="/images/work_2.png" className="w-full h-full object-cover" /></div>
                     <div className="w-7 h-7 rounded-full bg-[#C9A574] border-2 border-white text-[8px] text-white font-bold flex items-center justify-center">+5</div>
                   </div>
                   <div className="flex flex-col">
                     <span className="text-[10px] font-bold text-[#161616]">We look forward to meeting you!</span>
                     <div className="flex items-center gap-1 mt-0.5">
                       <Lock className="w-3 h-3 text-[#A3A3A3]" />
                       <span className="text-[9px] text-[#A3A3A3]">Your data is safe with us.</span>
                     </div>
                   </div>
                 </div>
              </div>
           </div>
        </div>

      </div>

      {/* Bottom Banner Strip */}
      <div className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-[#DFD0BA] px-6 py-12 md:py-16 overflow-hidden mt-24">
        {/* Subtle background texture/gradient if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 px-4 md:px-8 lg:px-16">
          
          <div className="flex items-start gap-4">
             <span className="font-heading text-6xl text-[#161616]/30 leading-none h-8 mt-2">&ldquo;</span>
             <div className="flex flex-col">
               <p className="text-xl md:text-2xl font-medium text-[#161616] leading-relaxed max-w-lg">
                 Great things start with a conversation.<br/>
                 We can&apos;t wait to hear about your project.
               </p>
             </div>
          </div>

          <div className="flex items-center gap-6">
             <span className="font-script text-4xl md:text-5xl text-[#555555] -rotate-2">
               Let&apos;s create impact together.
               <svg className="absolute -bottom-4 left-0 w-48 h-4 text-[#555555]/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 0" stroke="currentColor" fill="transparent" strokeWidth="1"/>
               </svg>
             </span>
             <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M12 2L13.8833 10.1167L22 12L13.8833 13.8833L12 22L10.1167 13.8833L2 12L10.1167 10.1167L12 2Z" fill="#C9A574"/>
               </svg>
             </div>
          </div>
          
        </div>
      </div>
    </Section>
  );
}
