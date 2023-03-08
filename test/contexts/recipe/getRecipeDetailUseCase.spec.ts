import { api } from "../../../src/config/api";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import domain from "../../../src/";
import {
  getRecipeDetailApiResponse,
  getRecipeDetailUseCaseParams,
  getRecipeDetailUseCaseResponse,
} from "../../fixtures/recipe/getRecipeDetailUseCase";

describe("#get_recipe_detail_use_case", () => {
  const useCase = domain.get("get_recipe_detail_use_case");
  const apiUrl = `${api.baseUrl}/${api.endpoints.recipes}`;

  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("retrieve correct recipe detail", async () => {
    const useCaseApiUrl = `${apiUrl}/${getRecipeDetailUseCaseParams.id}`;
    mock.onGet(useCaseApiUrl).reply(200, getRecipeDetailApiResponse);

    const response = await useCase.execute(getRecipeDetailUseCaseParams);

    expect(mock.history.get[0].url).toEqual(useCaseApiUrl);
    expect(response).toEqual(getRecipeDetailUseCaseResponse);
  });

  it("retrieve correct recipe detail with error 404", async () => {
    const useCaseApiUrl = `${apiUrl}/`;
    mock.onGet(useCaseApiUrl).reply(404);

    const response = await useCase.execute({ id: "" });

    expect(mock.history.get[0].url).toEqual(useCaseApiUrl);
    expect(response).toEqual(null);
  });

  it("retrieve correct recipe detail with error 500", async () => {
    const useCaseApiUrl = `${apiUrl}/${getRecipeDetailUseCaseParams.id}`;
    mock.onGet(useCaseApiUrl).reply(500);

    const response = await useCase.execute(getRecipeDetailUseCaseParams);

    expect(mock.history.get[0].url).toEqual(useCaseApiUrl);
    expect(response).toEqual(null);
  });
});
