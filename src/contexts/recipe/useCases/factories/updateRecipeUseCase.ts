import { type DomainUseCase } from "../../../../domain";
import { httpRecipeRepository } from "../../repository/factory";
import UpdateRecipeUseCase from "../UpdateRecipeUseCase";

export default function updateRecipeUseCase({
  config,
}: DomainUseCase): UpdateRecipeUseCase {
  return new UpdateRecipeUseCase(httpRecipeRepository({ config }));
}
