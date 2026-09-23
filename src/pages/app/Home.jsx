// import { useEffect, useState } from "react";
import { BsMic } from "react-icons/bs";
import { GoSearch } from "react-icons/go";

import book1 from "../../assets/Images/book-1.png";
import book2 from "../../assets/Images/book-2.jpg";
import book3 from "../../assets/Images/book-3.png";
import book4 from "../../assets/Images/book-4.jpg";
import book5 from "../../assets/Images/book-5.jpg";
import book6 from "../../assets/Images/book-6.jpg";
import book7 from "../../assets/Images/book-7.jpg";
import book8 from "../../assets/Images/book-8.png";
import FeaturesSection from "../../components/FeaturesSection";
import RecommendedCard from "../../components/ui/RecommendedCard";
import FlashSaleCard from "../../components/ui/FlashSaleCard";

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

            <FeaturesSection />

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
                    <div className="section-title mb-10">
                        <h2 className="text-[26px] font-bold leading-[100%]">Recommended For You</h2>

                        <p className="mt-3 text-[16px] text-gray-500">
                            Discover books that readers like you enjoy the most.
                        </p>
                    </div>

                    {recommendedBooks.length > 0 && (
                        <div className="recommended-books grid gap-6 xl:grid-cols-[650px_650px] justify-center">
                            {recommendedBooks.map((book) => (
                                <RecommendedCard
                                    key={book.id}
                                    bookImage={book.image}
                                    bookTitle={book.title}
                                    bookAuthor={book.author}
                                    bookRating={book.rating}
                                    bookReviews={book.reviews}
                                    bookPrice={book.price}
                                />
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
                                <FlashSaleCard
                                    key={book.id}
                                    bookImage={book.image}
                                    bookTitle={book.title}
                                    bookAuthor={book.author}
                                    bookRating={book.rating}
                                    bookReviews={book.reviews}
                                    bookOldPrice={book.oldPrice}
                                    bookNewPrice={book.newPrice}
                                    bookCount={book.count}
                                />
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
