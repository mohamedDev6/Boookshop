import GlobalFiltersIcon from "@iconify-react/carbon/global-filters";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsMic } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Books() {
    const categories = [
        { id: "all", name: "All Categories", count: 1450 },
        { id: "business", name: "Business", count: 140 },
        { id: "kids", name: "Kids", count: 309 },
        { id: "art", name: "Art", count: 102 },
        { id: "history", name: "History", count: 204 },
        { id: "romance", name: "Romance", count: 89 },
        { id: "fantasy", name: "Fantasy", count: 47 },
        { id: "self-help", name: "Self Help", count: 163 },
        { id: "cooking", name: "Cooking", count: 211 },
        { id: "sports", name: "Sports", count: 92 },
    ];

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const booksPerPage = 3;

    useEffect(() => {
        async function getBooks() {
            try {
                const response = await axios.get("https://bookstore.eraasoft.pro/api/book");

                const { books } = response.data.data;

                setBooks(books);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        getBooks();
    }, []);

    const lastBook = currentPage * booksPerPage;
    const firstBook = lastBook - booksPerPage;
    const currentBooks = books.slice(firstBook, lastBook);

    const totalPages = Math.ceil(books.length / booksPerPage);

    if (error) {
        return (
            <div className="flex min-h-100 flex-col items-center justify-center gap-4">
                <h2 className="text-2xl font-bold text-red-500">Something went wrong!</h2>

                <p className="text-[#22222280]">We couldn't load the books. Please try again later.</p>
            </div>
        );
    }

    return (
        <>
            <div className="hero-section">
                <img
                    className="w-full hidden md:block"
                    src="../src/assets/Images/hero-books-image.png"
                    alt="Hero Img"
                />
            </div>

            <section className="books-section flex">
                <div className="filters min-w-80 xl:min-w-100 pt-15 ps-15 pe-4 flex flex-col items-start justify-start gap-8 border-e border-solid border-[#2222221A]">
                    <div className="title flex items-center justify-center gap-4">
                        <GlobalFiltersIcon width="2rem" className="cursor-pointer" />
                        <span className="font-semibold text-2xl">Filter</span>
                    </div>
                    <div className="categories flex flex-col items-start justify-center gap-4 bg-white w-full p-4 rounded-lg">
                        <div className="title flex items-center justify-between w-full cursor-pointer">
                            <span className="font-semibold text-[18px] text-[#D9176C80]">Categories</span>
                            <MdKeyboardArrowDown className="text-[#D9176C80]" size={28} />
                        </div>

                        <ul className="flex flex-col items-start justify-center gap-2 w-full">
                            {categories.map((category) => (
                                <li className="flex items-center justify-between w-full" key={category.id}>
                                    <div className="flex items-center gap-2.5">
                                        <input
                                            type="checkbox"
                                            id={category.id}
                                            className="checkbox text-[#D9176C] border border-solid border-[#22222233] rounded-lg"
                                        />
                                        <label htmlFor={category.id} className="font-normal text-sm">
                                            {category.name}
                                        </label>
                                    </div>
                                    <span className="font-normal text-sm text-[#22222280]">({category.count})</span>
                                </li>
                            ))}
                        </ul>

                        <p className="font-semibold text-center text-sm text-[#D9176C] w-full cursor-pointer">
                            Load More
                        </p>
                    </div>
                    <div className="publisher flex flex-col items-start justify-center gap-4 bg-white w-full p-4 rounded-lg">
                        <div className="title flex items-center justify-between w-full cursor-pointer">
                            <span className="font-semibold text-[18px]">Publisher</span>
                            <MdKeyboardArrowRight size={28} />
                        </div>
                    </div>
                    <div className="year flex flex-col items-start justify-center gap-4 bg-white w-full p-4 rounded-lg">
                        <div className="title flex items-center justify-between w-full cursor-pointer">
                            <span className="font-semibold text-[18px]">Year</span>
                            <MdKeyboardArrowRight size={28} />
                        </div>
                    </div>
                </div>

                <div className="pt-15 pe-15 ps-6 self-start w-full">
                    <div className="search-container flex items-center justify-start gap-6.5 w-full">
                        <div className="search-bar w-[80%] flex items-center justify-start">
                            <div className="flex w-full bg-white overflow-hidden rounded-[50px] border border-solid border-[#22222233]">
                                <input
                                    type="text"
                                    placeholder="Search books..."
                                    className="w-full px-6 py-4 outline-none font-normal text-[20px] leading-[100%] placeholder:text-[#22222280]"
                                />

                                <button className="voice-btn border-none px-5 text-[#22222280] cursor-pointer">
                                    <BsMic size={24} />
                                </button>

                                <button className="search-btn py-3 px-6 bg-white border-s border-solid border-[#22222233] text-[#D9176C] transition hover:brightness-110 cursor-pointer">
                                    <GoSearch size={24} />
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Sort by"
                                className="w-full py-2.5 px-4 font-light text-[14px] outline-0 border border-solid border-[#0000001A] rounded-xl"
                            />
                            <MdKeyboardArrowRight className="absolute top-2 right-0 text-[#22222280]" size={28} />
                        </div>
                    </div>

                    <div className="search-categories mt-6 flex items-center justify-start gap-3 overflow-x-auto scrollbar-hide">
                        <button className="border-none py-2.5 px-6 rounded-lg font-normal text-[16px] text-white bg-[#D9176C80] cursor-pointer">
                            Business
                        </button>
                        <button className="py-2.5 px-6 rounded-lg font-normal text-[16px] border border-solid border-[#00000033] hover:bg-[#D9176C80] hover:text-white hover:border-none transition duration-300 cursor-pointer">
                            History
                        </button>
                        <button className="py-2.5 px-6 rounded-lg font-normal text-[16px] border border-solid border-[#00000033] hover:bg-[#D9176C80] hover:text-white hover:border-none transition duration-300 cursor-pointer">
                            Romance
                        </button>
                        <button className="py-2.5 px-6 rounded-lg font-normal text-[16px] border border-solid border-[#00000033] hover:bg-[#D9176C80] hover:text-white hover:border-none transition duration-300 cursor-pointer">
                            Fantasy
                        </button>
                        <button className="py-2.5 px-6 rounded-lg font-normal text-[16px] border border-solid border-[#00000033] hover:bg-[#D9176C80] hover:text-white hover:border-none transition duration-300 cursor-pointer">
                            Art
                        </button>
                        <button className="py-2.5 px-6 rounded-lg font-normal text-[16px] border border-solid border-[#00000033] hover:bg-[#D9176C80] hover:text-white hover:border-none transition duration-300 cursor-pointer">
                            Kids
                        </button>
                        <button className="py-2.5 px-6 rounded-lg font-normal text-[16px] border border-solid border-[#00000033] hover:bg-[#D9176C80] hover:text-white hover:border-none transition duration-300 cursor-pointer">
                            Music
                        </button>
                        <button className="py-2.5 px-6 rounded-lg font-normal text-[16px] border border-solid border-[#00000033] hover:bg-[#D9176C80] hover:text-white hover:border-none transition duration-300 cursor-pointer">
                            Cooking
                        </button>
                        <button className="py-2.5 px-6 rounded-lg font-normal text-[16px] border border-solid border-[#00000033] hover:bg-[#D9176C80] hover:text-white hover:border-none transition duration-300 cursor-pointer">
                            Sports
                        </button>
                    </div>

                    <div className="books-cards w-full flex flex-col items-start justify-center gap-15 mt-10">
                        {loading ? (
                            <div className="flex items-center justify-center h-screen w-full">
                                <span className="loading loading-spinner loading-xl"></span>
                            </div>
                        ) : (
                            currentBooks.map((book) => (
                                <div
                                    key={book.bookId}
                                    onClick={() => navigate(`show/${book.bookId}`)}
                                    className="book-card flex w-full cursor-pointer items-center gap-10 rounded-2xl border border-[#ECECEC] bg-white p-4 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    <div className="book-image shrink-0">
                                        <img
                                            src={book.bookImage[0].image}
                                            alt={book.bookName}
                                            className="h-64 w-44 rounded-lg object-cover"
                                        />
                                    </div>

                                    <div className="book-content flex flex-1 justify-between gap-6">
                                        <div className="book-info flex flex-1 flex-col">
                                            <h2 className="text-[18px] font-bold">{book.bookName}</h2>

                                            <p className="mt-2 max-w-106 text-[16px] text-[#22222280]">
                                                {book.description}
                                            </p>

                                            <div className="mt-6">
                                                <div className="flex items-center gap-1 text-[#EBC305]">
                                                    {[...Array(5)].map((_, index) => (
                                                        <FaStar
                                                            key={index}
                                                            size={22}
                                                            className={index < 4 ? "" : "text-[#D8D8D8]"}
                                                        />
                                                    ))}
                                                    <p className="text-sm font-semibold text-[#22222280]">
                                                        (210 Review)
                                                    </p>
                                                </div>

                                                <p className="mt-2 text-[16px]">
                                                    <span className="text-[#22222280]">Rate:</span> 4.2
                                                </p>
                                            </div>

                                            <div className="mt-4 flex gap-10">
                                                <div>
                                                    <p className="text-sm text-[#22222280]">Author</p>

                                                    <h4 className="mt-1 text-sm font-semibold">{book.author}</h4>
                                                </div>

                                                <div>
                                                    <p className="text-sm text-[#22222280]">Year</p>

                                                    <h4 className="mt-1 text-sm font-semibold">
                                                        {book.publicationYear}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="book-actions flex min-w-62.5 flex-col justify-between">
                                            <div className="self-end rounded-lg border border-[#EBC305] bg-[#FFFDF4] px-3 py-2 text-sm text-[#EBC305]">
                                                25% Discount code: {book.asinCode}
                                            </div>

                                            <h2 className="self-end text-[28px] font-semibold">${book.final_price}</h2>

                                            <div className="flex items-center gap-4">
                                                <button className="flex flex-1 items-center justify-center gap-2.5 rounded-xl bg-[#D9176C] px-4 py-3 text-[26px] font-semibold cursor-pointer text-white transition duration-300 hover:border hover:border-[#D9176C] hover:bg-transparent hover:text-[#D9176C]">
                                                    Add To Cart
                                                    <FiShoppingCart size={24} />
                                                </button>

                                                <button className="flex p-3 items-center justify-center rounded-xl border border-[#D9176C] text-[#D9176C] transition duration-300 hover:bg-[#D9176C] hover:text-white cursor-pointer">
                                                    <FiHeart size={28} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="pagination mt-40 flex items-center justify-center gap-4">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                            className="flex cursor-pointer items-center gap-1 text-[16px] font-semibold text-[#D9176C] transition hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-40">
                            <MdKeyboardArrowLeft size={28} />
                            Previous
                        </button>

                        {Array.from({ length: totalPages }, (_, index) => {
                            const page = index + 1;
                            return (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`flex py-3 px-4 cursor-pointer items-center justify-center rounded-lg text-[18px] font-semibold transition duration-300
                                    ${
                                        currentPage === page
                                            ? "bg-[#D9176C] text-white"
                                            : "border border-[#ECECEC] bg-white text-[#D9176C] hover:bg-[#D9176C] hover:text-white"
                                    }
                                `}>
                                    {page}
                                </button>
                            );
                        })}

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                            className="flex cursor-pointer items-center gap-1 text-[16px] font-semibold text-[#D9176C] transition hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-40">
                            Next
                            <MdKeyboardArrowRight size={28} />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
