import { type DomainMapper } from "../../../domain";

import FromRecipeResponseToRecipeDetailEntityMapper from "./FromRecipeResponseToRecipeDetailEntityMapper";
import FromRecipeResponseToRecipeListEntityMapper from "./FromRecipeResponseToRecipeListEntityMapper";

export const fromRecipeResponseToRecipeDetailEntityMapper = ({
  config,
}: DomainMapper): FromRecipeResponseToRecipeDetailEntityMapper => {
  return new FromRecipeResponseToRecipeDetailEntityMapper(config);
};

export const fromRecipeResponseToRecipeListEntityMapper = ({
  config,
}: DomainMapper): FromRecipeResponseToRecipeListEntityMapper => {
  return new FromRecipeResponseToRecipeListEntityMapper(config);
};
