import '../assets/styles/mainlayout.css';
import '../assets/styles/recipeDetail.css';
import WithSidebarLayout from '../layout/WithSidebarLayout.jsx';
import Review from '../components/Review.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchRecipeById } from '../features/recipeSlice';

const RecipeDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const recipe = useSelector(state => state.recipes.data.find(r => r.id === parseInt(id)));
  const status = useSelector(state => state.recipes.status);
  useEffect(() => {
    if (!recipe) {
      dispatch(fetchRecipeById(parseInt(id))); // Chỉ gọi API nếu chưa có trong store
    }
  }, [id, status, dispatch]);
  console.log(recipe)
  if (!recipe) return null;
  return (
    <div className="bg-white main-content mt-5">
      <nav className="ps-3" style={{ '--bs-breadcrumb-divider': '\'>\'' }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a className="text-decoration-none fw-medium" href="/">Trang chủ</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">{recipe.title}</li>
        </ol>
      </nav>

      <WithSidebarLayout>
        <div className="recipe-content">
          <div className="recipe-title">
            <h5 className="recipe-category-name">Công thức nấu ăn</h5>
            <div className="recipe-title__name text-center">{recipe.title}</div>
            <div className="recipe-title__info d-flex justify-content-center align-items-center">
              <p className="recipe-info__item">đăng bởi {recipe.user.fullName}</p>
              <p className="recipe-info__item">{recipe.createdAt.split('T')[0]} </p>
              <p className="recipe-info__item">1K lượt xem</p>
            </div>
          </div>
          <div className="recipe-content">
            <p className="recipe-content__overview">{recipe.description}</p>
            <div className="recipe-content__ingredient">
              <h4 className="recipe-content__title">1. Nguyên liệu</h4>
              <ul>
                {recipe.ingredients.map(item => (
                  <li key={item.id} className="ingredient__item">{`${item.quantity}${item.unit} ${item.name}`}</li>
                ))}
              </ul>
            </div>
            <div className="recipe-content__instruct">
              <h4 className="recipe-content__title">2. Cách làm </h4>
              {recipe.steps.slice(0, -1).map((step, index) => (
                <div key={index}>
                  <h6 className="recipe-content__sub-title">2.{step.stepNumber}. Bước {step.stepNumber}: {step.title}</h6>
                  <p className="recipe-instruct__content">
                    {step.description}
                  </p>
                  <img src={`${step.imageUrl}`} alt="" className="recipe-content__img" />
                </div>
              ))}
            </div>
            <div className="recipe-content__result mt-3">
              {recipe.steps.length > 0 && (
                <div>
                  <h4 className="recipe-content__title">3. Thành phẩm</h4>
                  <img src={`${recipe.steps[recipe.steps.length - 1].imageUrl}`} alt="" className="recipe-content__img" />
                  <p className="recipe-result__content">
                    {recipe.steps[recipe.steps.length - 1].description}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="recipe-review">
            <Review recipeId={recipe.id}/>
          </div>
        </div>
      </WithSidebarLayout>
    </div>
  );

};

export default RecipeDetails;