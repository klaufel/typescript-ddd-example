import { DomainUseCase } from '../../../../domain';
import { httpCarrierRepository } from '../../repository/factory';
import GetCarrierListUseCase from '../GetCarrierListUseCase';

export default function getCarrierListUseCase({
  config,
}: DomainUseCase): GetCarrierListUseCase {
  return new GetCarrierListUseCase(httpCarrierRepository({ config }));
}
