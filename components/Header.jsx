/* Imports */

import { useState } from "react";

import Link from "next/link";

import { MdOutlineDirectionsCar, MdPersonOutline } from "react-icons/md";

/* Main Component */

const Header = () => {
    const [toggleNav, setToggleNav] = useState(false);

    return (
        <header className="fixed top-0 w-full h-[80px] z-10 bg-alice-blue-1 shadow-shadow-1">
            <div className="max-w-5xl flex justify-between  items-center mx-auto p-4">
                <Link href="/">
                    <a className="font-bold text-3xl">LOGO</a>
                </Link>

                <nav
                    className={`${
                        toggleNav ? "translate-x-0" : "translate-x-full"
                    } fixed top-[80px] bottom-0 right-0 z-10 w-5/12 bg-alice-blue-1 flex flex-col p-4 py-6 duration-500 lg:static lg:flex-row lg:p-0 lg:bg-transparent lg:transform-none`}
                >
                    <Link href="/">
                        <a className="px-4 py-2 text-independence">Home</a>
                    </Link>

                    <Link href="/">
                        <a className="px-4 py-2 text-independence">
                            Explore cars
                        </a>
                    </Link>

                    <Link href="/">
                        <a className="px-4 py-2 text-independence">About us</a>
                    </Link>

                    <Link href="/">
                        <a className="px-4 py-2 text-independence">Blog</a>
                    </Link>
                </nav>

                <div className="flex items-center">
                    <button className="flex justify-center items-center bg-carolina-blue text-white text-3xl p-2 rounded-xl md:px-4">
                        <span className="md:hidden">
                            <MdOutlineDirectionsCar />
                        </span>

                        <span className="hidden text-base md:inline">
                            Explore cars
                        </span>
                    </button>

                    <button className="flex justify-center items-center bg-white text-independence text-3xl p-2 rounded-xl shadow-shadow-1 mx-4">
                        <MdPersonOutline />
                    </button>

                    <button
                        onClick={() => setToggleNav(!toggleNav)}
                        className="w-[22px] h-[24px] flex flex-col justify-between items-end lg:hidden"
                    >
                        <span className="bg-independence block w-full h-[2px]"></span>
                        <span className="bg-independence block w-3/4 h-[2px]"></span>
                        <span className="bg-independence block w-2/4 h-[2px]"></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

/* Exports */

export default Header;
