import { useAuthStore } from "../stores/useAuthStore";
import ProfileDropdownItem from "./ui/ProfileDropdownItem";
import { FiUser, FiClock, FiLogOut } from "react-icons/fi";

export default function ProfileDropdown() {
    const { logout } = useAuthStore();

    return (
        <div className="absolute right-0 top-full z-50 mt-4 w-70 rounded-lg bg-white px-6 py-5 shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
            <div className="flex flex-col gap-7">
                <ProfileDropdownItem icon={<FiUser />} label="Profile" url={"/profile"} />

                <ProfileDropdownItem icon={<FiClock />} label="Order History" url={"/orders"} />

                <ProfileDropdownItem icon={<FiLogOut />} label="Log Out" onClick={logout} />
            </div>
        </div>
    );
}
