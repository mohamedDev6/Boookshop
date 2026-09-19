export default function FormLabelInput({ htmlLabelFor, labelFor }) {
    return (
        <label htmlFor={htmlLabelFor} className="text-start w-full font-semibold text-[18px] leading-[100%]">
            {labelFor}
        </label>
    );
}
