function Footer() {
  return (
    <div className="py-16 px-12 w-screen text-midnight bg-gradient-to-br from-sky-100 to-sky-300 dark:text-white dark:from-midnight dark:to-deepnight">
      <div className="h-px w-full dark:bg-white bg-black mb-16" />
      <p className="w-full text-center dark:text-slate-400 text-black">Designed & built by <span className="font-bold dark:font-normal dark:text-white text-black">Alex Smith</span></p>
      <p className="w-full text-center dark:text-slate-400 text-black">Design Inspiration from <a href="https://brittanychiang.com/" className="font-bold dark:font-normal dark:text-white text-black">Brittany Chang</a> and <a href="https://rss.com/" className="font-bold dark:font-normal dark:text-white text-black">rss.com</a></p>
    </div>
   );
}

export default Footer;
