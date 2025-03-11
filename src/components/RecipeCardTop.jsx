import '../assets/styles/recipeCardTop.css'
const RecipeCardTop = ({rank}) => {
    const imgUrl = '/item.jpg';
    
    return (
        <div className="recipe-top__container row gx-2">
            <span className='shadow-lg recipe-top__rank'>{rank}</span>
            <div className="recipe-top__item col col-5">
                <div className="recipe-top__img" style={{"--bg-top-img": `url(${imgUrl})`}}></div>
            </div>
            <div className="recipe-top__item col col-7">
                <div className="recipe-top__title">Hướng dẫn làm mực ngào có vị ớt cay nồng, đậm đà và hấp dẫn cho mọi thực khách</div>
                <div className="recipe-top__date-publish">18/05/2023</div>
            </div>
        </div>
    )
}

export default RecipeCardTop