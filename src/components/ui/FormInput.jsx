import { Field } from "formik";

export default function FormInput({ placeholder, type, name, id, placeholderColor }) {
    return (
        <Field
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            className={`w-full placeholder:text-${placeholderColor} p-4 rounded-lg border border-solid border-[#22222233] outline-0 font-normal text-[16px] leading-5.5`}
        />
    );
}
