"use client";

import Link from "next/link";
import React from "react";
import Particles from "./components/ui/particles";
import { useTheme } from "./themeContext";
import FluidCursor from "./components/ui/fluidCursor";

const navigation = [
  { name: "About Me", href: "/maintenance" },
  { name: "Projects", href: "/maintenance" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`flex flex-col items-center justify-center w-screen h-screen overflow-hidden ${theme === "dark" ? "bg-gradient-dark" : "bg-gradient-light"
        }`}
    >
      <FluidCursor/>
      {/* Navigation Bar */}
      <nav className="my-16 animate-fade-in flex items-center justify-center gap-8">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <div className="flex items-center">
          <label className="swap swap-rotate">
            {/* Hidden Checkbox */}
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            {/* Sun Icon */}
            <svg
              className="swap-off h-6 w-6 fill-current text-[#FFD700]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            {/* Moon Icon */}
            <svg
              className="swap-on h-6 w-6 fill-current text-[#63B3ED]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </nav>

      {/* Particles and Content */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 z-10 animate-fade-in pointer-events-none"
        quantity={100}
      />
      <h1
        className={`py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-clip-text cursor-default animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap ${theme === "dark"
            ? "bg-gradient-to-r from-[#A0AEC0] via-[#63B3ED] to-[#FFD700]"
            : "bg-gradient-to-r from-[#6C757D] via-[#87CEEB] to-[#FFD700]"
          }`}
      >
        Eduarda Magno
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in px-8">
        <h2 className="text-sm text-zinc-500 ">
          I am an Informatics Engineer and Computer Scientist Student at{" "}
          <Link
            href="https://goo.gl/maps/4ZkNnFojigT2"
            target="_blank"
            className="duration-500 hover:text-zinc-300"
          >
            Universidade do Porto
          </Link>
          .
        </h2>
        <h2 className="text-sm text-zinc-500 ">
          You can download my resume{" "}
          <Link
            href="/Resume.pdf"
            download
            className="underline duration-500 hover:text-zinc-300"
          >
            here
          </Link>
          .
        </h2>
      </div>
    </div>
  );
}
