import RecipeCardTop from './RecipeCardTop';

const RecipeTopList = ({ recipes = [] }) => {
  return (
    <div>
      {recipes.map((recipe, index) => {
          if (index <= 5) {
            return <RecipeCardTop key={index} recipe={recipe} rank={index+1} />;
          }
        },
      )}
    </div>
  );
};

export default RecipeTopList;