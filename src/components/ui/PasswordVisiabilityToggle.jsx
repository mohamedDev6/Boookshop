import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

export default function PasswordVisiabilityToggle({ isPasswordVisible, setPasswordVisible }) {
    return (
        <button
            type="button"
            className={`absolute right-4 top-11 text-[20px] cursor-pointer ${isPasswordVisible ? "text-[#D9176C]" : "text-[#22222280]"}`}
            onClick={() => setPasswordVisible(!isPasswordVisible)}>
            {isPasswordVisible ? <IoEyeSharp /> : <FaRegEyeSlash />}
        </button>
    );
}
