const Blog = ({ darkMode }) => {

    const endAnimation = (event) => {
      event.target.classList.remove('opacity-0')
      event.target.classList.add('opacity-100')
    }
  
    return (
      <section id="blog" onAnimationEnd={(event) => endAnimation(event)} className="relative overflow-hidden flex flex-col justify-center h-screen box-border bg-gradient-to-tr text-midnight from-sky-100 to-sky-300
        dark:text-white dark:from-midnight dark:to-deepnight
        px-6 md:px-12 lg:px-24 xl:p48">
  
        {/* Blog Content */}
        <div className="w-full z-20 mb-32">
          <h2 className="mt-5 mb-1 font-extrabold text-responsive opacity-0 animate-fadeUp text-midnight dark:text-white" style={{ animationDelay: '1.2s' }}>Blog</h2>
          <p className="w-full my-5 text-base dark:text-slate-400 text-slate-500 lg:w-8/12 opacity-0 animate-fadeUp" style={{ animationDelay: '1.6s' }}>
            Welcome to my blog! Here, I share my thoughts on various topics related to web development, technology, and more.
          </p>
        </div>
      </section>
    );
  }
  
  export default Blog;