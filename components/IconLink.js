import Link from 'next/link';

const IconLink = ({ href, target, rel, Icon, style }) => {
  return (
    <Link className="mr-4 cursor-pointer" href={href} target={target} rel={rel} passHref>
      <Icon className="opacity-0 animate-fadeUp fill-midnight dark:fill-white hover:fill-slate-400 dark:hover:fill-slate-400 transition" style={style} />
    </Link>
  );
};

export default IconLink;