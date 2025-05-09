import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RecipeList from '../components/RecipeList';
import Pagination from '../components/Pagination';
import recipeService from '../service/recipeService';
import searchPage from '../assets/styles/searchPage.css';
import WithSidebarLayout from '../layout/WithSidebarLayout';

const SearchPage = () => {
  const { value } = useParams();
  const [currentPage, setCurrentPage] = useState(1); // Lưu trạng thái trang hiện tại
  const [totalPage, setTotalPage] = useState(0);
  const [totalRecipe, setTotalRecipe] = useState(0);
  const [recipes, setRecipes] = useState([]);


  const fetchData = async (title, currentPage) => {
    try {
      const response = await recipeService.searchRecipe(title, currentPage - 1);
      setTotalPage(response.totalPages);
      setTotalRecipe(response.totalElements);
      setRecipes(response.data);
      console.log(response)
    } catch (error) {
      console.log('Error at search page in fetchData method !');
      throw error;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData(value, currentPage);
  }, [value, currentPage]);


  // Hàm xử lý thay đổi trang
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    console.log(newPage);
  };
  return (
    <div className="bg-white main-content mt-lg-5">
      <WithSidebarLayout>
        <div className="favorite-content">
          <div className="search-box favorite-header d-flex justify-content-between border-bottom mb-4">
            <div className="favorite-total d-flex align-items-center">
              <h5 className="search-key-title mb-0">Từ khóa: </h5>
              <p className="search-key mb-0">{value}</p>
            </div>
            <div className="search-page favorite-search w-50">
              <h5 className="favorite-title mb-0">Số lượng công thức: </h5>
              <p>{totalRecipe}</p>
            </div>
          </div>
          <div className="favorite-body mt-3">
            <div className="favorite-list mx-auto">
              <RecipeList data={recipes} check={true} limit={10} />
              <Pagination totalPage={totalPage} currentPage={currentPage} onPageChange={handlePageChange} />
            </div>
          </div>
        </div>
      </WithSidebarLayout>
    </div>

  );
};

export default SearchPage;