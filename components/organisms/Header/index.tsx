"use client";

import Navigation from "../Navigation";
import { useRouter } from "next/navigation";
import { Pixelify_Sans } from "next/font/google";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["700"],
});

const Header = () => {
  const router = useRouter();

  return (
    <header>
      <div className="container mx-auto flex justify-between items-center p-4">
        <button onClick={() => router.push("/")}>
          <h2
            className={`${pixelify.className} text-3xl md:text-4xl font-bold text-[#F87317] cursor-pointer flex items-center gap-3`}
          >
            <div>🐯</div>
            <span>TwisWua</span>
          </h2>
        </button>
        <div>
          <Navigation />
        </div>
        <div>
          <a href="https://twitch.tv/TwisWua" target="_blank" className="bg-[#F87317] rounded-full py-2 px-4 text-white font-bold">Go to Twitch</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
