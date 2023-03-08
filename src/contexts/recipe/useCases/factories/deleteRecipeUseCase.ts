import { type DomainUseCase } from '../../../../domain';
import { httpRecipeRepository } from '../../repository/factory';
import DeleteRecipeUseCase from '../DeleteRecipeUseCase';

export default function getRecipeListUseCase({
  config,
}: DomainUseCase): DeleteRecipeUseCase {
  return new DeleteRecipeUseCase(httpRecipeRepository({ config }));
}
