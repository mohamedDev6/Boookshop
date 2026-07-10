import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
    return (
        <>
            <div className="font-mainFamily bg-[#F5F5F5] text-[#222222] overflow-hidden">
                <BrowserRouter>
                    <AuthProvider>
                        <AppRoutes />
                    </AuthProvider>
                </BrowserRouter>
            </div>
        </>
    );
}
