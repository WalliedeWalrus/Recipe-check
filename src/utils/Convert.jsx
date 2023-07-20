import { recipes } from "./data";
//import { recipes } from "./data";

const recipeArrayResults = [];

export const recipeDataConvert = () => {
  for (let c in recipes.hits) recipeArrayResults.push(recipes.hits[c].recipe);

  // recipeArrayResults.forEach((item) => {
  //   recipeArrayResults2.push(item.toLowerCase());
  // });

  // console.log(recipeArrayResults);
  // console.log(recipeArrayResults2);
  return <></>;
};
