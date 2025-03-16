import { useParams } from "react-router-dom"
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeList from '../components/RecipeList'
import Pagination from "../components/Pagination";
const Favorite = () => {
    const userId = useParams();
    // console.log(userId)
    const [currentPage, setCurrentPage] = useState(1); // Lưu trạng thái trang hiện tại

    // Hàm xử lý thay đổi trang
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        console.log(newPage)
    };
    return (
        <div className="bg-white main-content mt-5">
            <div className="favorite-content">
                <div className="favorite-header d-flex justify-content-between border-bottom mb-4">
                    <div className="favorite-total d-flex align-items-center">
                        <h5 className="favorite-title mb-0">Số lượng công thức: </h5>
                        <span>20</span>
                    </div>
                    <div className="favorite-search w-50">
                        <SearchBar />
                    </div>
                </div>
                <div className="favorite-body mt-3">
                    <div className="favorite-list w-75 mx-auto">
                        <RecipeList check={true} limit={10}/>
                        <Pagination totalPage={5} currentPage={currentPage} onPageChange={handlePageChange} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favorite