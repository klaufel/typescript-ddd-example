import { type DomainUseCase } from "../../../../domain";
import { httpRecipeRepository } from "../../repository/factory";
import CreateRecipeUseCase from "../CreateRecipeUseCase";

export default function createRecipeUseCase({
  config,
}: DomainUseCase): CreateRecipeUseCase {
  return new CreateRecipeUseCase(httpRecipeRepository({ config }));
}
