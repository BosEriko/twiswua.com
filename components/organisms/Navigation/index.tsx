const Navigation = () => {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row gap-4 md:gap-10 items-start md:items-center font-bold text-lg">
        <li className="cursor-pointer hover:text-[#F87317] transition">Schedule</li>
        <li className="cursor-pointer hover:text-[#F87317] transition">Shop</li>
        <li className="cursor-pointer hover:text-[#F87317] transition">Socials</li>
      </ul>
    </nav>
  );
};

export default Navigation;
