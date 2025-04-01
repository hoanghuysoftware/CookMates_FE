import '../assets/styles/recipeCardTop.css'
const RecipeCardTop = ({recipe=null, rank}) => {
    const imgUrl = recipe.thumbnail;
    if(!recipe) return null;
    return (
        <div className="recipe-top__container row gx-2">
            <span className='shadow-lg recipe-top__rank'>{rank}</span>
            <div className="recipe-top__item col col-5">
                <div className="recipe-top__img" style={{"--bg-top-img": `url(${imgUrl})`}}></div>
            </div>
            <div className="recipe-top__item col col-7">
                <div className="recipe-top__title">{recipe.title}</div>
                <div className="recipe-top__date-publish">{recipe.createdAt.split("T")[0]}</div>
            </div>
        </div>
    )
}

export default RecipeCardTop