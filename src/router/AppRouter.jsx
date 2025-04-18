import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import HomePage from "../page/HomePage";
import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
import AdminLayout from "../layout/AdminLayout";
import CategoryAdmin from "../page/CategoryAdmin";
import Category from "../page/Category";
import RecipeDetails from "../page/RecipeDetails";
import Favorite from "../page/Favorite";
import HomeAdmin from "../page/HomeAdmin";
import IngredientAdmin from "../page/IngredientAdmin";
import RecipeAdmin from "../page/RecipeAdmin";
import UserAdmin from "../page/UserAdmin";
import UserAddRecipe from "../page/UserAddRecipe";
import UserAllRecipe from "../page/UserAllRecipe";
import UserAccount from "../page/UserAccount";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {/* AdminLayout */}
                <Route path="/admin/user" element={<AdminLayout> <UserAdmin /> </AdminLayout>} />
                <Route path="/admin/recipe" element={<AdminLayout> <RecipeAdmin /> </AdminLayout>} />
                <Route path="/admin/ingredient" element={<AdminLayout> <IngredientAdmin /> </AdminLayout>} />
                <Route path="/admin/categories" element={<AdminLayout> <CategoryAdmin /> </AdminLayout>} />
                <Route path="/admin/home" element={<AdminLayout> <HomeAdmin /> </AdminLayout>} />

                {/* MainLayout */}
                <Route path="/" element={<MainLayout> <HomePage /> </MainLayout>} />
                <Route path="/:categoryName" element={<MainLayout> <Category /> </MainLayout>} />
                <Route path="/user/:id" element={<MainLayout> <Favorite /> </MainLayout>} />
                <Route path="/recipe/:id" element={<MainLayout> <RecipeDetails /> </MainLayout>} />

                {/* User tự quản lý thông tin cá nhân */}
                <Route path="/userID/account" element={<MainLayout> <UserAccount /> </MainLayout>} />
                <Route path="/userID/recipe" element={<MainLayout> <UserAllRecipe /> </MainLayout>} />
                <Route path="/userID/recipe/add" element={<MainLayout> <UserAddRecipe /> </MainLayout>} />


                {/* Login and Register */}
                <Route path="/login" element={<AuthLayout> <LoginPage /> </AuthLayout>} />
            </Routes>
        </Router>
    )
}

export default AppRouter;
