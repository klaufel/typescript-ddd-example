import { api } from "../../../src/config/api";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import domain from "../../../src/";
import {
  createRecipeApiResponse,
  createRecipeUseCaseParams,
  createRecipeUseCaseResponse,
} from "../../fixtures/recipe/createRecipeUseCase";

describe("#create_recipe_use_case", () => {
  const useCase = domain.get("create_recipe_use_case");
  const apiUrl = `${api.baseUrl}/${api.endpoints.recipes}`;

  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("create correct recipe", async () => {
    const useCaseApiUrl = apiUrl;
    mock.onPost(useCaseApiUrl).reply(200, createRecipeApiResponse);

    const response = await useCase.execute(createRecipeUseCaseParams);

    expect(mock.history.post[0].url).toEqual(useCaseApiUrl);
    expect(response).toEqual(createRecipeUseCaseResponse);
  });

  it("create recipe with error 404", async () => {
    const useCaseApiUrl = apiUrl;
    mock.onPost(useCaseApiUrl).reply(404);

    const response = await useCase.execute({ id: "" });

    expect(mock.history.post[0].url).toEqual(useCaseApiUrl);
    expect(response).toEqual(null);
  });

  it("create recipe with error 500", async () => {
    const useCaseApiUrl = apiUrl;
    mock.onPost(useCaseApiUrl).reply(500);

    const response = await useCase.execute(createRecipeUseCaseParams);

    expect(mock.history.post[0].url).toEqual(useCaseApiUrl);
    expect(response).toEqual(null);
  });
});
