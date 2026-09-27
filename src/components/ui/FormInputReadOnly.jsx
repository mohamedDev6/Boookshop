export default function FormInput({ placeholder, type, name, id, placeholderColor, value }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            id={id}
            readOnly
            className={`w-full placeholder:text-${placeholderColor} p-4 rounded-lg border border-solid border-[#22222233] outline-0 font-normal text-[16px] leading-5.5`}
        />
    );
}
