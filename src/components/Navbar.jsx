import React, { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img
                        src={logo}
                        className="w-9 h-9 object-contain"
                        alt="logo"
                    />
                    <p className="text-lg font-medium">GEME | Software Dev.</p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link, index) => (
                        <li
                            key={index}
                            className={`${
                                active === link.title
                                    ? "text-white"
                                    : "text-secondary"
                            } hover:text-white text-lg font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        onClick={() => setToggle(!toggle)}
                        className="w-[28px] aspect-square object-contain cursor-pointer"
                    />
                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((link, index) => (
                                <li
                                    key={index}
                                    className={`${
                                        active === link.title
                                            ? "text-white"
                                            : "text-secondary"
                                    } hover:text-white font-medium cursor-pointer`}
                                    onClick={() => {
                                        setActive(link.title);
                                        setToggle(false);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
