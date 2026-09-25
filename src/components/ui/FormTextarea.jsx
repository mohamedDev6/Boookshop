import { Field } from "formik";

export default function FormTextarea({ placeholder, name, id, placeholderColor, className }) {
    return (
        <Field
            as="textarea"
            placeholder={placeholder}
            name={name}
            id={id}
            className={`placeholder:text-${placeholderColor} ${className}`}
        />
    );
}
