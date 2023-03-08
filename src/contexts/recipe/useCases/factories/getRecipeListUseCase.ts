import { type DomainUseCase } from '../../../../domain';
import { httpRecipeRepository } from '../../repository/factory';
import GetRecipeListUseCase from '../GetRecipeListUseCase';

export default function getRecipeListUseCase({
  config,
}: DomainUseCase): GetRecipeListUseCase {
  return new GetRecipeListUseCase(httpRecipeRepository({ config }));
}
