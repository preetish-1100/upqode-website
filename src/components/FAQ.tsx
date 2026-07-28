import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import Section from "./Section";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer end-to-end digital solutions including premium web design and development, AI automation, brand identity, SEO, product design, and ongoing support to help your business grow online."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope and complexity. A standard premium website typically takes 4-8 weeks from discovery to launch, while complex platforms may take 12+ weeks."
  },
  {
    question: "Do you work with businesses in all industries?",
    answer: "Yes, our strategic approach allows us to adapt to various industries. However, we specialize in premium service businesses, luxury brands, and forward-thinking companies looking to elevate their digital presence."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. Every digital experience we create is designed mobile-first, ensuring pixel-perfect responsiveness across all devices and screen sizes."
  },
  {
    question: "Do you provide SEO services?",
    answer: "Yes. We build all websites with technical SEO best practices. We also offer ongoing SEO services to improve your search rankings and drive qualified organic traffic."
  },
  {
    question: "What is your pricing model?",
    answer: "Our pricing is project-based and tailored to your specific needs. After our initial discovery call, we provide a detailed proposal outlining the scope of work and fixed investment required."
  },
  {
    question: "How do we get started?",
    answer: "Getting started is simple. Book a discovery call using the calendar below. We'll discuss your goals, vision, and how we can help your business grow digitally."
  }
];

function AccordionItem({ faq, isOpen, onClick }: { faq: any, isOpen: boolean, onClick: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
      } else {
        gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.4, ease: "power2.out" });
      }
    }
  }, [isOpen]);

  return (
    <div className={`border border-border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-surface' : 'bg-transparent'}`}>
      <button
        onClick={onClick}
        className="w-full text-left px-8 py-6 flex items-center justify-between gap-8 focus:outline-none"
      >
        <h3 className="font-medium text-lg pr-8">{faq.question}</h3>
        <div className={`flex-shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-180 text-accent' : 'text-text-primary'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      
      <div ref={contentRef} className="h-0 opacity-0 overflow-hidden">
        <div className="px-8 pb-6 text-text-secondary leading-relaxed text-sm max-w-2xl">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      });

      if (rightRef.current) {
        gsap.from(rightRef.current.children, {
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 80%",
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
    <Section id="faq" className="bg-bg-primary">
      <div ref={containerRef} className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* Left - Sticky Header */}
        <div ref={leftRef} className="lg:col-span-5 lg:sticky top-32 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              FAQS
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-heading leading-tight tracking-tight">
            Questions? <br />
            We&apos;ve Got <br />
            <span className="italic text-accent">Answers.</span>
          </h2>

          <p className="text-text-secondary leading-relaxed max-w-sm">
            Here are some of the most common questions we get. Still have questions? We&apos;re just a message away.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <a
              href="#start"
              className="group flex items-center gap-3 bg-text-primary text-bg-primary px-6 py-3 rounded-full text-sm font-medium transition-all hover:bg-bg-primary hover:text-text-primary hover:shadow-[0_0_20px_rgba(201,165,116,0.2)] border border-transparent hover:border-text-primary"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
          
          {/* Still have questions card */}
          <div className="mt-8 p-8 bg-[#F9F6F0] rounded-2xl border border-border flex flex-col gap-6">
            <div className="w-10 h-10 bg-[#E9E3DA] rounded-full flex items-center justify-center">
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-text-secondary"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-text-secondary"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-text-secondary"></span>
              </span>
            </div>
            <div>
              <h4 className="font-heading text-2xl mb-2">Still have questions?</h4>
              <p className="text-sm text-text-secondary">We&apos;re happy to help! Reach out to us anytime.</p>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium">
               <a href="#start" className="bg-text-primary text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors hover:bg-accent">
                 Schedule a Call <ArrowUpRight className="w-4 h-4" />
               </a>
               <span className="text-text-secondary">or</span>
               <a href="mailto:hello@example.com" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent transition-colors">
                 Send us an Email
               </a>
            </div>
          </div>
        </div>

        {/* Right - Accordion */}
        <div ref={rightRef} className="lg:col-span-7 flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index} 
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)} 
            />
          ))}
        </div>

      </div>
    </Section>
  );
}
