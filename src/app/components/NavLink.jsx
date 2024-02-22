import React from "react";

const NavLink = ({ href, title }) => {
  return (
    <a
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-[#FECA01]"
    >
      {title}
    </a>
  );
};

export default NavLink;
