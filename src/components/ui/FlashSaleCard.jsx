import { FaStar } from "react-icons/fa";
import AddCartBtn from "./AddCartBtn";

export default function FlashSaleCard({
    bookImage,
    bookTitle,
    bookAuthor,
    bookRating,
    bookReviews,
    bookOldPrice,
    bookNewPrice,
    bookCount,
}) {
    return (
        <div className="book-card w-full flex flex-col md:flex-row gap-6 items-center justify-center h-full overflow-hidden bg-[#3B2F4A] text-white cursor-pointer rounded-lg p-4 lg:p-4 transition duration-300 hover:-translate-y-2">
            <div className="book-cover rounded-lg shrink-0">
                <img src={bookImage} alt={bookTitle} className="h-66 w-44 object-cover" />
            </div>

            <div className="book-details flex flex-1 flex-col gap-6 justify-between h-full">
                <div className="flex flex-1 flex-col gap-6">
                    <div>
                        <h2 className="text-[16px] font-bold text-white">{bookTitle}</h2>
                        <p className="mt-2 text-[14px] text-[#FFFFFF80]">
                            Author:
                            <span className="font-medium text-white"> {bookAuthor}</span>
                        </p>
                        <div className="flex items-center gap-1 mt-2 text-[#EBC305]">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} className={index < 4 ? "" : "text-[#FFFFFF80] opacity-30"} />
                            ))}
                            <span className="text-[#FFFFFF80] text-[14px]">({bookReviews} Reviews)</span>
                        </div>
                        <p className="text-[14px] text-[#FFFFFF80]">
                            Rate:
                            <span className="ml-2 font-semibold text-white">{bookRating}</span>
                        </p>
                    </div>

                    <div>
                        <div className="flex items-center gap-3">
                            <span className="text-[14px] text-[#FFFFFF80] line-through">{bookOldPrice}</span>

                            <span className="text-[22px] font-bold text-white">{bookNewPrice}</span>
                        </div>
                        <div className="mt-6">
                            <div className="h-2 w-full rounded-full bg-[#FFFFFF1A]">
                                <div className="h-full w-[72%] rounded-full bg-[#EAA451]"></div>
                            </div>
                            <p className="mt-3 text-[14px] text-[#FFFFFF80]">{bookCount} books left</p>
                        </div>
                    </div>
                </div>

                <div className="cart-button flex items-center w-full self-end">
                    <AddCartBtn />
                </div>
            </div>
        </div>
    );
}
