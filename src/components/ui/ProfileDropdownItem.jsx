import { Link } from "react-router-dom";

export default function ProfileDropdownItem({ icon, label, url = "#" }) {
    return (
        <Link to={url}>
            <button
                type="button"
                className="flex items-center gap-4 text-left text-[16px] font-medium text-[#222222] transition-colors hover:text-[#D9176C] cursor-pointer">
                <span className="flex w-5 items-center justify-center text-[21px]">{icon}</span>

                <span>{label}</span>
            </button>
        </Link>
    );
}
