import { type CarrierApiResponseEntity } from '../entities/CarrierApiResponseEntity';
import { type CarrierEntity } from '../entities/CarrierEntity';

export default class FromCarrierApiResponseToCarrierEntityMapper {
  map(carrier: CarrierApiResponseEntity): CarrierEntity {
    return {
      id: carrier.id,
      countryIds: carrier.countryIds,
      title: carrier.title,
      trackingRequired: Boolean(carrier.trackingRequired),
      trackingUrl: carrier.trackingUrl,
    };
  }
}
