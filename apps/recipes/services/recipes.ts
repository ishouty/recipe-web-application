//import recipesData from '../mock/Recipes.json';
import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../config/settings';
import { RecipeList, Recipe } from '../model/Recipes';
import { ErrorResponse } from '../model/Error';

export const getRecipes = async (): Promise<RecipeList | ErrorResponse> => {
  const response: AxiosResponse<RecipeList> = await axios.get<RecipeList>(
    `${BASE_URL}/mock/recipes.json`
  );

  if (response?.data) {
    return JSON.parse(JSON.stringify(response.data));
  }

  return {
    code: 'not-found',
  };
};

export const getRecipe = async (
  id: number
): Promise<Recipe | ErrorResponse> => {
  const response: AxiosResponse<RecipeList> = await axios.get<RecipeList>(
    `${BASE_URL}/mock/recipes.json`
  );

  if (response?.data) {
    const recipesResponse = JSON.parse(JSON.stringify(response?.data));

    const filteredRecipe: Recipe[] = recipesResponse.filter((recipe) => {
      return recipe.id === id;
    });

    if (filteredRecipe && filteredRecipe.length === 1) {
      return filteredRecipe[0];
    }
  }

  return {
    code: 'not-found',
  };
};
