import Link from "next/link";
import React from "react";

const links = ["Home", "About", "contact", "work"];
const Navbar = () => {
  return (
    <header
      id="header"
      className="w-full fixed z-10 left-0 top-0 transition-opacity duration-400 ease"
    >
      <div className="h-[120px] flex items-center justify-between w-[92.8%] max-w-[1485px] mx-auto">
        <p></p>
        <div>
          <nav className="pt-[30px] flex items-center">
            <ul className="flex">
              {links.map((link) => (
                <li className="relative list-none li-after" key={link}>
                  <Link
                    href={""}
                    className="nav-link opacity-100 relative tracking-normal overflow-hidden "
                  >
                    <span className="uppercase px-1.5 relative text-sm z-[2] font-semibold transition-colors ease-linear duration-400 hover:text-[#fff]">
                      {" "}
                      {link}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
           
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
