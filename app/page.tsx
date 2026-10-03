"use client";
import { useEffect, useState } from "react";
import Template from "@template";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitch,
  faXTwitter,
  faInstagram,
  faYoutube,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCircle,
  faPaw,
  faStar,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";

const TILTS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-3", "rotate-2", "-rotate-1"];

const Washi = ({ className = "" }: { className?: string }) => (
  <span aria-hidden="true" className={`washi absolute h-7 w-24 ${className}`} />
);

const SectionHeading = ({ title, note }: { title: string; note: string }) => (
  <div className="flex flex-col items-center gap-2 text-center">
    <h3 className="font-marker text-4xl sm:text-5xl text-bark -rotate-1">
      <span className="highlight">{title}</span>
    </h3>
    <p className="font-hand text-2xl sm:text-3xl font-bold text-tiger-dark rotate-1">{note}</p>
  </div>
);

const HeroSection = () => {
  return (
    <section className="grid lg:grid-cols-2 gap-16 lg:gap-10 items-center pt-6 lg:pt-12">
      <div className="flex flex-col gap-7 order-2 lg:order-1">
        <span className="self-start font-hand text-2xl font-bold bg-note-yellow px-4 py-1 -rotate-2 shadow-paper">
          Hi there, cub!
        </span>
        <h2 className="font-marker text-5xl sm:text-6xl leading-[1.15] text-bark">
          Rawr! Welcome to the <span className="highlight text-tiger">Tiger Den!</span>
        </h2>
        <p className="text-lg sm:text-xl text-bark-light leading-relaxed max-w-xl">
          I'm TwisWua, your favorite buddy tiger streamer! Get ready for chaos, laughs and lots of gaming. Join the pride today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          <a
            href="https://twitch.tv/TwisWua"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-tiger hover:bg-tiger-dark text-white font-bold text-lg rounded-md py-3 px-6 shadow-paper -rotate-1 hover:rotate-0 hover:-translate-y-0.5 transition"
          >
            <FontAwesomeIcon icon={faTwitch} />
            Watch Live on Twitch
          </a>
          <a
            href="https://discord.gg/kG4pSmW825"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-sand text-bark font-bold text-lg rounded-md py-3 px-6 shadow-paper border-2 border-dashed border-bark/30 rotate-1 hover:rotate-0 hover:-translate-y-0.5 transition"
          >
            <FontAwesomeIcon icon={faDiscord} />
            Join Discord
          </a>
        </div>
      </div>
      <div className="relative order-1 lg:order-2 mx-auto w-full max-w-sm sm:max-w-md">
        <figure className="relative bg-white p-4 pb-16 shadow-paper-lg rotate-3 hover:rotate-1 transition-transform">
          <Washi className="-top-3 left-1/2 -translate-x-1/2 -rotate-3" />
          <img
            src="/images/twis.png"
            alt="TwisWua, the tiger streamer"
            className="w-full aspect-square object-cover bg-sand"
          />
          <figcaption className="absolute bottom-3 inset-x-0 text-center font-hand text-3xl font-bold text-bark">
            that's me!
          </figcaption>
        </figure>
        <div className="absolute -top-6 -left-3 sm:-left-8 w-24 h-24 rounded-full bg-tiger text-white font-marker text-2xl flex items-center justify-center -rotate-12 border-4 border-white shadow-paper">
          Rawr!
        </div>
        <div className="absolute -bottom-5 -right-2 sm:-right-5 w-16 h-16 rounded-full bg-note-yellow text-bark text-2xl flex items-center justify-center rotate-12 border-4 border-white shadow-paper">
          <FontAwesomeIcon icon={faPaw} />
        </div>
      </div>
    </section>
  );
};

const TapeTicker = () => {
  const WORDS = ["Rawr", "Join the pride", "Chaos", "Laughs", "Lots of gaming"];

  return (
    <div className="relative left-1/2 -translate-x-1/2 w-[110vw] -rotate-1" aria-hidden="true">
      <div className="washi overflow-hidden py-3 [--washi-color:rgb(254_158_28/0.85)]">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {[...WORDS, ...WORDS].map((word, index) => (
                <span key={index} className="flex items-center gap-8 pl-8 font-marker text-2xl text-bark uppercase whitespace-nowrap">
                  {word}
                  <FontAwesomeIcon icon={faStar} className="text-white text-base" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ScheduleSection = () => {
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

  type Vacation = {
    start_time: string;
    end_time: string;
  };

  const [schedule, setSchedule] = useState<any[]>([]);
  const [vacation, setVacation] = useState<Vacation | null>(null);
  const [isOnVacation, setIsOnVacation] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [liveData, setLiveData] = useState<any | null>(null);
  const [nextStreamDate, setNextStreamDate] = useState<Date | null>(null);
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const fetchSchedule = async () => {
      const res = await fetch("/api/twitch/schedule");
      const data = await res.json();

      const segments: TwitchSegment[] = data.data.segments;
      const vacationData: Vacation | null = data.data.vacation;

      if (vacationData) {
        const now = new Date();
        const start = new Date(vacationData.start_time);
        const end = new Date(vacationData.end_time);

        if (now >= start && now <= end) {
          setIsOnVacation(true);
          setVacation(vacationData);
        }
      }

      const slots: Record<string, any> = {};
      WEEKDAYS.forEach((day) => (slots[day] = null));

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

      const now = new Date();
      const upcoming = segments
        .map((s) => new Date(s.start_time))
        .filter((date) => date > now)
        .sort((a, b) => a.getTime() - b.getTime())[0];

      if (upcoming) {
        setNextStreamDate(upcoming);
      }
    };

    fetchSchedule();
  }, []);

  useEffect(() => {
    const checkLiveStatus = async () => {
      try {
        const res = await fetch("/api/twitch/status");
        const data = await res.json();
        setIsLive(data.isLive);
        if (data.isLive) {
          setLiveData(data.stream);
        }
      } catch (err) {
        console.error("Live status error:", err);
      }
    };
    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!nextStreamDate) return;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = nextStreamDate.getTime() - now;

      if (distance <= 0) {
        setCountdown("Starting soon");
        return;
      }

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [nextStreamDate]);

  const today = WEEKDAYS[new Date().getDay()];

  return (
    <section id="schedule" className="relative lined-paper shadow-paper-lg px-5 sm:pl-20 sm:pr-10 py-14 flex flex-col gap-10">
      <Washi className="-top-3 left-6 -rotate-6" />
      <Washi className="-top-3 right-6 rotate-6 [--washi-color:rgb(248_115_23/0.5)]" />

      <SectionHeading title="Weekly Hunt Schedule" note="Catch me live on Twitch! (GMT+8)" />

      {!isLive && countdown && (
        <div className="mx-auto bg-white px-5 py-2 shadow-paper -rotate-2 font-hand text-2xl font-bold flex items-center gap-2">
          <span className="text-bark-light">Next stream in</span>
          <span className="text-tiger-dark tabular-nums">{countdown}</span>
        </div>
      )}

      {/* Vacation Banner */}
      {isOnVacation && vacation && (
        <div className="mx-auto bg-note-pink px-6 py-3 shadow-paper rotate-1 font-hand text-2xl font-bold flex items-center gap-3">
          <FontAwesomeIcon icon={faUmbrellaBeach} className="text-tiger-dark text-xl" />
          <span>
            On Vacation until{" "}
            {new Date(vacation.end_time).toLocaleDateString("en-US", {
              timeZone: "Asia/Singapore",
            })}
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-8 xl:gap-5 pt-2">
        {WEEKDAYS.map((day, index) => {
          const item = schedule[index];
          const isLiveToday = isLive && day === today;
          const isEmpty = (!item || isOnVacation) && !isLiveToday;

          return (
            <a
              key={day}
              href={`https://twitch.tv/${isLiveToday ? "twiswua" : "twiswua/schedule"}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                relative flex flex-col gap-2 p-4 pt-7 min-h-44 shadow-paper transition
                hover:rotate-0 hover:-translate-y-1 hover:shadow-paper-lg
                ${TILTS[index]}
                ${isLiveToday ? "bg-note-pink" : isEmpty ? "bg-white/80" : index % 2 ? "bg-note-peach" : "bg-note-yellow"}
              `}
            >
              <Washi className="-top-3 left-1/2 -translate-x-1/2 w-16 h-6 rotate-2" />
              <div className={`font-marker text-xl ${isEmpty ? "text-bark/40" : "text-bark"}`}>{day}</div>
              {isEmpty ? (
                <div className="font-hand text-2xl font-bold text-bark/40 my-auto">
                  {isOnVacation ? "On Break" : "No Stream"}
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-bark-light">
                    {isLiveToday ? liveData?.game_name : item.game}
                  </div>
                  {isLiveToday ? (
                    <span className="self-start inline-flex items-center gap-2 border-2 border-stamp text-stamp font-marker text-lg px-2 rounded-sm -rotate-6 my-1">
                      <FontAwesomeIcon icon={faCircle} className="text-[0.5em] animate-pulse" />
                      Live
                    </span>
                  ) : (
                    <div className="font-hand text-3xl font-bold text-tiger-dark leading-none">{item.time}</div>
                  )}
                  <div className="font-semibold text-bark leading-snug">
                    {isLiveToday ? liveData?.title : item.description}
                  </div>
                </div>
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
};

const MerchSection = () => {
  const Merch = [
    {
      cover_photo: "https://i.imgur.com/6TKboys.png",
      name: "Cozy Tiger Hoodie",
      price: "800.00",
    },
    {
      cover_photo: "https://i.imgur.com/MEti9Nu.png",
      name: "Striped Cub Tee",
      price: "500.00",
    },
    {
      cover_photo: "https://i.imgur.com/2r5TxWb.png",
      name: "Morning Roar Mug",
      price: "250.00",
    },
    {
      cover_photo: "https://i.imgur.com/aA6ItM0.png",
      name: "Tiger Ear Beanie",
      price: "300.00",
    },
  ];


  return (
    <section id="shop" className="flex flex-col gap-14">
      <SectionHeading title="Tiger Threads Merch" note="Wear your stripes with rawr!" />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 sm:gap-10 px-2">
        {Merch.map((merch, index) => (
          <figure
            key={index}
            className={`relative bg-white p-3 pb-5 shadow-paper transition hover:rotate-0 hover:-translate-y-1 hover:shadow-paper-lg ${TILTS[index + 1]}`}
          >
            <Washi className={`-top-3 left-1/2 -translate-x-1/2 ${index % 2 ? "rotate-3 [--washi-color:rgb(248_115_23/0.45)]" : "-rotate-3"}`} />
            <div className="relative">
              <img
                src={merch.cover_photo}
                alt={merch.name}
                loading="lazy"
                className="w-full aspect-square object-cover bg-sand"
              />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 border-4 border-stamp text-stamp bg-white/75 font-marker text-xl uppercase whitespace-nowrap px-3 py-1 rounded-md">
                Out of Stock
              </span>
            </div>
            <figcaption className="mt-4 flex items-end justify-between gap-3">
              <span className="font-hand text-3xl font-bold text-bark leading-none">{merch.name}</span>
              <span className="shrink-0 bg-note-yellow px-2 py-0.5 font-extrabold text-bark rotate-3 shadow-sm">
                ₱{merch.price}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

const SocialSection = () => {
  const Socials = [
    { title: "Twitch", link: "https://www.twitch.tv/twiswua", icon: faTwitch, color: "#9146FF" },
    { title: "YouTube", link: "https://www.youtube.com/@twiswua", icon: faYoutube, color: "#FF0033" },
    { title: "Twitter", link: "https://x.com/twiswua", icon: faXTwitter, color: "#111111" },
    { title: "Instagram", link: "https://www.instagram.com/twiswua_/", icon: faInstagram, color: "#E1306C" },
  ];


  return (
    <section id="socials" className="relative kraft-paper shadow-paper-lg px-5 py-14 sm:p-14 flex flex-col gap-12">
      <Washi className="-top-3 left-10 -rotate-3" />
      <Washi className="-top-3 right-10 rotate-3 [--washi-color:rgb(248_115_23/0.5)]" />
      <SectionHeading title="Stalk Me on Socials" note="Don't be shy, say hi!" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-3xl w-full mx-auto">
        {Socials.map((social, index) => (
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className={`group flex flex-col items-center gap-3 ${TILTS[index + 2]}`}
          >
            <span
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-[6px] border-white shadow-paper flex items-center justify-center text-5xl text-white transition group-hover:scale-110 group-hover:rotate-12"
              style={{ backgroundColor: social.color }}
            >
              <FontAwesomeIcon icon={social.icon} />
            </span>
            <span className="font-hand text-3xl font-bold text-bark group-hover:text-tiger-dark transition-colors">
              {social.title}
            </span>
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
      <TapeTicker />
      <ScheduleSection />
      <MerchSection />
      <SocialSection />
    </Template.Default>
  );
}
