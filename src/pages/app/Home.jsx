// import { useEffect, useState } from "react";
import { BsMic } from "react-icons/bs";
import { TbTruckDelivery, TbShieldCheck, TbRefresh, TbHeadset } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { GoSearch } from "react-icons/go";

import book1 from "../../assets/Images/book-1.png";
import book2 from "../../assets/Images/book-2.jpg";
import book3 from "../../assets/Images/book-3.png";
import book4 from "../../assets/Images/book-4.jpg";
import book5 from "../../assets/Images/book-5.jpg";
import book6 from "../../assets/Images/book-6.jpg";
import book7 from "../../assets/Images/book-7.jpg";
import book8 from "../../assets/Images/book-8.png";

export default function Home() {
    const booksImgs = [book1, book2, book3, book4, book5, book6, book7, book8];

    const recommendedBooks = [
        {
            id: 1,
            title: "Rich Dad Poor Dad",
            author: "Robert T. Kiyosaki",
            image: "../../src/assets/Images/book-1.png",
            price: "$30.00",
            reviews: 180,
            rating: 4.2,
        },
        {
            id: 2,
            title: "The Design Of Books",
            author: "Debbie Berne",
            image: "../../src/assets/Images/book-5.jpg",
            price: "$40.00",
            reviews: 210,
            rating: 4.2,
        },
    ];

    const flashSaleBooks = [
        {
            id: 1,
            title: "Rich Dad Poor Dad",
            author: "Robert Kiyosaki",
            image: "../../src/assets/Images/book-1.png",
            oldPrice: "$45.00",
            newPrice: "$30.00",
            count: 4,
            reviews: 180,
            rating: 4.8,
        },
        {
            id: 2,
            title: "The Design Of Everyday Things",
            author: "Don Norman",
            image: "../../src/assets/Images/book-2.jpg",
            oldPrice: "$35.00",
            newPrice: "$24.00",
            count: 2,
            reviews: 140,
            rating: 4.9,
        },
    ];

    return (
        <>
            <section className="hero-section relative">
                <img className="w-full" src="../src/assets/Images/hero-rest-image.png" alt="Hero Img" />

                <div className="hero-overlay absolute inset-0">
                    <div className="search-container h-full flex items-center justify-center">
                        <div className="flex w-full max-w-[90%] md:max-w-[50%] lg:max-w-xl bg-white overflow-hidden rounded-[50px]">
                            <input
                                type="text"
                                placeholder="Search books..."
                                className="w-full px-6 py-4  outline-none font-normal text-[20px] leading-[100%] placeholder:text-[#22222280]"
                            />

                            <button className="voice-btn border-none px-5 text-[#22222280] cursor-pointer">
                                <BsMic size={22} />
                            </button>

                            <button className="search-btn py-3 px-6 bg-[#D9176C] border-none text-white transition hover:brightness-110 cursor-pointer">
                                <GoSearch size={22} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features-section py-30 px-15 flex items-center justify-center">
                <div className="container grid w-11/12 gap-15.25 md:grid-cols-2 lg:grid-cols-4">
                    <div className="feature-card flex flex-col gap-4">
                        <TbTruckDelivery size={38} className="text-[#22222280]" />

                        <h3 className="text-lg font-bold leading-[100%]">Fast & Reliable Shipping</h3>

                        <p className="text-[16px] leading-[100%] text-[#22222280]">
                            Get your favorite books delivered safely and quickly to your doorstep with our trusted
                            shipping partners.
                        </p>
                    </div>

                    <div className="feature-card flex flex-col gap-4">
                        <TbShieldCheck size={38} className="text-[#22222280]" />

                        <h3 className="text-lg font-bold leading-[100%]">Secure Payment</h3>

                        <p className="text-[16px] leading-[100%] text-[#22222280]">
                            Shop with confidence using encrypted and secure payment methods that protect your
                            information.
                        </p>
                    </div>

                    <div className="feature-card flex flex-col gap-4">
                        <TbRefresh size={38} className="text-[#22222280]" />

                        <h3 className="text-lg font-bold leading-[100%]">Easy Returns</h3>

                        <p className="text-[16px] leading-[100%] text-[#22222280]">
                            Changed your mind? Return eligible books easily with our simple and hassle-free return
                            policy.
                        </p>
                    </div>

                    <div className="feature-card flex flex-col gap-4">
                        <TbHeadset size={38} className="text-[#22222280]" />

                        <h3 className="text-lg font-bold leading-[100%]">24/7 Customer Support</h3>

                        <p className="text-[16px] leading-[100%] text-[#22222280]">
                            Our support team is always available to answer your questions and help you anytime.
                        </p>
                    </div>
                </div>
            </section>

            <section className="best-sellers-section bg-[#3B2F4A] py-30 overflow-hidden">
                <div className="text-container mx-auto mb-20">
                    <h2 className="text-[26px] leading-[100%] text-center font-bold text-white">Best Seller</h2>

                    <p className="text-[#FFFFFF80] text-[16px] text-center mt-4">
                        Explore our best-selling books, handpicked for every reader. Discover timeless classics and
                        today's most popular titles in one place.
                    </p>
                </div>

                <div className="books-slider overflow-hidden">
                    <div className="books-track flex w-max animate-books cursor-pointer">
                        {[...booksImgs, ...booksImgs].map((book, index) => (
                            <div key={index} className="book-card h-65 mr-8 shrink-0 hover:-translate-y-2 transition">
                                <img src={book} alt="Book" className="w-full h-full rounded-xl" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-20">
                    <button className="bg-[#D9176C] px-4 py-3 text-white w-45 rounded-lg cursor-pointer hover:bg-transparent hover:border hover:border-[#D9176C] duration-300 ease-out">
                        Shop Now
                    </button>
                </div>
            </section>

            <section className="recommended-section py-15 lg:py-30 px-7.5 lg:px-15">
                <div className="flex flex-col items justify-center">
                    <div className="text-container mb-10">
                        <h2 className="text-[26px] font-bold leading-[100%]">Recommended For You</h2>

                        <p className="mt-3 text-[16px] text-gray-500">
                            Discover books that readers like you enjoy the most.
                        </p>
                    </div>

                    {recommendedBooks.length > 0 && (
                        <div className="recommended-books grid gap-6 xl:grid-cols-[650px_650px] justify-center">
                            {recommendedBooks.map((book) => (
                                <div
                                    key={book.id}
                                    className="recommended-card cursor-pointer flex flex-col items-center md:flex-row gap-10 rounded-4xl p-4 lg:p-10 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    <div className="book-image shrink-0">
                                        <img
                                            src={book.image}
                                            alt={book.title}
                                            className="h-66 w-44 rounded-lg object-cover"
                                        />
                                    </div>

                                    <div className="book-details flex flex-1 flex-col justify-between gap-6">
                                        <div>
                                            <h3 className="text-[18px] font-bold">{book.title}</h3>

                                            <p className="mt-1 text-sm text-[#22222280]">
                                                Author: <span className="text-[#222222]">{book.author}</span>
                                            </p>

                                            <p className="mt-2 text-sm text-[#22222280]">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
                                                ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
                                                leo. Aliquam in justo varius, Aliquam in justo varius,
                                            </p>
                                        </div>

                                        <div className="book-rating mt-6 flex flex-wrap items-center justify-between gap-4">
                                            <div>
                                                <div className="flex items-center gap-1 text-[#EBC305]">
                                                    {[...Array(5)].map((_, index) => (
                                                        <FaStar
                                                            key={index}
                                                            className={index < 4 ? "" : "text-[#22222233] opacity-30"}
                                                        />
                                                    ))}
                                                    <span className="text-[#22222280]">({book.reviews} Reviews)</span>
                                                </div>

                                                <p className="mt-2 text-sm text-[#222222]">
                                                    <span className="text-[#22222280]">Rate:</span> {book.rating}
                                                </p>
                                            </div>

                                            <span className="text-[26px] font-bold text-[#222222]">{book.price}</span>
                                        </div>

                                        <div className="book-actions mt-6 flex gap-4">
                                            <button className="bg-[#D9176C] flex flex-1 items-center justify-center gap-2.5 px-4 py-3 text-white rounded-lg cursor-pointer hover:bg-transparent hover:text-[#D9176C] hover:border hover:border-[#D9176C] duration-300 ease-out">
                                                Add To Cart
                                                <FiShoppingCart size={18} />
                                            </button>

                                            <button className="bg-transparent px-4 py-3 rounded-lg cursor-pointer text-[#D9176C] border border-[#D9176C]">
                                                <FiHeart size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <section className="flash-sale-section py-15 lg:py-30 px-7.5 lg:px-15 border-t border-[#22222233]">
                <div className="flash-sale-header mb-12 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                    <div className="section-title">
                        <h2 className="text-[26px] font-bold">Flash Sale</h2>

                        <p className="mt-4 text-[16px] text-[#22222280]">
                            Grab your favorite books before the offer expires. <br />
                            Enjoy exclusive discounts for a limited time only.
                        </p>
                    </div>

                    <div className="countdown-container flex justify-center items-center">
                        <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-[conic-gradient(#D9176C_0deg,#D9176C_180deg,#D9176C80_180deg,#D9176C80_360deg)]">
                            <div className="flex h-[92%] w-[92%] items-center justify-center rounded-full">
                                <span className="text-[26px] font-bold text-[#222222]">30:00:00</span>
                            </div>

                            <div className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#D9176C] ring-2 ring-white"></div>
                        </div>
                    </div>
                </div>

                <div className="flash-sale-slider relative">
                    <button className="btn btn-circle hidden xl:block w-11 h-11 absolute left-70 top-1/2 -translate-y-1/2 p-2.5 border border-gray-200 bg-white text-black shadow-xl hover:bg-primary transition duration-300">
                        <img src="../../src/assets/Icons/arrow-left.png" alt="arrow left" className="w-6" />
                    </button>
                    {flashSaleBooks.length > 0 && (
                        <div className="flash-sale-grid w-full grid gap-6 xl:grid-cols-[500px_500px] xl:w-fit xl:mx-auto">
                            {flashSaleBooks.map((book) => (
                                <div
                                    key={book.id}
                                    className="book-card w-full flex flex-col md:flex-row gap-6 items-center justify-center h-full overflow-hidden bg-[#3B2F4A] text-white cursor-pointer rounded-lg p-4 lg:p-4 transition duration-300 hover:-translate-y-2">
                                    <div className="book-cover rounded-lg shrink-0">
                                        <img src={book.image} alt={book.title} className="h-66 w-44 object-cover" />
                                    </div>

                                    <div className="book-details flex flex-1 flex-col gap-6 justify-between h-full">
                                        <div className="flex flex-1 flex-col gap-6">
                                            <div>
                                                <h2 className="text-[16px] font-bold text-white">{book.title}</h2>
                                                <p className="mt-2 text-[14px] text-[#FFFFFF80]">
                                                    Author:
                                                    <span className="font-medium text-white"> {book.author}</span>
                                                </p>
                                                <div className="flex items-center gap-1 mt-2 text-[#EBC305]">
                                                    {[...Array(5)].map((_, index) => (
                                                        <FaStar
                                                            key={index}
                                                            className={index < 4 ? "" : "text-[#FFFFFF80] opacity-30"}
                                                        />
                                                    ))}
                                                    <span className="text-[#FFFFFF80] text-[14px]">
                                                        ({book.reviews} Reviews)
                                                    </span>
                                                </div>
                                                <p className="text-[14px] text-[#FFFFFF80]">
                                                    Rate:
                                                    <span className="ml-2 font-semibold text-white">{book.rating}</span>
                                                </p>
                                            </div>

                                            <div>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[14px] text-[#FFFFFF80] line-through">
                                                        {book.oldPrice}
                                                    </span>

                                                    <span className="text-[22px] font-bold text-white">
                                                        {book.newPrice}
                                                    </span>
                                                </div>
                                                <div className="mt-6">
                                                    <div className="h-2 w-full rounded-full bg-[#FFFFFF1A]">
                                                        <div className="h-full w-[72%] rounded-full bg-[#EAA451]"></div>
                                                    </div>
                                                    <p className="mt-3 text-[14px] text-[#FFFFFF80]">
                                                        {book.count} books left
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cart-button flex items-center w-full self-end">
                                            <button className="flex items-center justify-center w-full gap-2 py-3 px-4 rounded-xl bg-[#F61B7A] text-white transition hover:brightness-110 cursor-pointer hover:bg-transparent hover:text-[#D9176C] hover:border hover:border-[#D9176C] duration-300 ease-out">
                                                Add To Cart
                                                <FiShoppingCart size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <button className="btn btn-circle hidden xl:block w-11 h-11 absolute right-70 top-1/2 -translate-y-1/2 p-2.5 border border-gray-200 bg-white text-black shadow-xl hover:bg-primary transition duration-300">
                        <img src="../../src/assets/Icons/arrow-right.png" alt="arrow right" className="w-6" />
                    </button>
                </div>
            </section>
        </>
    );
}
