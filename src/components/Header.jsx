import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { MdFavoriteBorder } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import bookIcon from "../assets/Icons/book-bookmark.png";
import userProfileImage from "../assets/Images/profile-img.jpeg";
import { FiShoppingCart } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { useAuthStore } from "../stores/useAuthStore";

export default function HeaderBeforeLogIn() {
    const { pathname } = useLocation();
    const pageTitle = pathname.split("/")[1];
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isAuthenticated, logout } = useAuthStore();

    return (
        <>
            <header className="w-full text-white lg:py-6 xl:px-35 md:px-12 px-10 py-3 static md:absolute z-50 top-0 left-0 md:bg-[#FFFFFF33] bg-[#3B2F4A] flex items-center justify-between">
                <div className="flex items-center gap-2 lg:gap-6">
                    <Link
                        to="/"
                        className="logo flex items-center justify-center gap-2 md:border-e md:border-solid border-[#FFFFFF4D] pe-2 lg:pe-6 border-none">
                        <img src={bookIcon} alt="Icon Book" />
                        <span className="font-normal text-[16px] leading-[100%]">Bookshop</span>
                    </Link>

                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-4 lg:gap-10">
                            <li>
                                <Link
                                    to="/"
                                    className={`font-semibold text-[18px] hover:text-[#EAA451] duration-300 ${
                                        pageTitle === "" ? "text-[#EAA451]" : ""
                                    }`}>
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/books"
                                    className={`font-semibold text-[18px] hover:text-[#EAA451] duration-300 ${
                                        pageTitle === "books" ? "text-[#EAA451]" : ""
                                    }`}>
                                    Books
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about-us"
                                    className={`font-semibold text-[18px] hover:text-[#EAA451] duration-300 ${
                                        pageTitle === "about-us" ? "text-[#EAA451]" : ""
                                    }`}>
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {!isAuthenticated ? (
                    <div className="hidden md:flex items-center gap-4 lg:gap-6">
                        <Link
                            to="/login"
                            className="py-3 px-4 bg-[#D9176C] text-center rounded-lg hover:bg-transparent hover:border hover:border-[#D9176C] duration-300 ease-out">
                            Log In
                        </Link>

                        <Link to="/signup" className="py-3 px-4 bg-white text-[#D9176C] text-center rounded-lg">
                            Sign Up
                        </Link>
                    </div>
                ) : (
                    <div className="hidden md:flex items-center gap-4 lg:gap-6">
                        <Link
                            to="/favorite-books"
                            className="text-center hover:text-[#D9176C] duration-300 ease-out relative">
                            <MdFavoriteBorder size={28} />
                            <span className="count absolute -top-1.5 -right-1.5 px-0.75 text-white font-semibold text-[10px] bg-[#D9176C] rounded-[100px] z-50 border-white border">
                                0
                            </span>
                        </Link>

                        <Link
                            to="/wishlist"
                            className="text-center hover:text-[#D9176C] duration-300 ease-out relative">
                            <FiShoppingCart size={28} />
                            <span className="count absolute -top-1.5 -right-1.5 px-0.75 text-white font-semibold text-[10px] bg-[#D9176C] rounded-[100px] z-50 border-white border">
                                0
                            </span>
                        </Link>

                        <div
                            onClick={() => {
                                logout();
                            }}
                            className="profile-pic flex items-center justify-center gap-2.5 cursor-pointer">
                            <img src={userProfileImage} alt="Profile" className="w-10 h-10 object-cover rounded-full" />
                            <div className="profile-info flex flex-col">
                                <p className="text-[16px] font-semibold">Mohamed Eslam</p>
                                <p className="text-[14px] font-light text-[#FFFFFF80]">moo@gmail.com</p>
                            </div>
                        </div>
                    </div>
                )}

                <button className="md:hidden text-3xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <HiX /> : <HiMenu />}
                </button>
            </header>

            {isMenuOpen && (
                <div className="md:hidden bg-[#3B2F4A] text-white px-6 py-6">
                    <nav>
                        <ul className="flex flex-col items-center gap-6">
                            <li>
                                <Link
                                    to="/"
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`hover:text-[#EAA451] duration-300 ease-out ${pageTitle === "" ? "text-[#EAA451]" : ""}`}>
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/books"
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`hover:text-[#EAA451] duration-300 ease-out ${pageTitle === "books" ? "text-[#EAA451]" : ""}`}>
                                    Books
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about-us"
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`hover:text-[#EAA451] duration-300 ease-out ${pageTitle === "about-us" ? "text-[#EAA451]" : ""}`}>
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {!isAuthenticated ? (
                        <div className="flex flex-col gap-3 mt-6">
                            <Link
                                to="/login"
                                onClick={() => setIsMenuOpen(false)}
                                className="py-3 px-4 bg-[#D9176C] text-center rounded-lg hover:bg-transparent hover:border hover:border-[#D9176C] duration-300 ease-out">
                                Log In
                            </Link>

                            <Link
                                to="/signup"
                                onClick={() => setIsMenuOpen(false)}
                                className="py-3 px-4 bg-white text-[#D9176C] text-center rounded-lg">
                                Sign Up
                            </Link>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4 mt-6">
                            <Link
                                to="/favorite-books"
                                className="py-3 px-4 flex items-center justify-center gap-2 bg-[#D9176C] text-center rounded-lg hover:bg-transparent hover:border hover:border-[#D9176C] duration-300 ease-out">
                                <MdFavoriteBorder size={28} />
                                <FaArrowRightLong size={24} />
                                <span className="count text-white font-semibold">0</span>
                            </Link>

                            <Link
                                to="/wishlist"
                                className="py-3 px-4 flex items-center justify-center gap-2 bg-[#D9176C] text-center rounded-lg hover:bg-transparent hover:border hover:border-[#D9176C] duration-300 ease-out">
                                <FiShoppingCart size={28} />
                                <FaArrowRightLong size={24} />
                                <span className="count text-white font-semibold">0</span>
                            </Link>

                            <div className="profile-pic flex items-center justify-center gap-2.5 cursor-pointer">
                                <img
                                    src={userProfileImage}
                                    alt="Profile"
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <div className="profile-info flex flex-col">
                                    <p className="text-[16px] font-semibold">Mohamed Eslam</p>
                                    <p className="text-[14px] font-light text-[#FFFFFF80]">moo@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
