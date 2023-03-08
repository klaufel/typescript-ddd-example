import { type DomainUseCaseInterface } from '../../../domain';
import { type RecipeListEntity } from '../entities/RecipeEntity';
import { type RecipeRepository } from '../repository/HttpRecipeRepository';

type GetRecipeListUseCaseParams = {
  query?: string;
  sort?: string;
};

export default class GetRecipeListUseCase
  implements
    DomainUseCaseInterface<
      GetRecipeListUseCaseParams,
      Promise<RecipeListEntity[]>
    >
{
  constructor(readonly repository: RecipeRepository) {}

  async execute({ query, sort }: GetRecipeListUseCaseParams = {}): Promise<
    RecipeListEntity[]
  > {
    return await this.repository.getRecipeList({ query, sort });
  }
}
