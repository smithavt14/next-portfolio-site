const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 py-8 px-16 w-screen text-white flex justify-between items-center z-10">
      <a href="#" className="font-semibold transition hover:text-slate-400">Back to Top</a>
      <div className="flex justify-between items-center">
        <a href="#" className="font-semibold px-4 transition hover:animate-wiggle hover:text-slate-400">About</a>
        <a href="#" className="font-semibold px-4 transition hover:text-slate-400">Work</a>
        <a href="#" className="font-semibold pl-4 transition hover:text-slate-400">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
