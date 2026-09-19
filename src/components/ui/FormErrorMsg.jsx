import { ErrorMessage } from "formik";

export default function FormErrorMsg({ name }) {
    return (
        // <ErrorMessage name={name}>
        //     {(message) => <div className="text-red-500 text-[14px] text-start font-normal w-full">{message}</div>}
        // </ErrorMessage>

        <ErrorMessage name={name} component="div" className="text-red-500 text-[14px] text-start font-normal w-full" />
    );
}
