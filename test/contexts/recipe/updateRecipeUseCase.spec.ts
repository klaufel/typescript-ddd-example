import { api } from "../../../src/config/api";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import domain from "../../../src/";
import {
  updateRecipeApiResponse,
  updateRecipeUseCaseParams,
  updateRecipeUseCaseResponse,
} from "../../fixtures/recipe/updateRecipeUseCase";

describe("#update_recipe_use_case", () => {
  const useCase = domain.get("update_recipe_use_case");
  const apiUrl = `${api.baseUrl}/${api.endpoints.recipes}`;

  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("update correct recipe", async () => {
    const useCaseApiUrl = `${apiUrl}/${updateRecipeUseCaseParams.recipe.id}`;
    mock.onPut(useCaseApiUrl).reply(200, updateRecipeApiResponse);

    const response = await useCase.execute(updateRecipeUseCaseParams);

    expect(mock.history.put[0].url).toEqual(useCaseApiUrl);
    expect(response).toEqual(updateRecipeUseCaseResponse);
  });

  it("update recipe with error 404", async () => {
    const useCaseApiUrl = `${apiUrl}/${updateRecipeUseCaseParams.recipe.id}`;
    mock.onPut(useCaseApiUrl).reply(404);

    const response = await useCase.execute(updateRecipeUseCaseParams);

    expect(mock.history.put[0].url).toEqual(useCaseApiUrl);
    expect(response).toEqual(null);
  });

  it("update recipe with error 500", async () => {
    const useCaseApiUrl = `${apiUrl}/${updateRecipeUseCaseParams.recipe.id}`;
    mock.onPut(useCaseApiUrl).reply(500);

    const response = await useCase.execute(updateRecipeUseCaseParams);

    expect(mock.history.put[0].url).toEqual(useCaseApiUrl);
    expect(response).toEqual(null);
  });
});
