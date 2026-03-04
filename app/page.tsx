"use client";
import { useEffect, useState } from "react";
import Template from "@template";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitch,
  faXTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row gap-10 items-center justify-between px-4 my-20">
      <div className="flex flex-col gap-5 lg:w-1/2">
        <h2 className="font-bold text-3xl sm:text-4xl">Rawr! Welcome to the Tiger Den!</h2>
        <p className="font-semibold text-lg sm:text-xl">
          I'm TwisWua, your favorite buddy tiger streamer!<br />
          Get ready for chaos, laughs and lots of gaming.<br />
          Join the pride today!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <a
            href="https://twitch.tv/TwisWua"
            target="_blank"
            className="bg-[#F87317] rounded-full py-2 px-4 text-white font-bold"
          >
            Watch Live on Twitch
          </a>
          <a
            href="https://discord.gg/kG4pSmW825"
            target="_blank"
            className="bg-[#A16306] rounded-full py-2 px-4 text-white font-bold"
          >
            Join Discord
          </a>
        </div>
      </div>
      <img
        src="/images/placeholder.png"
        alt="Tiger Streamer"
        className="rounded-lg w-full sm:w-3/4 lg:w-1/2 aspect-square object-cover"
      />
    </section>
  );
};

const ScheduleSection = () => {
  const [schedule, setSchedule] = useState<any[]>([]);

  const WEEKDAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  type TwitchSegment = {
    start_time: string;
    title: string;
    category: { name: string } | null;
  };

  useEffect(() => {
    const fetchSchedule = async () => {
      const res = await fetch("/api/twitch/schedule");
      const data = await res.json();

      const segments: TwitchSegment[] = data.data.segments;

      const slots: Record<string, any> = {};

      WEEKDAYS.forEach((day) => {
        slots[day] = null;
      });

      for (const segment of segments) {
        const date = new Date(segment.start_time);

        const weekday = date.toLocaleDateString("en-US", {
          weekday: "long",
          timeZone: "Asia/Singapore",
        });

        if (!slots[weekday]) {
          const time = date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            timeZone: "Asia/Singapore",
          });

          slots[weekday] = {
            day: weekday,
            time,
            description: segment.title,
            game: segment.category?.name ?? "TBA",
          };
        }
      }

      const ordered = WEEKDAYS.map((day) => slots[day]);

      setSchedule(ordered);
    };

    fetchSchedule();
  }, []);

  return (
    <section className="bg-white p-10 rounded-4xl flex flex-col gap-5">
      <h3 className="font-bold text-4xl text-center text-[#3F2722]">
        Weekly Hunt Schedule
      </h3>

      <div className="text-center text-[#3F2722]">
        Catch me live on Twitch! (GMT+8)
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6">
        {WEEKDAYS.map((day, index) => {
          const item = schedule[index];

          const isEmpty = !item;

          return (
            <div
              key={day}
              className={`rounded-2xl border-2 p-3 flex flex-col gap-3 items-center transition ${
                isEmpty
                  ? "bg-gray-100 border-gray-300 opacity-60"
                  : "bg-[#FFF9E0] border-[#FFBF69]"
              }`}
            >
              <div className="rounded-full py-2 px-4 text-white font-bold bg-[#5C4036]">
                {day}
              </div>

              {isEmpty ? (
                <div className="text-gray-400 font-semibold">No Stream</div>
              ) : (
                <>
                  <div className="text-[#FE9E1C] text-sm">{item.game}</div>
                  <div className="text-[#FE9E1C] font-bold">{item.time}</div>
                  <div className="font-bold text-center">
                    {item.description}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const MerchSection = () => {
  const Merch = [
    {
      name: "Cozy Tiger Hoodie",
      price: "45.00",
    },
    {
      name: "Striped Cub Tee",
      price: "25.00",
    },
    {
      name: "Morning Roar Mug",
      price: "15.00",
    },
    {
      name: "Tiger Ear Beanie",
      price: "20.00",
    },
  ];

  return (
    <section className="p-10 flex flex-col gap-5">
      <h3 className="font-bold text-4xl text-center text-[#3F2722]">Tiger Threads Merch</h3>
      <div className="text-center text-[#3F2722]">Wear your stripes with rawr!</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Merch.map((merch, index) => (
          <div className="bg-white rounded-2xl p-3 flex flex-col gap-3" key={index}>
            <div className="bg-gray-100 w-full aspect-square rounded-2xl"></div>
            <div className="text-[#3F2722] font-bold text-xl">{merch.name}</div>
            <div className="flex justify-between items-center">
              <div className="text-[#FE9E1C] font-bold">₱{merch.price}</div>
              <div className="bg-[#3F2722] rounded-2xl py-2 px-4 text-white font-bold">Buy</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const SocialSection = () => {
  const Socials = [
    { title: "Twitch", link: "#", icon: faTwitch },
    { title: "Twitter", link: "#", icon: faXTwitter },
    { title: "YouTube", link: "#", icon: faYoutube },
    { title: "Instagram", link: "#", icon: faInstagram },
  ];

  return (
    <section className="bg-[#FE9E1C] p-10 rounded-4xl flex flex-col gap-5">
      <h3 className="font-bold text-4xl text-center text-white">Stalk Me on Socials</h3>
      <div className="text-center text-white font-bold">Don't be shy, say hi!</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-200 w-full mx-auto">
        {Socials.map((social, index) => (
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="bg-[#FFB249] rounded-2xl p-3 flex items-center gap-3 text-[#3F2722] font-bold text-xl transition border border-[#FFD192] flex flex-col items-center justify-center text-[#FEFFFE] aspect-square"
          >
            <div><FontAwesomeIcon icon={social.icon} className="aspect-square h-15" /></div>
            <div className="font-bold">{social.title}</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <Template.Default>
      <HeroSection />
      <ScheduleSection />
      <MerchSection />
      <SocialSection />
    </Template.Default>
  );
}
