import Banner from "../components/Banner"
import '../assets/styles/home.css'
import RecipeList from "../components/RecipeList"
import WithSidebarLayout from "../layout/WithSidebarLayout"
import '../assets/styles/mainlayout.css'

const HomePage = () => {
    return (
        <div className="bg-white main-content mt-lg-5">
            <Banner />
            <WithSidebarLayout>
                <div className="home-left-content">
                    <div className="title-container">
                        <h2 className="contetnt-title">Công thức mới</h2>
                    </div>
                    <div className="list-recipe">
                        <RecipeList />
                    </div>
                </div>
            </WithSidebarLayout>
        </div>
    )
}

export default HomePage