import { useParams } from 'react-router-dom';
import '../assets/styles/favorite.css'
import { useEffect, useState } from 'react';
import RecipeList from '../components/RecipeList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoritesByUser } from '../features/favoriteSlice';
import { fetchRecipeByListId } from '../features/favoriteRecipesSlice';

const Favorite = () => {
  const dispatch = useDispatch();
  const userId = useParams();
  const [currentPage, setCurrentPage] = useState(1); // Lưu trạng thái trang hiện tại
  const { data: dataFavorites, status: statusFavorites } = useSelector(state => state.favorites);
  const { data: dataFavoriteRecipes, status: statusFavoriteRecipes } = useSelector(state => state.favoriteRecipes);


  useEffect(() => {
    if (statusFavorites === 'idle') {
      dispatch(fetchFavoritesByUser(parseInt(userId.id))); // Fetch theo userId
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (statusFavorites === 'success') {
      const listIds = dataFavorites.map(item => item.recipeId);
      dispatch(fetchRecipeByListId(listIds));
    }
  }, [dispatch, statusFavorites, dataFavorites]);


  // Hàm xử lý thay đổi trang
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    console.log(newPage);
  };

  console.log(dataFavorites);

  return (
    <div className="bg-white main-content mt-5">
      {dataFavorites.length === 0 ?
        <div className="favorite-content favorite-null">
          <p>Danh sách rỗng</p>
        </div>
        :
        <div className="favorite-content">
          <div className="favorite-header d-flex justify-content-between border-bottom mb-4">
            <div className="favorite-total d-flex align-items-center">
              <h5 className="favorite-title mb-0">Số lượng công thức: </h5>
              <p className="mb-0 ms-1 fs-5 fw-bold" style={{ color: 'red' }}>{dataFavorites.length}</p>
            </div>
            <div className="favorite-search w-50">
              {/*<SearchBar />*/}
            </div>
          </div>
          <div className="favorite-body mt-3">
            <div className="favorite-list w-75 mx-auto">
              <RecipeList data={dataFavoriteRecipes} check={true} limit={10} />
              {/*<Pagination totalPage={5} currentPage={currentPage} onPageChange={handlePageChange} />*/}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Favorite;