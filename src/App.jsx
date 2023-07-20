import { useState } from "react";
import { recipes } from "./utils/data";
import { RecipeList } from "./pages/RecipeListPage";
import { SearchRecipe } from "./pages/SearchRecipe";
import { RecipeDetailPage } from "./pages/RecipeDetailsPage";
import { Heading } from "@chakra-ui/react";

export function App() {
  const [recipeList, setRecipeList] = useState();
  const [userSelectRecipe, setUserSelectRecipe] = useState();
  const recipeArrayResults = [];

  const recipeDataConvert = () => {
    for (let c in recipes.hits) recipeArrayResults.push(recipes.hits[c].recipe);
  };
  recipeDataConvert();

  const userSelect = (label) => {
    const filterRecipe = recipeArrayResults.filter(
      (recipe) => recipe.label === label
    );
    setUserSelectRecipe(filterRecipe);
  };

  const resetUserSelect = () => {
    setUserSelectRecipe();
  };

  const userSearchExtra = (searchTermExtra) => {
    const arrayFirstLvl = recipeArrayResults.filter((recipe) => {
      for (let key in recipe) {
        if (
          typeof recipe[key] === "string" ||
          typeof recipe[key] === "number"
        ) {
          if (
            recipe[key]
              .toString()
              .toLowerCase()
              .includes(searchTermExtra.toLowerCase())
          ) {
            // console.log True ;
            return true;
          }
        } else if (Array.isArray(recipe[key])) {
          for (let item of recipe[key]) {
            if (
              (typeof item === "string" || typeof item === "number") &&
              item
                .toString()
                .toLowerCase()
                .includes(searchTermExtra.toLowerCase())
            ) {
              // console.log True ;
              return true;
            }
          }
        }
      }
      return false;
    });

    setRecipeList(arrayFirstLvl);
  };

  return (
    <>
      <Heading textAlign={"center"} color={"Darkblue"}>
        Safe Recipe Checker
      </Heading>
      <SearchRecipe userSearch={userSearchExtra} />

      {userSelectRecipe ? (
        <RecipeDetailPage recipes={userSelectRecipe} reset={resetUserSelect} />
      ) : recipeList ? (
        <RecipeList recipes={recipeList} userSelect={userSelect} />
      ) : (
        <RecipeList recipes={recipeArrayResults} userSelect={userSelect} />
      )}
    </>
  );
}
