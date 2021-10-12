import { RecipeList } from '../model/Recipes';

export const getClientRecipes = (): RecipeList | [] => {
  if (window.localStorage.getItem('recipes')) {
    return JSON.parse(window.localStorage.getItem('recipes')) || [];
  }
  return [];
};

export const setClientRecipes = (key: string, values: string): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  window.localStorage?.setItem(key, values as any);
};
