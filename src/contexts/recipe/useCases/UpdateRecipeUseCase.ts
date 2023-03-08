import { type DomainUseCaseInterface } from "../../../domain";
import { type RecipeDetailEntity } from "../entities/RecipeEntity";
import { type RecipeRepository } from "../repository/HttpRecipeRepository";

type UpdateRecipeUseCaseParams = {
  recipe: RecipeDetailEntity;
};

export default class UpdateRecipeUseCase
  implements
    DomainUseCaseInterface<
      UpdateRecipeUseCaseParams,
      Promise<RecipeDetailEntity | null>
    >
{
  constructor(readonly repository: RecipeRepository) {}

  async execute({
    recipe,
  }: UpdateRecipeUseCaseParams): Promise<RecipeDetailEntity | null> {
    return await this.repository.updateRecipe({ recipe });
  }
}
