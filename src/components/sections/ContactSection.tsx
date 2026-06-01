"use client";

import React, { useState, useEffect } from "react";
import FadeIn from "../ui/FadeIn";
import Magnet from "../ui/Magnet";

export default function ContactSection() {
  const [time, setTime] = useState("12:00 am");

  // Keep digital pager clock synchronized with live user time
  useEffect(() => {
    const updateClock = () => {
      const date = new Date();
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // hour '0' matches '12'
      const strMinutes = minutes < 10 ? `0${minutes}` : minutes;
      setTime(`${hours}:${strMinutes} ${ampm}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 pb-32 overflow-hidden select-none z-30"
    >
      {/* 1. Background Giant Low-Opacity Lettering */}
      <div className="absolute inset-0 flex items-center justify-center select-none overflow-hidden opacity-[0.03] z-0 pointer-events-none">
        <h2 className="text-[25vw] font-black uppercase tracking-widest whitespace-nowrap text-[#D7E2EA] mt-10">
          CONTACT ME • CONTACT ME • CONTACT ME
        </h2>
      </div>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center relative z-10">

        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Contact
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.15} y={30} className="mt-6 text-center mb-16 sm:mb-20">
          <p className="font-medium uppercase tracking-widest text-xs sm:text-sm text-[#D7E2EA]/60">
            Let&apos;s build something incredible together!
          </p>
        </FadeIn>

        {/* 2. Interactive Retro Pager Terminal Device Mockup */}
        <FadeIn delay={0.3} y={40} className="w-full flex justify-center">
          <div className="w-full max-w-[560px] p-6 sm:p-8 bg-[#18181B] rounded-[36px] sm:rounded-[44px] border border-white/[0.08] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col gap-6 sm:gap-8">

            {/* Liquid Crystal Terminal Screen */}
            <div className="w-full relative aspect-[2.1/1] rounded-2xl sm:rounded-3xl bg-[#0DF273] p-4 sm:p-6 flex flex-col justify-between overflow-hidden shadow-[inset_0_4px_12px_rgba(0,0,0,0.4),0_0_25px_rgba(13,242,115,0.25)] select-none">

              {/* CRT Scanline Overlay */}
              <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(rgba(0,0,0,1) 50%, rgba(0,0,0,0) 50%)",
                  backgroundSize: "100% 4px",
                }}
              />

              {/* Top Row: Network and Clock */}
              <div className="flex justify-between items-center text-black font-mono font-bold text-[10px] sm:text-xs tracking-wider opacity-85">
                <span>2G</span>
                <span>{time}</span>
              </div>

              {/* Main Display: Email address */}
              <div className="flex flex-col items-center justify-center text-center text-black font-mono flex-grow py-2">
                <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-widest opacity-50 mb-1">
                  Contact me via email
                </span>
                <a
                  href="mailto:adityachoubeyg2004@gmail.com"
                  className="text-xs sm:text-base md:text-lg font-black tracking-tight hover:underline break-all"
                >
                  adityachoubeyg2004@gmail.com
                </a>
              </div>

              {/* Bottom Row: Signature branding */}
              <div className="flex justify-start text-[8px] sm:text-[9px] font-mono font-black text-black opacity-40 tracking-widest uppercase">
                AD Communications
              </div>
            </div>

            {/* Chassis Controls and Buttons */}
            <div className="flex items-center justify-between w-full mt-1 gap-4">

              {/* Left Side: Physical Pager Grooved Grills */}
              <div className="flex gap-1.5 opacity-30 select-none">
                <div className="w-1.5 h-6 bg-white/60 rounded-full transform -rotate-12" />
                <div className="w-1.5 h-6 bg-white/60 rounded-full transform -rotate-12" />
                <div className="w-1.5 h-6 bg-white/60 rounded-full transform -rotate-12" />
              </div>

              {/* Right Side: Navigation Buttons */}
              <div className="flex items-center gap-2 sm:gap-3">
                <Magnet padding={30} strength={1.5}>
                  <a
                    href="https://www.linkedin.com/in/aditya-choubey-70b069295/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 hover:bg-white/15 text-white/80 transition-all select-none cursor-pointer"
                  >
                    LinkedIn
                  </a>
                </Magnet>

                <Magnet padding={30} strength={1.5}>
                  <a
                    href="https://github.com/Adityachoubey-git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 hover:bg-white/15 text-white/80 transition-all select-none cursor-pointer"
                  >
                    GitHub
                  </a>
                </Magnet>

                <Magnet padding={40} strength={2.5}>
                  <a
                    href="mailto:adityachoubeyg2004@gmail.com"
                    className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-[#F1D5A6] text-black hover:bg-[#e2c79a] active:scale-95 transition-all shadow-[0_4px_15px_rgba(241,213,166,0.3)] select-none cursor-pointer"
                  >
                    Contact Me
                  </a>
                </Magnet>
              </div>

            </div>

          </div>
        </FadeIn>

        {/* Footer Area */}
        <div className="w-full flex justify-between items-center text-[10px] sm:text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/30 mt-20 sm:mt-24 md:mt-28 border-t border-white/5 pt-8 select-none">
          <span>Copyright @ 2026</span>
          <div className="w-8 h-8 opacity-30">
            {/* Sleek abstract icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-white">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span>Made in Next.js</span>
        </div>

      </div>
    </section>
  );
}
