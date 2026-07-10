import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import bookIcon from "../assets/Icons/book-bookmark.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaEarthAmericas } from "react-icons/fa6";

export default function Footer() {
    const { pathname } = useLocation();
    const pageTitle = pathname.split("/")[1];

    return (
        <>
            <footer className="bg-[#3B2F4A] flex items-center justify-center flex-col gap-4 px-15 pt-30 pb-40 mt-28 text-white">
                <div className="footer-links w-full flex flex-wrap items-center justify-center md:justify-between gap-4 border-b border-solid border-[#FFFFFF33] pb-4">
                    <div className="website-links flex items-center justify-center gap-10">
                        <Link to="/" className="logo hidden md:flex items-center justify-center gap-2">
                            <img src={bookIcon} alt="Icon Book" />
                            <span className="font-normal text-[14px] leading-[100%]">Bookshop</span>
                        </Link>

                        <ul className="flex items-center justify-center gap-2 md:gap-6">
                            <li>
                                <Link
                                    to="/"
                                    className={`font-semibold text-[18px] hover:text-[#EAA451] duration-300 ease-out ${
                                        pageTitle === "" ? "text-[#EAA451]" : ""
                                    }`}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/books"
                                    className={`font-semibold text-[16px] leading-[100%] border-x md:border-none border-solid border-[#FFFFFF33] px-2 hover:text-[#EAA451] duration-300 ease-out ${
                                        pageTitle === "books" ? "text-[#EAA451]" : ""
                                    }`}>
                                    Books
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about-us"
                                    className={`font-semibold text-[18px] hover:text-[#EAA451] duration-300 ease-out ${
                                        pageTitle === "about-us" ? "text-[#EAA451]" : ""
                                    }`}>
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="social-links">
                        <ul className="flex items-center justify-center gap-4 md:gap-6">
                            <li>
                                <button className="flex w-10 h-10 items-center justify-center rounded-full bg-[#1877F2] text-white">
                                    <FaFacebook size={24} className="cursor-pointer" />
                                </button>
                            </li>
                            <li>
                                <button className="flex w-10 h-10 items-center justify-center rounded-full bg-[linear-gradient(45deg,#FAAD4F_14.61%,#DD2A7B_39.38%,#9537B0_58.49%,#515BD4_85.39%)] text-white">
                                    <FaInstagram size={24} className="cursor-pointer" />
                                </button>
                            </li>
                            <li>
                                <button className="flex w-10 h-10 items-center justify-center rounded-full bg-[#FF0000] text-white">
                                    <FaYoutube size={24} className="cursor-pointer" />
                                </button>
                            </li>
                            <button className="flex w-10 h-10 items-center justify-center rounded-full bg-[#1C1C1B] text-white">
                                <BsTwitterX size={24} className="cursor-pointer" />
                            </button>
                        </ul>
                    </div>
                </div>

                <div className="lang-rights w-full flex items-center justify-between max-sm:flex-wrap max-sm:gap-6">
                    <div className="copy-rights font-normal text-[14px] leading-[150%]">
                        {"<Developed By> EraaSoft <All Copy Rights Reserved @2024>"}
                    </div>

                    <div className="lang flex items-center gap-4 w-full md:w-[34%] lg:w-[24%] xl:w-[16%]">
                        <button className="flex w-10 h-10 items-center justify-center rounded-full bg-transparent text-white">
                            <FaEarthAmericas size={24} className="cursor-pointer" />
                        </button>

                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="English"
                                className="w-full py-1 ps-2 pe-4 font-light text-[14px] outline-0 border border-solid border-[#FFFFFF80] rounded-lg"
                            />
                            <MdKeyboardArrowRight className="absolute top-0.5 right-0 text-[#FFFFFF80]" size={28} />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
