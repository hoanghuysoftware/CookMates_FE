import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import HomePage from "../page/HomePage";
import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
import Category from "../page/Category";
import RecipeDetails from "../page/RecipeDetails";
import Favorite from "../page/Favorite";
const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {/* MainLayout */}
                <Route path="/" element={<MainLayout> <HomePage /> </MainLayout>} />
                <Route path="/:categoryName" element={<MainLayout> <Category /> </MainLayout>} />
                <Route path="/user/:id" element={<MainLayout> <Favorite /> </MainLayout>} />
                <Route path="/recipe/:id" element={<MainLayout> <RecipeDetails /> </MainLayout>} />

                {/* Login and Register */}
                <Route path="/login" element={<AuthLayout> <LoginPage /> </AuthLayout>} />
            </Routes>
        </Router>
    )
}

export default AppRouter;
