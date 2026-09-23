import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import AddCartBtn from "./AddCartBtn";

export default function RecommendedCard({ bookImage, bookTitle, bookAuthor, bookRating, bookReviews, bookPrice }) {
    return (
        <div className="recommended-card cursor-pointer flex flex-col items-center md:flex-row gap-10 rounded-4xl p-4 lg:p-10 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="book-image shrink-0">
                <img src={bookImage} alt={bookTitle} className="h-66 w-44 rounded-lg object-cover" />
            </div>

            <div className="book-details flex flex-1 flex-col justify-between gap-6">
                <div>
                    <h3 className="text-[18px] font-bold">{bookTitle}</h3>

                    <p className="mt-1 text-sm text-[#22222280]">
                        Author: <span className="text-[#222222]">{bookAuthor}</span>
                    </p>

                    <p className="mt-2 text-sm text-[#22222280]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in
                        justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo
                        varius,
                    </p>
                </div>

                <div className="book-rating mt-6 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-1 text-[#EBC305]">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} className={index < 4 ? "" : "text-[#22222233] opacity-30"} />
                            ))}
                            <span className="text-[#22222280]">({bookReviews} Reviews)</span>
                        </div>

                        <p className="mt-2 text-sm text-[#222222]">
                            <span className="text-[#22222280]">Rate:</span> {bookRating}
                        </p>
                    </div>

                    <span className="text-[26px] font-bold text-[#222222]">{bookPrice}</span>
                </div>

                <div className="book-actions mt-6 flex gap-4">
                    <AddCartBtn />

                    <button className="bg-transparent px-4 py-3 rounded-lg cursor-pointer text-[#D9176C] border border-[#D9176C]">
                        <FiHeart size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
