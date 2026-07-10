import { Navigate, Route, Routes } from "react-router-dom";

// Layouts Components
import PublicLayout from "../layouts/PublicLayout";

// Context
import { useAuth } from "../context/useAuth";

// App Pages
import Home from "../pages/app/Home";
import Books from "../pages/app/Books";
import Book from "../pages/app/Book";
import AboutUs from "../pages/app/AboutUs";
import NotFound from "../pages/NotFound";
import FavoriteBooks from "../pages/app/FavoriteBooks";
import Wishlist from "../pages/app/Wishlist";

// Authentication Pages
import LogIn from "../pages/authentication/LogIn";
import SignUp from "../pages/authentication/SignUp";
import ForgetPassword from "../pages/authentication/ForgetPassword";
import AddCode from "../pages/authentication/AddCode";
import ResetPassword from "../pages/authentication/ResetPassword";

export default function AppRoutes() {
    const { token } = useAuth();

    return (
        <>
            <Routes>
                <Route element={<PublicLayout />}>
                    {/* Auth */}
                    <Route path="/login" element={token ? <Navigate to="/" /> : <LogIn />} />
                    <Route path="/signup" element={token ? <Navigate to="/" /> : <SignUp />} />
                    <Route path="/forget-password" element={token ? <Navigate to="/" /> : <ForgetPassword />} />
                    <Route path="/add-code" element={token ? <Navigate to="/" /> : <AddCode />} />
                    <Route path="/reset-password" element={token ? <Navigate to="/" /> : <ResetPassword />} />

                    {/* App */}
                    <Route path="/" element={<Home />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/books/show/:bookId" element={<Book />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/favorite-books" element={<FavoriteBooks />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
