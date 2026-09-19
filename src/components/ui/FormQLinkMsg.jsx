import { Link } from "react-router-dom";

export default function FormQLinkMsg({ Q, url, Msg }) {
    return (
        <h4 className="font-normal text-[16px] leading-5.5">
            {Q}{" "}
            <Link to={url} className="text-[#D9176C] font-semibold cursor-pointer">
                {Msg}
            </Link>
        </h4>
    );
}
