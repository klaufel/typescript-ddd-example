import { type Config } from "../../../config";
import { type AxiosInstance } from "axios";

import {
  type RecipeApiResponseEntity,
  type RecipeDetailEntity,
  type RecipeListEntity,
  type RecipeUpsertEntity,
} from "../entities/RecipeEntity";

type GetRecipeDetail = { id: string };
type GetRecipeList = { query?: string; sort?: string };
type CreateRecipe = { recipe: Omit<RecipeUpsertEntity, "id"> };
type UpdateRecipe = { recipe: RecipeUpsertEntity };
type DeleteRecipe = { id: string };

export interface RecipeRepository {
  getRecipeDetail: (
    params: GetRecipeDetail
  ) => Promise<RecipeDetailEntity | null>;
  getRecipeList: (params: GetRecipeList) => Promise<RecipeListEntity[]>;
  updateRecipe: (params: UpdateRecipe) => Promise<RecipeDetailEntity | null>;
  createRecipe: (params: CreateRecipe) => Promise<RecipeDetailEntity | null>;
  deleteRecipe: (params: DeleteRecipe) => Promise<boolean>;
}

export default class HttpRecipeRepository implements RecipeRepository {
  constructor(
    readonly config: Config,
    readonly httpClient: AxiosInstance,
    readonly recipeDetailEntityMapper: {
      map: (recipe: RecipeApiResponseEntity) => RecipeDetailEntity;
    },
    readonly recipeListEntityMapper: {
      map: (recipe: RecipeApiResponseEntity) => RecipeListEntity;
    }
  ) {}

  async getRecipeDetail({
    id,
  }: GetRecipeDetail): Promise<RecipeDetailEntity | null> {
    try {
      const apiUrl = `${this.config.api.baseUrl}/${this.config.api.endpoints.recipes}`;
      const { data: recipeResponse }: { data: RecipeApiResponseEntity } =
        await this.httpClient.get(`${apiUrl}/${id}`);

      const recipe = this.recipeDetailEntityMapper.map(recipeResponse);

      return recipe;
    } catch (error) {
      return Promise.resolve(null);
    }
  }

  async getRecipeList({ query, sort }: GetRecipeList = {}): Promise<
    RecipeListEntity[]
  > {
    try {
      const apiUrl = `${this.config.api.baseUrl}/${this.config.api.endpoints.recipes}`;
      const sortBy = sort?.split(":");

      const { data: recipesResponse }: { data: RecipeApiResponseEntity[] } =
        await this.httpClient.get(apiUrl, {
          params: {
            ...(query && { q: query }),
            ...(sortBy && { _sort: sortBy[0], _order: sortBy[1] }),
          },
        });

      const recipes = recipesResponse.map((recipe: RecipeApiResponseEntity) =>
        this.recipeListEntityMapper.map(recipe)
      );

      return recipes;
    } catch (error) {
      return Promise.resolve([]);
    }
  }

  async createRecipe({
    recipe,
  }: CreateRecipe): Promise<RecipeDetailEntity | null> {
    try {
      const apiUrl = `${this.config.api.baseUrl}/${this.config.api.endpoints.recipes}`;
      const { data: recipeResponse }: { data: RecipeApiResponseEntity } =
        await this.httpClient.post(apiUrl, { ...recipe });

      return this.recipeDetailEntityMapper.map(recipeResponse);
    } catch (error) {
      return Promise.resolve(null);
    }
  }

  async updateRecipe({
    recipe,
  }: UpdateRecipe): Promise<RecipeDetailEntity | null> {
    try {
      const apiUrl = `${this.config.api.baseUrl}/${this.config.api.endpoints.recipes}`;
      const { data: recipeResponse }: { data: RecipeApiResponseEntity } =
        await this.httpClient.put(`${apiUrl}/${recipe.id}`, { ...recipe });

      return this.recipeDetailEntityMapper.map(recipeResponse);
    } catch (error) {
      return Promise.resolve(null);
    }
  }

  async deleteRecipe({ id }: DeleteRecipe): Promise<boolean> {
    try {
      const apiUrl = `${this.config.api.baseUrl}/${this.config.api.endpoints.recipes}`;
      const { status }: { status: number } = await this.httpClient.delete(
        `${apiUrl}/${id}`
      );

      return status === 200;
    } catch (error) {
      return Promise.resolve(false);
    }
  }
}
