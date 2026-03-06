const Navigation = () => {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row gap-4 md:gap-10 items-start md:items-center font-bold text-lg">
        <a href="#schedule" className="cursor-pointer hover:text-[#F87317] transition">Schedule</a>
        <a href="#shop" className="cursor-pointer hover:text-[#F87317] transition">Shop</a>
        <a href="#socials" className="cursor-pointer hover:text-[#F87317] transition">Socials</a>
      </ul>
    </nav>
  );
};

export default Navigation;
