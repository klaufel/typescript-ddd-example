import { api } from "../../../src/config/api";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import domain from "../../../src/";
import {
  deleteRecipeApiResponse,
  deleteRecipeUseCaseParams,
} from "../../fixtures/recipe/deleteRecipeUseCase";

describe("#delete_recipe_use_case", () => {
  const useCase = domain.get("delete_recipe_use_case");
  const apiUrl = `${api.baseUrl}/${api.endpoints.recipes}`;

  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("delete recipe successfully", async () => {
    const useCaseApiUrl = `${apiUrl}/${deleteRecipeUseCaseParams.id}`;
    mock.onDelete(useCaseApiUrl).reply(200, deleteRecipeApiResponse);

    const response = await useCase.execute(deleteRecipeUseCaseParams);

    expect(mock.history.delete[0].url).toEqual(useCaseApiUrl);
    expect(response).toEqual(true);
  });

  it("delete recipe with error 404", async () => {
    const useCaseApiUrl = `${apiUrl}/invalid-id`;
    mock.onDelete(useCaseApiUrl).reply(404);

    const response = await useCase.execute({ id: "invalid-id" });

    expect(mock.history.delete[0].url).toEqual(useCaseApiUrl);
    expect(response).toEqual(false);
  });

  it("delete recipe with error 500", async () => {
    const useCaseApiUrl = `${apiUrl}/`;
    mock.onDelete(useCaseApiUrl).reply(500);

    const response = await useCase.execute({ id: "" });

    expect(mock.history.delete[0].url).toEqual(useCaseApiUrl);
    expect(response).toEqual(false);
  });
});
