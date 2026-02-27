import Template from "@template";

export default async function Home() {
  return (
    <Template.Default>
      <section className="flex gap-10 items-center justify-between px-4 my-20">
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-4xl">Rawr! Welcome to the Tiger Den!</h2>
          <p className="font-semibold text-xl">I'm TwisWua, your favorite buddy tiger streamer!<br />Get ready for chaos, laughs and lots of gaming.<br />Join the pride today!</p>
          <div className="flex gap-3 items-center">
            <a href="https://twitch.tv/TwisWua" target="_blank" className="bg-[#F87317] rounded-full py-2 px-4 text-white font-bold">Watch Live on Twitch</a>
            <a href="https://discord.gg/kG4pSmW825" target="_blank" className="bg-[#A16306] rounded-full py-2 px-4 text-white font-bold">Join Discord</a>
          </div>
        </div>
        <img
          src="/images/placeholder.png"
          className="rounded-lg w-150 aspect-square"
        />
      </section>
    </Template.Default>
  );
}
