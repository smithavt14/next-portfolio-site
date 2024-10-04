const Body = ({ children, style }) => {
    return (
      <p className="w-full my-5 text-base dark:text-slate-400 text-slate-500 lg:w-8/12 opacity-0 animate-fadeUp" style={style}>
        {children}
      </p>
    );
  };
  
  export default Body;