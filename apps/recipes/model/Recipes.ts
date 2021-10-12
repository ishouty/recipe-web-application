export type Page = { type: 'RecipeList' | 'Recipe' };

export type Recipe = {
  id: number;
  title: string;
  duration: number;
  instructions: string;
  image_768px_768px: string;
  image_320px_320px: string;
  image_1000px_400px: string;
  friendly_url?: string;
};

export type RecipeList = Recipe[];
