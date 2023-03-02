import { type CarrierEntity } from '../entities/CarrierEntity';
import { type CarrierRepository } from '../repository/HttpCarrierRepository';

export interface InterfaceGetCarrierListUseCase {
  execute: () => Promise<CarrierEntity[]>;
}

export default class GetCarrierListUseCase
  implements InterfaceGetCarrierListUseCase
{
  constructor(readonly repository: CarrierRepository) {}

  async execute() {
    return await this.repository.getCarrierList();
  }
}
