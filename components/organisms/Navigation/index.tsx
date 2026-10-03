import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faBagShopping,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

interface NavigationProps {
  onNavigate?: () => void;
}

const LINKS = [
  { href: "#schedule", label: "Schedule", icon: faCalendarDays },
  { href: "#shop", label: "Shop", icon: faBagShopping },
  { href: "#socials", label: "Socials", icon: faComments },
];

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <nav aria-label="Main">
      <ul className="flex flex-col md:flex-row gap-1 md:gap-2 font-hand text-2xl font-bold">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={onNavigate}
              className="group flex items-center gap-2 px-3 py-1 rounded-md hover:bg-note-yellow hover:-rotate-2 transition"
            >
              <FontAwesomeIcon icon={link.icon} className="text-tiger text-base group-hover:animate-wiggle" />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
