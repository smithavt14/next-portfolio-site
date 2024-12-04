const Header = ({ children, style }) => {
    return (
      <h2 className="w-full mb-1 font-extrabold text-responsive opacity-0 animate-fadeUp text-midnight dark:text-white" style={style}>
        {children}
      </h2>
    );
  };
  
  export default Header;