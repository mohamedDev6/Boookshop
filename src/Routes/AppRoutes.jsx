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
import Profile from "../pages/app/Profile";

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
                    <Route path="/about-us" element={!isAuthenticated ? <Navigate to="/" /> : <AboutUs />} />
                    <Route path="/profile" element={!isAuthenticated ? <Navigate to="/" /> : <Profile />} />
                    <Route path="/books" element={!isAuthenticated ? <Navigate to="/" /> : <Books />} />
                    <Route path="/books/show/:bookId" element={!isAuthenticated ? <Navigate to="/" /> : <Book />} />
                    <Route
                        path="/favorite-books"
                        element={!isAuthenticated ? <Navigate to="/" /> : <FavoriteBooks />}
                    />
                    <Route path="/wishlist" element={!isAuthenticated ? <Navigate to="/" /> : <Wishlist />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
