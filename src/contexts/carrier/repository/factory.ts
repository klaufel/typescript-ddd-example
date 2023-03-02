import axios from 'axios';

import { type DomainRepository } from '../../../domain';
import { fromCarrierApiResponseToCarrierEntityMapper } from '../mappers/factory';
import HttpCarrierRepository from './HttpCarrierRepository';

export const httpCarrierRepository = ({
  config,
}: DomainRepository): HttpCarrierRepository => {
  return new HttpCarrierRepository(
    config,
    axios,
    fromCarrierApiResponseToCarrierEntityMapper()
  );
};
