import { Field } from "formik";

export default function CheckboxBtn({ name, id }) {
    return (
        <Field
            type="checkbox"
            name={name}
            id={id}
            className="checkbox text-[#D9176C] border border-solid border-[#22222233] rounded-lg"
        />
    );
}
