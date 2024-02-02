export const NavBar = () => {
  return (
    <nav className="flex h-20 w-full items-center justify-between bg-[#09403A] px-4">
      <h1 className="text-3xl font-bold text-white">Oak Tree Ministry</h1>
      <div className="flex gap-4">
        <a href="#" className="text-white">
          News
        </a>
        <a href="#" className="text-white">
          Infographic
        </a>
        <a href="#" className="text-white">
          Gallery
        </a>
        <a href="#" className="text-white">
          About Us
        </a>
        <a href="#" className="text-white">
          Contact Us
        </a>
      </div>
    </nav>
  );
};
