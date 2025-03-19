import { useState } from "react";
import ListRecipeAdmin from "../components/ListRecipeAdmin";
import PendingRecipesAdmin from "../components/PendingRecipesAdmin";
import AddRecipe from "../components/AddRecipe";
import '../assets/styles/recipeAdmin.css'

const RecipeAdmin = () => {
    const [activeTab, setActiveTab] = useState("list");

    return (
        <div className="bg-gary-admin" >
            <nav className="nav nav-tabs">
                <button
                    className={`nav-link ${activeTab === "list" ? "active" : ""}`}
                    onClick={() => setActiveTab("list")}
                >
                    Danh sách công thức
                </button>
                <button
                    className={`nav-link ${activeTab === "pending" ? "active" : ""}`}
                    onClick={() => setActiveTab("pending")}
                >
                    Công thức chờ duyệt
                </button>
                <button
                    className={`nav-link ${activeTab === "new" ? "active" : ""}`}
                    onClick={() => setActiveTab("new")}
                >
                    Công thức mới
                </button>
            </nav>

            <div className="mt-2">
                {activeTab === "list" && <ListRecipeAdmin />}
                {activeTab === "pending" && <PendingRecipesAdmin/>}
                {activeTab === "new" && <AddRecipe/>}
            </div>
        </div>
    );
}

export default RecipeAdmin;
