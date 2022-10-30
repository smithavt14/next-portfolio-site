const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 py-8 px-16 w-screen text-white flex justify-end items-center backdrop-blur-sm z-10 invisible sm:visible">
      <a href="#" className="font-semibold px-4 transition hover:text-slate-400">About</a>
      <a href="#" className="font-semibold px-4 transition hover:text-slate-400">Work</a>
      <a href="#" className="font-semibold pl-4 transition hover:text-slate-400">Contact</a>
    </div>
  );
}

export default Navbar;
