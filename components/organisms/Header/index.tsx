"use client";
import { useState, useEffect } from "react";
import Navigation from "../Navigation";
import { useRouter } from "next/navigation";
import { Pixelify_Sans } from "next/font/google";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["700"],
});

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header>
      <div className="container mx-auto p-4 flex justify-between">
        <button onClick={() => router.push("/")} className="flex items-center gap-3 md:hidden">
          <h2
            className={`${pixelify.className} text-3xl md:text-4xl font-bold text-[#F87317] flex items-center gap-3`}
          >
            <span>🐯</span>
            <span>TwisWua</span>
          </h2>
        </button>
        <button
          className="md:hidden text-2xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <div className={`flex-1 flex-col md:flex md:flex-row md:justify-between md:items-center w-full md:w-auto absolute md:static top-16 left-0 md:top-auto md:left-auto bg-white md:bg-transparent p-4 md:p-0 transition-all duration-300 ${menuOpen ? "flex" : "hidden"}`}>
          <button onClick={() => router.push("/")} className="flex items-center gap-3 hidden md:block">
            <h2
              className={`${pixelify.className} text-3xl md:text-4xl font-bold text-[#F87317] flex items-center gap-3`}
            >
              <span>🐯</span>
              <span>TwisWua</span>
            </h2>
          </button>
          <Navigation />
          <a
            href="https://twitch.tv/TwisWua"
            target="_blank"
            className="bg-[#F87317] rounded-full py-2 px-4 text-white font-bold mt-4 md:mt-0 md:ml-4 text-center transition-all hover:scale-105"
          >
            Go to Twitch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
