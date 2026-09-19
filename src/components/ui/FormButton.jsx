export default function FormButton({ btnMsg }) {
    return (
        <>
            <button
                type="submit"
                className="py-3 px-4 w-full text-center bg-[#D9176C] text-white rounded-lg font-semibold text-[18px] leading-[100%] hover:bg-transparent hover:border hover:border-solid hover:border-[#D9176C] hover:text-[#D9176C] hover:font-bold duration-300 ease-out cursor-pointer">
                {btnMsg}
            </button>
        </>
    );
}
