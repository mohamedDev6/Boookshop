export default function ContactInfo({ icon, text }) {
    return (
        <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-[#D9176C]">
                {icon}
            </div>

            <p className="text-[15px] leading-6 text-white/80">{text}</p>
        </div>
    );
}
