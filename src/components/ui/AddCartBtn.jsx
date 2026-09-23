import { FiShoppingCart } from "react-icons/fi";

export default function AddCartBtn() {
    return (
        <button className="w-full flex flex-1 items-center justify-center gap-2.5 rounded-xl bg-[#D9176C] px-4 py-3 text-[20px] font-semibold cursor-pointer text-white transition duration-300 hover:border hover:border-[#D9176C] hover:bg-transparent hover:text-[#D9176C]">
            Add To Cart
            <FiShoppingCart size={24} />
        </button>
    );
}
