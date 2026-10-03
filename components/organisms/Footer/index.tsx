import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="kraft-paper mt-28 border-t-2 border-dashed border-bark/30">
      <div className="container mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-marker text-xl text-bark">TwisWua &copy; {new Date().getFullYear()}</div>
        <div aria-hidden="true" className="flex gap-4 text-bark/40 text-lg">
          <FontAwesomeIcon icon={faPaw} className="-rotate-12" />
          <FontAwesomeIcon icon={faPaw} className="rotate-6 translate-y-1" />
          <FontAwesomeIcon icon={faPaw} className="-rotate-6" />
        </div>
        <div className="font-hand text-2xl font-bold text-bark-light flex items-center gap-2">
          Made with <FontAwesomeIcon icon={faHeart} className="text-stamp text-base" aria-label="love" /> by{" "}
          <a
            href="https://boseriko.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dashed underline-offset-4 hover:text-tiger transition"
          >
            Bos Eriko
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
