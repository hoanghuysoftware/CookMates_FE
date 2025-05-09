import { useNavigate, useParams } from 'react-router-dom';
import RecipeList from '../components/RecipeList';
import WithSidebarLayout from '../layout/WithSidebarLayout';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

const RecipesByCategory = () => {

  const { categoryId } = useParams();
  const { data: dataRecipe, status } = useSelector(state => state.recipes);
  const { data: dataCategory, status: statusCategory } = useSelector(state => state.categories);
  const [result, setResult] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const scrollRef = useRef(null);
  const navigate = useNavigate();

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

  const getRecipeByCategory = (categoryId) => {
    const filtered = dataRecipe.filter(item =>
      item.categories.some(cat => cat.id === categoryId)
    );
    const name = dataCategory.filter(item => item.id === categoryId)[0].name;
    setResult(filtered);
    setCategoryName(name);
  };


  useEffect(() => {
    window.scrollTo(0, 0);
    getRecipeByCategory(parseInt(categoryId));
  }, [categoryId]);

  console.log(result.length)
  return (
    <div className="bg-white main-content mt-lg-5">
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
            <h2 className="contetnt-title">{categoryName}</h2>
          </div>
          <div className="list-recipe">
            {result.length <= 0 ? <p>Danh mục trống</p>
              :
              <RecipeList data={result} />
            }
          </div>
        </div>
      </WithSidebarLayout>
    </div>
  );
};

export default RecipesByCategory;