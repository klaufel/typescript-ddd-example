import { type Config } from "../../../config";
import { AxiosInstance } from "axios";

import { type CarrierEntity } from "../entities/CarrierEntity";

export interface CarrierRepository {
  getCarrierList: () => Promise<CarrierEntity[] | null>;
}

export default class HttpCarrierRepository implements CarrierRepository {
  constructor(
    readonly config: Config,
    readonly httpClient: AxiosInstance,
    readonly carrierEntityMapper
  ) {}

  async getCarrierList() {
    try {
      const response = await this.httpClient.request({
        method: "GET",
        url: this.config.api.endpoints.carriers,
      });

      const carriers = response?.data.map((carrier) =>
        this.carrierEntityMapper.map(carrier)
      );

      return carriers;
    } catch {
      return Promise.resolve(null);
    }
  }
}
