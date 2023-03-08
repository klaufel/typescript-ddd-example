import { api } from "../../../src/config/api";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import domain from "../../../src/";
import {
  getRecipeApiResponse,
  getRecipeApiSearchQueryResponse,
  getRecipeUseCaseResponse,
  getRecipeUseCaseSearchQueryResponse,
} from "../../fixtures/recipe/getRecipeListUseCase";

describe("#get_recipe_list_use_case", () => {
  const useCase = domain.get("get_recipe_list_use_case");
  const apiUrl = `${api.baseUrl}/${api.endpoints.recipes}`;

  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("retrieve correct recipe list", async () => {
    mock.onGet(apiUrl).reply(200, getRecipeApiResponse);

    const response = await useCase.execute();

    expect(mock.history.get[0].url).toEqual(apiUrl);
    expect(response).toEqual(getRecipeUseCaseResponse);
  });

  it("retrieve correct recipe list with search query", async () => {
    mock.onGet(apiUrl).reply(200, getRecipeApiSearchQueryResponse);

    const response = await useCase.execute({ query: "avocado" });

    expect(mock.history.get[0].url).toEqual(apiUrl);
    expect(response).toEqual(getRecipeUseCaseSearchQueryResponse);
  });

  it("retrieve correct recipe list with error 500", async () => {
    mock.onGet(apiUrl).reply(500);

    const response = await useCase.execute();

    expect(mock.history.get[0].url).toEqual(apiUrl);
    expect(response).toEqual([]);
  });
});
