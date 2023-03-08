import { type DomainUseCaseInterface } from "../../../domain";
import {
  type RecipeDetailEntity,
  type RecipeUpsertEntity,
} from "../entities/RecipeEntity";
import { type RecipeRepository } from "../repository/HttpRecipeRepository";

type CreateRecipeUseCaseParams = {
  recipe: Omit<RecipeUpsertEntity, "id">;
};

export default class CreateRecipeUseCase
  implements
    DomainUseCaseInterface<
      CreateRecipeUseCaseParams,
      Promise<RecipeDetailEntity | null>
    >
{
  constructor(readonly repository: RecipeRepository) {}

  async execute({
    recipe,
  }: CreateRecipeUseCaseParams): Promise<RecipeDetailEntity | null> {
    return await this.repository.createRecipe({ recipe });
  }
}
