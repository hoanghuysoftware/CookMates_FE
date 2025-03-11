import '../assets/styles/recipeCard.css'
import Button from './Button.jsx'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ layout = "horizontal", recipe, checkBox = false }) => {
    const navigate = useNavigate();
    const imgUrl = '/item.jpg';

    const handleClickBTN = (e) => {
        navigate(`/recipe/${1}`)
    }

    const handleRemoveRecipe = e => {
        console.log(e.target) // truyền id recipe  để xóa
    }

    return (
        <div className={`recipe-card-container ${layout === "vertical" ? "col-6 text-center border border-0" : "row gx-2"}`}>
            <div className={`col ${layout === 'vertical' ? "col-12" : checkBox ? "col-5" : "col-6"}`}>
                <div className="recipe-card__img" style={{ "--bg-img": `url(${imgUrl})` }}></div>
            </div>
            <div className={`col ${layout === 'vertical' ? "col-12" : checkBox ? "col-6" : "col-6"}`}>
                <div className="recipe-card-content">
                    <Link className='text-decoration-none' to={`/recipe/${1}`}>
                        <h5 className="recipe-card__title text-start">Cách làm ruốc khô rim nước mắm ăn kèm xôi cực ngon</h5>
                    </Link>
                    <div className="recipe-card__auth d-flex">
                        <div className="auth-item text-body-tertiary">đăng bởi Thu Hà</div>
                        <div className="auth-item text-body-tertiary">15/07/2024</div>
                        <div className="auth-item text-body-tertiary">1K lượt xem</div>
                    </div>
                    <div className="recipe-card__info">
                        <p>Ruốc khô rim nước mắm là một món ăn quen thuộc với nhiều
                            người bởi cách làm đơn giản và…</p>
                    </div>
                    <div className={`recipe-card__btn text-start ${layout === "vertical" ? "mt-2" : ''}`}>
                        <Button onClick={handleClickBTN} type={'button'} text={"Xem chi tiết"} size='w-30' />
                        {checkBox && (
                            <Button onClick={handleRemoveRecipe} className='btn-warning ms-2' type={'button'} text={"Xóa"} size='w-30' />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard
