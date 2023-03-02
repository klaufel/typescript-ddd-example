import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { api } from "../../../src/config/api";
import domain from "../../../src/";
import {
  carriersApiResponse,
  carriersUseCaseResponse,
} from "../../fixtures/carrier/getCarrierList";

describe("#get_carrier_list_use_case", () => {
  let useCase;
  let mock;

  beforeEach(() => {
    useCase = domain.get("get_carrier_list_use_case");
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    useCase = null;
    mock.reset();
  });

  it("retrieve correct carrier list", async () => {
    mock.onGet(api.endpoints.carriers).reply(200, carriersApiResponse);

    const response = await useCase.execute();

    expect(mock.history.get[0].url).toEqual(api.endpoints.carriers);
    expect(response).toEqual(carriersUseCaseResponse);
  });
});
