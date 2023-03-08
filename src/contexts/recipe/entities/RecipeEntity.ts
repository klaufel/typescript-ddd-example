export type RecipeListEntity = RecipeInformationEntity & {
  id: string;
  slug: string;
  url: string;
  title: string;
  image: string;
  color: string;
};

export type RecipeDetailEntity = RecipeInformationEntity & {
  id: string;
  slug: string;
  url: string;
  title: string;
  image: string;
  color: string;
  description: string;
  content: string;
  ingredients: string[];
};

export type RecipeUpsertEntity = RecipeInformationEntity & {
  id: string;
  slug?: string;
  url?: string;
  title: string;
  image: string;
  color: string;
  description: string;
  content: string;
  ingredients: string[];
};

export type RecipeInformationEntity = {
  preparationTime: number;
  cookingTime: number;
  totalTime: number;
  category: string;
  portions: number;
  calories: number;
};

export type RecipeApiResponseEntity = RecipeInformationEntity & {
  id: string;
  slug: string;
  title: string;
  image: string;
  color: string;
  description: string;
  content: string;
  ingredients: string[];
};
