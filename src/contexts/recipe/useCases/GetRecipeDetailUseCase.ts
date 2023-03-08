import { type DomainUseCaseInterface } from '../../../domain';
import { type RecipeDetailEntity } from '../entities/RecipeEntity';
import { type RecipeRepository } from '../repository/HttpRecipeRepository';

type GetRecipeDetailUseCaseParams = { id: string };

export default class GetRecipeListUseCase
  implements
    DomainUseCaseInterface<
      GetRecipeDetailUseCaseParams,
      Promise<RecipeDetailEntity | null>
    >
{
  constructor(readonly repository: RecipeRepository) {}

  async execute({
    id,
  }: GetRecipeDetailUseCaseParams): Promise<RecipeDetailEntity | null> {
    return await this.repository.getRecipeDetail({ id });
  }
}
