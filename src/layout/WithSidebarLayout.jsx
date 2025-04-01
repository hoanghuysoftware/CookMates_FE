import MainLayout from "./MainLayout"
import RecipeTopList from "../components/RecipeTopList";
import { useDispatch, useSelector } from 'react-redux';

const WithSidebarLayout = ({ children }) => {
    const dispatch = useDispatch()
    const {data: dataRecipe, status} = useSelector(state => state.recipes)
    return (
        <div>
            <div className="">
                <div className="mt-3 row gx-5">
                    <div className="col col-8 ">{children}</div>
                    <div className="col col-4 ">
                        <div className="right-content">
                            <div className="title-container">
                                <h2 className="contetnt-title">Công thức HOT</h2>
                            </div>
                            <div className="list-recipe-top">
                                <RecipeTopList recipes={dataRecipe}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default WithSidebarLayout;