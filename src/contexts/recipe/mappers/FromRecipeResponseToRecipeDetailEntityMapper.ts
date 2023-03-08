import { type Config } from "../../../config";

import { type DomainMapperInterface } from "../../../domain";
import {
  type RecipeApiResponseEntity,
  type RecipeDetailEntity,
} from "../entities/RecipeEntity";

export default class FromRecipeResponseToRecipeDetailEntityMapper
  implements DomainMapperInterface<RecipeApiResponseEntity, RecipeDetailEntity>
{
  constructor(readonly config: Config) {}

  private genRecipeUrl(id: string) {
    return this.config.routes.getRoute("RECIPE_DETAIL", { id });
  }

  map(recipe: RecipeApiResponseEntity): RecipeDetailEntity {
    return {
      id: recipe.id,
      slug: recipe.slug,
      url: this.genRecipeUrl(recipe.id),
      title: recipe.title,
      image: recipe.image,
      color: recipe.color,
      description: recipe.description,
      content: recipe.content,
      ingredients: recipe.ingredients,
      preparationTime: recipe.preparationTime,
      cookingTime: recipe.cookingTime,
      totalTime: recipe.totalTime,
      category: recipe.category,
      portions: recipe.portions,
      calories: recipe.calories,
    };
  }
}
