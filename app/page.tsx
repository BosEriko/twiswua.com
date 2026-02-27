import Template from "@template";

const HeroSection = () => (
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

const ScheduleSection = () => (
  <section className="bg-white p-10 rounded-4xl flex flex-col gap-5">
    <h3 className="font-bold text-4xl text-center text-[#3F2722]">Weekly Hunt Schedule</h3>
    <div className="text-center text-[#3F2722]">Catch me live on Twitch! (GMT+8)</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {Schedule.map((schedule) => (
        <div className="bg-[#FFF9E0] rounded-2xl border-2 border-[#FFBF69] p-3 flex flex-col gap-3 items-center" key={schedule.day}>
          <div className="rounded-full py-2 px-4 text-white font-bold bg-[#5C4036]">{schedule.day}</div>
          <div className="text-[#FE9E1C] text-sm">{schedule.game}</div>
          <div className="text-[#FE9E1C] font-bold">{schedule.time}</div>
          <div className="font-bold">{schedule.description}</div>
        </div>
      ))}
    </div>
  </section>
);

const MerchSection = () => (
  <section>
    Merch Section
  </section>
);

const SocialSection = () => (
  <section>
    Socials Section
  </section>
);

export default async function Home() {
  const Schedule = [
    {
      day: "Monday",
      time: "6:00PM",
      description: "Cozy Mondays",
      game: "Minecraft"
    },
    {
      day: "Tuesday",
      time: "6:00PM",
      description: "Try Hard Tuesday",
      game: "Just Chatting"
    },
    {
      day: "Wednesday",
      time: "6:00PM",
      description: "Workshop Wednesday (Crochet)",
      game: "Makers & Crafting"
    },
    {
      day: "Thursday",
      time: "6:00PM",
      description: "Try Hard Thursday",
      game: "Just Chatting"
    },
    {
      day: "Friday",
      time: "6:00PM",
      description: "Foodie Friday (Cooking)",
      game: "Food & Drink"
    },
  ];

  return (
    <Template.Default>
      <HeroSection />
      <ScheduleSection />
      <MerchSection />
      <SocialSection />
    </Template.Default>
  );
}
