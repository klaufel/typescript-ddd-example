import { type DomainUseCaseInterface } from "../../../domain";
import { type RecipeRepository } from "../repository/HttpRecipeRepository";

type DeleteRecipeUseCaseParams = {
  id: string;
};

export default class DeleteRecipeUseCase
  implements
    DomainUseCaseInterface<DeleteRecipeUseCaseParams, Promise<boolean>>
{
  constructor(readonly repository: RecipeRepository) {}

  async execute({ id }: DeleteRecipeUseCaseParams): Promise<boolean> {
    return await this.repository.deleteRecipe({ id });
  }
}
