"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cover bg-center shadow-md"
          : "bg-transparent"
      }`}
      style={{
        backgroundImage: isScrolled ? "url('/mod-img-14.jpg')" : "none",
      }}
    >
      <div className="container mx-auto flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold text-white">AgentZap</h1>
          <nav>
            <ul className="flex space-x-10">
              <li className="group relative">
                <Link href="/" className="text-slate-300 hover:text-white">
                  Home
                </Link>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="group relative">
                <Link href="/about" className="text-slate-300 hover:text-white">
                  Sobre
                </Link>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="group relative">
                <Link href="/services" className="text-slate-300 hover:text-white">
                  Serviços
                </Link>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="group relative">
                <Link href="/contact" className="text-slate-300 hover:text-white">
                  Contato
                </Link>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </nav>
        <button className="btn-68">Fale Conosco</button>
      </div>
    </header>
  );
}
