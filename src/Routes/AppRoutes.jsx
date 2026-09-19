import { Navigate, Route, Routes } from "react-router-dom";

// Layouts Components
import PublicLayout from "../layouts/PublicLayout";

// Stores
import { useAuthStore } from "../stores/useAuthStore";

// App Pages
import Home from "../pages/app/Home";
import Books from "../pages/app/Books";
import Book from "../pages/app/Book";
import AboutUs from "../pages/app/AboutUs";
import NotFound from "../pages/NotFound";
import FavoriteBooks from "../pages/app/FavoriteBooks";
import Wishlist from "../pages/app/Wishlist";

// Authentication Pages
import Login from "../pages/authentication/Login";
import SignUp from "../pages/authentication/SignUp";
import ForgetPassword from "../pages/authentication/ForgetPassword";
import AddCode from "../pages/authentication/AddCode";
import ResetPassword from "../pages/authentication/ResetPassword";

export default function AppRoutes() {
    const { isAuthenticated } = useAuthStore();

    return (
        <>
            <Routes>
                <Route element={<PublicLayout />}>
                    {/* Auth */}
                    <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
                    <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <SignUp />} />
                    <Route
                        path="/forget-password"
                        element={isAuthenticated ? <Navigate to="/" /> : <ForgetPassword />}
                    />
                    <Route path="/add-code" element={isAuthenticated ? <Navigate to="/" /> : <AddCode />} />
                    <Route path="/reset-password" element={isAuthenticated ? <Navigate to="/" /> : <ResetPassword />} />

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
