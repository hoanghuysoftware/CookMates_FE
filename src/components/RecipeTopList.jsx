import RecipeCardTop  from "./RecipeCardTop";

const RecipeTopList = () => {
    return(
        <div>
            <RecipeCardTop rank={1}/>
            <RecipeCardTop rank={2}/>
            <RecipeCardTop rank={3}/>
            <RecipeCardTop rank={4}/>
            <RecipeCardTop rank={5}/>
        </div>
    )
}

export default RecipeTopList;