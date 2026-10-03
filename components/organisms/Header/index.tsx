"use client";
import { useState } from "react";
import Link from "next/link";
import Navigation from "../Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 drop-shadow-[0_6px_6px_rgb(63_39_34/0.15)]">
      <div className="bg-white torn-bottom pb-3">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-6">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="group font-marker text-3xl md:text-4xl text-tiger flex items-center gap-3"
          >
            <span className="w-11 h-11 rounded-full bg-tiger text-white flex items-center justify-center text-xl -rotate-12 group-hover:animate-wiggle">
              <FontAwesomeIcon icon={faPaw} />
            </span>
            <span>TwisWua</span>
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <Navigation />
            <a
              href="https://twitch.tv/TwisWua"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-tiger hover:bg-tiger-dark rounded-md py-2 px-4 text-white font-bold shadow-paper rotate-1 hover:rotate-0 transition"
            >
              <FontAwesomeIcon icon={faTwitch} />
              Go to Twitch
            </a>
          </div>
          <button
            type="button"
            className="md:hidden text-xl w-12 h-12 flex items-center justify-center rounded-md bg-note-yellow shadow-paper -rotate-3"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </button>
        </div>
        <div
          id="mobile-menu"
          className={`md:hidden border-t-2 border-dashed border-bark/20 px-4 pb-6 pt-4 flex-col gap-4 ${menuOpen ? "flex" : "hidden"}`}
        >
          <Navigation onNavigate={() => setMenuOpen(false)} />
          <a
            href="https://twitch.tv/TwisWua"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-tiger hover:bg-tiger-dark rounded-md py-3 px-5 text-white font-bold shadow-paper"
          >
            <FontAwesomeIcon icon={faTwitch} />
            Go to Twitch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
