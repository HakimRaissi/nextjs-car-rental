/* Imports */

import Link from "next/link";

import { MdMailOutline } from "react-icons/md";

import { IoLogoInstagram, IoLogoTwitter, IoLogoFacebook } from "react-icons/io";

/* Main Component */

const Footer = () => {
    return (
        <footer className="bg-alice-blue-4 w-full px-4 pt-8 text-independence">
            <div className="max-w-5xl mx-auto lg:flex lg:justify-between">
                <div className="lg:w-1/3 lg:mr-10">
                    <Link href="/">
                        <a className="font-bold text-3xl text-cadet">LOGO</a>
                    </Link>
                    <p className="max-w-[50ch] text-sm leading-7 mt-2">
                        Search for cheap rental cars in New York. With a diverse
                        fleet of 19,000 vehicles, Waydex offers its consumers an
                        attractive and fun selection.
                    </p>
                </div>

                <div className="w-full flex mt-4 lg:w-2/3">
                    <div className="mr-20">
                        <h4 className="font-[600] text-base text-cadet mb-3">
                            Company
                        </h4>

                        <ul>
                            <li className="text-sm mb-2">
                                <Link href="/">
                                    <a>About us</a>
                                </Link>
                            </li>

                            <li className="text-sm mb-2">
                                <Link href="/">
                                    <a>Pricing plans</a>
                                </Link>
                            </li>

                            <li className="text-sm mb-2">
                                <Link href="/">
                                    <a>Our blog</a>
                                </Link>
                            </li>

                            <li className="text-sm mb-2">
                                <Link href="/">
                                    <a>Contacts</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-[600] text-base text-cadet mb-3">
                            Support
                        </h4>

                        <ul>
                            <li className="text-sm mb-2">
                                <Link href="/">
                                    <a>Help Center</a>
                                </Link>
                            </li>

                            <li className="text-sm mb-2">
                                <Link href="/">
                                    <a>Ask a question</a>
                                </Link>
                            </li>

                            <li className="text-sm mb-2">
                                <Link href="/">
                                    <a>Privacy policy</a>
                                </Link>
                            </li>

                            <li className="text-sm mb-2">
                                <Link href="/">
                                    <a>Terms & conditions</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl w-10/12 flex flex-col justify-center items-center mx-auto mt-12 rounded-t-xl bg-alice-blue-1 border-1 border-white ">
                <div className="flex my-4">
                    <Link href="/">
                        <a className="text-xl mx-2 hover:text-blue-600">
                            <IoLogoFacebook />
                        </a>
                    </Link>

                    <Link href="/">
                        <a className="text-xl mx-2 hover:text-blue-600">
                            <IoLogoInstagram />
                        </a>
                    </Link>

                    <Link href="/">
                        <a className="text-xl mx-2 hover:text-blue-600">
                            <IoLogoTwitter />
                        </a>
                    </Link>

                    <Link href="/">
                        <a className="text-xl  mx-2 hover:text-blue-600">
                            <MdMailOutline />
                        </a>
                    </Link>
                </div>

                <p className="text-center mb-3">
                    Inspired by{" "}
                    <Link href="https://github.com/codewithsadee">
                        <a>codewithsadee</a>
                    </Link>
                    <br />
                    Made by{" "}
                    <Link href="https://github.com/HakimRaissi">
                        <a>Hakim Raissi</a>
                    </Link>
                </p>
            </div>
        </footer>
    );
};

/* Exports */

export default Footer;
