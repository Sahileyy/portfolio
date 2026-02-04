"use client";

import Link from "next/link";
import { Home, User, Code, Mail } from "lucide-react";

export default function Navbar() {
  const items = [
    { label: "Home", icon: <Home size={20} />, href: "/" },
    { label: "About", icon: <User size={20} />, href: "/#about" }, // Placeholder links
    { label: "Projects", icon: <Code size={20} />, href: "/#projects" },
    { label: "Contact", icon: <Mail size={20} />, href: "/#contact" },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 p-2 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl transition-all duration-300 hover:bg-black/60 hover:scale-105">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="
              relative group p-3 rounded-full 
              text-gray-400 hover:text-white hover:bg-white/10
              transition-all duration-300 ease-out
            "
            aria-label={item.label}
          >
            {item.icon}
            
            {/* Tooltip */}
            <span className="
              absolute -bottom-10 left-1/2 -translate-x-1/2 
              px-2 py-1 bg-black text-white text-[10px] font-medium uppercase tracking-wider rounded
              opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
              transition-all duration-300 pointer-events-none whitespace-nowrap
            ">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
