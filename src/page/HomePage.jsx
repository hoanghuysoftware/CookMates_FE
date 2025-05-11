import Banner from '../components/Banner';
import '../assets/styles/home.css';
import RecipeList from '../components/RecipeList';
import WithSidebarLayout from '../layout/WithSidebarLayout';
import '../assets/styles/mainlayout.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { fetchRecipe, fetchRecipeForUser } from '../features/recipeSlice';
import {fetchDataRecipeForUser} from '../features/recipeSliceUser';
import { useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const { data: dataRecipe, status } = useSelector(state => state.recipes);
  const { data: dataCategory, status: statusCategory } = useSelector(state => state.categories);
  const { data: dataRecipeTest} = useSelector(state => state.recipeTest); // phan trang tai BE

 // phan trang tam, sau nay sua lai lay phan trang tu BE
  const limit = 2
  const totalPage = Math.ceil(dataRecipe.length / limit);
  const start = (currentPage-1) * limit;
  const end = start + limit;
  const paginatedData = dataRecipe.slice(start, end);



  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRecipe());
      // dispatch(fetchDataRecipeForUser(currentPage-1))
    }
  }, [status, dispatch, currentPage]);


  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  const handleLinkCategory = (id) => {
    navigate(`/categories/${id}/recipes`)
  }

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage)
  }
  return (
    <div className="bg-white main-content mt-lg-5">
      <Banner />

      <div className="category_carousel container mt-4 position-relative">
        <button
          className="btn btn-light position-absolute top-50 start-0 translate-middle-y z-1"
          onClick={() => scroll('left')}
          style={{ zIndex: 1 }}
        >
          &#8592;
        </button>

        <div
          className="d-flex overflow-auto pb-3"
          style={{ scrollBehavior: 'smooth' }}
          ref={scrollRef}
        >
          {dataCategory.map((item, index) => (
            <div key={index} className="text-center me-3 flex-shrink-0" onClick={() => handleLinkCategory(item.id)}>
              <img
                src={item.imageUrl} // thay đổi nếu có ảnh riêng cho từng loại
                alt={item.name}
                className="rounded-circle border"
                style={{ width: "96px", height: "96px", objectFit: "cover" }}
              />
              <p className="mt-2 fw-medium">{item.name}</p>
            </div>
          ))}
          {dataCategory.map((item, index) => (
            <div key={index} className="text-center me-3 flex-shrink-0">
              <img
                src={item.imageUrl} // thay đổi nếu có ảnh riêng cho từng loại
                alt={item.name}
                className="rounded-circle border"
                style={{ width: "96px", height: "96px", objectFit: "cover" }}
              />
              <p className="mt-2 fw-medium">{item.name}</p>
            </div>
          ))}
        </div>

        <button
          className="btn btn-light position-absolute top-50 end-0 translate-middle-y z-1"
          onClick={() => scroll('right')}
          style={{ zIndex: 1 }}
        >
          &#8594;
        </button>
      </div>

      <WithSidebarLayout>
        <div className="home-left-content">
          <div className="title-container">
            <h2 className="contetnt-title">Công thức mới</h2>
          </div>
          <div className="list-recipe">
            {/*<RecipeList data={dataRecipeTest[currentPage-1]} /> phan trang o BE*/}
            {/*<RecipeList data={dataRecipe} /> chua phan trang */}
            <RecipeList data={paginatedData} /> {/*Phan trang tam tai FE*/}
          </div>
          <div className="pagination-home mx-auto py-2">
            {/*<Pagination totalPage={5} currentPage={currentPage} onPageChange={handleChangePage}/>*/}
            <Pagination totalPage={totalPage} currentPage={currentPage} onPageChange={handleChangePage}/>
          </div>
        </div>
      </WithSidebarLayout>
    </div>
  );
};

export default HomePage;
