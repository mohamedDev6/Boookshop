import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaStar, FaWhatsapp } from "react-icons/fa";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import heroImg from "../../assets/Images/hero-books-image.png";
import { BsShare, BsTwitterX } from "react-icons/bs";
import { HiCheckBadge } from "react-icons/hi2";
import { TbTruckDelivery } from "react-icons/tb";
import { LuCircleMinus, LuCirclePlus } from "react-icons/lu";
import axios from "axios";

export default function Book() {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { bookId } = useParams();
    const [count, setCount] = useState(1);

    useEffect(() => {
        async function getBook() {
            try {
                const response = await axios.get(`https://bookstore.eraasoft.pro/api/book/show/${bookId}`);

                const { book } = response.data.data;

                setBook(book);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        getBook();
    }, [bookId]);

    if (error) {
        return (
            <div className="flex min-h-100 flex-col items-center justify-center gap-4">
                <h2 className="text-2xl font-bold text-red-500">Something went wrong!</h2>

                <p className="text-[#22222280]">We couldn't load the book. Please try again later.</p>
            </div>
        );
    }

    return (
        <>
            <div className="hero-section">
                <img className="w-full hidden md:block" src={heroImg} alt="Hero Img" />
            </div>

            <section className="single-book-section px-15 pt-15">
                <div className="book-card w-full flex flex-col items-start justify-center">
                    {loading ? (
                        <div className="flex items-center justify-center h-screen w-full">
                            <span className="loading loading-spinner loading-xl"></span>
                        </div>
                    ) : (
                        <div className="book-card flex w-full gap-10 rounded-3xl border border-[#ECECEC] bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="book-gallery flex w-[320px] shrink-0">
                                <div className="main-book-image overflow-hidden rounded-2xl border border-[#ECECEC]">
                                    <img
                                        src={book?.bookImage[0]?.image}
                                        alt={book.bookName}
                                        className="h-130 w-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-1 justify-between gap-14">
                                <div className="book-details flex flex-1 flex-col">
                                    <h1 className="text-[28px] font-bold">{book.bookName}</h1>
                                    <p className="mt-2 max-w-190 text-[18px] text-[#22222280]">{book.description}</p>

                                    <div className="book-meta mt-6 grid grid-cols-5 gap-6">
                                        <div>
                                            <p className="text-sm text-[#22222280]">Author</p>

                                            <h3 className="mt-1 text-sm font-semibold">{book.author}</h3>
                                        </div>

                                        <div>
                                            <p className="text-sm text-[#22222280]">Publication Year</p>

                                            <h3 className="mt-1 text-sm font-semibold">{book.publicationYear}</h3>
                                        </div>

                                        <div>
                                            <p className="text-sm text-[#22222280]">Book</p>

                                            <h3 className="mt-1 text-sm font-semibold">1 Of 1</h3>
                                        </div>

                                        <div>
                                            <p className="text-sm text-[#22222280]">Pages</p>

                                            <h3 className="mt-1 text-sm font-semibold">{book.numberOfPages}</h3>
                                        </div>

                                        <div>
                                            <p className="text-sm text-[#22222280]">Language</p>

                                            <h3 className="mt-1 text-sm font-semibold capitalize">{book.lang}</h3>
                                        </div>
                                    </div>

                                    <div className="book-rating mt-10">
                                        <div className="flex items-center gap-1 text-[#EBC305]">
                                            {[...Array(5)].map((_, index) => (
                                                <FaStar
                                                    key={index}
                                                    size={22}
                                                    className={index < 4 ? "" : "text-[#00000033]"}
                                                />
                                            ))}

                                            <span className="ml-2 text-[16px] font-semibold text-[#00000080]">
                                                (210 Reviews)
                                            </span>
                                        </div>

                                        <p className="mt-4 text-[18px] font-semibold">
                                            <span className="text-[#00000080]">Rate:</span> 4.2
                                        </p>
                                    </div>

                                    <div className="book-price mt-auto flex items-center gap-4">
                                        <h2 className="text-[36px] font-semibold">${book.final_price * count}</h2>

                                        <span className="text-[24px] text-[#22222280] line-through">
                                            ${book.price * count}
                                        </span>
                                    </div>
                                </div>

                                <div className="book-actions flex w-85 flex-col justify-between">
                                    <div className="social-icons flex justify-end gap-3">
                                        <button className="flex w-10 h-10 items-center justify-center rounded-full bg-[#1877F2] text-white">
                                            <FaFacebook size={24} className="cursor-pointer" />
                                        </button>

                                        <button className="flex w-10 h-10 items-center justify-center rounded-full bg-[linear-gradient(45deg,#FAAD4F_14.61%,#DD2A7B_39.38%,#9537B0_58.49%,#515BD4_85.39%)] text-white">
                                            <FaInstagram size={24} className="cursor-pointer" />
                                        </button>

                                        <button className="flex w-10 h-10 items-center justify-center rounded-full bg-[#1C1C1B] text-white">
                                            <BsTwitterX size={24} className="cursor-pointer" />
                                        </button>

                                        <button className="flex w-10 h-10 items-center justify-center rounded-full bg-[#00E510] text-white">
                                            <FaWhatsapp size={24} className="cursor-pointer" />
                                        </button>

                                        <button className="flex items-center justify-center text-[#22222280]">
                                            <BsShare size={32} className="cursor-pointer" />
                                        </button>
                                    </div>

                                    <div>
                                        <div className="book-badges flex flex-col items-end justify-end gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="rounded-lg text-sm flex items-center gap-1 border border-[#25D994] px-3 py-2 text-[#25D994]">
                                                    <HiCheckBadge size={20} />
                                                    In Stock
                                                </div>

                                                <div className="rounded-lg text-sm flex items-center gap-1 border border-[#22222280] px-3 py-2 text-[#22222280]">
                                                    <TbTruckDelivery size={20} className="text-[#22222280]" />
                                                    Free Shipping Today
                                                </div>
                                            </div>

                                            <div className="rounded-lg text-sm border border-[#EAA451] bg-[#FFFDF5] px-3 py-2 text-[#EAA451]">
                                                Discount code: {book.asinCode}
                                            </div>
                                        </div>

                                        <div className="quantity-selector mt-12 flex items-center justify-end gap-6">
                                            <button
                                                onClick={() => {
                                                    if (count > 1) {
                                                        setCount((prev) => prev - 1);
                                                    }
                                                }}
                                                className="text-[24px] text-[#D9176C] transition hover:scale-110 cursor-pointer">
                                                <LuCircleMinus />
                                            </button>

                                            <span className="text-[30px] font-semibold">{count}</span>

                                            <button
                                                onClick={() => {
                                                    setCount((prev) => prev + 1);
                                                }}
                                                className="text-[24px] text-[#D9176C] transition hover:scale-110 cursor-pointer">
                                                <LuCirclePlus />
                                            </button>
                                        </div>

                                        <div className="book-buttons flex gap-4 mt-12">
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
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
