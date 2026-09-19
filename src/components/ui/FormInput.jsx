import { Field } from "formik";

export default function FormInput({ placeholder, type, name, id }) {
    return (
        <Field
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            className="w-full placeholder:text-[#22222280] p-4 rounded-lg border border-solid border-[#22222233] outline-0 font-normal text-[16px] leading-5.5"
        />
    );
}
