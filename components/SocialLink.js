// components/SocialLink.js
import React from 'react';

const SocialLink = ({ href, svgPath, delay }) => (
  <a className="mr-4 cursor-pointer" href={href} target="_blank" rel="noreferrer">
    <svg className="opacity-0 animate-fadeUp fill-midnight dark:fill-white hover:fill-slate-400 dark:hover:fill-slate-400 transition" style={{ animationDelay: delay }} viewBox="0 0 448 512" width="1.75rem" height="1.75rem">
      <path d={svgPath} />
    </svg>
  </a>
);

export default SocialLink;