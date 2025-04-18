import RecipeCard from "./RecipeCard"

const RecipeList = ({column = 1, check=false}) => {
    const size = column!==1 ? 'vertical' : 'horizontal';
    return(
        <div className={size === "vertical" ? "row gx-5" : ""}>

            <RecipeCard checkBox={check} layout={size}/>
            <RecipeCard checkBox={check} layout={size}/>
            <RecipeCard checkBox={check} layout={size}/>
            <RecipeCard checkBox={check} layout={size}/>
            <RecipeCard checkBox={check} layout={size}/>
            <RecipeCard checkBox={check} layout={size}/>
        </div>
    )
}

export default RecipeList