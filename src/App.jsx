import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import { Toaster } from "react-hot-toast";

export default function App() {
    return (
        <>
            <div className="font-mainFamily bg-[#F5F5F5] text-[#222222] overflow-hidden">
                <BrowserRouter>
                    <Toaster position="top-center" reverseOrder={false} />
                    <AppRoutes />
                </BrowserRouter>
            </div>
        </>
    );
}
