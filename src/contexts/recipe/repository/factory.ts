import axios from "axios";

import { type DomainRepository } from "../../../domain";
import {
  fromRecipeResponseToRecipeDetailEntityMapper,
  fromRecipeResponseToRecipeListEntityMapper,
} from "../mappers/factory";
import HttpRecipeRepository from "./HttpRecipeRepository";

export const httpRecipeRepository = ({
  config,
}: DomainRepository): HttpRecipeRepository => {
  return new HttpRecipeRepository(
    config,
    axios,
    fromRecipeResponseToRecipeDetailEntityMapper({ config }),
    fromRecipeResponseToRecipeListEntityMapper({ config })
  );
};
