import { type DomainUseCase } from "../../../../domain";
import { httpRecipeRepository } from "../../repository/factory";
import GetRecipeDetailUseCase from "../GetRecipeDetailUseCase";

export default function getRecipeListUseCase({
  config,
}: DomainUseCase): GetRecipeDetailUseCase {
  return new GetRecipeDetailUseCase(httpRecipeRepository({ config }));
}
